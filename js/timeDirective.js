angular.module('timeApp')
     .directive('time', function(){
      return {
        retrict: 'E',
        template: '<div>Good morning {{name}}!</div><p>The current time is {{time}}',
        link: function(scope, element, attrs){
          var currentTime = new Date ();
          scope.time = currentTime.toString();

    }
   }
   });
