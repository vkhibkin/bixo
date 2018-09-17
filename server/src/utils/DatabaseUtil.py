import pyodbc

def getConnection():
	server = 'localhost'
	database = 'bixo'
	username = 'sa'
	password = 'vm_sa'
	cnxn = pyodbc.connect(
		'DRIVER={SQL Server};SERVER=' + server + ';DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
	return cnxn.cursor()


def read(sqlQuery):


	connection = getConnection()
	connection.execute(sqlQuery)


	# return resulting rows need a try catch

def write(sqlQuery)
	connection = getConnection()
	connection.execute(sqlQuery)

	# return success or failire need a try catch

