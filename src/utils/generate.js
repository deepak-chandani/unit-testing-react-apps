import faker from 'faker';

export const buildLoginData = (overrides = {}) => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    ...overrides
  }
};
