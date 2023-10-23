
const dice = (person1, person2) =>{
    let num = Math.floor(Math.random() * (6-1+1)+1);
    if (num <=3){
        return `Driver: ${person1} Navigator: ${person2}`
    }
    else
        return `Driver: ${person2} Navigator: ${person1}`
    
       
}

console.log(dice('John', "Anthony")); 
console.log(dice('John', "Anthony"));
console.log(dice('John', "Anthony")); 
console.log(dice('John', "Anthony")); // CSV
console.log(dice('John', "Anthony")); //Student Registry