// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None') {
  var encodedLicense = encodeURI(license); // need to encode for html as there are spaces in the license choices
  return `![License Badge](https://img.shields.io/badge/license-${encodedLicense}-green?style=for-the-badge)`;
} else { // If there is no license, return an empty string
  return '';
}};

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`
  } else { // If there is no license, return an empty string
    return '';
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} license.`
  } else {
    return ''; // If there is no license, return an empty string
  }
}

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
