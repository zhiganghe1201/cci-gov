// 该文件主要处理文件名合法检测，文件是否存在等配置
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const validateProjectName = require('validate-npm-package-name');
const ora = require('ora');
const path = require('path');
const fs = require('fs');

const generatePcProject = require('./generators/pc');
const generateH5Project = require('./generators/h5');

async function create(appName) {
  // const cwd = process.cwd()
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: '请选择应用类型',
        choices: ['pc 桌面应用', 'h5 移动应用'],
        filter(val) {
          return val.split(' ')[0];
        },
      },
    ])
    .then(({ type }) => {
      switch (type) {
        case 'pc':
          console.log('pc');
          generatePcProject(appName);
          break;
        case 'h5':
          console.log('h5');
        default:
          break;
      }
    });
}

module.exports = create;

// module.exports = (...args) => {
//   return create(...args).catch((err) => {
//     stopSpinner(false);
//     error(err);
//   });
// };
