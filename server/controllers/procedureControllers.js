const Procedure = require("../models/procedureModel");

/** ------------------------------------------------------------------
 * USERS controller Methods for procedures routses
 */

exports.getProceduresTargetsSymptoms = async (req, res, next) => {
  try {
    // Catching query parameters from GenericBtn route
    let tarIds = req.query.tarIds;
    let sympIds = req.query.sympIds;
    let disIds = req.query.disIds;
    let priceMax = req.query.priceMax;

    // Transform object to number, as it comes by default

    /**
     * Calling the method in Procedure model to get procedure on any filter
     * using stringifyed query parameters
     */
    let procedures = await Procedure.getAllProcOnTarAndSymp(
      tarIds,
      sympIds,
      disIds,
      priceMax
    );
    // Return array of json
    res.status(200).json(procedures);
  } catch (error) {
    console.log("nothing");
    console.log(error);
    next(error);
  }
};

/** ------------------------------------------------------------------
 * ADMINS-PANEL controller Methods for procedures routses
 */
//  Saving  NEW Symptom
exports.postNewProcedure = async (req, res, next) => {
  try {
    let {
      proc_title_et,
      proc_title_ru,
      proc_title_en,
      proc_descr_et,
      proc_descr_ru,
      proc_descr_en,
      proc_duration,
      proc_price,
    } = req.body;

    let procedure = new Procedure(
      proc_title_et,
      proc_title_ru,
      proc_title_en,
      proc_descr_et,
      proc_descr_ru,
      proc_descr_en,
      proc_duration,
      proc_price
    );

    procedure = await procedure.saveNewProcedure();

    console.log(procedure);
    res.send("Created New Procedure!");
  } catch (error) {}
};

// Get All Procedures from DB

exports.getAllProcedures = async (req, res, next) => {
  try {
    let procedures = await Procedure.findAll();

    res.status(200).json(procedures);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get the Procedure By Id
exports.getProcedureById = async (req, res, next) => {
  try {
    let [procedure, _] = await Procedure.findById(req.params.id);

    res.status(200).json(procedure);
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update Procedure By Id
exports.updateProcedureById = async (req, res, next) => {};

// Delete the ProcedureBy Id
exports.deleteProcedureById = async (req, res, next) => {
  try {
    let procedureDelete = await Procedure.deleteById(req.params.id);

    res.status(200);
    res.send("Procedure has been successfully deleted!");
  } catch (error) {
    console.log(error);
    next(error);
  }
};