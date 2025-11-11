import mongoose from 'mongoose'

const showSchema = new mongoose.Schema(
    {
        movie: {true: String, required: true, ref:"Movie"},
        showDateTime:{type: Date, required:true},
        showPrice:{type: Number, required:true},
        oppupiedSeats:{type: Object, default:{}},


    },{minimize:false}
);

export default mongoose.Schema("Show", showSchema)