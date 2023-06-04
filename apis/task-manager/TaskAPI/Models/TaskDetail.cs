namespace TaskAPI.Models;

// Every TaskDetail will have a owner_id associated with it
public class TaskDetail
{
    public string? owner_id { get; set; }
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTime? DueDate { get; set; }
    public DateTime? DateCreated { get; set; }    
    public bool IsCompleted { get; set; }
}


