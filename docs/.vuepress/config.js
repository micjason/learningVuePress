module.exports = {
  base: "/LearningRecord/",
  title: "漫数窗花，青袍染晨霜",
  description: "Just playing around",
  head: [["link", { res: "icon", href: "./public/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Learning record", link: "/article/record/" },
      { text: "Issue collection", link: "/article/question/" },
      { text: "Interview questions", link: "/article/exam/" },
    ],
    displayAllHeaders: true,
    sidebar: {
      "/article/record/": [
        {
          title: "Vue",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            ["/article/record/vue/route.md", "vue路由"],
            ["/article/record/vue/children.md", "修改子组件样式"],
          ],
        },
        {
          title: "Javascript",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            ["/article/record/js/prototype.md", "原型链"],
            ["/article/record/js/parseInt.md", "parseInt用法"],
            ["/article/record/js/object.md", "对象做键"],
          ],
        },
        {
          title: "Git",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            ["/article/record/git.md", "Git操作备忘"],
          ],
        },
        {
          title: "CSS",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            ["/article/record/css/textalign.md", "文本左右对齐"],
            ["/article/record/css/mobile.md", "移动端适配"],
          ],
        }
      ],
      "/article/question/": ["/"],
      "/article/exam/": ["/"],
    },
  },
};


