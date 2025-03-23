import { Request, Response } from "express";
import Book from "../models/booksModel";

async function getAllBooks(req: Request, res: Response) {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: "error getting books", error});
    }
}

async function getBookWithPartialTitle(req: Request, res: Response) {
    try {
        const title = req.query.title;
        if (!title)  res.status(400).json({message: "title is required"});
        return;

        const books = await Book.find({ title: { $regex: title, $options: "i"}})
        
        if (books.length === 0) {
            res.status(404).json({ message: "No books found with the given title" });
            return;
        }
        
        res.json(books);
    } catch (error) {
        res.status(500).json({message: "error getting books", error});
    }
}

async function getBookByID(req: Request, res: Response) {
    try {
        const book = await Book.findById(req.params.bookID);

        if (!book) res.status(404).json({ message: "book not found"});
        
        res.json(book);
        return;
    } catch (error) {
        res.status(500).json({ message: "invalid ID format "});
    }
}

const createBook = async (req: Request, res: Response) => {
    try {
        const {title, ISBN, Summary, Author} = req.body;

        if (!title || !ISBN || !Summary || !Author) {
            res.status(400).json({ message: "All fields (title, ISBN, Summary, Author) are required" });
            return;
        }

        const newBook = new Book({
            title,
            ISBN,
            Summary,
            Author
        });

        await newBook.save();
        res.status(201).json({ message: "book has been added", Book: newBook});
    } catch (error) {
        res.status(500).json({ message: "Error creating book", error });
    }
}

const updateBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!book) {
        res.status(404).json({message: "book not found"});
        return;
        }
        res.status(200).json({ message: "Book updated successfully", book });
    } catch (error) {
        res.status(500).json({ message: "Error updating book", error });
    }
};

export {getAllBooks, getBookWithPartialTitle, getBookByID, createBook, updateBook};

//export {getAllBooks};