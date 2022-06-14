import { useState } from "react";
import AddNote from "./AddNote";

interface Props {
    date: string
    note: string
}

const CalenderDay = ({ date, note }: Props) => {
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <div onClick={() => setOpen(true)} className="shadow-md cursor-pointer bg-gray-200 hover:bg-gray-300 p-7">
                <p className="text-blue-600">
                    {date}
                </p>
                <div>
                    <p> {note} </p>
                </div>
            </div>
            <AddNote open={open} setOpen={setOpen} date={date} />
        </>
    )
}

export default CalenderDay