import { app } from "./app";
import pingPong from "./endpoints/ping";
import createStudentsTeam from "./endpoints/createStudentsTeam";
import getAllStudentsTeams from "./endpoints/getAllStudentsTeams";
import changeStudentsTeamModule from "./endpoints/changeStudentsTeamModule";
import createStudent from "./endpoints/createStudent";

app.get("/ping", pingPong);
app.post("/turma", createStudentsTeam);
app.get("/turma", getAllStudentsTeams);
app.put("/turma/:id", changeStudentsTeamModule);
app.post("/estudante", createStudent);
