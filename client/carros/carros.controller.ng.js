'use strict';

angular.module('autoFormApp')
	.controller('CarrosCtrl', function ($scope, formlyConfig) {
		var vm = this;
		vm.hello = 'Hello World!!';


		vm.carro = {};

		vm.carroFields = [{
			key: 'nome',
			type: 'input',
			templateOptions: {
				label: "Nome",
				placeholder: "Digite o nome do carro",
				required: true,
				description: 'Diga o nome para o carro'
			}
		}, {
			key: 'marca',
			type: 'input',
			templateOptions: {
				label: "Marca",
				placeholder: "Digite a marca do carro",
				required: true,
				description: 'Diga a marca para o carro'
			}
		}, {
			key: 'cor',
			type: 'input',
			templateOptions: {
				label: "Cor",
				placeholder: "Digite a cor do carro",
				required: true,
				description: 'Diga a cor para o carro'
			}
		}];

		$scope.handleSubmit = function(){
			alert(JSON.stringify(vm.carro));
		}

	});
