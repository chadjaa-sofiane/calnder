import { Router } from "express"
import { getAllNotes, addNote, modifyNote } from "../db/index.js"

const router = Router();

router.get("/allNotes", async (_, res) => {
    try {
        const notes = await getAllNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/addNote", async (req, res) => {
    const { date, note } = req.body;
    try {
        await addNote(date, note)
        res.json("succress");
    } catch (error) {
        res.status(500).send(error);
    }

}
)

router.put("/updateNote", (req, res) => {
    const { date, note } = req.body;
    try {
        modifyNote(date, note)
        res.json("success");
    } catch (error) {
        res.status(500).send(error);
    }
}
)

export default router;