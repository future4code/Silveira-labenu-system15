# Table Turma

CREATE TABLE turma (
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255),
	modulo VARCHAR(255) DEFAULT 0
);

select * from turma;

# ********************************

# Estudante

CREATE TABLE estudante (
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	data_nasc DATE NOT NULL,
	turma_id VARCHAR(255) NOT NULL, 
    FOREIGN KEY (turma_id) REFERENCES turma(id)
);

select * from estudante;

CREATE TABLE hobby (
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255) NOT NULL UNIQUE
);

select * from hobby;

CREATE TABLE estudante_hobby (
	id VARCHAR(255) PRIMARY KEY,
	estudante_id VARCHAR(255) NOT NULL, 
    FOREIGN KEY (estudante_id) REFERENCES estudante(id),
	hobby_id VARCHAR(255) NOT NULL, 
    FOREIGN KEY (hobby_id) REFERENCES hobby(id)
);

select * from estudante_hobby;



# ********************************

# Docente

CREATE TABLE docente (
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	data_nasc DATE NOT NULL,
	turma_id VARCHAR(255) NOT NULL, 
    FOREIGN KEY (turma_id) REFERENCES turma(id)
);

select * from docente;

CREATE TABLE especialidade (
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255) NOT NULL UNIQUE
);

select * from especialidade;

CREATE TABLE docente_especialidade (
	id VARCHAR(255) PRIMARY KEY,
	docente_id VARCHAR(255) NOT NULL, 
    FOREIGN KEY (docente_id) REFERENCES docente(id),
	especialidade_id VARCHAR(255) NOT NULL, 
    FOREIGN KEY (especialidade_id) REFERENCES especialidade(id)
);

select * from docente_especialidade;






