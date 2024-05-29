// assigment 1 = building a friend list 
interface Friend {
    firstName: string;
    lastName :string;
    age:number;
    profession:string;

}
interface People {
    friends:Friend[];
}
const people:People = {
    friends:[]
    
}
const friend1 = {
    firstName: "Zara",
    lastName: "Ali",
    age: 27,
    profession:"Doctor",
};
const friend2 = {
firstName: "Shanza",
lastName: "Iftikhar",
age: 20,
profession: "Engineer",
};

const friend3 = {
    firstName: "Wania",
    lastName: "Zaheer",
    age: 25,
    profession: "Teacher",
};

people.friends.push(friend1 , friend2 , friend3 ),
console.log(people);

// assignment 2 = manipulating an Array OR rearranging an array 
const scrambledArray =["student", "of",true, 903 , "an", "a", "GIAIC" , "S"];
scrambledArray.splice(2,2)
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1]="am"
scrambledArray[2]="a"
scrambledArray[3]= "student"
scrambledArray[4]="of"
scrambledArray[5]= "GIAIC"
const sentence=scrambledArray.join("");
console.log(sentence);

// asignment = 3 company product analog
 type Product = {
    name:string;
    brand:string;
    cost:number;
    
 };
 let inventory: Product[] = [];

 let product1 :Product = {
    name:"serum",
    cost:1200,
    brand:"Loreal",
 }
    
    let product2 : Product= {
 name:"facewash",
 cost:500,
 brand:"ponds",
    }
 
    let product3 : Product = {
        name: "fragnance",
        cost: 2000,
        brand: "sports",
    };
inventory.push(product1,product2,product3);
console.log(inventory);
console.log(inventory[2].brand);
console.log(inventory[0].cost);
console.log(inventory[1].name);


// asignment 4 = student list organizer
type Student ={
    name:string;
    senior:boolean;
    completedAssignment:boolean;
    
}
const student1 :Student = {
    name: "bia",
    senior: true,
    completedAssignment: false
}
const student2 :Student={
    name:"shanza",
    senior:false,
    completedAssignment:true
}
const student3:Student={
    name:"wania",
    senior:true,
    completedAssignment:true
}
const students : Student[]=[
    student1,student2,student3
];
console.log(students);




 