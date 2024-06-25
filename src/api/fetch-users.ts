import axios from 'axios';
const KEY = import.meta.env.VITE_API_KEY
export interface Guarantor {
    dob: string;
    fname: string;
    lname: string;
  }
  
  export interface IUser {
    id: string;
    bvn: number;
    loan: number;
    email: string;
    fname: string;
    lname: string;
    amount: number;
    gender: 'male' | 'female' | 'other';
    oEmail: string;
    rating: number;
    sector: string;
    status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
    children: null | number; // Adjust 'children' type as needed
    username: string;
    education: string;
    guarantor: Guarantor;
    dateJoined: string; 
    empDuration: number;
    phoneNumber: string;
    organization: string;
    relationship: string;
    maritalStatus: string;
    employmentStatus: boolean;
  }
  

const fetchUsers = async () => {
  const response = await axios.get('https://api.json-generator.com/templates/Ap0hv1jd2zgr/data', {
    headers: {
        Authorization: `Bearer ${KEY}`
    }
  });
  return response.data;
};

export default fetchUsers;