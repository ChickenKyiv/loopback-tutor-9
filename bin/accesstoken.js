let table_name = 'AccessToken'

const get = () => {

     var accessToken    = [
        {        
        "ttl": 1209600,
        "created": "2018-04-16T12:58:42.482Z",
        "userId": 2
         },     
         {        
        "ttl": 1209600,
        "created": "2018-04-16T13:09:58.273Z",
        "userId": 2
        },  
    ];
     return accessToken;

};
module.exports.get = get;
module.exports.table_name = table_name;