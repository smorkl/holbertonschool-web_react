interface Teacher {
    firstName: string;
    lastName:  string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string) {
     return `${firstName.slice(0, 1)}. ${lastName}`;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface
}

interface StudentClassInterface {
    workOnHomework(): string
    displayName():string
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string    
    lastName:string

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const student = new StudentClass('Laura', 'Sanchez');

console.log(student.displayName());
console.log(student.workOnHomework());

//const printTeach = printTeacher("John", "Doe")
//console.log(printTeach)

//const teacher3: Teacher = {
  //firstName: 'John',
  //fullTimeEmployee: false,
  //lastName: 'Doe',
  //location: 'London',
  //contract: false,
//};

//console.log(teacher3);

//const director1: Directors = {
  //firstName: 'John',
  //lastName: 'Doe',
  //location: 'London',
  //fullTimeEmployee: true,
  //numberOfReports: 17,
//};
//console.log(director1);