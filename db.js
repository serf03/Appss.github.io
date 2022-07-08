import mssql from "mssql";

export async function connect() {
  try {
    const pool = await mssql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.loerror;
  }
}
