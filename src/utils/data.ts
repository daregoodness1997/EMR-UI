import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const clientsList = [...Array(100)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avartarUrl: faker.image.avatar(),
  firstname: faker.name.firstName(),
  middlename: faker.name.middleName(),
  lastname: faker.name.lastName(),
  dob: `${faker.date.birthdate({ min: 18, max: 65, mode: 'age' })}`,
  gender: sample(['Male', 'Female']),
  maritalstatus: sample(['Single', 'Married', 'Divorced']),
  residentialaddress: faker.address.streetName(),
  email: faker.internet.exampleEmail(),
  phone: faker.phone.phoneNumber(),
  town: faker.address.city(),
  state: faker.address.state(),
  country: faker.address.country(),
  nextofkin: faker.name.findName(),
  nextofkinphone: faker.phone.phoneNumber(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'inactive']),
}));

export { clientsList };
