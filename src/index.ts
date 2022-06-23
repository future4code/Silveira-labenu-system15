import { app } from "./app";
import pingPong from "./endpoints/ping";

app.get("/ping", pingPong);