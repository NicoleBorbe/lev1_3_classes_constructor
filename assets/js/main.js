let name = document.getElementById("name");
let age = document.getElementById("age");
let examCheck = document.getElementById("examCheck");
let result = document.getElementById("result");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // info() {
    //     return ;
    // }
    write() {
        let newUl = document.createElement("li");
        newUl.textContent = `${this.name}, ${this.age} years old.`;
        result.appendChild(newUl);
        if (examCheck.checked) {
            newUl.style.color = "black";
        } else {
            newUl.style.color = "red";
        }
    }
}

function submitx() {
    let input = new Person(name.value, age.value);
    input.write();
}
