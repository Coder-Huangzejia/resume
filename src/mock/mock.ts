import moment from "moment"
import { BasicDataType } from "../types/static"

export const initBasicData:BasicDataType={
    name: "一泽今天写bug了吗",
    mobile: "123456789",
    email: "3055859479@qq.com",
    frontEndTime: "2年",
    school: "中南大学",
    major: "计算机科学与技术",
    age: 25,
    salary: "面议",
    blog: "https://juejin.cn/user/2419405862219277",
    github: "https://github.com/3055859479",
    education:'SuperUndergraduate',
    reward:
      "1. 大学英语四级/六级证书\n2. 高级软件设计师（软考证书）\n3. PAT证书",
    evaluation:
      "1. 注重代码质量，有代码洁癖\n2. 在保证一定工作效率的前提下不介意加班\n3. 良好的语言沟通能力，能够积极主动交流以便快速解决问题\n4. 对前端领域的知识有持续学习的动力，注重自身技术的提升\n",
  }

  export const initTechData={
    tools: [
      {
        name: "Gulp",
        select: true,
      },
      {
        name: "Grunt",
        select: true,
      },
      {
        name: "Webpack",
        select: true,
      },
      {
        name: "Parcel",
        select: true,
      },
      {
        name: "Vite",
        select: true,
      },
    ],
    webgl: [
      {
        name: "threejs",
        select: true,
      },
      {
        name: "canvas",
        select: true,
      },
    ],
    frame: [
      {
        name: "vue",
        select: true,
      },
      {
        name: "react",
        select: true,
      },
      {
        name: "UI设计",
        select: true,
      },
    ],
    list: [
      {
        name: "小程序",
        select: true,
      },
      {
        name: "移动端开发",
        select: true,
      },
      {
        name: "Typescript",
        select: true,
      },
      {
        name: "SSR",
        select: true,
      },
      {
        name: "NodeJS",
        select: true,
      },
      {
        name: "PHP",
        select: true,
      },
      {
        name: "JAVA",
        select: true,
      },
      {
        name: "Python",
        select: true,
      },
      {
        name: "GO",
        select: true,
      },
      {
        name: "MYSQL",
        select: true,
      },
      {
        name: "MongoDB",
        select: true,
      },
      {
        name: "Redis",
        select: true,
      },
    ],
  }
  export const initJobData=[
    {
      companyName: "XXX网络科技有限公司",
      period: [moment("2020年7月", "YYYYMM"), moment("2022年5月", "YYYYMM")],
      department: "平台研发部-大前端部",
      position: "Web前端开发",
      jobDescription:
        " 我在此项目负责了哪些工作，这个项目中，有什么给我最深刻的印象，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。",
    },
  ]
  export const initWorkData=[
    {
      workName: "XXX后台管理系统",
      skill: "React+TypeScript+Vite+Mobx",
      content:
        "一款使用Spring Framework + AngularJS写的单页应用博客系统，使用MyBatis作为ORM框架，写作语法支持Markdown。部署在阿里云的CentOS服务器上，使用Nginx作的权限控制和端口转发",
    },
  ]