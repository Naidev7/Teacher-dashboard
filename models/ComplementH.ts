import mongoose from "mongoose";

const HourSchema = new mongoose.Schema({
    hours: Number,
    teacherEmail: String
})
export default mongoose.models.Hour || mongoose.model('Hour', HourSchema)