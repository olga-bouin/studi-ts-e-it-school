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
    constructor(name: string) {
        super(name);
    }
}

enum ExamType {
    White,
    Final = 1
}

