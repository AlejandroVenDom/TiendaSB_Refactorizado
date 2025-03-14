
export interface UserInterface {

  username: string;
  password: string;
  roleName: "ADMIN" | "CLIENT" | "SELLER";
  firstName: string;
  lastName: string;
  address: string;

}

export interface ProductInterface {
  name: string;
  description: string;
  image: string;
  price: number;
  tax: number;
  currencyName: "EUR"|"USD";
  userName?:string;
}


export type LoginInterface = Pick<UserInterface, "username" | "password">

