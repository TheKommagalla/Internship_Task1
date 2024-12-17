document.getElementById('submitButton').addEventListener('click', calculateAge);

function calculateAge() {
    const dateInput = parseInt(document.getElementById('date').value);
    const monthInput = parseInt(document.getElementById('month').value);
    const yearInput = parseInt(document.getElementById('year').value);

    // Validation for empty or invalid inputs
    if (!dateInput || !monthInput || !yearInput) {
        Swal.fire({
            title: "Invalid Input",
            text: "Please fill out all fields.",
            icon: "error"
        });
        return;
    }

    if (dateInput < 1 || dateInput > 31 || monthInput < 1 || monthInput > 12 || yearInput < 1) {
        Swal.fire({
            title: "Invalid Input",
            text: "Please enter a valid date, month, and year.",
            icon: "error"
        });
        return;
    }

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // Months are 0-indexed
    const currentYear = today.getFullYear();

    // Calculate age
    let ageYears = currentYear - yearInput;
    let ageMonths = currentMonth - monthInput;
    let ageDays = currentDay - dateInput;

    // Adjust for days and months
    if (ageDays < 0) {
        ageMonths -= 1;
        const previousMonth = new Date(currentYear, currentMonth - 1, 0); // Get last day of the previous month
        ageDays += previousMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    // Future date validation
    if (ageYears < 0) {
        Swal.fire({
            title: "Invalid Date",
            text: "The date provided is in the future. Please enter a valid past date.",
            icon: "error"
        });
        return;
    }

    // Success message
    Swal.fire({
        title: "Your Age",
        text: `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`,
        icon: "success"
    });
}
