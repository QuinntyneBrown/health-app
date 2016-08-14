namespace HealthApp.Dtos
{
    public class LogEntryAddOrUpdateResponseDto: LogEntryDto
    {
        public LogEntryAddOrUpdateResponseDto(Models.LogEntry entity)
        :base(entity)
        {

        }
    }
}
