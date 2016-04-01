(function(){
	var app = angular.module('madLibsGenerator', ['display-directives']);

	app.controller('DisplayController', ['Generator', function(Generator){
			var vm = this;
			vm.userWords = {
				nouns: null,
				adjectives: null,
				verbs: null,
				adverbs: null
			};
	
			vm.currentWords = {
				nouns:[],
				adjectives:[],
				verbs:[],
				adverbs:[]
			};
			vm.generate = function(){
				vm.nouns = nouns;
				vm.noun = getNoun();
				vm.adjectives = adjectives;
				vm.adjective = vm.getAdjective();
				vm.verbs = verbs;
				vm.verb = vm.getVerb();
				vm.adverbs = adverbs;
				vm.adverb = vm.getAdverb();
			};
			vm.fillStory = function(story){
				
			};
			vm.traceStory
			vm.getAdjective = function(){
				return vm.adjectives[Math.floor(Math.random() * (vm.adjectives.length - 0)) + 0];
			};
			vm.getVerb = function(){
				return vm.verbs[Math.floor(Math.random() * (vm.verbs.length - 0)) + 0];
			};
			vm.getAdverb = function(){
				return vm.adverbs[Math.floor(Math.random() * (vm.adverbs.length - 0)) + 0];
			};
			function getNoun(){
				return vm.nouns[Math.floor(Math.random() * (vm.nouns.length - 0)) + 0];
			}
	
			vm.generate();
		}]);

	app.controller('FormController', function(){
		var vm = this;
		vm.addNouns = function(nouns){

		}
	});
})();