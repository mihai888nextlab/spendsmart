interface User {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface Income {
  _id: string;
  source: string;
  description: string;
  amount: number;
  date_received: Date;
  frequency: string;
  uid: string;
}

export type { User, Income };
