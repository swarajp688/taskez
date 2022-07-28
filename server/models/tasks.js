// create task schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const taskSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     status: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         immutable: true 
//     }
// }
// );
// const Task = mongoose.model('Task', taskSchema);
// module.exports = Task;
// create task schema with user id
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}
);
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
