using Owin;
using System.Web.Http;
using Microsoft.Owin;
using Unity.WebApi;

[assembly: OwinStartup(typeof(HealthApp.Web.Startup))]

namespace HealthApp.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {            
            GlobalConfiguration.Configure(config =>
            {
                config.DependencyResolver = new UnityDependencyResolver(UnityConfiguration.GetContainer());
                HealthApp.ApiConfiguration.Install(config, app);
            });
        }
    }
}
