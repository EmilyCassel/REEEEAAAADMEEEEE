// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none"){
    return "";
  } return `![License](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return "[MIT](https://opensource.org/license/mit)"
  }
  if(license === "BSD"){
    return "[BSD](https://opensource.org/license/bsd))"
  }
  if(license === "Apache"){
    return "[Apache](https://opensource.org/license/apache))"
  }
  if(license === "GPL")
    return "[GPL](https://opensource.org/license/gpl))"
  if(license === "none")
    return "[none]"

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "none"){
    return ""; 
  }
  return `## **License**
  License: ${license}

  If you need more information, please visit: [https://www.choosealicense.com/](https://www.choosealicense.com/)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ##Description 
  ${data.description}

  ##Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contributing)
  - [License](#license)
  - [Tests](#tests)


  ##Installation 
  ${data.description}

  ##Usage 
  ${data.usage}

  ##Contributing
  ${data.contributing}

  ##License 
  This project is licensed under the ${data.license} License.

  ##Tests
  ${data.tests}

  ##Questions 
  ${data.questions}
`;
}

module.exports = generateMarkdown;