const express = require("express");
const tControllers = require("../controllers/targetControllers");
const router = express.Router();

// @route GET && POST /symptoms/
router.route("/").get(tControllers.getAllTargets);

//http://localhost:4000/procedures/newtarget/
router.route("/newtarget").post(tControllers.postNewTarget);

// GET target by Id
router.route("/:id").get(tControllers.getTargetById);

// GET Disease by Language for Fetching in DropDowns
router.route("/all/et").get(tControllers.getTargetsEt);


// PUT & DELETE target by Id
router
  .route("/:id")
  .put(tControllers.updateTargetById)
  .delete(tControllers.deleteTargetById);

module.exports = router;