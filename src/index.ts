import { app } from "./app";
import pingPong from "./endpoints/ping";
import createStudentsTeam from "./endpoints/createStudentsTeam";
import getAllActiveStudentsTeams from "./endpoints/getAllActiveStudentsTeams";
import changeStudentsTeamModule from "./endpoints/changeStudentsTeamModule";
import createStudent from "./endpoints/createStudent";
import getStudentByName from "./endpoints/getStudentByName";
import changeStudentTeam from "./endpoints/changeStudentTeam";
import createTeacher from "./endpoints/createTeacher";
import getAllTeachers from "./endpoints/getAllTeachers";
import changeTeacherTeam from "./endpoints/changeTeacherTeam";

/* Teste do servidor */
app.get("/ping", pingPong);

/* Turma */

/* Criar turma */
app.post("/turma", createStudentsTeam);
/* Pegar todas as turmas ativas */
app.get("/turma", getAllActiveStudentsTeams);
/* Mudar o módulo da turma */
app.put("/turma/:id", changeStudentsTeamModule);

/* Estudante */

/* Criar estudante */
app.post("/estudante", createStudent);
/* Procurar estudante por nome */
app.get("/estudante", getStudentByName);
/* Mudar a turma do estudante */
app.put("/estudante", changeStudentTeam);

/* Docente */

/* Criar docente */
app.post("/docente", createTeacher);
/* Pegar todos os docentes */
app.get("/docente", getAllTeachers);
/* Mudar a turma do docente */
app.put("/docente", changeTeacherTeam);
