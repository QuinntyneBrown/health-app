using System;

namespace HealthApp.Dtos
{
    public class LogEntryDto
    {
        public LogEntryDto()
        {

        }

        public LogEntryDto(Models.LogEntry entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
        public DateTime? Date { get; set; }
        public float? Weight { get; set; }
    }
}
