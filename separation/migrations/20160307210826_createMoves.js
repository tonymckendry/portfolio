exports.up = function(knex, Promise) {
  return knex.schema.createTable('moves', function(table){
    table.increments();
    table.string('identifier');
    table.integer('generation_id');
    table.integer('type_id');
    table.integer('power');
    table.integer('pp');
    table.integer('accuracy');
    table.integer('priority');
    table.integer('target_id');
    table.integer('damage_class_id');
    table.integer('effect_id');
    table.integer('effect_chance');
    table.integer('contest_type_id');
    table.integer('contest_effect_id');
    table.integer('super_contest_effect_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('moves');
};
