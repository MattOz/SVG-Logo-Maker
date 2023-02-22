//refer to document.js in Mini Project

function genLogo(response) {
    return `
    <svg width="350" height="60">
    <text>
    ${response.characters}
    </text>
  
    <style>
      <![CDATA[
        text{
          dominant-baseline: hanging;
          font: 28px Verdana, Helvetica, Arial, sans-serif;
        }
      ]]>
    </style>
  </svg>
    `
}

module.exports = genLogo;