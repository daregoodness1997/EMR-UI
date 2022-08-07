import { InputType } from '../pages/app/schema/utils';

const ClientMiniSchema = [
  {
    name: 'First Name',
    key: 'firstname',
    description: 'First Name',
    selector: (row: any) => row.firstname,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Midlle Name',
    key: 'middlename',
    description: 'Midlle Name',
    selector: (row: any) => row.middlename,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Last Name',
    key: 'lastname',
    description: 'Last Name',
    selector: (row: any) => row.lastname,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Date of Birth',
    key: 'dob',
    description: 'Date of Birth',
    selector: (row: any) => row.dob,
    sortable: true,
    required: true,
    inputType: InputType.DATE,
  },

  {
    name: 'Gender',
    key: 'gender',
    description: 'Gender',
    selector: (row: any) => row.gender,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_LIST,
    options: ['Male', 'Female'],
  },

  {
    name: 'Marital Status',
    key: 'maritalstatus',
    description: 'Marital Status',
    selector: (row: any) => row.maritalstatus,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_LIST,
    options: ['Single', 'Married'],
  },

  {
    name: 'Email',
    key: 'email',
    description: 'Email',
    selector: (row: any) => row.email,
    sortable: true,
    required: true,
    inputType: InputType.EMAIL,
  },

  {
    name: 'Phone Number',
    key: 'phone',
    description: 'Phone Number',
    selector: (row: any) => row.phone,
    sortable: true,
    required: true,
    inputType: InputType.PHONE,
  },

  {
    name: 'Residential Address',
    key: 'residentialaddress',
    description: 'Residential Address',
    selector: (row: any) => row.residentialaddress,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Town',
    key: 'town',
    description: 'Town',
    selector: (row: any) => row.town,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'State',
    key: 'state',
    description: 'Status',
    selector: (row: any) => row.state,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Country',
    key: 'country',
    description: 'Country',
    selector: (row: any) => row.country,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Next of Kin',
    key: 'nextofkin',
    description: 'Next of Kin',
    selector: (row: any) => row.nextofkin,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },

  {
    name: 'Next of kin Phone',
    key: 'nextofkinphone',
    description: 'Next of Kin Phone',
    selector: (row: any) => row.nextofkinphone,
    sortable: true,
    required: true,
    inputType: InputType.TEXT,
  },
];
export { ClientMiniSchema };
