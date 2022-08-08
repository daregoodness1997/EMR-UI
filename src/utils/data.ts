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

const appointmentList = [...Array(100)].map((_, index) => ({
  id: faker.datatype.uuid(),
  clientId: faker.datatype.uuid(),
  location: faker.address.country(),
  employee: faker.name.findName(),
  start_time: `${faker.date.birthdate({ min: 18, max: 65, mode: 'age' })}`,
  appointmentClass: sample(['On-site', 'Telemedicine', 'Home Visit']),
  appointmentType: sample(['New', 'Type B', 'Follow up', 'Annual Checkup']),
  appointmentStatus: sample([
    'Scheduled',
    'Confirmed',
    'Checked In',
    'Vitals Taken',
    'With Nurse',
    'With Doctor',
  ]),
  appointmentReason: faker.lorem.text(),
}));
export { clientsList };
