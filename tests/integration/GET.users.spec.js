const request = require('supertest');

const dbHandler = require('../helpers/db/db-handler');
const { seedDBWithTestUsers } = require('../helpers/seedDB');
const { initializeService } = require('../../src/service');

let addedUserDetails, connectionURI;

beforeAll(async () => {
  connectionURI = await dbHandler.getConnectionURI();
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

describe('INTEGRATION::Get Users', () => {
  test('responds with json', async (done) => {
    const app = await initializeService(connectionURI);

    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
