var mongoose = require('mongoose');
var QuestionbankSchema = new mongoose.Schema({
	questionNo: Number,
	question: String,
	option1: String,
	option2: String,
	option3: String,
	option4: String,
	answer: String,
})

module.exports = mongoose.model("Questionbank",QuestionbankSchema)
