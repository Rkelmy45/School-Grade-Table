using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
        : base (options) 
        {
        }

        public DbSet<StudentScoreModel> StudentScoreModels { get; set; }
        public DbSet<UserRegisterModel> UserRegisterModels { get; set; }
    }
}
