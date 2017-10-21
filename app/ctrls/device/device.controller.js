(function() {
	var app = angular.module('tapp', []);

	app.controller('DeviceController', function() {
		this.device = device;
	});

	var device = {
		name: "Pinnapple Washing Machine",
		desc: "blah blah blah"
	};
})();

/*var deviceCtrl = angular.module('tapp', []);

function deviceController($scope, $http) {
	$scope.formData = {};

	$http.get('/api/v1/devices')
		.success(function(data) {
			$scope.devices = data;
			console.log('device data received');
		})
		.error(function(error) {
			console.log('Error: ' + error);
		});

	$scope.createDevice = function() {
		$http.post('/api/v1/devices', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.devices = data;
				console.log('device created'); // turn into toast?
			})
			.error(function(error) {
				console.log('Error:' + error);
			});
	};

	$scope.deleteDevice = function(id) {
		$http.delete('/api/v1/devices'+ id)
			.success(function(data) {
				$scope.devices = data;
				console.log('device deleted'); // turn into toast?
			})
			.error(function(error) {
				console.log('Error: '+ error);
			});
	};
}*/