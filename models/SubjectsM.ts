import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
    name: String,
    type: String,
    course: String,
    group: String,
    hours: Number,
    spaces: String,
    teacherEmail: String,
})
export default mongoose.models.Subject || mongoose.model('Subject', SubjectSchema)