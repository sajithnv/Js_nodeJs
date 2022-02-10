class summation{
    constructor(n1,n2){
        this.n1=n1
        this.n2=n2
    }
    sum(){
        console.log("Sum of "+this.n1+" and "+this.n2+" is : "+(this.n1+this.n2))
    }
}
let a = new summation(10,25)
a.sum()
