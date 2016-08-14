namespace HealthApp.Utilities
{
    public interface ILogger
    {
        void AddProvider(ILoggerProvider provider);
    }
}
