let table_name = 'reservation'

const get = () => {

     var reservation    = [
        {        
        "startDate": "2017-03-21",
             "endDate": "2017-03-23",
        //Here campground and customer is referenced in reservation
        //Is this enough to bind it in our import script?
        "campgroundId": 1,
        "customerId": 2 
         },       
         {        
        "startDate": "2017-03-25",
        "endDate": "2017-03-31",
        "campgroundId": 2,
        "customerId": 3 
        }, 
    ];
     return reservation;

};
module.exports.get = get;
module.exports.table_name = table_name;