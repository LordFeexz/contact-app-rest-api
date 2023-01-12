const Controller = require("../controllers");

const router = require("express").Router();

router.get("/api", Controller.getData);

router.post("/api", Controller.createData);

router.get("/api/:id", Controller.getDatabyId);

module.exports = router;
