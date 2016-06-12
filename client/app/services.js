

app

      .constant("baseURL1","http://localhost:80/")
      .constant("baseURL2","http://0.0.0.0:3000/api/")

        .service('regService', ['$resource','baseURL1',function($resource,baseURL1) {
                    
                    return $resource(baseURL1+"registers/:id",null,{'update':{method:'POST'}});
                        
        }])

        .service('loginServe', ['$resource','baseURL2',function($resource,baseURL2) {
        	return $resource(baseURL2+"regtests/login",null,{'update':{method:'POST'}});
        }]);


