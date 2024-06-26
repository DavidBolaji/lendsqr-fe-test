import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Tabs from './tab';
const mockUser = {
  id: '667a1faf8ba7cde501747333',
  bvn: 321501781,
  loan: 456525,
  email: 'snider@besto.jewelry',
  fname: 'Julie',
  lname: 'Conner',
  amount: 328067,
  gender: 'male',
  oEmail: 'julie@besto.horse',
  rating: 10,
  sector: 'edTech',
  status: 'Active',
  children: null,
  username: 'julie92',
  education: 'OND',
  guarantor: { dob: '1992-04-16', fname: 'Snider', lname: 'Barnett' },
  dateJoined: '2005-01-06T15:12:59.440Z',
  empDuration: 10,
  phoneNumber: '08155648477',
  organization: 'Besto',
  relationship: 'cousin',
  maritalStatus: 'Married',
  employementStatus: true,
};

describe('Tabs', () => {
  it('renders Tabs component with initial state', () => {
    render(<Tabs user={mockUser} />);

    // Verify the tabs are rendered
    const generalDetailsTab = screen.getByText('General Details');
    expect(generalDetailsTab).toBeInTheDocument();

    // Verify the content of the General Details tab is rendered
    const personalInfo = screen.getByText('Personal Information');
    expect(personalInfo).toBeInTheDocument();

    const educationEmployment = screen.getByText('Education and Employment');
    expect(educationEmployment).toBeInTheDocument();

    const socials = screen.getByText('Socials');
    expect(socials).toBeInTheDocument();

    const guarantor = screen.getByText('Guarantor');
    expect(guarantor).toBeInTheDocument();
  });
});
