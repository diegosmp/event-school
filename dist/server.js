"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({ error: 'Error internal server.' });
});
const PORT = process.env.PORT || 3334;
app.listen(PORT, () => console.log(`Server open http://localhost:${PORT}`));
