// Add event listeners to the keyword and location form inputs
document.getElementById('keyword-input').addEventListener('input', filterJobs);
document.getElementById('location-input').addEventListener('input', filterJobs);

function filterJobs() {
  // Get the keyword and location input values
  const keyword = document.getElementById('keyword-input').value.toLowerCase();
  const location = document.getElementById('location-input').value.toLowerCase();

  // Get all the job listings
  const jobListings = document.getElementById('featured-jobs').children;

  // Iterate through the job listings
  for (let i = 0; i < jobListings.length; i++) {
    // Get the job title, company, and location
    const jobTitle = jobListings[i].querySelector('h3').textContent.toLowerCase();
    const jobCompany = jobListings[i].querySelector('p').textContent.toLowerCase();
    const jobLocation = jobListings[i].querySelectorAll('p')[2].textContent.toLowerCase();

    // Check if the keyword and location match the job title, company, and location
    if (jobTitle.includes(keyword) || jobCompany.includes(keyword) || jobLocation.includes(location)) {
      // Show the job listing
      jobListings[i].style.display = 'block';
    } else {
      // Hide the job listing
      jobListings[i].style.display = 'none';
    }
  }
}