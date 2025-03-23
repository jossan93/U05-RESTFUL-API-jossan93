import mongoose, { Collection} from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ISBN: { type: Number, required: true },
    Summary: { type: String, required: true },
    Author: { type: String, required: true }
}, {collection: "Book"});

const Book = mongoose.model("Book", bookSchema);

export default Book;