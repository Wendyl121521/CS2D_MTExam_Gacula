let subject = ["DSA","PL","Networks"];
let operations = ["Enroll","unenroll","Select Another Subject","Exit"];
let student = {
    DSA: [],
    PL: [],
    Networks: []
};
function enrollStudent(student) {
    let studentName = prompt("Please enter your name: ");
    student[subject].push(studentName);
    console.log(studentName, "enrolled in", subject,"." );
}
 function unenrollstudent(subject) {
   let  studentName
