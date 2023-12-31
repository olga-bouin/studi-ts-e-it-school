class School {
    constructor(public name: string) {}
    private _trainings: Training[] = [];
}

class Training {
    constructor(public name: string) {}
    type: TrainingType;
}

enum TrainingType {
    Frontend,
    Backend,
    DevOps
}

class Course {
    constructor(public name: string, public type: TrainingType) {}
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
}

enum RoleType {
    ADMIN,
    SUBSCRIBER,
    EMPLOYEE = 2
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

}

class Video extends EducationalResources {
    type: VideoType
}

enum VideoType {
    registered,
    live = 1
}

class Homework extends EducationalResources {

}

class Project extends EducationalResources {

}

class Exam extends EducationalResources {
    type: ExamType;
}

enum ExamType {
    White,
    Final = 1
}

