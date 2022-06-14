import { useState } from "react"
import { Modal } from "../core/Modal"
import { calenderApi } from "../../helpers/calenderApi"

interface ModifyNoteProps {
    date: string
    open: boolean
    note: string | null
    setOpen: (open: boolean) => void
}

const ModifyNote = ({ date, note: initialnote, open, setOpen }: ModifyNoteProps) => {
    const [note, setNote] = useState(initialnote || "");
    const [error, setError] = useState("");

    const submitAddNote = async () => {
        try {
            if (!note) throw new Error("Note is required");
            await calenderApi.put("/updateNote", { date, note });
            setOpen(false);
        } catch (error: any) {
            setError(error.message);
        }
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <Modal open={open} setOpen={setOpen}>
            <div className="w-auto m-auto p-5 shadow-md">
                <div>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <label className="block text-lg text-blue-700 font-bold mb-2" htmlFor="note">
                                Note
                            </label>
                            <input
                                className="shadow-md bg-blue-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="note"
                                type="text"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mt-5">
                        <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                        <button onClick={submitAddNote} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Modify
                        </button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </div>

            </div>
        </Modal>
    )
}

export default ModifyNote