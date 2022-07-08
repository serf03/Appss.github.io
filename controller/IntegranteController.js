import { GetJson, PostJson } from "../librer";
import { connect } from "../database/db.js";
import { queries } from "../scripts/queries";

export const getIntegrantes = async (req, res) => {
  const pool = await connect();
  const results = await pool.request().query(queries.SelectPersonas);
  console.log(results.recordset);
  res.send(results.recordset);
};
export const getIntegrante = async (req, res) => {
  const { id } = req.params;

  console.log(req.params);

  const pool = await connect();
  const results = await pool
    .request()
    .input("id", id)
    .query(queries.SelectPersonasById);

  res.json(results.recordset[0]);
};

export const getIntegrantesCount = async (req, res) => {
  const result = await GetJson(`SELECT * FROM Integrantes ORDER BY Id DESC`);
  res.json(result.length);
};

export const saveIntegrantes = async (req, res) => {
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

  console.log(req.body);
  return;
  const pool = await connect();
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
    .query(queries.InsertUsuarios);

  console.log(results);
  console.log(req.body);
};

export const deleteIntegrantes = async (req, res) => {
  const { Id } = req.params;
  const pool = await connect();

  const results = await pool
    .request()
    .input("Id", Id)
    .query(queries.DeletePersonas);

  res.sendStatus(204);
  console.log(req.params);
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
