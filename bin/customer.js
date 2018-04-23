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
module.exports.get = get;
module.exports.table_name = table_name;