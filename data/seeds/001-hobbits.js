const hobbits = [
  {
    "id": 1,
    "name": "sam"
  },
  {
    "id": 2,
    "name": "frodo"
  },
  {
    "id": 3,
    "name": "pippin"
  },
  {
    "id": 4,
    "name": "merry"
  }
])

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('hobbits')
    .truncate()
    .then(function() {
      return knex('hobbits').insert([
        { name: 'sam' },
        { name: 'frodo' },
        { name: 'pippin' },
        { name: 'merry' },
      ]);
    });
};
