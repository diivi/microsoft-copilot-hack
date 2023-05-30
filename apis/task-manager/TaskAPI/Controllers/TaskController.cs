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

        // GET: Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskDetail>>> GetTaskItems()
        {
            return await _context.TaskItems.ToListAsync();
        }

        // GET: Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskDetail>> GetTaskDetail(int id)
        {
            var taskDetail = await _context.TaskItems.FindAsync(id);

            if (taskDetail == null)
            {
                return NotFound();
            }

            return taskDetail;
        }

        // PUT: Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskDetail(int id, TaskDetail taskDetail)
        {
            if (id != taskDetail.Id)
            {
                return BadRequest();
            }

            _context.Entry(taskDetail).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: Task
        [HttpPost]
        public async Task<ActionResult<TaskDetail>> PostTaskDetail(TaskDetail taskDetail)
        {
            _context.TaskItems.Add(taskDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTaskDetail), new { id = taskDetail.Id }, taskDetail);
        }

        // DELETE: Task/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskDetail(int id)
        {
            var taskDetail = await _context.TaskItems.FindAsync(id);
            if (taskDetail == null)
            {
                return NotFound();
            }

            _context.TaskItems.Remove(taskDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}