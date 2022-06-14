import express from "express"
import cors from "cors"


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const list = [
    {
        id: 1,
        date: "Sun, Jun 26th, 2022",
        note: "This is a note"
    },
    {
        id: 2,
        date: "Mon, Jun 27th, 2022",
        note: "This is a note"
    },
    {
        id: 3,
        date: "Sun, Jun 26th, 2022",
        note: "This is a note"
    }
];

app.get("/api/calender/allNotes", (_, res) => {
    res.json(list);
})


app.post("api/calender/addNote", (req, res) => {
    const { date, note } = req.body;
    if (!date || !note) {
        return res.status(400).json({
            error: "Bad Request"
        })
    }
    list.push({ id: list.length + 1, date, note });
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})