document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');
    const filterSelect = document.getElementById('filter');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const doctorID = document.getElementById('doctor_id').value;
        const specialization = document.getElementById('specialization').value;
        const experience = document.getElementById('experience').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        let role;
        if (experience > 5) {
            role = 'Senior';
        } else if (experience >= 2 && experience <= 5) {
            role = 'Junior';
        } else {
            role = 'Trainee';
        }

        const newRow = tableBody.insertRow();
        newRow.insertCell().textContent = name;
        newRow.insertCell().textContent = doctorID;
        newRow.insertCell().textContent = specialization;
        newRow.insertCell().textContent = experience;
        newRow.insertCell().textContent = email;
        newRow.insertCell().textContent = mobile;
        newRow.insertCell().textContent = role;

        const deleteCell = newRow.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            tableBody.deleteRow(newRow.rowIndex);
        });
        deleteCell.appendChild(deleteButton);

        form.reset();
    });

    filterSelect.addEventListener('change', function () {
        const filterValue = filterSelect.value.toLowerCase();
        const rows = tableBody.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            const specializationCell = cells[2].textContent.toLowerCase();
            rows[i].style.display = (filterValue === '' || specializationCell === filterValue) ? '' : 'none';
        }
    });
});
