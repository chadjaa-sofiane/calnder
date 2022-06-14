import axios from "axios"
import React, { useState } from "react"
import { Modal } from "../core/Modal"

interface AddNoteProps {
    date: string
    open: boolean
    setOpen: (open: boolean) => void
}

const AddNote = ({ date, open, setOpen }: AddNoteProps) => {
    const [note, setNote] = useState("");
    const [error, setError] = useState("");
    const submitAddNote = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!note) throw new Error("Note is required");
            await axios.post("http://localhost:5000/api/calender/allNote", { date, note });
            setOpen(false);
        } catch (error: any) {
            console.log(error);

            setError(error.message);
        }

    }
    return (
        <Modal open={open} setOpen={setOpen}>
            <div className="w-auto m-auto p-5 shadow-md">
                <form onSubmit={submitAddNote}>
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
                    <div className="flex justify-end mt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add
                        </button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </form>

            </div>
        </Modal>
    )
}

export default AddNote