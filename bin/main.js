#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const path = require('path');
const didYouMean = require('didyoumean');
const semver = require('semver');
const updateCheck = require('../lib/update');

didYouMean.threshold = 0.6;

const { version, engines } = require(path.resolve(__dirname, '../package.json'));

function checkNodeVersion(wanted, cliName) {
  // 检测node版本是否符合要求范围
  if (!semver.satisfies(process.version, wanted)) {
    console.log(
      chalk.red(
        'You are using Node ' +
          process.version +
          ', but this version of ' +
          cliName +
          ' requires Node ' +
          wanted +
          '.\nPlease upgrade your Node version.'
      )
    );
    // 退出进程
    process.exit(1);
  }
}

// 检测node版本
checkNodeVersion(engines.node, 'cci-gov');

program.version(version, '-v, --version').usage('<command> [options]');

// 创建项目命令
program
  .command('create <project-name>')
  .description('create a new project')
  .option('-d --dir <dir>', '创建目录')
  .action((name, cmd) => {
    validateArgsLen(process.argv.length, 4);
    require('../lib/creator')(name);
  });

// 创建页面命令
program
  .command('page <page-name>')
  .description('create a new page')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .action((name, cmd) => {
    validateArgsLen(process.argv.length, 4);
    // TODO
  });

// 删除命令
program
  .command('delete <template-name>')
  .description('delete a project template')
  .action((name, cmd) => {
    // TODO
  });

// 更新命令
program
  .command('upgrade')
  .description('Check the cci-gov version.')
  .action(() => {
    validateArgsLen(process.argv.length, 3);
    updateCheck();
  });

// 处理非法命令
program.arguments('<command>').action((cmd) => {
  program.outputHelp();
  console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
  console.log();
  suggestCommands(cmd);
});

// 输入 cci-gov 显示帮助信息
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);

// 处理命令拼写错误给出提示
function suggestCommands(cmd) {
  // cli 支持的命令
  const avaliableCommands = program.commands.map((cmd) => {
    return cmd._name;
  });
  // 简易智能匹配用户命令
  const suggestion = didYouMean(cmd, avaliableCommands);
  if (suggestion) {
    console.log(`  ` + chalk.red(`Did you mean ${chalk.yellow(suggestion)} ?`));
  }
}

// 对命令行字符超出参数规定给出提示
function validateArgsLen(argvLen, maxArgvLens) {
  if (argvLen > maxArgvLens) {
    console.log(chalk.yellow('\n Info: You provided more than argument. the rest are ignored.'));
  }
}
