import { Router } from "express"

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


const router = Router();

router.get("/allNotes", (_, res) => {
    res.json(list);
})

router.post("/addNote", (req, res) => {
    const { date, note } = req.body;
    const newNote = {
        id: list.length + 1,
        date,
        note
    }
    list.push(newNote);
    res.json(newNote);
}
)

export default router;