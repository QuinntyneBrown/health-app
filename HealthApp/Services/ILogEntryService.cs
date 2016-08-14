using HealthApp.Dtos;
using System.Collections.Generic;

namespace HealthApp.Services
{
    public interface ILogEntryService
    {
        LogEntryAddOrUpdateResponseDto AddOrUpdate(LogEntryAddOrUpdateRequestDto request);
        ICollection<LogEntryDto> Get();
        LogEntryDto GetById(int id);
        dynamic Remove(int id);
    }
}
