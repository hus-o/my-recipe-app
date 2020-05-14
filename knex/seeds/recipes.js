
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'BBQ Wings',
          ingredients:"bbq sauce, chicken wings, oil, lemon",
          recipe:"Wash wings. Oil pan. Bring to gas mark 9. Cook chicken. Pour lemon and bbq sauce in a bowl. Place chicken in bowl of sauce. Take out and cook again. Serve",
          time_taken_minutes: 60
        }
      ]);
    });
};

