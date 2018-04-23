let table_name = 'RoleMapping'

const get = () => {

     var roleMapping    = [
        {        
        "principalType": "USER",
        "principalId": "1",
        "roleId": 1,        
         },           
    ];
     return roleMapping;

};
module.exports.get = get;
module.exports.table_name = table_name;

