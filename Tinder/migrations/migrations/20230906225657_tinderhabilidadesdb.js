/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('talents', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('password').notNullable();
    table.boolean('activo').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
    .createTable('clients', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('password').notNullable();
      table.string('address').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('service', function (table) {
      table.increments('id').primary();
      table.integer('duracionHoras').notNullable();
      table.decimal('anticipo').notNullable();
      table.decimal('pagoTotal');
      table.timestamp('diaHora').notNullable();
      table.string('lugarTrabajo').notNullable();
      table.boolean('terminadoCliente').notNullable();
      table.boolean('terminadoTalento').notNullable();
      table.integer('talento_id').references('talents', 'id');
      table.integer('cliente_id').references('clients', 'id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('ability', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('talento_id').references('talents', 'id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('rating', function (table) {
      table.increments('id').primary();
      table.string('calificacion');
      table.string('observacion');
      table.integer('servicio_id').references('service', 'id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('talents')
    .dropTable('clients')
    .dropTable('service')
    .dropTable('ability')
    .dropTable('rating');
};
