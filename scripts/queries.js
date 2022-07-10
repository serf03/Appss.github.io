export const queries = {
  DeleteIntegrantes:
    "DELETE FROM [PartiCenter].[dbo].[Integrantes] WHERE Id = @id",
  InsertIntegrantes:
    "INSERT INTO Integrantes (title, description) VALUES (@title, @description)",
  UpdateIntegrantes:
    "UPDATE Integrantes SET Title = @title, Description = @description WHERE Id = @id",
  SelectIntegrantesById: `SELECT * FROM [PartiCenter].[dbo].[Integrantes] WHERE Id = @id  ORDER BY Id DESC`,
  //Personas//
  InsertPersonas: `INSERT INTO [PartiCenter].[dbo].[Persona] 
             (Nombre, Apellido, Apodo, Cedula, IdRangoEdad, Telefono, Email, IdDirigente, IdPartido, IdRol, IdComite, IdMunicipio, IdSector, Colegio, IdUsuario)
VALUES (@Nombre, @Apellido, @Apodo, @Cedula, @IdRangoEdad, @Telefono, @Email, @IdDirigente, @IdPartido, @IdRol, @IdComite, @IdMunicipio, @IdSector, @Colegio, @IdUsuario)`,
  DeletePersonas: `DELETE FROM [PartiCenter].[dbo].[Persona] WHERE Id = @id`,
  UpdatePersonas: `UPDATE [PartiCenter].[dbo].[Persona] SET Nombre = @Nombre, Apellido = @Apellido, Apodo = @Apodo, Cedula = @Cedula, IdRangoEdad = @IdRangoEdad, Telefono = @Telefono, Email = @Email, IdDirigente = @IdDirigente, IdPartido = @IdPartido, IdRol = @IdRol, IdComite = @IdComite, IdMunicipio = @IdMunicipio, IdSector = @IdSector, Colegio = @Colegio, IdUsuario = @IdUsuario WHERE Id = @id`,
  SelectPersonasById: `SELECT * FROM [PartiCenter].[dbo].[Persona] WHERE Id = @id  ORDER BY Id DESC`,
  SelectPersonas: `SELECT * FROM [PartiCenter].[dbo].[Persona]  ORDER BY Id DESC`,
  //Usuario//
  SelectUsuarios: `SELECT * FROM [PartiCenter].[dbo].[Usuarios]  ORDER BY Id DESC`,
  SelectUsuariosById: `SELECT * FROM [PartiCenter].[dbo].[Usuarios] WHERE Id = @id  ORDER BY Id DESC`,
  InsertUsuarios: `INSERT INTO [PartiCenter].[dbo].[Usuarios] (Nombre, Apellido, Cedula, IdRangoEdad, Telefono,Email, Password, IdRol, Fecha, IdFirebase) VALUES (@Nombre, @Apellido, @Cedula, @IdRangoEdad, @Telefono,@Email, @Password, @IdRol, @Fecha, @IdFirebase)`,
  DeleteUsuarios: `DELETE FROM [PartiCenter].[dbo].[Usuarios] WHERE Id = @id`,
  UpdateUsuarios: `UPDATE [PartiCenter].[dbo].[Usuarios] SET Nombre = @Nombre, Apellido = @Apellido, Cedula = @Cedula, IdRangoEdad = @IdRangoEdad, Telefono = @Telefono,Email = @Email, Password = @Password, IdRol = @IdRol, Fecha = @Fecha, IdFirebase = @IdFirebase WHERE Id = @id`,
};
