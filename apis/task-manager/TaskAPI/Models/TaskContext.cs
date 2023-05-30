using Microsoft.EntityFrameworkCore;

namespace TaskAPI.Models;

public class TaskContext : DbContext
{
    public TaskContext(DbContextOptions<TaskContext> options)
        : base(options)
    {
    }

    public DbSet<TaskDetail> TaskItems => Set<TaskDetail>();
}
