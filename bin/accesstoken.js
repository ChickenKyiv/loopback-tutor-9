let table_name = 'AccessToken'

const get = () => {

     var accessToken    = [
        {
        "id": "kozSRcR7UMzmCFsBpJC43K4YkUXz7cpQD30BXdnZEn4DAEA6Em6ARgoO6qX7sPWb",
        "ttl": 1209600,
        "created": "2018-04-16T12:58:42.482Z",
        "userId": 2
         },     
         {
        "id": "VMPQJMUXH9lelCY16TBefK2L0oXD3ODmjSeHDNb5xDZKJXnuEh97vU1I2Bkb8b62",
        "ttl": 1209600,
        "created": "2018-04-16T13:09:58.273Z",
        "userId": 2
        },  
    ];
     return accessToken;

};
module.exports.get = get;
module.exports.table_name = table_name;