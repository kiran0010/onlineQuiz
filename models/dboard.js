var mongoose = require('mongoose');
var DboardSchema = new mongoose.Schema({
	name : String,
	score : Number,
	date : {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model("Dboard",DboardSchema)
