const Symptom = require("../models/symptomModel");

/**
 * DROP-DOWN MENU fetch
 */

exports.getSymptomsEt = async (req, res, next) => {
  try {
    //let symptom = await Symptom.findById(2);

    const symptoms = (await Symptom.findByTitleEt())[0];

    res.status(200).json(symptoms);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/** ------------------------------------------------------------------
 * ADMINS-PANEL controller Methods for Symptom routses
 */

//  Saving  NEW Symptom
exports.postNewSymptom = async (req, res, next) => {
  try {
    let { symp_title_et, symp_title_ru, symp_title_en } = req.body;

    let symptom = new Symptom(symp_title_et, symp_title_ru, symp_title_en);

    symptom = await symptom.saveNewSymptom();

    console.log(symptom);
    res.send("Created New Symptom!");
  } catch (error) {}
};

// Get All Symptoms from DB

exports.getAllSymptoms = async (req, res, next) => {
  try {
    let symptoms = await Symptom.findAll();

    res.status(200).json(symptoms);
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get the Symptom By Id
exports.getSymptomById = async (req, res, next) => {
  try {
    //let symptom = await Symptom.findById(2);

    let [symptom, _] = await Symptom.findById(req.params.id);

    res.status(200).json(symptom);
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update Symptom By Id
exports.updateSymptomById = async (req, res, next) => {};

// Delete the Symptom By Id
exports.deleteSymptomById = async (req, res, next) => {
  try {
    //let symptom = await Symptom.findById(2);

    let symptomDelete = await Symptom.deleteById(req.params.id);

    res.status(200);
    res.send("Symptom has been successfully deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
};