#!/bin/bash

pass='pbkdf2:sha256:150000$CfcFR8q8$e066d59b302092afc936a5a2e2836aefc8a255a48a699b6900c769a451bb5268'

echo "Se borra la carpeta migrations"
rm -rf /workspace/PF_MinervaBusca/migrations
echo "Se borra la Base de Datos minerva"
psql -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'minerva';"
psql -c "DROP DATABASE  minerva;"

echo "Se crea nuevamente la Base de Datos minerva"
psql -c "CREATE DATABASE minerva;"
echo "Se crean las tablas"
pipenv run init
pipenv run migrate
pipenv run upgrade

echo "*********** Insert data fake to init **************"
psql -d minerva -c "INSERT into public.user(email, password, name, id_number, phone, is_active) values('angie', '$pass', 'Angie Lopez', '111111', '11111', True);"
psql -d minerva -c "INSERT into public.user(email, password, name, id_number, phone, is_active) values('melissa', '$pass', 'Melissa Araya', '222222', '22222', True);"
psql -d minerva -c "INSERT into public.user(email, password, name, id_number, phone, is_active) values('yancarlosrq@gmail.com','$pass', 'Yancarlos Retana', '333333', '333333', True);"
psql -d minerva -c "INSERT into public.user(email, password, name, id_number, phone, is_active) values('jose', '$pass', 'Jose Navarrete', '444444', '444444', True);"


echo "Se realizaron los cambios de manera satisfactoria"

pipenv run start