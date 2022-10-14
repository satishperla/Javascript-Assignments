class A {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log("Constructor to initialize Class A object having id" + this.id + " and name " + this.name);
    }
}

class B extends A {
    constructor(id, name, dept) {
        super(id, name);
        this.dept = dept;
        console.log("Constructor to initialize Class B object having id" + this.id + ", name " + this.name + " and dept " + this.dept);
    }
}

class C extends B {
    constructor(id, name, dept, salary) {
        super(id, name, dept)
        this.salary = salary;
        console.log("Constructor to initialize Class B object having id" + this.id + ", name " + this.name + " and dept " + this.dept + " his salary is " + this.salary);
    }

    showDetails() {
        console.log("ID : " + this.id);
        console.log("Name : " + this.name);
        console.log("Department : " + this.dept);
        console.log("Salary : " + this.salary);
    }
}

details_1 = new A(1, "Ram");
details_2 = new B(2, "Robert", "Health");
details_3 = new C(3, "Raj", "Insurance", 2000);

details_3.showDetails();
