import mssql from "mssql";
import { dbSettings } from "../config/config";
export const connect = () => {
  try {
    const pool = mssql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.loerror;
  }
};
