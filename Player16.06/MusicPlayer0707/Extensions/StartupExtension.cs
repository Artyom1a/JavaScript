﻿using MySql.Data.MySqlClient;
using OnlineShop.Repositories;
using OnlineShop.Services;
using System.Configuration;

namespace OnlineShop.Extensions
{

    public static class StartupExtension
    {
        public static void AddRepositories(this IServiceCollection services, string connectionString)
        {
            services.AddSingleton(_ => new MySqlConnection(connectionString));
            services.AddTransient<UserRepository>();
        }

        public static void AddServices(this IServiceCollection services)
        {

            services.AddTransient<UserServices>();
            services.AddTransient<AccountService>();
        }


    }
}