using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/studentscore")]
    public class StudentScoreController : ControllerBase
    {

        // Conexión General Base de datos para todos los endpoints
        private readonly AppDbContext _context;

        public StudentScoreController(AppDbContext context)
        {
            _context = context;
        }

        //POST - Student Score.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        [HttpPost]
        public async Task<IActionResult> StudentScore ([FromBody] StudentScoreRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState); // Validación automática

            var studentScore = new StudentScoreModel
            {
                FullName = request.FullName.ToUpper(),
                Age = request.Age,
                Classroom = request.Classroom.ToUpper(),
                EnglishGrades = request.EnglishGrades,
                Incidents = request.Incidents,
                Productions = request.Productions,
                RegistrationDate = DateTime.UtcNow
            };
            
            _context.StudentScoreModels.Add(studentScore); 
            await _context.SaveChangesAsync();
            return Ok(studentScore);
        }


        //GET  - Student Score.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
        [HttpGet("{FullName}/{Classroom}")]
        public async Task<IActionResult> SearchStudent ( string FullName, string Classroom )
        {
            FullName = FullName.ToUpper();
            Classroom = Classroom.ToUpper();

            var student = await _context.StudentScoreModels
                .Where(s => s.FullName == FullName && s.Classroom == Classroom )
                .OrderByDescending(s => s.FullName)
                .ToListAsync();

            if (!student.Any())
            return NotFound($"The Student: {FullName} of the Classroom: {Classroom} does not exist");

            return Ok(student);
        }


       //PUT - Student Score.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       [HttpPut("{FullName}/{Classroom}")]
       public async Task<IActionResult> UpdateStudent ( string FullName, string Classroom, [FromBody] StudentScoreRequest newStudent)
        {
            FullName = FullName.ToUpper();
            Classroom = Classroom.ToUpper();

            var UpdateStudent = await _context.StudentScoreModels.FirstOrDefaultAsync
            ( s => s.FullName == FullName && s.Classroom == Classroom);

            if(UpdateStudent == null)
            {
                return NotFound($"Student {FullName} of the {Classroom} not found");
            }

            // Campos permitidos a Actualizar.
            UpdateStudent.Age = newStudent.Age;
            UpdateStudent.Classroom = newStudent.Classroom.ToUpper();
            UpdateStudent.EnglishGrades = newStudent.EnglishGrades;
            UpdateStudent.Incidents = newStudent.Incidents;
            UpdateStudent.Productions = newStudent.Productions;

            await _context.SaveChangesAsync();
            
            return Ok(UpdateStudent);
        }

        
        //DELETE - Student Score.//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        [HttpDelete("{FullName}/{Classroom}")]
        public async Task<IActionResult> DeleteStudent (string FullName, string Classroom)
        {
            FullName = FullName.ToUpper();
            Classroom = Classroom.ToUpper();

            var deleteStudent = await _context.StudentScoreModels.FirstOrDefaultAsync 
            (
                s => s.FullName == FullName && s.Classroom == Classroom
            );

            if(deleteStudent == null)
            {
                return NotFound($"Student {FullName} of the {Classroom} not found");
            }

             _context.StudentScoreModels.Remove(deleteStudent);


            await _context.SaveChangesAsync();

            return Ok(deleteStudent);
        }
    }
}