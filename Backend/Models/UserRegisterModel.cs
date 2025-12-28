using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    [Table("User Register")]
    public class UserRegisterModel
    {
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; } = string.Empty;

        public string Username { get; set; } = string.Empty;

        [Required]
        public string EmailAddress { get; set; } = string.Empty;

        [Required]
        public string PasswordHash { get; set; } = string.Empty;

        public DateTime RegistrationDate { get; set; }

    }
}


//Modelo correcto para DTOs

// public class RegisterUserDto
// {
//     [Required(ErrorMessage = "Your Full Name is Required.")]
//     public string FullName { get; set; } = string.Empty;

//     [Required(ErrorMessage = "Username is required.")]
//     public string Username { get; set; } = string.Empty;

//     [Required(ErrorMessage = "Your Email Address is Required.")]
//     [EmailAddress]
//     public string EmailAddress { get; set; } = string.Empty;

//     [Required(ErrorMessage = "Password is required.")]
//     public string Password { get; set; } = string.Empty;
// }



