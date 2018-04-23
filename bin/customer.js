let table_name = 'Customer'

const get = () => {

     var customer    = [
        {        
        "name": "Andy Van Den Heuvel",
        "username": "andy",
        "password": "$2a$10$1lmPRI0Xjd5fU8HGdPmDoOkZpIPJj2axcdJYIfc/3RUnBDDqQe31K",
        "email": "andy@optis.be" 
         },  
         {        
        "name": "Kenneth Van den Berghe",
        "username": "kenneth",
        "password": "$2a$10$H5wtnFvhxf8CPn66gEbPu.tki2WRpkplqvUV3yhQ049ugY8rHFSJi",
        "email": "kenneth@optis.be" 
         },  
         {        
        "name": "Claudiu Matei",
        "username": "claudiu",
        "password": "$2a$10$6b9jxIwb6y84gpq.ZU57YegRM4BWxHoXc.K/WwlEOJTa/9fO7cCta",
        "email": "claudiu@optis.be" 
        },      
    ];
     return customer;
};

function assignAdmin(options, admin_id){
    let server
    let database
    let raven
  
    ( {server, database, raven} = options );
      
    let Role        = server.models.Role;
    let RoleMapping = server.models.RoleMapping;  
  
      database.automigrate('Role', function(err){
          if (err) return cb(err);
  
          Role.create({ name:'admin' })
          .then(function(role){
  
              role.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: admin_id
                }, function(err, principal){
                  console.log('Principal', principal);
                });
  
          }).catch(function(err){
        raven.captureException("admin was not assigned");
        throw err;
      });
      });
    debug('admin was created');
  };  


module.exports.get = get;
module.exports.table_name = table_name;
module.exports.assignAdmin = assignAdmin;