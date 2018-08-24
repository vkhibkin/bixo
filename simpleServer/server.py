
import json

from flask_cors import CORS

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


