import { GetJson, PostJson } from "../librer";
import { connect } from "../database/db.js";
import { queries } from "../scripts/queries";

export const getIntegrantes = async (req, res) => {
  const pool = await connect();
  const results = await pool.request().query(queries.SelectPersonas);
  console.log(results.recordset)
  res.send(results.recordset);
};
export const getIntegrante = async (req, res) => {
  const { id } = req.params;

  console.log(req.params);

  const pool = await connect();
  const results = await pool
    .request()
    .input("id", id)
    .query(queries.SelectIntegrantesById);

  res.json(results.recordset[0]);
};

export const getIntegrantesCount = async (req, res) => {
  const result = await GetJson(`SELECT * FROM Integrantes ORDER BY Id DESC`);
  res.json(result.length);
};

export const saveIntegrantes = async (req, res) => {
  const { title, description } = req.body;

  const pool = await connect();
  const results = await pool
    .request()
    .input("title", title)
    .input("description", description)
    .query(queries.InsertIntegrantes);

  console.log(results);
  console.log(req.body);
};

export const deleteIntegrantes = async (req, res) => {
  const { id } = req.params;
  const pool = await connect();

  const results = await pool
    .request()
    .input("id", id)
    .query(queries.DeleteIntegrantes);

  res.sendStatus(204);
  console.log(req.params);
};

export const updateIntegrantes = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const pool = await connect();

    const results = await pool
      .request()
      .input("id", id)
      .input("title", title)
      .input("description", description)
      .query(queries.UpdateIntegrantes);

    res.send(results.rowsAffected[0]);
  } catch (error) {
    console.log(error.message);
  }
};
