(function() {
    angular
    .module('birthdayApp.service.birthdayService')
    .factory('birthdayService', BirthdayService);

    BirthdayService.$inject = ['$q'];

    function BirthdayService($q) {

       var birthDetails= [ 
            {"month" : 'Jan' , "count" : 0, "index":0 },
            {"month" : 'Feb' , "count" : 0, "index":1 },
            {"month" : 'Mar' , "count" : 0, "index":2 },
            {"month" : 'Apr' , "count" : 0, "index":3 },
            {"month" : 'May' , "count" : 0, "index":4 },
            {"month" : 'Jun' , "count" : 0, "index":5 },
            {"month" : 'Jul' , "count" : 0, "index":6 },
            {"month" : 'Aug' , "count" : 0, "index":7 },
            {"month" : 'Sep' , "count" : 0, "index":8 },
            {"month" : 'Oct' , "count" : 0, "index":9 },
            {"month" : 'Nov' , "count" : 0, "index":10 },
            {"month" : 'Dec' , "count" : 0, "index":11 }
       ];
       var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        
        this.storeData = storeData;
        this.getData = getData;
     
        // Implementation Details
      
        function storeData(data) {
              var monthName = mS[data];

             var found = false;
            var i = 0;
            for (i in birthDetails) {
                if (birthDetails[i].month === monthName) {
                  birthDetails[i].count =  birthDetails[i].count  + 1;
                  found = true;  
                  break;
                }
            }
            if (!found)
                birthDetails.push({ month: monthName, count: 1 });
            
        };

         function getData() {
            var deferred = $q.defer();
            deferred.resolve(birthDetails);
            return deferred.promise;
        };
     return this;
    }
})();