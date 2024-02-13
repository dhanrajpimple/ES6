class Student{
  constructor(name){
    this.name = name;
  }
  mark(){
    console.log(96);
  }

}
//class can inherit properties and methos from other classes using extends keyword this allow for creating hierarchy of classess
class  Teacher extends Student {
  constructor(name, subject){
    super(name)//call the constructor of the parent class
    this.subject = subject;
  }
   attendance(){
    console.log(85);
   }

}

const  student1 = new Student("don");
const  teacher = new  Teacher ("dp", "Maths") ;

console.log(student1.name); 
student1.mark();

console.log(teacher.name);
console.log(teacher.subject);
teacher.attendance()
