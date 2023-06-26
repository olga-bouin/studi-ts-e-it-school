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

enum Role {
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

