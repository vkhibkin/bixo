import Promise from "bluebird";


var model = function() {
	var makeRequest = function(obj) {
		$.ajax({
			url: "http://localhost:5000/" + obj.parameters.url
		}).done(function(responce) {

			obj.resolve(responce)
		}).fail(function() {

			obj.reject(new Error("Error message"));
		});
	}

	return {

		getData: function(param) {
			var parameters = {
				"url": "data/" + param.dataKey
			}
			return new Promise(function(resolve, reject) {
				makeRequest({
					"parameters": parameters,
					"resolve": resolve,
					"reject": reject
				});
			}).caught(function(error) {
				console.log(error);
				throw new Error();
			});
		}
	}
}();