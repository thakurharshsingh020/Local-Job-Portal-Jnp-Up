// Dummy job data
const jobs = [
    { title: "Teacher", description: "Teacher of All Subject" },
    { title: "Driver", description: "Driver with Bus Driving Skill" },
    { title: "Conductor", description: "Bus Conductor" },
];

// Load jobs on page load
document.addEventListener("DOMContentLoaded", loadJobs);

function loadJobs() {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";
    jobs.forEach((job, index) => {
        const jobItem = document.createElement("div");
        jobItem.classList.add("job-item");
        jobItem.innerHTML = `<h3>${job.title}</h3><br><p>${job.description}</p><br>
            <a href="apply form.html" onclick="applyForJob(${index})">Apply</a>`;
        jobList.appendChild(jobItem);
    });
}

function searchJobs() {
    const query = document.getElementById("jobSearch").value.toLowerCase();
    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(query));
    displayJobs(filteredJobs);
}

function displayJobs(filteredJobs) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";
    if (filteredJobs.length > 0) {
        filteredJobs.forEach((job, index) => {
            const jobItem = document.createElement("div");
            jobItem.classList.add("job-item");
            jobItem.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>
                 <a href="apply form.html" onclick="applyForJob(${index})">Apply</a>`;
            jobList.appendChild(jobItem);
        });
    } else {
        jobList.innerHTML = "<p>No jobs found</p>";
    }
}

function applyForJob(index) {
    const job = jobs[index];
    alert(`Applied for ${job.title}`);
    sendApplicationEmail(job.title);
}

// Get the elements
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

// Open the sidebar when the open button is clicked
openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Close the sidebar when the close button is clicked
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
