using System;

namespace HealthApp.Data
{
    public class Uow : IUow
    {
        protected IDbContext dbContext;

        protected IRepositoryProvider RepositoryProvider { get; set; }

        public Uow(IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            var repositoryProvider = new RepositoryProvider(new RepositoryFactories());
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }

        public Uow(IRepositoryProvider repositoryProvider, IDbContext dbContext = null)
        {
            this.dbContext = dbContext;
            ConfigureDbContext(this.dbContext);
            repositoryProvider.dbContext = this.dbContext;
            RepositoryProvider = repositoryProvider;
        }

        public IRepository<Models.LogEntry> LogEntries { get { return GetStandardRepo<Models.LogEntry>(); } }
        

        protected void ConfigureDbContext(IDbContext dbContext)
        {
            dbContext.Configuration.ProxyCreationEnabled = false;
            dbContext.Configuration.LazyLoadingEnabled = false;
            dbContext.Configuration.ValidateOnSaveEnabled = false;
        }
        
        public void SaveChanges()
        {
            this.dbContext.SaveChanges();
        }

        protected IRepository<T> GetStandardRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepositoryForEntityType<T>();
        }

        protected T GetRepo<T>() where T : class
        {
            return RepositoryProvider.GetRepository<T>();
        }

        #region IDisposable

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.dbContext != null)
                {
                    this.dbContext.Dispose();
                }
            }
        }

        #endregion
        
        public void Add<T>(T entity)
        {
            throw new NotImplementedException();
        }

        public void Update<T>(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
