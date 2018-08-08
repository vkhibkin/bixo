import json

from flask import Flask, render_template


app = Flask(__name__)

@app.route('/')
@app.route('/moo')
def moo():
	return "moooooooooooooo"

