using System;
using System.Collections.Generic;
using HealthApp.Dtos;
using HealthApp.Data;
using System.Linq;

namespace HealthApp.Services
{
    public class LogEntryService : ILogEntryService
    {
        public LogEntryService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.LogEntries;
            _cache = cacheProvider.GetCache();
        }

        public LogEntryAddOrUpdateResponseDto AddOrUpdate(LogEntryAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.LogEntry());
            entity.Name = request.Name;
            entity.Date = request.Date.Value;
            entity.Weight = request.Weight.Value;
            _uow.SaveChanges();
            return new LogEntryAddOrUpdateResponseDto(entity);
        }

        public ICollection<LogEntryDto> Get()
        {
            ICollection<LogEntryDto> response = new HashSet<LogEntryDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new LogEntryDto(entity)); }
            return response;
        }

        public LogEntryDto GetById(int id)
        {
            return new LogEntryDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.LogEntry> _repository;
        protected readonly ICache _cache;
    }
}
