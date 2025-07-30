const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Table.js");


router.route("/").post(controller.table_data);


module.exports = router;