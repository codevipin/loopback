

app
   .service('loginServe',function($resource) {
        var Service = {}; 
        var baseURL2 = "http://http://ec2-54-152-124-188.compute-1.amazonaws.com/:80/";

        Service.login = function(){

    	return $resource(baseURL2+"regtests/login",null,{'update':{method:'POST'}});
       
        };
    

        Service.logout = function(token) {

        var logind = Service.login();  
        console.log(logind);  

    	return $resource(baseURL2+"regtests/logout?access_token="+token,null,{'update':{method:'POST'}});
        };

        Service.regDriver = function() {
            return $resource(baseURL2+"regobjects",null,{'update':{method:'POST'}});
        };
        return Service;
    });


