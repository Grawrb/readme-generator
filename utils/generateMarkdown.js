// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n [License](#license)\n`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license!`
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ${renderLicenseBadge(data.license)}

          ## Table of Contents
          - [Description](#description)
          - [Installation](#installation)
          - [Usage](#usage)
          - [Contributions](#contributions)
          - [Testing](#testing)
          - [Questions](#questions)

          ## Description

          ${data.description}

          ## Installation

          ${data.installation}

          ## Usage

          ${data.usage}

          ## Contributions

          ${data.contributions}

          ## Testing

          ${data.testing}

          ## Questions

          For any questions, check my contact info below!

          - <a href="https://github.com/${data.user}" alt="GitHub Profile Link"> ${data.user} Github Profile</a>
          - [Email](mailto:${data.email})

          ## License Information

          ${renderLicenseBadge(data.license)}
          ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
