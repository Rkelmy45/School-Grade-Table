using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DTOs
{
    public class StudentScoreRequest
    {
        [Required(ErrorMessage = "Full Name is required.")]
        public string FullName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Age is required.")]
        [Range(1, 100, ErrorMessage = "Age must be between 1 and 100.")]
        public int Age { get; set; }

        [Required(ErrorMessage = "Classroom is required.")]
        public string Classroom { get; set; } = string.Empty;

        [Required(ErrorMessage = "English Grades is required.")]
        [Range(0, 100, ErrorMessage = "Grades must be between 0 and 100.")]
        public int EnglishGrades { get; set; }

        public string Incidents { get; set; } = string.Empty;

        public string Productions { get; set; } = string.Empty;
    }
}