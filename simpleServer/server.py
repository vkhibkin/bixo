

from flask_cors import CORS
import pyodbc

from flask import Flask, render_template






app = Flask(__name__)
CORS(app)

@app.route('/')
def la():
	return "laaaaaaa"

@app.route('/moo')
def moo():
	data = ""
	file = open("data/data.json", 'r')
	for line in file:
		data = data + line

	return data


@app.route('/db_test')
def db_test():

	returnValue = ""

	server = 'localhost'
	database = 'bixo'
	username = 'sa'
	password = 'vm_sa'
	cnxn = pyodbc.connect(
		'DRIVER={SQL Server};SERVER=' + server + ';DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
	cursor = cnxn.cursor()

	cursor.execute("select * from table_test")
	row = cursor.fetchone()
	if row:
		returnValue = returnValue + row[0]

	return returnValue

