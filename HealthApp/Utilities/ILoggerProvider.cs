namespace HealthApp.Utilities
{
    public interface ILoggerProvider
    {
        ILogger CreateLogger(string name);
    }
}
