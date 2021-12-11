const db = require('../../data/dbConfig')
const Hobbit = require('./hobbits-model')
// const { hobbits } = require('../../data/seeds/001-hobbits')


beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})


beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})


test('is testing environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('Hobbit.get()', () => {
  it('should return all hobbits, and have a length of 4', async () => {
    // use the get method to get all hobbits
    // assert that the length of the structure is 4
    const hobbits = await Hobbit.getAll()
    expect(hobbits).toHaveLength(4)
  })
  it('Hobbits returned should be an array', async () => {
    const hobbits = await Hobbit.getAll()
    console.log(hobbits)
    expect(hobbits).toMatchObject([
      {
        "id": 1,
        "name": "sam",
      },
      {
        "id": 2,
        "name": "frodo",
      },
      {
        "id": 3,
        "name": "pippin",
      },
      {
        "id": 4,
        "name": "merry",
      },
    ])
  })
})
















// beforeAll(async () => {
//   await db.migrate.rollback()
//   await db.migrate.latest()
// })

// beforeEach(async () => {
//   await db.seed.run()
// })

// afterAll(async () => {
//   await db.destroy()
// })

// describe('Hobbit model', /* NO ASYNC HERE!!! */() => {
//   describe('getAll()', () => {
//     let data
//     beforeEach(async () => {
//       data = await Hobbit.getAll()
//     })
//     test('resolves all hobbits in the db', async () => {
//       expect(data.length).toBe(4)
//       expect(data).toHaveLength(4)
//     })
//     test('resolves the correct shapes', async () => {
//       expect(data).toMatchObject(hobbits)
//       expect(data).toEqual([
//         {
//           "id": 1,
//           "name": "sam"
//         },
//         {
//           "id": 2,
//           "name": "frodo"
//         },
//         {
//           "id": 3,
//           "name": "pippin"
//         },
//         {
//           "id": 4,
//           "name": "merry"
//         }
//       ])
//     })
//   })
//   describe('getById()', () => {
//     test('returns the correct hobbit', async () => {
//       // hit the function, get hobbit with id = 1
//       // assert that the data is { id: 1, name: 'sam' }
//       const data = await Hobbit.getById('1')
//       expect(data).toMatchObject({ id: 1, name: 'sam' })
//     })
//   })
//   describe('insert()', () => {

//   })
// })
