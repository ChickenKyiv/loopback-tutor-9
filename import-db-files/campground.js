let table_name = 'Campground'

const get = () => {

     var campground    = [
        {
        "id": 1,
        "name":"Salt Lake City KOA",
        "location": {lat: 40.772112, lng: -111.932165}

         },    
        {
        "id": 2,
        "name":"Gouldings Campground",
        "location": {lat: 37.006989, lng: -110.214907}
         },        
         {
            "id": 3,
            "name":"Grand Canyon Mather Campground",
            "location": {lat: 36.056472, lng: -112.140728}
         },        
         {
            "id": 4,
            "name":"Camping Paris Bois de Boulogne",
            "location": {lat: 48.868879, lng: 2.234914}
        },         
    ];
     return campground;

};
module.exports.get   = get;
module.exports.table_name   = table_name;