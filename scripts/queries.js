export const queries = {
  DeleteIntegrantes:
    "DELETE FROM [PartiCenter].[dbo].[Integrantes] WHERE Id = @id",
  InsertIntegrantes:
    "INSERT INTO Integrantes (title, description) VALUES (@title, @description)",
  UpdateIntegrantes:
    "UPDATE Integrantes SET Title = @title, Description = @description WHERE Id = @id",
  SelectIntegrantesById: `SELECT * FROM [PartiCenter].[dbo].[Integrantes] WHERE Id = @id  ORDER BY Id DESC`,

  // Insert into personas
  InsertPersonas: `INSERT INTO [PartiCenter].[dbo].[Persona] (,Nombre, Apellido, Apodo, Cedula, IdRangoEdad, Telefono, Email, IdDirigente, IdPartido, IdRol, IdComite, IdMunicipio, IdSector, Colegio, IdUsuario 
      VALUES (@Nombre, @Apellido, @Apodo, @Cedula, @IdRangoEdad, @Telefono, @Email, @IdDirigente, @IdPartido, @IdRol, @IdComite, @IdMunicipio, @IdSector, @Colegio, @IdUsuario)`,
  // Delete personas
  DeletePersonas: `DELETE FROM [PartiCenter].[dbo].[Persona] WHERE Id = @id`,
  // Update personas
  UpdatePersonas: `UPDATE [PartiCenter].[dbo].[Persona] SET Nombre = @Nombre, Apellido = @Apellido, Apodo = @Apodo, Cedula = @Cedula, IdRangoEdad = @IdRangoEdad, Telefono = @Telefono, Email = @Email, IdDirigente = @IdDirigente, IdPartido = @IdPartido, IdRol = @IdRol, IdComite = @IdComite, IdMunicipio = @IdMunicipio, IdSector = @IdSector, Colegio = @Colegio, IdUsuario = @IdUsuario WHERE Id = @id`,
  // Select personas
  SelectPersonasById: `SELECT * FROM [PartiCenter].[dbo].[Persona] WHERE Id = @id  ORDER BY Id DESC`,

  //select all personas
  SelectPersonas: `SELECT * FROM [PartiCenter].[dbo].[Persona]  ORDER BY Id DESC`,
};
