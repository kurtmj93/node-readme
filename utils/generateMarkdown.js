// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for a professional README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Tests

  ${data.tests}

  ## Contributing

  ${data.contributing}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Questions

  - [GitHub User: ${data.github}](https://github.com/${data.github}/)
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
