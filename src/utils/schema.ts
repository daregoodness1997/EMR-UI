import { InputType } from '../pages/app/schema/utils';

const ClientMiniSchema = [
  {
    name: 'S/N',
    key: 's/n',
    description: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    required: true,
    inputType: null,
  },
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

const ClientFullSchema = {
  names: [
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
  ],

  biodata: [
    {
      name: 'Date of Birth',
      key: 'dob',
      description: 'Date of Birth',
      selector: (row: any) => row.dob,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Gender',
      key: 'gender',
      description: 'Male',
      selector: (row: any) => row.gender,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Marital Status',
      key: 'maritalstatus',
      description: 'Single',
      selector: (row: any) => row.maritalstatus,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Married', 'Single'],
    },

    {
      name: 'Religion',
      key: 'religion',
      description: 'Single',
      selector: (row: any) => row.religion,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Christianity', 'Islam', 'Rather not say'],
    },

    {
      name: 'Medical Records',
      key: 'medicalRecords',
      description: 'Single',
      selector: (row: any) => row.medicalRecords,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Record 1', 'Record 2', 'Record 3'],
    },

    {
      name: 'Profession',
      key: 'profession',
      description: 'Single',
      selector: (row: any) => row.profession,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Profession 1', 'Profession  2', 'Profession 3'],
    },

    {
      name: 'Phone Number',
      key: 'phone',
      description: '0806478263',
      selector: (row: any) => row.phone,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },
    {
      name: 'Email',
      key: 'email',
      description: 'johndoe@mail.com',
      selector: (row: any) => row.email,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },
  ],

  address: [
    {
      name: 'Country',
      key: 'country',
      description: 'Nigeria',
      selector: (row: any) => row.country,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Nigeria', 'France', 'England', 'Cameron'],
    },

    {
      name: 'State',
      key: 'state',
      description: 'Lagos',
      selector: (row: any) => row.state,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Lagos', 'Oyo', 'Ogun', 'Paris'],
    },

    {
      name: 'Local Government',
      key: 'localgovernment',
      description: 'Kosofe',
      selector: (row: any) => row.localgovernment,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: [
        'Ibadan S/W',
        'Lagos Central',
        'Abuja Central',
        'Kaduna Central',
      ],
    },

    {
      name: 'Town/City',
      key: 'town',
      description: 'Ikate Elegushi',
      selector: (row: any) => row.town,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Ikeja', 'Epe', 'Ofa', 'Ibadan'],
    },

    {
      name: 'Neighbourhood',
      key: 'neighbourhood',
      description: 'Apete Arola',
      selector: (row: any) => row.neighbourhood,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Residential Address',
      key: 'residentialaddress',
      description: 'Ozumba Mbadiwe',
      selector: (row: any) => row.residentialaddress,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },
  ],
  otherDetails: [
    {
      name: 'Medical Data',
      key: 'medicaldata',
      description: 'Enter your Medical Data line 1 here',
      selector: (row: any) => row.medicaldata,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Tags',
      key: 'tags',
      description: 'Enter your Tag',
      selector: (row: any) => row.tags,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Other Bio-data',
      key: 'otherbiodata',
      description: 'Enter your Medical Data line 1 here',
      selector: (row: any) => row.otherbiodata,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Next of Kin',
      key: 'nextofkin',
      description: 'Cheif OBA Elegushi',
      selector: (row: any) => row.nextofkin,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
      options: ['Wale Romi', 'Blond Games', 'Williams Tosin', 'Wale Romi'],
    },

    {
      name: 'Non Hospital Indetifiers',
      key: 'nonhospitalindetifiers',
      description: 'Cheif OBA Elegushi',
      selector: (row: any) => row.nonhospitalindetifiers,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['CD120', 'CD122', 'CD120', 'CD130'],
    },

    {
      name: 'Payment Information',
      key: 'paymentinformation',
      description: 'Cheif OBA Elegushi',
      selector: (row: any) => row.paymentinformation,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Paid', 'Out of cash'],
    },

    {
      name: 'Assignt to Care Team',
      key: 'assignttocareteam',
      description: 'Cheif OBA Elegushi',
      selector: (row: any) => row.assignttocareteam,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Yes', 'No'],
    },
  ],

  nextOfKin: [
    {
      name: 'Next of Kin',
      key: 'nextofkin',
      description: 'Enter next of kin full name here',
      selector: (row: any) => row.nextofkin,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Next of kin Phone',
      key: 'nextofkinphone',
      description: 'Next of kin Phone',
      selector: (row: any) => row.nextofkinphone,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Next of kin Email',
      key: 'nextofkinemail',
      description: 'Enter next of kin email here',
      selector: (row: any) => row.nextofkinemail,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Relationship',
      key: 'relationship',
      description: '0806478263',
      selector: (row: any) => row.relationship,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['Parent(s)', 'Sibling(s)', 'Spouse', 'Friend(s)'],
    },
  ],

  nonHospitalIndetifiers: [
    {
      name: 'National ID Number',
      key: 'nin',
      description: 'Enter your National ID Number here',
      selector: (row: any) => row.nin,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'International Passport Number',
      key: 'passportnumber',
      description: 'Enter your International Passport Number here',
      selector: (row: any) => row.passportnumber,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Voters Card Number',
      key: 'voterscardnumber',
      description: '0806478263',
      selector: (row: any) => row.voterscardnumber,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Drivers License Number',
      key: 'driverslicensenumber',
      description: 'Enter your Drivers License Number here',
      selector: (row: any) => row.driverslicensenumber,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },
  ],

  paymentInformation: [
    {
      name: 'Account Holder Name',
      key: 'accountname',
      description: 'Enter account holder name here',
      selector: (row: any) => row.accountname,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Bank',
      key: 'bank',
      description: 'Enter Bank name here',
      selector: (row: any) => row.bank,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Account Number',
      key: 'accountnumber',
      description: '000 0000 000',
      selector: (row: any) => row.accountnumber,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Payment Method',
      key: 'paymentmethod',
      description: 'Payment Method',
      selector: (row: any) => row.paymentmethod,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },
  ],

  medicalData: [
    {
      name: 'Blood Group',
      key: 'bloodgroup',
      description: 'Enter blood group here',
      selector: (row: any) => row.bloodgroup,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Genotype',
      key: 'genotype',
      description: 'Enter genotype here',
      selector: (row: any) => row.genotype,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Disabilities',
      key: 'disabilities',
      description: 'Disabilities',
      selector: (row: any) => row.disabilities,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Allergies',
      key: 'allergies',
      description: 'Allergies',
      selector: (row: any) => row.allergies,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Co-mobidities',
      key: 'comobidities',
      description: 'Co-mobidities',
      selector: (row: any) => row.comobidities,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Payment Information',
      key: 'payment',
      description: '0806478263',
      selector: (row: any) => row.payment,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },

    {
      name: 'Specific details about patients',
      key: 'details',
      description: 'Enter other details about patients',
      selector: (row: any) => row.details,
      sortable: true,
      required: true,
      inputType: InputType.TEXT,
    },
  ],
};

const AppointmentSchema = [
  {
    name: 'S/N',
    key: 'sn',
    selector: (row: any) => row.sn,
    description: 'SN',
    sortable: true,
    inputType: InputType.HIDDEN,
  },
  {
    name: 'Client',
    key: 'clientId',
    description: 'Search for  Client',
    selector: (row: any) => `${row.firstname} ${row.lastname}`,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_AUTO_SUGGEST,
  },
  {
    name: 'Location',
    description: 'Search Location',
    key: 'locationId',
    selector: (row: any) => row.location_name,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_AUTO_SUGGEST,
  },
  {
    name: 'Employee',
    description: 'Search  Employee',
    key: 'practionerId',
    selector: (row: any) => row.practitioner_name,
    sortable: true,
    required: true,
    inputType: InputType.SELECT_AUTO_SUGGEST,
  },
  [
    {
      name: 'Date and Time',
      key: 'start_time',
      description: 'Select Appointment Time',
      selector: (row: any) => row.start_time,
      sortable: true,
      required: true,
      inputType: InputType.DATETIME,
      // validator: yup.string().min(5, 'Enter a valid Organnisation name'),
    },
    {
      name: 'Classification',
      key: 'appointmentClass',
      description: 'Select Appointment Class',
      selector: (row: any) => row.appointmentClass,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_RADIO,
      options: [
        {
          value: 'Onsite',
          label: 'On-site',
        },
        {
          value: 'Telemedicine',
          label: 'Telemedicine',
        },
        {
          value: 'homevisit',
          label: 'Home Visit',
        },
      ],
    },
    {
      name: 'Appointment Type',
      description: 'Appointment Type',
      key: 'appointment_type',
      selector: (row: any) => row.appointment_type,
      sortable: true,
      required: true,
      inputType: InputType.SELECT_LIST,
      options: ['New', 'Type B', 'Followup', 'Annual Checkup'],
    },
    {
      name: 'Appointment Status',
      description: 'Appointment Status',
      key: 'appointment_status',
      selector: (row: any) => row.appointment_status,
      sortable: true,
      required: true,
      options: [
        'Scheduled',
        'Confirmed',
        'Checked In',
        'Vitals Taken',
        'With Nurse',
        'With Doctor',
      ],
      inputType: InputType.SELECT_LIST,
    },
  ],
  {
    name: 'Appointment Reason',
    description: '',
    key: 'appointment_reason',
    selector: (row: any) => row.appointment_reason,
    sortable: true,
    required: true,
    inputType: InputType.TEXT_AREA,
  },
];
export { ClientMiniSchema, AppointmentSchema, ClientFullSchema };
