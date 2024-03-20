using WebApplication1.Models;
using WebApplication1.Repositories;

namespace WebApplication1.Services
{
    public class UserServices
    {
        private readonly UserRepository m_userrep;
        public UserServices(UserRepository repository)
        {
            m_userrep = repository ?? throw new ArgumentNullException(nameof(repository));
        }

        public List<User> GetAll()
        {
            return m_userrep.GetAll();
        }

        public void Create(User user)
        {
            var list = m_userrep.GetAll();
            var item = list.FirstOrDefault(x => x.Email == user.Email);
            if (item != null)
            {
                throw new Exception();
            }
            //list.Add(user);
            m_userrep.WriteNew(user);
        }
    }
}
