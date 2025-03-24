import { Router, Request, Response  } from "express";
import { createBook, getAllBooks, getBookWithPartialTitle, getBookByID, updateBook, deleteBook } from "../controllers/book";

const bookRouter = Router();

bookRouter.post("/createBook", createBook);

bookRouter.put('/update/:id', updateBook);

bookRouter.delete('/delete/:id', deleteBook);

bookRouter.get('/', getAllBooks);

bookRouter.get('/partialTitle', getBookWithPartialTitle);

bookRouter.get('/:bookID', getBookByID);

export default bookRouter;