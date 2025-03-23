import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import connectDB from "./database/db";
import Book from "./models/booksModel";
import bookRouter from "./routes/bookRouter";

dotenv.config();
connectDB();

const app: Express = express();
const PORT: string|number = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
 /*
app.get('/', async (req: Request, res: Response) => {
    const data = await Book.find({}).limit(5);
    console.log(data);
    res.json(data);
});
*/
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Book API!');
});

app.use("/api/books", bookRouter);

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});