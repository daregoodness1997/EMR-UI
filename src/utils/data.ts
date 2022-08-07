import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const clientsList = [...Array(100)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avartarUrl: faker.image.avatar(),
  firstname: faker.name.firstName(),
  middlename: faker.name.middleName(),
  lastname: faker.name.lastName(),
  // dob: faker.date.birthdate() ,
  gender: sample(['Male', 'Female']),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'inactive']),
}));

export { clientsList };
