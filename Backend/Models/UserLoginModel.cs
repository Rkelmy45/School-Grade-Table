using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{

    [Table("User Login ")]
    public class UserLoginModel
    {
        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string EmailAddress { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}


//Modelo DTOs

// namespace Backend.Models.DTOs
// {
//     public class UserLoginDto
//     {
//         [Required(ErrorMessage = "Username is required.")]
//         public string Username { get; set; } = string.Empty;

//         [Required(ErrorMessage = "Email is required.")]
//         public string EmailAddress { get; set; } = string.Empty;

//         [Required(ErrorMessage = "Password is required.")]
//         public string Password { get; set; } = string.Empty;
//     }
// }
