interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface Student {
    workOnHomework(): string;
    displayName(): string;
	}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


class StudentClass implements Student {
	firstName:string;
	lastName:string;

	constructor({ firstName, lastName }: StudentConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return "Currently working";
	}
	displayName(): string {
        return this.firstName;
    }
}





const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
const student1 = new StudentClass({ firstName: "Jane", lastName: "Doe" });
console.log(teacher3);
console.log(printTeacher("John", "Doe"));
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName());
