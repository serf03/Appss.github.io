import { Router } from "express";
import {
  deleteIntegrantes,
  getIntegrante,
  getIntegrantes,
  getIntegrantesCount,
  saveIntegrantes,
  updateIntegrantes,
} from "../controller/IntegranteController";

const router = Router();

router.get("/integrantes", getIntegrantes);

router.get("/integrantes/count", getIntegrantesCount);

router.get("/integrantes/:id", getIntegrante);

router.post("/integrantes", saveIntegrantes);

router.delete("/integrantes/:id", deleteIntegrantes);

router.put("/integrantes/:id", updateIntegrantes);

export default router;
