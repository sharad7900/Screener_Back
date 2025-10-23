const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Table.js");
const {MFPage} = require("../Controllers/MFPage.js");


router.route("/").get(controller.table_data);
router.route("/MFinfo").post(MFPage);
router.get("/get_final_table",controller.get_table_data);


module.exports = router;