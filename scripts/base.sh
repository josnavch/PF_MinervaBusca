#!/bin/bash

rm -rf /workspace/PF_MinervaBusca/migrations
sleep 3
psql -d minerva -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'minerva'"
dropdb --if-exists minerva
psql -c "CREATE DATABASE minerva"
pipenv run init
pipenv run migrate
pipenv run upgrade

