# So Piada Boa

This repository aims to bring informations and guide how to execute the project.

#Requirements:

- Docker
- SGDB mySQL ex: Workbench..

Run file so_piada_boa.sql to create database schema, tables, migrations..

Within the project root (API), commands to run:

`docker-compose up`

-- This command will create necessary docker images and everything else.

API documentation: http://localhost:3001/v1/api-docs (Swagger)

contact: felipe.lazzid@gmail.com

---

- Local envirement - 
`.env`:
PORT=3001

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=root
DB_DIALECT=mysql
DB_NAME=so_piada_boa

---
