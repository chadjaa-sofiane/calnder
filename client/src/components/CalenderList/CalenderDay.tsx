import { useState } from "react";
import AddNote from "./AddNote";
import ModifyNote from "./ModifyNote";

interface Props {
    date: string
    note: string | null
}

const CalenderDay = ({ date, note }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div onClick={() => setOpen(true)} className=" border border-blue-200 mt-3 shadow-md cursor-pointer bg-gray-200 hover:bg-gray-300 p-7">
                <p className="text-blue-600">
                    {date}
                </p>
                <div>
                    <p className="text-lg mt-5 font-medium"> {note} </p>
                </div>
            </div>

            {note ?
                <ModifyNote note={note} open={open} setOpen={setOpen} date={date} /> :
                <AddNote open={open} setOpen={setOpen} date={date} />
            }

        </>
    )
}

export default CalenderDay