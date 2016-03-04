
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cats').del(),

    // Inserts seed entries
    knex('cats').insert({name: 'MobBoss' , profile: "who's askin' ?", age: 5, active: true}),
    knex('cats').insert({name: 'Fracking', profile: "scruffy and shifty", age: 2, active: false}),
    knex('cats').insert({name: 'Listerine', profile: "minty", age: 4, active: true}),
    knex('cats').insert({name: 'Frisky', profile: "evil and cuddly", age: 1, active: true})
  );
};
