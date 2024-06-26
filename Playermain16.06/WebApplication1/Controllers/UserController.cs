﻿using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;
using WebApplication1.Repositories;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
        private readonly UserServices services;
        private readonly UserRepository m_Repos;
        public UserController(UserRepository userRepository, UserServices services)
        {
            this.m_Repos = userRepository;
            this.services = services;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(services.GetAll());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Create(User user)
        {
            try
            {
                services.Create(user);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        //----------------






    }
}
