'use strict';

angular.module('autoFormApp')
	.run(setupFormly);

function setupFormly(formlyConfig) {
	formlyConfig.setType({
		name: 'input',
		template: '<div class="form-group">\
    <label for="{{options.key}}_id">{{options.templateOptions.label}}</label>\
    <input type="text" ng-model="model[options.key]" class="form-control" id="{{options.key}}_id" placeholder="{{options.templateOptions.placeholder}}">\
  	</div>'
	});
}
