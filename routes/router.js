const Controller = require("../controllers");

const router = require("express").Router();

router.get("/", Controller.getData);

module.exports = router;
