import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    ISBN: Number,
    Summary: String,
    Author: String
});

const Book = mongoose.model("Book", bookSchema);

export default Book;