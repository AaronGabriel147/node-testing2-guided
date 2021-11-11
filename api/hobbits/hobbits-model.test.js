const Hobbit = require('./hobbits-model')
const db = require('../../data/dbConfig')

test('is testing environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

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

describe('Hobbit model', /* NO ASYNC HERE!!! */() => {
  describe('getAll()', () => {
    let data
    beforeEach(async () => {
      data = await Hobbit.getAll()
    })
    test('resolves all hobbits in the db', async () => {
      expect(data.length).toBe(4)
      expect(data).toHaveLength(4)
    })
    test('resolves the correct shapes', async () => {
      expect([
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
    })
  })
  describe('getById()', () => {

  })
  describe('insert()', () => {

  })
})
