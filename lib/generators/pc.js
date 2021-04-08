const fse = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora(chalk.cyan('Downloading template...'));
const templatesPath = path.resolve(__dirname, '../../templates');

module.exports = (appName) => {
  const templatePath = path.resolve(templatesPath, 'pc');
  const appPath = path.resolve(process.cwd(), appName);
  const metaPath = path.resolve(appPath, 'meta.json');

  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'isAdmin',
        message: '是否后台管理系统',
        default: true,
      },
    ])
    .then(({ isAdmin }) => {
      if (isAdmin) {
      } else {
        inquirer
          .prompt([
            {
              type: 'confirm',
              name: 'enableDebug',
              message: '是否启用调试模式',
              default: false,
            },
          ])
          .then((meta) => {
            meta.isAdmin = false;
            doGenerate(meta);
          });
      }
    });

  const doGenerate = (meta) => {
    try {
      console.log(chalk.blue('项目正在创建中，请稍等~'));
      fse.mkdirSync(appPath);

      // shell.find 找到模板应用非 .umi、node_modules 文件或文件夹
      // 使用 * 不包含隐藏文件 https://blog.csdn.net/yockie/article/details/52872623
      const files = shell.find(`${templatePath}/.`).filter((file) => {
        return (
          !!path.relative(templatePath, file) &&
          !file.match(/\/\.umi$|\/\.umi\//) &&
          !file.match(/\/node_modules$|\/node_modules\/(?!create-chiron-app)/) &&
          !file.match(/\.DS_Store$/)
        );
      });
      console.log(files);

      files.forEach((src) => {
        // windows、mac 电脑文件分割符不同
        const relativePath = path.relative(templatePath, src);
        const dest = path.resolve(appPath, relativePath);

        if (fse.statSync(src).isDirectory()) {
          fse.mkdirSync(dest);
        } else {
          spinner.start();

          spinner.text = chalk.green(`创建 ${path.parse(src).base} 文件`);
          // console.log(chalk.green(`创建 ${path.parse(src).base} 文件`));
          fse.copyFileSync(src, dest);
          spinner.succeed();
        }
      });

      fse.writeFileSync(metaPath, JSON.stringify(meta, undefined, 2), { encoding: 'utf8' });

      // console.log(chalk.blue('项目创建完成，请查看'));
      // spinner.text = 'Download template successful~'

      console.clear();
      spinner.text = 'Initialize project successful.';
      spinner.succeed();
      console.log(`
      To get started:
      cd ${chalk.yellow(appName)}
      ${chalk.yellow('npm install')} or ${chalk.yellow('yarn install')}
      ${chalk.yellow('npm run dev')} or ${chalk.yellow('yarn run dev')}
      `);
    } catch (e) {
      spinner.text = chalk.red(`Download template failed. ${err}`);
      console.log(chalk.red(e));
    }
  };
};
