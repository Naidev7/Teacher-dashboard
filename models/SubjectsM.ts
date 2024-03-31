import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
    name: String,
    type: String,
    course: String,
    group: String,
    hours: Number,
    spaces: String,
})
export default mongoose.models.SubjectSchema || mongoose.model('Subject', SubjectSchema)