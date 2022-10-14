class Employee {
    constructor(id, name, desg, dept, isMarried, joiningDate) {
        this.id = id;
        this.name = name;
        this.desg = desg;
        this.dept = dept;
        this.isMarried = isMarried;
        this.joiningDate = joiningDate;
    }
    showDetails() {
        console.log("Details Of the Employee");
        console.log("-----------------------");
        console.log("ID :" + this.id);
        console.log("Name :" + this.name);
        console.log("Department :" + this.dept);
        console.log("Designation :" + this.desg);
        console.log("Is Married? :" + this.isMarried)
        console.log("Joining date :" + this.joiningDate);
    }

    static showAllEmployeeDetails() {
        console.log("Details Of All the Employee");
        console.log("ID\tName\tDept\tDesg\tIs Married?\tJoining Date");
        for (let i = 0; i < this.employees.length; i++) {
            console.log(this.employees[i].id + "\t" + this.employees[i].name + "\t" + this.employees[i].dept + "\t" + this.employees[i].desg + "\t" + this.employees[i].isMarried + "\t" + this.employees[i].joiningDate + "\t");
        }
    }

    static employees = [];
    static addEmployee(employee) {
        this.employees.push(employee);
    }

    swipeIn() {
        console.log(this.name + " from " + this.dept + " having id: " + this.id + " just signed in");
    }

}

const e1 = new Employee("1", "Employee A", "Associate", "Insurance", "Yes", "12th Oct 2020");
const e2 = new Employee("2", "Employee B", "Analyst", "Digital", "Yes", "11th Oct 2014");
const e3 = new Employee("3", "Employee C", "Trainee", "Banking", "No", "19th Sep 2022");
const e4 = new Employee("4", "Employee D", "Manager", "Healthcare", "No", "17th Oct 2017");
const e5 = new Employee("5", "Employee E", "Sr Associate", "Commerce", "Yes", "12th Aug 2012");

Employee.addEmployee(e1);
Employee.addEmployee(e2);
Employee.addEmployee(e3);
Employee.addEmployee(e4);
Employee.addEmployee(e5);

e1.showDetails();
Employee.showAllEmployeeDetails();

e3.swipeIn();