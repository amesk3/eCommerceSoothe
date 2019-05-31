const router = require("express").Router();

router.use("/users", require("./users"));

module.exports = router;

router.use(function(req, res, next) {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});
