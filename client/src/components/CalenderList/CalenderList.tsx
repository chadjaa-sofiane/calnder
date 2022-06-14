import moment from "moment";
import { useState, useEffect } from "react";
import { calenderApi } from "../../helpers/calenderApi"
import CalenderDay from "./CalenderDay";

//get the days of the week
const getDaysOfWeek = (week: number) => {
    const days = [];
    for (let i = 0; i < 7; i++) {
        days.push(moment().weekday(i).add(week, "week").format("ddd, MMM Do, YYYY"));
        // jump to the next week
    }
    return days;
}



const CalenderList = () => {
    const [weekNumber, setWeekNumber] = useState(2);
    const [notes, setNotes] = useState<any[]>([]);

    const goToNextWeek = () => {
        setWeekNumber(weekNumber + 1);
    }
    const goToPreviousWeek = () => {
        setWeekNumber(weekNumber - 1);
    }
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await calenderApi.get("allNotes");
            const notes = getDaysOfWeek(weekNumber).map((date: any, index) => {
                const note = data.find((note: any) => note.date === date);
                return {
                    id: index,
                    date,
                    note: note?.note || "",
                }
            })
            setNotes(notes);
        }
        fetchData();
    }, [weekNumber])
    return (
        <div className="w-auto m-auto p-5 shadow-md">
            <div>CalenderList</div>
            <div className="flex justify-between m-5 flex-wrap min-h-40">
                {notes.map((note, index) => (
                    <CalenderDay key={index} date={note.date} note={note.note} />
                ))}
            </div>
            <div className="flex justify-center gap-2">
                {weekNumber > 1 &&
                    <button
                        onClick={goToPreviousWeek}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        prev
                    </button>
                }
                <button
                    onClick={goToNextWeek}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    next
                </button>

            </div>
        </div>

    )
}

export default CalenderList