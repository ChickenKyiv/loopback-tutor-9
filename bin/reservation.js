let table_name = 'reservation'

const get = (campgrounds, customers) => {

     var reservation    = [
        {        
        "startDate": "2017-03-21",
        "endDate": "2017-03-23",        
        "campgroundId": campgrounds[0].id.toString(),
        "customerId": customers[1].id.toString() 
         },       
         {        
        "startDate": "2017-03-25",
        "endDate": "2017-03-31",
        "campgroundId": campgrounds[1].id.toString(),
        "customerId": customers[2].id.toString(),         
        }, 
    ];
     return reservation;

};
module.exports.get = get;
module.exports.table_name = table_name;