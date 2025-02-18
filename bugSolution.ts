function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user[0])); // Correct: Accessing the first element of the array
console.log(greeterArray(user)); // Correct: Using the updated function to handle an array