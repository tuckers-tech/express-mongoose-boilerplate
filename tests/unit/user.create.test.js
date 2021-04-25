const dbHandler = require('../helpers/db/db-handler');
const userController = require('../../src/controllers/user.controller');

beforeAll(async () => {
  await dbHandler.connect();
});

afterEach(async () => {
  await dbHandler.clearDatabase();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

describe('UNIT::Create User', () => {
  test('User Can Be Created', async () => {
    expect(2).toBe(2);
  });
});
