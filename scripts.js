document.addEventListener('DOMContentLoaded', function () {
    const jobForm = document.getElementById('job-form');
    const jobList = document.getElementById('jobs');

    jobForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const jobTitle = document.getElementById('job-title').value;
        const jobCompany = document.getElementById('job-company').value;
        const jobDescription = document.getElementById('job-description').value;

        const jobItem = document.createElement('li');
        jobItem.innerHTML = `
            <h3>${jobTitle}</h3>
            <p><strong>Company:</strong> ${jobCompany}</p>
            <p>${jobDescription}</p>
        `;

        jobList.appendChild(jobItem);

        jobForm.reset();
    });
});
