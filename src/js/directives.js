(function(){
    app = angular.module('display-directives', []);

  app.directive("displayStorytabs", function() {
        return {
          restrict: "E",
          templateUrl: "views/display-storytabs.html",
          controller: function() {
            this.tab = 1;

            this.isSet = function(checkTab) {
              return this.tab === checkTab;
            };

            this.setTab = function(activeTab) {
              this.tab = activeTab;
            };
          },
          controllerAs: "tab"
        };
      });
})();
