using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

//Conexion a SQL Server and Docker.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration
    .GetConnectionString("StudentScoreDb"))
);


//Conexion al Frontend.
builder.Services.AddCors(option =>
{
    option.AddPolicy("StudentScoreDb", app =>
    {
        app.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});


//Registrar Controller.
builder.Services.AddControllers();


// Swagger.
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


// Activar Swagger en Development.
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Llamar a CORS.
app.UseCors("StudentScoreDb");

app.UseHttpsRedirection();

// Mapear endpoints de controller.
app.MapControllers();

// RUN ALWAYS AT THE END.
app.Run();