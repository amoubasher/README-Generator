// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licenses
  ${data.license ? data.license : ""}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Support](#support)
  - [Contributions](#contributions)
  - [Contact](#contact)

  ## Description
  ${data.descripton}

  ## Installation Instructions
  ${data.installation}

  ## How to Use This Application
  ${data.usage}

  ## Support For This Project
  ${data.support}

  ## Contributions
  ${data.contributions}

  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})
  Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
