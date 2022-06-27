const express = require("express");
// Stands for "contraindications" tabel in DB
const pControllers = require("../controllers/procedureControllers");
const router = express.Router();

// @ routes GET /procedures/ For Users -----------------------

router.route("/procTarSymp").get(pControllers.getProceduresTargetsSymptoms);

/** ------------------------------------------------------------------
 * Routses GET && POST && PUT && DELETE /procedures/ for Admin-panel
 */
router.route("/").get(pControllers.getAllProcedures);

//http://localhost:4000/procedures/newprocedure/
router.route("/newprocedure").post(pControllers.postNewProcedure);

// GET procedure by Id
router.route("/:id").get(pControllers.getProcedureById);

// PUT & DELETE router by Id
router
  .route("/:id")
  .put(pControllers.updateProcedureById)
  .delete(pControllers.deleteProcedureById);

module.exports = router;