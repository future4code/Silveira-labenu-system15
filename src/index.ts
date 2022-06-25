import { app } from "./app";
import pingPong from "./endpoints/ping";
import createStudentsTeam from "./endpoints/createStudentsTeam";
import getAllStudentsTeams from "./endpoints/getAllStudentsTeams";
import changeStudentsTeamModule from "./endpoints/changeStudentsTeamModule";
import createStudent from "./endpoints/createStudent";
import getStudentByName from "./endpoints/getStudentByName";
import changeStudentTeam from "./endpoints/changeStudentTeam";

app.get("/ping", pingPong);
app.post("/turma", createStudentsTeam);
app.get("/turma", getAllStudentsTeams);
app.put("/turma/:id", changeStudentsTeamModule);
app.post("/estudante", createStudent);
app.get("/estudante", getStudentByName);
app.put("/estudante", changeStudentTeam);
