const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect('mongodb+srv://codesharecode:JgljMeZkrVwYGE72@cluster0.ny9u2w5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
}