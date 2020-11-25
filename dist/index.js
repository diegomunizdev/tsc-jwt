"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT ? process.env.PORT : '4000';
const app_1 = __importDefault(require("./app"));
require("./database");
function main() {
    app_1.default.listen(PORT, () => {
        console.log(`>> Server running: http://localhost:${PORT}`);
    });
}
main();
//# sourceMappingURL=index.js.map