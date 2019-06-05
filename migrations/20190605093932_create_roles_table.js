
//implement changes to the schema

exports.up = function(knex, Promise) {

    return knex.schema.createTable('cohorts', tbl => {
        //each table needs primary key, the .increment() below throws one on
        //calls it 
        tbl.increments();
        tbl.string('name').notNullable().unique();
        tbl.timestamps(true, true) // created_at & updated at


    });
  
};

//undo changes to the schema
exports.down = function(knex, Promise){ 
    return knex.schema.dropTableIfExists('cohorts');
  
};
