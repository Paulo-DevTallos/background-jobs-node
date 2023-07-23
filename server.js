import { app } from "./scr/app";

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));