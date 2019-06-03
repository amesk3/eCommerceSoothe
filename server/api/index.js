const router = require("express").Router();
const Campus = require("../db/models/Campus");
const Student = require("../db/models/Student");

//GET ALL
router.get("/campuses", async (req, res, next) => {
  console.log("get all working");

  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch (err) {
    next(err);
  }
});

//GET BY ID
router.get("/campuses/:id", async (req, res, next) => {
  try {
    const campusId = await Campus.findById(req.params.id);
    res.send(campusId);
  } catch (err) {
    next(err);
  }
});

//CREATE NEW
router.post("/campuses", async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

//UPDATE
router.put("/campuses/:id", async (req, res, next) => {
  try {
    let updatedCampus = await Campus.findById(req.params.id);
    updatedCampus = updatedCampus.update(req.body);
    res.json(updatedCampus);
  } catch (err) {
    next(err);
  }
});

//DELETE
router.delete("/campuses/:id", async (req, res, next) => {
  try {
    const deletedCampus = await Campus.findOne({
      where: { id: req.params.id }
    });
    await deletedCampus.destroy();
    res.send(deletedCampus);
  } catch (err) {
    next(err);
  }
});

router.use(function(req, res, next) {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

module.exports = router;
