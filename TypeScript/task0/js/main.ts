// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "Kleber",
    lastName: "Edu",
    age: 35,
    location: "Medellin"
};

const student2: Student = {
    firstName: "Lenny",
    lastName: "Rivas",
    age: 37,
    location: "Quibdo"
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]) {
    // Create a table element
    const table = document.createElement("table");
    table.border = "1"; // Add border for visibility

    // Create table header
    const headerRow = document.createElement("tr");
    const headerFirstName = document.createElement("th");
    headerFirstName.textContent = "First Name";
    const headerLocation = document.createElement("th");
    headerLocation.textContent = "Location";
    
    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    table.appendChild(headerRow);

    // Append each student as a new row in the table
    students.forEach(student => {
        const row = document.createElement("tr");
        
        const cellFirstName = document.createElement("td");
        cellFirstName.textContent = student.firstName;
        
        const cellLocation = document.createElement("td");
        cellLocation.textContent = student.location;
        
        row.appendChild(cellFirstName);
        row.appendChild(cellLocation);
        table.appendChild(row);
    });

    // Append the table to the body or a specific container
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);