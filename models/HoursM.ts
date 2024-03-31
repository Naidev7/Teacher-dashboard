import mongoose from "mongoose";

const HoursSchema = new mongoose.Schema({
   totals: Number,
   teachingH: Number,
   additionalH: Number,

})
export default mongoose.models.HoursSchema || mongoose.model('Hours', HoursSchema)