const _       = require('underscore');
const async = require('async');
const raven = require('raven');

const da_id = (array) => {
  if ( !array ){
    raven.captureException('Cannot attach an empty array of ids');
  }

  return _.map( _.pluck(array, 'id'), item => item.toString() );

};

const create_with_relations = ( options, datazzzz, wrapper, cb ) => {

  if ( !options ){ raven.captureException('Options was not specified');  }
  if ( !cb )     { raven.captureException('Callback was not specified'); }
  if ( !wrapper && !wrapper.table_name ) { raven.captureException('Model was not specified'); }

  let server, database, raven, predata
  ( {server, database, raven, predata} = options );

  let Model      = server.models[wrapper.table_name];
  let table_name = wrapper.table_name;
  let data       = datazzzz ;

  database.autoupdate(table_name, function(err){
    if (err) {
      raven.captureException(err);
      return cb(err);
    }

    Model.create(data, cb);
    
  }); 
};

const create = (options, wrapper, cb ) => {

  if ( !options ){ raven.captureException('Options was not specified');  }
  if ( !cb )     { raven.captureException('Callback was not specified'); }

  if ( !wrapper && !wrapper.table_name ) { raven.captureException('Model was not specified'); }

   // console.log(options.raven)

  let server, database 
  ( {server, database} = options );


  let Model      = server.models[wrapper.table_name];
  let table_name = wrapper.table_name;


  let data       =  wrapper.get()



  database.autoupdate(table_name, function(err){
    if (err) {
      raven.captureException(err);
      return cb(err);
    }

      Model.create(data, cb);  
   
  });


};


const attach = ( array_ids, collection, attribute ) => {

     var arrayWithIds = get_id_array( array_ids );

     _.map( collection, item => item.updateAttribute(attribute, arrayWithIds) )

};


const get_imported_data_for_relate_function = async ( options, table_name ) => {


  let server, database, raven
  ( {server, database, raven} = options );


  // let recipes
  let collection //?? @TODO pick a better name later
  try {

    let Model  = server.models[table_name];
    collection = await Model.find({});


  } catch (e) {
    raven.captureException(e);
    next(e)
  }
  // end of what i don't like

  return collection;
}


const find_all_data_copy_of_function_above = async (options, cb) => {


  let server, database, raven
  ( {server, database, raven} = options );

  let collections
  try {

    let modelInstance = server.models[table_name];
    collections       = await modelInstance.find({});

  } catch (e) {
    raven.captureException(e);
   
    next(e)
  }

  cb(err, collections);


};

const is_imported = (results, tables) => {

  _.map(tables, (item) => { 
    if( !results.item ) 
      raven.captureException("not imported well");  
  });

}

module.exports = {
  da_id    : da_id,
  create   : create,  
  attach   : attach,
  get_data : get_imported_data_for_relate_function,
  create_with_relations: create_with_relations,
  is_imported: is_imported

};