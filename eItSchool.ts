class School {
    constructor(public name: string) {}
    private _trainings: Training[] = [];
    resume: string;
    creationDate: Date;

    public getSchoolDescription() {
        return `School ${this.name} created the ${this.creationDate} is ${this.resume} proposes such trainings as: ${this._trainings}`;
    }
}

class Training {
    constructor(public name: string) {}
    type: TrainingType;
    courses: Course[];
}

enum TrainingType {
    Frontend,
    Backend,
    DevOps
}

class Course {
    private _animator: Employee;
    mainTraining: Training;
    otherTrainings: Training[];
    resources: EducationalResources[];
    subscribers: Subscriber[];
    constructor(public name: string, public type: TrainingType, animator: Employee) {
        this._animator = animator;
    }

    public subscribe(student: Subscriber) {
        this.subscribers.push(student)
    }
}

class Person {
    constructor(public name: string) {}
    fName: string;
    lName: string;
    bDate: Date;
    role: Role;
}

class Role {
    type: RoleType;
    description: string

    constructor(type: RoleType = RoleType.SUBSCRIBER) {
        this.type = type;
    }

    public setRole(role: RoleType) {
        this.type = role;
    }

    public getRole() {
        return this.type;
    }

    public getRoleDescription() {
        return this.description;
    }

    public setRoleDescription(description: string) {
        this.description = description;
    }
}

enum RoleType {
    ADMIN,
    SUBSCRIBER,
    EMPLOYEE
}

class Employee extends Person {
    constructor(public name: string, public role: Role) {
        super(name);
    }
}

class Subscriber extends Person {
    constructor(public name: string, public role: Role) {
        super(name);
    }
}

class Admin extends Person {
    constructor(public name: string, public role: Role) {
        super(name);
    }
}

enum ContactType {
    EMAIL,
    PHONE,
    FAX
}

class Contact {
    constructor(public name: string, public email: string, public phone: string) {}
    type: ContactType;
}

abstract class EducationalResources {
    protected constructor(name: string) {
    }

}

class Video extends EducationalResources {
    type: VideoType;
    constructor(name: string) {
        super(name);
    }
}

enum VideoType {
    registered,
    live = 1
}

class Homework extends EducationalResources {
    dueDate: Date;
    course: Course;
    student: Subscriber;
    constructor(name: string) {
        super(name);
    }
}

class Project extends EducationalResources {
    theme: string;
    student: Subscriber;
    tutor: Employee;

    constructor(name: string) {
        super(name);
    }

}

class Exam extends EducationalResources {
    type: ExamType;
    jury: Employee[];
    relatedCourses: Course[];
    student: Subscriber;
    isPassed: boolean;
    constructor(name: string) {
        super(name);
    }

    public pass() {
        this.isPassed = true;
    }
}

enum ExamType {
    White,
    Final = 1
}

class Book extends EducationalResources {

    constructor(name: string) {
        super(name);
    }
}


let training1;
training1 = new Training('Angular');
training1.type = TrainingType.Frontend;
training1.courses = [];
training1.courses.push(new Course('Angular', TrainingType.Frontend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));

let training2;
training2 = new Training('NodeJS');
training2.type = TrainingType.Backend;
training2.courses = [];
training2.courses.push(new Course('NodeJS', TrainingType.Backend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training2.courses.push(new Course('Express', TrainingType.Backend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training2.courses.push(new Course('MongoDB', TrainingType.Backend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training2.courses.push(new Course('Mongoose', TrainingType.Backend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training2.courses.push(new Course('Sequelize', TrainingType.Backend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training2.courses.push(new Course('MySQL', TrainingType.Backend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training2.courses.push(new Course('PostgreSQL', TrainingType.Backend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training2.courses.push(new Course('Express', TrainingType.Backend, new Employee('Ala', new Role(RoleType.EMPLOYEE))));

let training3;
training3 = new Training('DevOps');
training3.type = TrainingType.DevOps;
training3.courses = [];
training3.courses.push(new Course('Docker', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training3.courses.push(new Course('Kubernetes', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training3.courses.push(new Course('Jenkins', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training3.courses.push(new Course('Ansible', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training3.courses.push(new Course('Terraform', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training3.courses.push(new Course('AWS', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training3.courses.push(new Course('GCP', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training3.courses.push(new Course('Azure', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));
training3.courses.push(new Course('Git', TrainingType.DevOps, new Employee('Ala', new Role(RoleType.EMPLOYEE))));

let school;
school = new School('IT School');
school.trainings = [];
school.trainings.push(training1);
school.trainings.push(training2);
school.trainings.push(training3);

let employee1;
employee1 = new Employee('Ala', new Role(RoleType.EMPLOYEE));
employee1.role.setRoleDescription('Frontend Developer');
employee1.role.setRole(RoleType.EMPLOYEE);
employee1.fName = 'Ala';
employee1.lName = 'Atrash';
employee1.bDate = new Date('1990-01-01');
