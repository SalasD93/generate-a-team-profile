// These are the required modules/packages
var Team = require('./utils/Team');

// This calls the Team constructor to create a new team
new Team().createTeam();


// function to write README file
// const writeToFile = data => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/README.md', data, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             // confirms readme was created
//             resolve({
//                 ok: true,
//                 message: 'File Created!'
//             });
//         });
//     });
// };

// function to initialize app and functions
// const init = () => {
//     inquirer.prompt(questions)
//     .then(answers => {
//         return generateMarkDown(answers);
//     })
//     .then(readme => {
//         return writeToFile(readme);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// function call to initialize app
// init();


// prompt => generate html
// Qs
    // Team Manager
        // name
        // employee ID
        // email address
        // office number
    // menu to select
        // add engineer?
        // add intern?
        // finish team?
    // Engineer
        // name
        // ID
        // email
        // github username
    // go back to menu
    // Intern
        // name
        // ID
        // email
        // school
    // go back to menu
    // finish team
        //exit prompts => generate readme