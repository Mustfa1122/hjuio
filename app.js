const students = [];

function addStudent() {
    const name = document.getElementById('studentName').value;
    const age = document.getElementById('studentAge').value;
    const grade = document.getElementById('studentGrade').value;

    const student = { id: Date.now(), name, age, grade };
    students.push(student);

    document.getElementById('studentForm').reset();
}

function searchStudent() {
    const searchId = parseInt(document.getElementById('searchId').value);
    const resultContainer = document.getElementById('searchResult');
    const foundStudent = students.find(student => student.id === searchId);

    if (foundStudent) {
        resultContainer.innerHTML = `
            <p>ID: ${foundStudent.id}</p>
            <p>Name: ${foundStudent.name}</p>
            <p>Age: ${foundStudent.age}</p>
            <p>Grade: ${foundStudent.grade}</p>
        `;
    } else {
        resultContainer.innerHTML = 'Student not found.';
    }
}

function deleteStudent() {
    const deleteId = parseInt(document.getElementById('deleteId').value);
    const index = students.findIndex(student => student.id === deleteId);

    if (index !== -1) {
        students.splice(index, 1);
        alert('Student deleted successfully.');
    } else {
        alert('Student not found.');
    }
    document.getElementById('deleteId').value = '';
}
