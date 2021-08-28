// Required packages/modules
const path = require('path');
const fs = require('fs');
const generateStyles = require('./generateStyles');

// This function creates team member cards in HTML
const memberCards = (member) => {
    let cardHTML = "";
    member.forEach((member) => {
        let icon = '';
        let color = ''
        if (member.getRole() == "Manager") {
            icon = `<i class="fas fa-user-tie"></i>`;
            color = 'bg-success';
        } else if (member.getRole() == "Engineer") {
            icon = `<i class="fas fa-glasses"></i>`;
            color = 'bg-info';
        } else {
            icon = `<i class="fas fa-graduation-cap"></i>`;
            color = 'bg-warning';
        }

        let extra = '';
        if (member.office) {
            extra = `Office Number: ${member.office}`;
        } else if (member.github) {
            extra = `GitHub: <a href="https://github.com/${member.github}/">${member.github}</a>`;
        } else {
            extra = `School: ${member.school}`;
        }

        cardHTML += 
        `
        <div class="card d-flex" style="width: 18rem;" id="card">
            <div class="card-body ${color}">
                <div class="card-header">
                    <h5 class="card-title">${member.name}</h5>
                    <h5 class="card-title">${icon} ${member.getRole()}</h5>
                </div>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush" id="border">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item">${extra}</li>
                </ul>
            </div>
        </div>`;
    });
    generateHTML(cardHTML);
};
// This function creates the HTML for the main page
const generateHTML = (member) => {
    let mainHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <link href="./styles.css" rel="stylesheet"/>
    <script src="https://kit.fontawesome.com/d831f70b1e.js" crossorigin="anonymous"></script>
    <title>The TEAM</title>
</head>
<body>
    <nav class="navbar navbar-dark bg-primary justify-content-center">
        <span class="navbar-brand" id="header" href="#">
            <i class="far fa-address-book"></i>
            The Team
        </span>
    </nav>
    <main class="container d-flex flex-wrap main-wrapper justify-content-evenly min-vh-100" id="card-container">${member}
    </main>
</body>
</html>`;
writeToFile("index.html", mainHTML);
writeToFile("style.css", generateStyles.css());
};
// This function writes the html to the page
const writeToFile = (filename, cardHTML) => {
    fs.writeFileSync(path.join(process.cwd(), "/src/", filename), cardHTML);
};

module.exports = memberCards;