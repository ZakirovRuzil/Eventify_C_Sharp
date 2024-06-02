using Eventify.Configurators;

var builder = WebApplication.CreateBuilder(args);

builder.ConfigureCore();
builder.ConfigureAuthorization();
builder.ConfigureJwtBearer();
builder.ConfigurePostgresqlConnection();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseRouting();
app.UseHttpsRedirection();
app.UseCors(x =>
{
    x.WithHeaders().AllowAnyHeader();
    x.WithOrigins("http://localhost:3000");
    x.WithMethods().AllowAnyMethod();
});
app.UseAuthentication();
app.UseAuthorization();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
await app.MigrateDbAsync();

app.MapControllers();

app.Run();