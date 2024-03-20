using MySql.Data.MySqlClient;

namespace WebApplication1.Repositories
{

        public abstract class BaseRepository
        {
            protected readonly MySqlConnection m_Connection;

            public BaseRepository(MySqlConnection connection)
            {
                m_Connection = connection;
            }
        }
    
}
