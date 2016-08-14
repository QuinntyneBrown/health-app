namespace HealthApp.Data
{
    public interface IUow
    {
        IRepository<Models.LogEntry> LogEntries { get; }
        void SaveChanges();
    }
}
