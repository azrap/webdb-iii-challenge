
exports.up = function(knex, Promise) {

    return knex.schema.createTable('students', tbl => {
        //each table needs primary key, the .increment() below throws one on
        //calls it 
        
        tbl.increments();
        
        tbl.string('name').notNullable().unique();
        
        tbl.timestamps(true, true);  // created_at & updated at
        
        tbl
        .integer('cohort_id')
        .unsigned()
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    });
  
};

//undo changes to the schema
exports.down = function(knex, Promise){ 
    return knex.schema.dropTableIfExists('students');
  
};