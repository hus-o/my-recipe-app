exports.up = function(knex) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('id').primary()
        table.string('name', 256).notNullable()
        table.string('ingredients').notNullable()
        table.string("recipe").notNullable()
        table.integer("time_taken_minutes").notNullable()
      })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes")
};
