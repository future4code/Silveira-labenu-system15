import { app } from "./app";
import createStudentsTeam from "./endpoints/createStudentsTeam";
import pingPong from "./endpoints/ping";
import { StudentsTeamModel } from "./model/StudentsTeamModel";

app.get("/ping", pingPong);
app.post("/team", createStudentsTeam);

