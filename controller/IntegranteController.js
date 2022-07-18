import { GetJson, PostJson } from "../librer";
import { connect } from "../database/db.js";
import { queries } from "../scripts/queries";

export const getIntegrantes = async (req, res) => {
  const { idDirigente } = req.params;

  const pool = await connect();
  const results = await pool
    .request()
    .input("IdDirigente", idDirigente)
    .query(queries.SelectPersonas);
  res.send(results.recordset);
};
export const getIntegrante = async (req, res) => {
  const { id } = req.params;

  const pool = await connect();
  const results = await pool
    .request()
    .input("IdDirigente", id)
    .query(queries.SelectPersonasById);
  res.json(results.recordset);
};

export const getIntegrantesCount = async (req, res) => {
  const result = await GetJson(`SELECT * FROM Integrantes ORDER BY Id DESC`);
  res.json(result.length);
};

export const saveIntegrantes = async (req, res) => {
  const pool = await connect();
  const {
    Nombre,
    Apellido,
    Apodo,
    Cedula,
    IdRangoEdad,
    Telefono,
    Email,
    IdDirigente,
    IdPartido,
    IdRol,
    IdComite,
    IdMunicipio,
    IdSector,
    Colegio,
    IdUsuario,
  } = req.body;

  //validar si existe el integrante
  const result = await pool
    .request()
    .input("Cedula", Cedula)
    .query("SELECT * FROM Persona WHERE Cedula = @Cedula AND Estatus = 0");

  if (result.recordset.length > 0) {
    res.json(404);
    return;
  }

  const results = await pool
    .request()
    .input("Nombre", Nombre)
    .input("Apellido", Apellido)
    .input("Apodo", Apodo)
    .input("Cedula", Cedula)
    .input("IdRangoEdad", IdRangoEdad)
    .input("Telefono", Telefono)
    .input("Email", Email)
    .input("IdDirigente", IdDirigente)
    .input("IdPartido", IdPartido)
    .input("IdRol", IdRol)
    .input("IdComite", IdComite)
    .input("IdMunicipio", IdMunicipio)
    .input("IdSector", IdSector)
    .input("Colegio", Colegio)
    .input("IdUsuario", IdUsuario)
    .query(queries.InsertPersonas);

  res.json(results.rowsAffected[0]);
};

export const deleteIntegrantes = async (req, res) => {
  const { id } = req.params;
  const pool = await connect();

  const results = await pool
    .request()
    .input("Id", id)
    .query(queries.DeletePersonas);

  console.log(id);
  res.json(results.rowsAffected[0]);
};

export const updateIntegrantes = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Nombre,
      Apellido,
      Apodo,
      Cedula,
      IdRangoEdad,
      Telefono,
      Email,
      IdDirigente,
      IdPartido,
      IdRol,
      IdComite,
      IdMunicipio,
      IdSector,
      Colegio,
      IdUsuario,
    } = req.body;
    const pool = await connect();

    const results = await pool
      .request()
      .input("id", Id)
      .input("Nombre", Nombre)
      .input("Apellido", Apellido)
      .input("Apodo", Apodo)
      .input("Cedula", Cedula)
      .input("IdRangoEdad", IdRangoEdad)
      .input("Telefono", Telefono)
      .input("Email", Email)
      .input("IdDirigente", IdDirigente)
      .input("IdPartido", IdPartido)
      .input("IdRol", IdRol)
      .input("IdComite", IdComite)
      .input("IdMunicipio", IdMunicipio)
      .input("IdSector", IdSector)
      .input("Colegio", Colegio)
      .input("IdUsuario", IdUsuario)
      .query(queries.UpdateIntegrantes);

    res.send(results.rowsAffected[0]);
  } catch (error) {
    console.log(error.message);
  }
};
