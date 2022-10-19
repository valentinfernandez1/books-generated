import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({


    tittle: {
		type: String,
		required: true,
		unique: true
	},
    summary: {
		type: String,
		required: true,
		unique: true
	},
	genre: {
		type: mongoose.Schema.Types.ObjectId ,
		required: true,
		ref: "Genre"
	},
	author: {
		type: mongoose.Schema.Types.ObjectId ,
		required: true,
		ref: "Author"
	},
});

export default mongoose.model("Book", BookSchema);

