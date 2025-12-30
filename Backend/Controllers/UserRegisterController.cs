using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/userregistration")]
    public class UserRegisterController : ControllerBase
    {
        //Conexion General Base de datos para todos los endpoints.
        private readonly AppDbContext _context;

        public UserRegisterController(AppDbContext context)
        {
            _context = context;
        }


        //POST - Registartion.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        [HttpPost]
        public async Task<IActionResult> UserRegistration ([FromBody] UserRegisterRequest request)
        {
            var userRegistration = new UserRegisterModel
            {
                FullName = request.FullName.ToUpper(),
                Username = request.Username,
                EmailAddress = request.EmailAddress,
                PasswordHash = request.Password
            };

            _context.UserRegisterModels.Add(userRegistration);
            await _context.SaveChangesAsync();
            return Ok(userRegistration);
        }


        //GET - Registartion.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        [HttpGet("{FullName}")]
        public async Task<IActionResult> SearchUser (string FullName)
        {
            FullName = FullName.ToUpper();

            var SearchUser = await _context.UserRegisterModels
                .Where(u => u.FullName == FullName)
                .OrderByDescending(u => FullName)
                .ToListAsync();

            if(!SearchUser.Any())
            {
                return NotFound($"User: {FullName} not Found.");
            }

            return Ok(SearchUser);
        }


        //PUT - Registartion.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        [HttpPut("{FullName}/{Username}")]
        public async Task<IActionResult> UpdateUser(string FullName, string Username, [FromBody] UserRegisterRequest newUser)
        {                                                                        
            var updateUser = await _context.UserRegisterModels.FirstOrDefaultAsync 
            ( u => u.FullName == FullName && u.Username == Username);

            if(updateUser == null)
            {
                return NotFound($"User: {FullName} of the {Username} not Found.");
            }
            updateUser.FullName = newUser.FullName;
            updateUser.Username = newUser.Username;
            updateUser.EmailAddress = newUser.EmailAddress;
            updateUser.PasswordHash = newUser.Password;
        
            await _context.SaveChangesAsync();
            return Ok(updateUser);
        }


        //DELETE - Registartion.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        [HttpDelete("{FullName}/{Username}")]
        public async Task<IActionResult> DeleteUser (string FullName, string Username)
        {
            var deleteUser = await _context.UserRegisterModels.FirstOrDefaultAsync
            ( u => u.FullName == FullName && u.Username == Username);

            if(deleteUser == null)
            {
                return NotFound($"User: {FullName} of the {Username} not Found.");
            }

            _context.UserRegisterModels.Remove(deleteUser);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}