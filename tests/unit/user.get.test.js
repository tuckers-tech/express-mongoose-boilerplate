const dbHandler = require('../helpers/db/db-handler');
const userController = require('../../src/controllers/user.controller');
const { seedDBWithTestUsers } = require('../helpers/seedDB');

let addedUserDetails;

beforeAll(async () => {
  await dbHandler.connect();
});

beforeEach(async () => {
  addedUserDetails = await seedDBWithTestUsers();
});

afterEach(async () => {
  await dbHandler.clearDatabase();
});

afterAll(async () => {
  await dbHandler.closeDatabase();
});

describe('UNIT::getAllUsers', () => {
  test('Should Return All Users', async () => {
    const allReturnedUsers = await userController.getAllUsers();

    expect(allReturnedUsers.length).toBe(addedUserDetails.length);
  });

  test('Should Return Details Of All Users', async () => {
    const allReturnedUsers = await userController.getAllUsers();
    const expectedNames = addedUserDetails.map((user) => user.name);

    const returnedNames = allReturnedUsers.map((user) => user.name);

    expect(returnedNames).toEqual(expectedNames);
  });
});
