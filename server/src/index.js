import express from "express"
import cors from "cors"


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const list = [
    {
        id: 1,
        date: "2020-01-01",
        note: "This is a note"
    },
    {
        id: 2,
        date: "2020-01-02",
        note: "This is a note"
    },
    {
        id: 3,
        date: "2020-01-03",
        note: "This is a note"
    }
];

app.get("api/calender/add", (req, res) => {
    const { date, Note } = req.body;
    if (!date || !Note) {
        return res.status(400).json({
            error: "Bad Request"
        })
    }
    list.push({ id: list.length + 1, date, Note });
})

app.get("/api/calender/get", (_, res) => {
    res.json(list);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})