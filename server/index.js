import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/check', (req, res) => {
    res.json({ message: 'Hello, World!' });
})

app.use('/accounts')

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})