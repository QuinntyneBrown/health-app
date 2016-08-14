using System.Data.Entity;

namespace HealthApp.Data
{
    public class DataContext: DbContext, IDbContext
    {
        public DataContext()
            : base(nameOrConnectionString: "HealthAppDataContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<Models.LogEntry> LogEntrys { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        } 
    }
}
