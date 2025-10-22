const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Table.js");
const {MFPage} = require("../Controllers/MFPage.js");


router.route("/").get(controller.table_data);
router.route("/MFinfo").post(MFPage);
router.route("/heatmap").get(require("../Controllers/Heatmap.js").getHeatmapData);


module.exports = router;