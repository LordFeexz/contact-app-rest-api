const Controller = require("../controllers");

const router = require("express").Router();

router.get("/api", Controller.getData);

router.post("/api", Controller.createData);

module.exports = router;
