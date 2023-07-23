import { config } from "dotenv";
import { app } from "./scr/app";

config();

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));