//Built-in
const myName = "Corinna"
const myAge : number = 33
const isOK : boolean = false
//custom types
enum Role  {
    Admin = 'admin',
    Common = 'common'
}
type User = {
    id: string,
    displayName: string,
    age: number,
    role: Role
    
}

const mockArray = [{id:'1', displayName: "Corinna", age: "33", role:"admin"}]
//Also functions have types!
export function getUsers(): (User["displayName"] | undefined)[] {
  const names = mockArray.map(user => user.displayName);
//   const names: (User["displayName"] | undefined)[] = mockArray.map(user => user.displayName);
  return names;
}

//Funny types

//NEVER
// Function that throws an error and never returns
function throwError(message: string): never {
    throw new Error(message);
  }
  
  //UNKNOWN
let userInput: unknown;
// We cannot assign unknown to a more specific type without a type assertion or a type guard
let userName: string;
// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'
// We need to perform type checking before assigning an unknown value
if (typeof userInput === 'string') {
  userName = userInput; // OK: We've checked the type, so now TypeScript knows userInput is a string
}

  

//Enums and Tuples
// Declare a tuple type
let employee: [string, number];

// Initialize it
employee = ['John Doe', 35]; // Correct

// Initialize with incorrect types
// employee = [35, 'John Doe']; // Error: Type 'number' is not assignable to type 'string'
// employee = ['John Doe', 35, true]; // Error: Expected 2 elements, but got 3


// Define an enum for weekdays
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  // Usage
  let today: Weekday = Weekday.Friday;
  
  if (today === Weekday.Friday) {
    console.log('It\'s Friday!');
  }
  

//Types vs Interfaces --> react code for more details

interface Todo {
  id: number;
  text: string;
  createdDate?: Date
}
interface SchoolTodo extends Todo {
  subject: string
  dueDate: Date
}
//Union
type CarModel = "Panamera" | "Cayenne" | "Macan"
type Car = {
  name: string;
  model: CarModel;
  color: string;
  price: number
}

const myCarName : Car["name"] = "Cayenne"
console.log(myCarName)
const myCar: Car = { name: "Betty", model:"Patata", color:"black", price:2000000}
//Example optional property
const myTodo: Todo = {
  id:2,
  text: "Do the dishes"
}


