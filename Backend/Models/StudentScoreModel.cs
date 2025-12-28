using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    
    [Table("Student Score")]
    public class StudentScoreModel
    {
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [Range(1, 100, ErrorMessage = "Age must be between 1 and 100")]
        public int? Age { get; set; }

        [Required]
        public string Classroom { get; set; } = string.Empty;

        [Required]
        [Range(0, 100, ErrorMessage = "English Grades must be between 0 and 100")]
        public int? EnglishGrades { get; set; }

        [Required]
        public string Incidents { get; set; } = string.Empty;

        public string Productions { get; set; } = string.Empty;

        public DateTime RegistrationDate { get; set; }
    }
}

// DTOs

// namespace Backend.Models.DTOs
// {
//     public class StudentScoreDto
//     {
//         [Required(ErrorMessage = "Full Name is required.")]
//         public string FullName { get; set; } = string.Empty;

//         [Required(ErrorMessage = "Age is required.")]
//         [Range(1, 120, ErrorMessage = "Age must be between 1 and 120.")]
//         public int Age { get; set; }

//         [Required(ErrorMessage = "Classroom is required.")]
//         public string Classroom { get; set; } = string.Empty;

//         [Required(ErrorMessage = "English Grades is required.")]
//         [Range(0, 100, ErrorMessage = "Grades must be between 0 and 100.")]
//         public int EnglishGrades { get; set; }

//         public string Incidents { get; set; } = string.Empty;

//         public string Productions { get; set; } = string.Empty;

//         public DateTime RegistrationDate { get; set; } = DateTime.UtcNow;
//     }
// }
