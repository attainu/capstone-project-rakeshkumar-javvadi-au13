import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456789', 10),
    isAdmin: true,
  },
  {
    name: 'Rakesh',
    email: 'rakesh@example.com',
    password: bcrypt.hashSync('123456789', 10),
  },
  {
    name: 'Ranga',
    email: 'ranga@example.com',
    password: bcrypt.hashSync('123456789', 10),
  },
];

export default users;
