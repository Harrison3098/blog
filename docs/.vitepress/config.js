/**
 * @description  : 配置入口
 * @Author       : Sagit
 * @Date         : 2022-09-15 14:51:24 +0800
 * @LastEditors  : Sagit
 * @LastEditTime : 2022-09-15 17:05:49 +0800
 * @FilePath     : /sagit-zhx-vitepress-blog/docs/.vitepress/config.js
 */
import { defineConfig } from 'vitepress'
/**
 * @type {import('vitepress').UserConfig}
 */
const config = defineConfig({
  title: 'Sagit\'s Blog',         // 网站标题
  description: 'Sagit\'s Blog.', // 网站描述
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  appearance: true, // 深色模式
  ignoreDeadLinks: true,
  lastUpdated: true,
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  // head: [
  //   // 改变title的图标
  //   [
  //     'link',
  //     {
  //       rel: 'icon',
  //       href: '/img/linktolink.png',//图片放在public文件夹下
  //     },
  //   ],
  // ],
  // 主题配置
  themeConfig: {
    // repo: 'vuejs/vitepress', // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/navigation/about.md' },
    ],
    //   侧边导航
    sidebar: [
      {
        text: "Git",
        items: [
          { text: 'Git工作流', link: '/git/gitWorkFlow.md' },
          { text: 'Git规范', link: '/git/gitRules.md' },
          { text: 'commit团队规范约束', link: '/git/commitlint.md' },
        ]
      },
      {
        text: "GIS",
        items: [
          { text: 'GeoServer', link: '/gis/geoServer.md' },
          { text: '地图切片', link: '/gis/gisMapTile.md' },
        ]
      },
    ]
  }
})

export default config
