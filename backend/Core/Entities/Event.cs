using System.ComponentModel.DataAnnotations;

namespace Core.Entities;

public class Event
{
    [Key] public Guid Id { get; set; }
    public string Name { get; set; }
    public string ShortDescription { get; set; }
    public string LongDescription { get; set; }
    public string Place { get; set; }
    public DateTime Date { get; set; }
    public string ImageUrl { get; set; }
    public Guid UserId { get; set; }
    public User User { get; set; }
}