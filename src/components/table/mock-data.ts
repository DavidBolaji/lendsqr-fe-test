export const mockData = [
  {
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    organization: 'Irorun',
    username: 'Debby Ogana',
    email: 'debby@irorun.com',
    phoneNumber: '0816708928',
    dateJoined: 'Apr 30, 2020 10:00 AM',
    status: 'Pending'
  },

];




export const columns = [
  { header: 'Organization', accessor: 'organization' },
  { header: 'Username', accessor: 'username' },
  { header: 'Email', accessor: 'email' },
  { header: 'Phone Number', accessor: 'phoneNumber' },
  { header: 'Date Joined', accessor: 'dateJoined' },
  { header: 'Status', accessor: 'status' }
];


//usage 
//<Table columns={columns} data={mockData} rowsPerPage={5} />
// {
//   organization: 'Irorun',
//   username: 'Debby Ogana',
//   email: 'debby@irorun.com',
//   phoneNumber: '0816708928',
//   dateJoined: 'Apr 30, 2020 10:00 AM',
//   status: 'Blacklisted'
// },
// {
//   organization: 'Irorun',
//   username: 'Debby Ogana',
//   email: 'debby@irorun.com',
//   phoneNumber: '0816708928',
//   dateJoined: 'Apr 30, 2020 10:00 AM',
//   status: 'Active'
// },
// {
//   organization: 'Irorun',
//   username: 'Debby Ogana',
//   email: 'debby@irorun.com',
//   phoneNumber: '0816708928',
//   dateJoined: 'Apr 30, 2020 10:00 AM',
//   status: 'Active'
// },
// {
//   organization: 'Irorun',
//   username: 'Debby Ogana',
//   email: 'debby@irorun.com',
//   phoneNumber: '0816708928',
//   dateJoined: 'Apr 30, 2020 10:00 AM',
//   status: 'Active'
// },