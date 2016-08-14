using HealthApp.Dtos;
using HealthApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace HealthApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/logEntry")]
    public class LogEntryController : ApiController
    {
        public LogEntryController(ILogEntryService logEntryService)
        {
            _logEntryService = logEntryService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(LogEntryAddOrUpdateResponseDto))]
        public IHttpActionResult Add(LogEntryAddOrUpdateRequestDto dto) { return Ok(_logEntryService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(LogEntryAddOrUpdateResponseDto))]
        public IHttpActionResult Update(LogEntryAddOrUpdateRequestDto dto) { return Ok(_logEntryService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<LogEntryDto>))]
        public IHttpActionResult Get() { return Ok(_logEntryService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(LogEntryDto))]
        public IHttpActionResult GetById(int id) { return Ok(_logEntryService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_logEntryService.Remove(id)); }

        protected readonly ILogEntryService _logEntryService;


    }
}
