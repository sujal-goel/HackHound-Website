// Change the file name to your actual file name
function loadTeamMembers(teamToDisplay) {
    const fileName = './Core_Member_Details.csv';

    const devTeamContainer = document.getElementById('team-content');

    const reader = new FileReader();

    reader.onload = function (event) {
        const csvData = event.target.result;
        const rows = csvData.split('\n');

        // Assuming the first row contains headers
        const headers = rows[0].split(',');

        // Find the index of the columns
        const usernameIndex = headers.indexOf('Username');
        const fullNameIndex = headers.indexOf('Full Name');
        const yearIndex = headers.indexOf('In Which year?');
        const teamIndex = headers.indexOf('In Which Team?');
        const linkedinIndex = headers.indexOf('Linkedin profile link');
        const githubIndex = headers.indexOf('Github profile link');

        // Iterate through the rows and filter only development team members
        for (let i = 1; i < rows.length; i++) {
            const columns = rows[i].split(',');

            // Ensure the number of columns matches the number of headers
            if (columns.length === headers.length) {
                // Check if each column has a value before accessing it
                const trimmedColumns = columns.map(column => column ? column.trim() : '');

                if (trimmedColumns[teamIndex].toLowerCase() === teamToDisplay.toLowerCase()) {

                    const box = document.createElement('div');
                    box.classList.add('box');

                    const img = document.createElement('img');
                    img.src = `Images/core_members/${trimmedColumns[fullNameIndex]}.jpg`;// Set the photo URL

                    const name = document.createElement('h3');
                    name.textContent = trimmedColumns[fullNameIndex]; // Set the full name

                    const year = document.createElement('h5');
                    year.textContent = trimmedColumns[yearIndex]; // Set the year

                    const icons = document.createElement('div');
                    icons.classList.add('icons');

                    // const twitterLink = document.createElement('a');
                    // twitterLink.href = trimmedColumns[githubIndex]; // Set the twitter profile link
                    // const twitterIcon = document.createElement('i');
                    // twitterIcon.classList.add('ri-twitter-fill');
                    // twitterLink.appendChild(twitterIcon);
                    // icons.appendChild(twitterLink);

                    const linkedinLink = document.createElement('a');
                    linkedinLink.href = trimmedColumns[linkedinIndex]; // Set the LinkedIn profile link
                    const linkedinIcon = document.createElement('i');
                    linkedinIcon.classList.add('ri-linkedin-fill');
                    linkedinLink.appendChild(linkedinIcon);
                    icons.appendChild(linkedinLink);

                    const githubLink = document.createElement('a');
                    githubLink.href = trimmedColumns[githubIndex]; // Set the GitHub profile link
                    const githubIcon = document.createElement('i');
                    githubIcon.classList.add('ri-github-fill');
                    githubLink.appendChild(githubIcon);
                    icons.appendChild(githubLink);

                    box.appendChild(img);
                    box.appendChild(name);
                    box.appendChild(year);
                    box.appendChild(icons);

                    devTeamContainer.appendChild(box);
                }
            }
        }

    };

    // Read the file as text
    fetch(fileName)
        .then(response => response.text())
        .then(data => reader.readAsText(new Blob([data])))
        .catch(error => console.error(error));
};



