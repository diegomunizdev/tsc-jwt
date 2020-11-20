"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database = process.env.CONNECTION_DATABASE ? process.env.CONNECTION_DATABASE : '';
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};
mongoose_1.default.connect(database, options)
    .then(result => {
    console.log('>>> Database successfully connected');
}).catch(err => {
    console.log('xxx Failure. Could not connect to the databse. Error: ', err);
});
//# sourceMappingURL=database.js.map