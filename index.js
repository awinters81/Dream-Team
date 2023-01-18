// I know that I'll need constants to pull from all in the lib folder, and Inquire.
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

//So I didn't need the employee constant here, I would need it for the engineer, intern and manager.js

// and I know I will need constants for Inquirer, the path, and fs...

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// These will all render through my page.js in my src folder...

const start = require("./src/page.js")