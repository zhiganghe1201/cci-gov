#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const path = require('path');
const didYouMean = require('didyoumean'); // 简易的智能匹配引擎
const semver = require('semver'); // npm的语义版本包

const updateCheck = require('../lib/update');

didYouMean.threshold = 0.6;

const { version } = require(path.resolve(__dirname, '../package.json'));

program.version(version, '-v, --version').usage('<command> [options]');

// 创建项目命令
program
  .command('create <project-name>')
  .description('create a new project')
  .option('-d --dir <dir>', '创建目录')
  .action((name, cmd) => {
    validateArgsLen(process.argv.length, 4);
    // const options = cleanArgs(cmd)
    require('../lib/creator')(name);
    // console.log(name, cmd);
  });

// 创建页面命令
program
  .command('page <page-name>')
  .description('create a new page')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .action((name, cmd) => {
    // TODO
  });

// 删除命令
program.command('delete <template-name>').description('delete a project template');

// 更新命令
program
  .command('upgrade')
  .description('Check the cci-gov version.')
  .action(() => {
    updateCheck();
  });

// 处理非法命令
program.arguments('<command>').action((cmd) => {
  program.outputHelp();
  console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
  console.log();
  suggestCommands(cmd);
});

program.parse(process.argv);

// 输入easy显示帮助信息
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

// easy支持的命令
function suggestCommands(cmd) {
  const avaliableCommands = program.commands.map((cmd) => {
    return cmd._name;
  });
  // 简易智能匹配用户命令
  const suggestion = didYouMean(cmd, avaliableCommands);
  if (suggestion) {
    console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)}?`));
  }
}

function validateArgsLen(argvLen, maxArgvLens) {
  if (argvLen > maxArgvLens) {
    console.log(chalk.yellow('\n Info: You provided more than argument. the rest are ignored.'));
  }
}
