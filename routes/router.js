const Controller = require("../controllers");

const router = require("express").Router();

router.get("/api", Controller.getData);

router.post("/api", Controller.createData);

router.get("/api/:id", Controller.getDatabyId);

router.delete("api/:id", Controller.deleteDataById);

router.patch("/api/:id", Controller.updateData);

module.exports = router;
