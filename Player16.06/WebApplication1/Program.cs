using System.Text.Json.Serialization;
using System.Text.Json;

var builder = WebApplication.CreateBuilder();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


app.Run(async (context) =>
{
    var response = context.Response;
    var request = context.Request;
    if (request.Path == "/api/user")
    {
        var responseText = "Некорректные данные";   // содержание сообщения по умолчанию

        if (request.HasJsonContentType())
        {
            // определяем параметры сериализации/десериализации
            var jsonoptions = new JsonSerializerOptions();
            // добавляем конвертер кода json в объект типа Person
            jsonoptions.Converters.Add(new PersonConverter());
            // десериализуем данные с помощью конвертера PersonConverter
            var person = await request.ReadFromJsonAsync<Person>(jsonoptions);
            if (person != null)
                responseText = $"Name: {person.Name}  Password: {person.Password}";
        }
        await response.WriteAsJsonAsync(new { text = responseText });
    }
    else
    {
        response.ContentType = "text/html; charset=utf-8";
        await response.SendFileAsync("C:\\Code Main\\JS\\Player16.06\\WebApplication1\\Client\\indexpost.html");
    }
});

app.Run();

public record Person(string Name, int Password);
public class PersonConverter : JsonConverter<Person>
{
    public override Person Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var personName = "Undefined";
        var personPassword = 0;
        while (reader.Read())
        {
            if (reader.TokenType == JsonTokenType.PropertyName)
            {
                var propertyName = reader.GetString();
                reader.Read();
                switch (propertyName?.ToLower())
                {
                    // если свойство Password и оно содержит число
                    case "Password" when reader.TokenType == JsonTokenType.Number:
                        personPassword = reader.GetInt32();  // считываем число из json
                        break;
                    // если свойство Password и оно содержит строку
                    case "Password" when reader.TokenType == JsonTokenType.String:
                        string? stringValue = reader.GetString();
                        // пытаемся конвертировать строку в число
                        if (int.TryParse(stringValue, out int value))
                        {
                            personPassword = value;
                        }
                        break;
                    case "name":    // если свойство Name/name
                        string? name = reader.GetString();
                        if (name != null)
                            personName = name;
                        break;
                }
            }
        }
        return new Person(personName, personPassword);
    }
    // сериализуем объект Person в json
    public override void Write(Utf8JsonWriter writer, Person person, JsonSerializerOptions options)
    {
        writer.WriteStartObject();
        writer.WriteString("name", person.Name);
        writer.WriteNumber("Password", person.Password);

        writer.WriteEndObject();
    }
}
