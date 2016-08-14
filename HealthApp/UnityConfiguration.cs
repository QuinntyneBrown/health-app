using HealthApp.Configuration;
using HealthApp.Data;
using HealthApp.Services;
using HealthApp.Utilities;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.InterceptionExtension;

namespace HealthApp
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer()
        {
            var container = new UnityContainer().AddNewExtension<Interception>();
            container.RegisterType<IDbContext, DataContext>();
            container.RegisterType<IUow, Uow>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<ILoggerFactory, LoggerFactory>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<ILogger, Logger>();
            container.RegisterType<ILogEntryService, LogEntryService>();
            container.RegisterInstance(AuthConfiguration.LazyConfig);            
            return container;
        }
    }
}
