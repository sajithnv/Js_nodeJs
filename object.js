var person={name:"sajith",age:20,ph_no:9072909090,place:"ksd"}
// to print an object
console.log(person)
// to print some data from the object
console.log(person.name)
// adding a new content with value
person.salary=20000
console.log(person)
//create a method in it
person.show=function(){
    console.log(this.name+" from "+this.place+". He/she is "+this.age+" years old. his/her mobile number is "+this.ph_no)
}
person.show()
// print all data using for loop
for(x in person){
    console.log(person[x])
}