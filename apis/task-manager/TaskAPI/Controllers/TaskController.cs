using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskAPI.Models;

namespace TaskAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly TaskContext _context;

        public TaskController(TaskContext context)
        {
            _context = context;
        }

        // GET: api/Task?owner_id=1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskDetail>>> GetTaskDetails(string owner_id)
        {
            return await _context.TaskItems.Where(task => task.owner_id == owner_id).ToListAsync();
        }

        // GET: Task/5?owner_id=1
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskDetail>> GetTaskDetail(int id, [FromQuery] string owner_id)
        {
            var taskDetail = await _context.TaskItems.FindAsync(id);

            if (taskDetail == null || taskDetail.owner_id != owner_id)
            {
                return NotFound();
            }

            return taskDetail;
        }

        // PUT: Task/5?owner_id=1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskDetail(int id, [FromQuery] string owner_id, TaskDetail taskDetail)
        {
            if (id != taskDetail.Id || owner_id != taskDetail.owner_id)
            {
                return BadRequest();
            }

            _context.Entry(taskDetail).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: Task?owner_id=1
        [HttpPost]
        public async Task<ActionResult<TaskDetail>> PostTaskDetail([FromQuery] string owner_id, TaskDetail taskDetail)
        {
            taskDetail.owner_id = owner_id;
            _context.TaskItems.Add(taskDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTaskDetail), new { id = taskDetail.Id, owner_id = taskDetail.owner_id }, taskDetail);
        }

        // DELETE: Task/5?owner_id=1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskDetail(int id, [FromQuery] string owner_id)
        {
            var taskDetail = await _context.TaskItems.FindAsync(id);
            if (taskDetail == null || taskDetail.owner_id != owner_id)
            {
                return NotFound();
            }

            _context.TaskItems.Remove(taskDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}