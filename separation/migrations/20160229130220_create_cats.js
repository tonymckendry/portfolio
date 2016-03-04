
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cats', function(table){
    table.increments();
    table.string('name');
    table.string('profile');
    table.integer('age');
    table.boolean('active');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cats');
};
