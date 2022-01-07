var express = require("express");
var router = express.Router();

router.get("/add", function (req, res, next) {
	res.render("books");
});

router.post("/success", function (req, res, next) {
	res.render("success");
	console.log(req.body);
});

router.get("/add2/:id/:bkname/:bkauth", function (req, res, next) {
	let { id, bkname, bkauth } = req.params;
	console.log(id + "\n" + bkname + "\n" + bkauth);
	res.send("Hello");
});

module.exports = router;
