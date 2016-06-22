

app

      // .constant("baseURL1","http://localhost:80/")
      // .constant("baseURL2","http://0.0.0.0:3000/api/");

        // .service('regService', ['$resource','baseURL1',function($resource,baseURL1) {
                    
        //             return $resource(baseURL1+"registers/:id",null,{'update':{method:'POST'}});
                        
        // }])
           
        .service('loginServe',function($resource) {
            var Service = {}; 
            var baseURL2 = "http://0.0.0.0:3000/api/";

            Service.login = function(){

        	return $resource(baseURL2+"regtests/login",null,{'update':{method:'POST'}});
           
            };
        

            Service.logout = function(){

        	return $resource(baseURL2+"regtests/logout",null,{'update':{method:'POST'}});
            };
            return Service;
        });


