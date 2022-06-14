import express from "express"
import cors from "cors"
import calenderRouter from "./routers/calender.js";


const app = express();

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/calender", calenderRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})