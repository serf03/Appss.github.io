import { GetJson, PostJson } from "../librer";
import { connect } from "../database/db.js";
import { queries } from "../scripts/queries";

export const getUsuarios = async (req, res) => {
  const pool = await connect();
  const results = await pool.request().query(queries.SelectUsuarios);
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
    .query(queries.SelectUsuariosById);

  res.json(results.recordset[0]);
};

export const getUsuariosCount = async (req, res) => {
  const result = await GetJson(`SELECT * FROM Usuarios ORDER BY Id DESC`);
  res.json(result.length);
};

export const saveUsuarios = async (req, res) => {
  const { title, description } = req.body;

  const pool = await connect();
  const results = await pool
    .request()
    .input("title", title)
    .input("description", description)
    .query(queries.InsertUsuarios);

  console.log(results);
  console.log(req.body);
};

export const deleteUsuarios = async (req, res) => {
  const { id } = req.params;
  const pool = await connect();

  const results = await pool
    .request()
    .input("id", id)
    .query(queries.DeleteUsuarios);

  res.sendStatus(204);
  console.log(req.params);
};

export const updateUsuarios = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const pool = await connect();

    const results = await pool
      .request()
      .input("id", id)
      .input("title", title)
      .input("description", description)
      .query(queries.UpdateUsuarios);

    res.send(results.rowsAffected[0]);
  } catch (error) {
    console.log(error.message);
  }
};
