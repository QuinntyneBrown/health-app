using System;

namespace HealthApp.Models
{
    public class LogEntry
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public float Weight { get; set; }
        public DateTime Modified { get; set; }
        public bool IsDeleted { get; set; }
    }
}
