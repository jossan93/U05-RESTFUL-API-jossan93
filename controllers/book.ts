import { Request, Response } from "express";
import Book from "../models/booksModel";

// Get all the books
async function getAllBooks(req: Request, res: Response): Promise<void> {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: "error getting books", error});
    }
}

// search for book with partial title
async function getBookWithPartialTitle(req: Request, res: Response): Promise<void> {
    try {
        const title = req.body.title;
        if (!title)  {res.status(400).json({message: "title is required"}); return;};
       
        const books = await Book.find({ Title: { $regex: title, $options: "i"}})
        
        if (books.length === 0) {
            res.status(404).json({ message: "No books found with the given title" });
            return;
        }
        
        res.json(books);
    } catch (error) {
        res.status(500).json({message: "error getting books", error});
    }
}

// get a book using id
async function getBookByID(req: Request, res: Response): Promise<void> {
    try {
        const book = await Book.findById(req.params.bookID);

        if (!book) {res.status(404).json({ message: "book not found"}); return;};
        
        res.json(book);
    
    } catch (error) {
        res.status(500).json({ message: "invalid ID format "});
    }
}

// create/add a new book to database
const createBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const {Title, ISBN, Summary, Author} = req.body;

        if (!Title || !ISBN || !Summary || !Author) {
            res.status(400).json({ message: "All fields (title, ISBN, Summary, Author) are required" });
            return;
        }

        const newBook = new Book({
            Title,
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

// uppdate a exiting book by using id
const updateBook = async (req: Request, res: Response): Promise<void> => {
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
}

//delete a book by using id
const deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id, req.body);
        if (!book) {
            res.status(404).json({message: "book not found"});
            return;            
        }
        res.status(200).json({ mesage: "book has been deleted", book});
    } catch (error) {
        res.status(500).json({ message: "Error deleting book", error});
    }
}

export {getAllBooks, getBookWithPartialTitle, getBookByID, createBook, updateBook, deleteBook};
