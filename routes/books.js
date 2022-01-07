var express = require("express");
var router = express.Router();

router.post("/add", function (req, res, next) {
	console.log(req.body);
	res.status(200).json({ message: "Book Saved Successfully" });
});

router.get("/getreq", function (req, res, next) {
	res.send("Hello :)");
});

router.get("/find/:id", function (req, res, next) {
	const { id } = req.params;
	console.log(req.params);
	console.info(`the entered book id is ${id}`);
	res.status(200).json({ message: "Book Found" });
});

module.exports = router;
