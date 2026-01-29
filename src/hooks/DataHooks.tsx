
import { faker } from '@faker-js/faker';

export interface User {
  id: number;
  organization: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  sex: string;
  officeEmail:string;
  amount: string;
  accountNumber: string;
  IdCode : string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

const statuses: User["status"][] = ["Active", "Inactive", "Pending", "Blacklisted"];
export const users: User[] = [];
function generateCustomIdCode(): string {
  const first = faker.string.alpha({ length: 1, casing: 'upper' });  
  const middle = faker.string.alphanumeric({ length: 7 });           
  const last = faker.string.alpha({ length: 2, casing: 'lower' });  
  return first + middle + last;
}
export function getRandomDate(start: Date, end: Date): string {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: '2-digit', 
    year: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true 
  };
  return date.toLocaleString('en-US', options);
}

for (let i = 1; i <= 500; i++) {
      const username = faker.internet.username();
     const email = faker.internet.email();     
     const officeEmail = faker.internet.email({
      provider: "lendsqr.com",
      });
    const prefixes = ['070', '080', '081', '090', '091'];       
    const phone =
  faker.helpers.arrayElement(prefixes) +
  faker.string.numeric(8);
    const name = faker.person.fullName()
    const sex = faker.person.sex()
    const accountNumber = faker.finance.accountNumber()
    const amount = faker.finance.amount()
  const date = getRandomDate(new Date(2020, 0, 1), new Date(2023, 11, 31));
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const IdCode = generateCustomIdCode()
  users.push({
    id: i,
    organization: "Lendsqr",
    username,
    email,
    phone,
    date,
    name,
    sex,
    accountNumber,
    amount,
    status,
    IdCode,
    officeEmail,
  });
}
console.log(users);

