var employeeDetails=[];
function Employee(name,age,salary,exp){
    employeeDetails.push(name);
    this.name=name
    this.age=age
    this.salary=salary
    this.exp=exp
    this.about=function(){
        console.log(this.name+" is "+this.age+" years old. He/She has "+this.exp+" years Experiance. So his/her salary is "+this.salary)
    }
}
var sajith=new Employee("sajith",25,25000,5)
var ajith=new Employee("ajith",23,12000,1)
var jith=new Employee("jith",37,75000,10)
var arun=new Employee("arun",27,30000,6)
var arjun=new Employee("arjun",20,25000,0)
var abhinav=new Employee("ambhu",45,95000,18)
function getData(name){
    console.log(name.about())
}
getData(sajith)