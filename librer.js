import { connect } from "./database/db";

export async function GetJson(query) {
  try {
    const pool = await connect();
    const res = await pool.request().query(query);
    const [rows] = res.recordsets;
    return rows;
  } catch (error) {
    console.log(error);
  }
}
export async function PostJson(query) {
  try {
    const pool = await connect();
    const [results] = await pool.request().query(query);
    return results;
  } catch (error) {
    console.log(error);
  }
}
