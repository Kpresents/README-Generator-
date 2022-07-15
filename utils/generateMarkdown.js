// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if(license==='MIT'){
    return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license==='IBM'){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if (license === 'APACHE'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'BOOST'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 

  ## Description
  ${data.description}
 
  
  ## Table of Contents
  
  
  - [Installation](#installation)
  - [Contribution](#contribution)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Test](#test)
  - [GitHub](#gitHub)
  - [Email](#email)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
      
  
  ## Contributors
  ${data.contribution}
  
  
  ## License
  ${renderLicenseBadge(data.license)}
  
  ## Tests
  ${data.test}
  
  ## GitHub 
  ${data.gitHub}
  
  
  ## Email
  ${data.email}
  
  
  
 
  
`;
}

module.exports = generateMarkdown;
