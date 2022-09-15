/**
 * @description  : commitlint
 * @Author       : Sagit
 * @Date         : 2022-09-15 16:48:10 +0800
 * @LastEditors  : Sagit
 * @LastEditTime : 2022-09-15 16:49:23 +0800
 * @FilePath     : /sagit-zhx-vitepress-blog/commitlint.config.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'revert',
        'perf'
      ]
    ],
    'subject-full-stop': [
      0, 'never'
    ],
    'subject-case': [
      0, 'never'
    ],
    'header-max-length': [0, 'always', 72]
  }
};
