#!/bin/bash

echo "Se borra la carpeta migrations"
rm -rf /workspace/PF_MinervaBusca/migrations
echo "Se borra la Base de Datos minerva"
psql -d minerva -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'minerva'"
dropdb --if-exists minerva
echo "Se crea nuevamente la Base de Datos minerva"
psql -c "CREATE DATABASE minerva"
echo "Se crean las tablas"
pipenv run init
pipenv run migrate
pipenv run upgrade

echo "Se realizaron los cambios de manera satisfactoria"
