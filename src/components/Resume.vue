<template>
  <div id="wrapper">
    <div class="header" @click="emit('setVisible', 'BasicDrawerVisible')">
      <div class="header-title">
        <span class="author-name">{{ props.form.name }}</span>
        <span class="author-intro"></span>
      </div>
      <div class="header-list">
        <div class="header-left">
          <ul>
            <li>联系方式： {{ props.form.mobile }}</li>
            <li>邮箱： {{ props.form.email }}</li>
            <li>毕业学校： {{ props.form.school }}</li>
          </ul>
        </div>
        <div class="header-right">
          <ul>
            <li>前端工作经验： {{ props.form.frontEndTime }}</li>
            <li>期望薪资： {{ props.form.salary || "面议" }}</li>
            <li v-show="props.form.major">专业： {{ props.form.major }}</li>
          </ul>
        </div>
        <div class="clear-fix"></div>
      </div>
    </div>

    <div class="pro-skill">
      <span class="icon"></span>
      <span class="subtitle">技能清单</span>
      <span class="long-line"></span>
      <div class="detail-list" @click="emit('setVisible', 'techDrawerVisible')">
        <ul>
          <li>熟练掌握HTML/CSS/JavaScript。</li>
          <li>
            熟悉常用前端工程化工具{{ toolStr }}，掌握模块化思想和技术实现方案。
          </li>
          <li>
            <span v-show="props.techData.webgl[0].select"
              >熟悉图形学和webgl，熟练使用threejs框架，</span
            >
            <span v-show="props.techData.webgl[1].select"
              >熟练canvas相关渲染及动画操作</span
            >
          </li>
          <li v-show="props.techData.frame[2].select">
            熟练掌握Axure，Photoshop、 illustrator
            等设计软件，能独立完成产品功能的交互界面设计
          </li>
          <li v-show="props.techData.frame[1].select">
            熟练掌握React前端框架，会应用react生态常用工具，如redux/react-router/umi/dva。
          </li>
          <li v-show="props.techData.frame[1].select">
            熟练使用React常用UI框架，如Ant Design。
          </li>
          <li v-show="props.techData.frame[0].select">
            熟练掌握Vue2和Vue3，会应用Vue生态常用工具，如vue-router/vuex。
          </li>
          <li v-show="props.techData.frame[0].select">
            熟练使用Vue常用UI框架，如Ant Design Pro/ElementUI。
          </li>
          <li>熟悉CSS预编译语言，掌握LESS/SASS预编译语言等</li>
          <li>
            熟悉计算机网络理论，掌握基于Ajax的前端应用开发经验，会熟练使用Axios等网络请求库
          </li>
          <li>
            具有{{
              props.techData.list
                .filter((item) => item.select)
                .reduce(
                  (pre, item) => (pre ? pre + "、" + item.name : item.name),
                  ""
                )
            }}开发经验
          </li>
          <li>
            有良好的编码习惯，对前端技术有持续的热情，个性乐观开朗,逻辑性强，善于与团队融为一体
          </li>
        </ul>
      </div>
    </div>

    <div class="work-experience">
      <span class="icon"></span>
      <span class="subtitle">工作经历</span>
      <span class="long-line"></span>
      <div class="detail-list">
        <div class="company">
          <h2>
            北京悠悠自在科技有限公司 <span>（2021年10月-2022年2月）</span>
          </h2>
          <span class="tools">部门： 技术部 | 职位：Web前端开发工程师</span>

          <span class="project-title">工作描述</span>
          <span class="project-intro">
            我在此项目负责了哪些工作，这个项目中，有什么里给我最深刻的印象，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。
          </span>
        </div>

        <div class="company">
          <h2>XX公司（xxxx年xx月-xxxx年xx月）</h2>
          <span class="tools">开发工具： xxx + xxxx + xxx + xxxxx + xxxx </span>

          <span class="project-title">xxx项目</span>
          <span class="project-intro">
            我在此项目负责了哪些工作，这个项目中，有什么里给我最深刻的印象，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。
          </span>
        </div>
      </div>
    </div>

    <div class="open-source">
      <span class="icon"></span>
      <span class="subtitle">工作项目或作品</span>
      <span class="long-line"></span>
      <div class="detail-list">
        <ul>
          <li>
            <span class="source-name">项目名称：xxxx</span><br />
            <span
              >一款使用Spring Framework +
              AngularJS写的单页应用博客系统，使用MyBatis作为ORM框架，写作语法支持Markdown。部署在阿里云的CentOS服务器上，使用Nginx作的权限控制和端口转发。</span
            >
            <span class="source-url"
              >源代码地址：<a href="#">www.xxxxxx.com</a></span
            >
          </li>
          <li>
            <span class="source-name">项目名称：xxxx</span><br />
            <span
              >里边存放了从开始学写代码后的一些记录，ACM刷题、Java学习、Android学习、框架以及其他的学习，并有使用JS、Java、Android写过的一些小东西。</span
            >
            <span class="source-url">地址：<a href="#">www.xxxxxx.com</a></span>
          </li>
        </ul>
      </div>
    </div>

    <div class="honor-eva">
      <div class="self-evaluation">
        <span class="icon"></span>
        <span class="subtitle">自我评价</span>
        <span class="long-line short-line"></span>
        <div class="detail-list">
          <ul>
            <li>喜欢学习新东西，善于折腾</li>
            <li>工作认真，细心，有很强的责任感</li>
            <li>良好的语言沟通能力，能够积极主动交流以便解决问题</li>
            <li>性格外向开朗，喜欢运动，喜欢打篮球，能够独立解决问题</li>
          </ul>
        </div>
      </div>

      <div class="clear-fix"></div>
    </div>
    <div class="honor-reward">
      <span class="icon"></span>
      <span class="subtitle">荣誉奖励</span>
      <span class="long-line short-line"></span>
      <div class="detail-list">
        <ul>
          <li>XXXXXXXXXXXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXXXXXXX</li>
          <li>XXXXXXXXXXXXXXXXXXXXX</li>
        </ul>
      </div>
    </div>
    <div class="person-info">
      <span class="icon"></span>
      <span class="subtitle">网站与博客</span>
      <span class="long-line"></span>
      <div class="detail-list">
        <div class="info-left">
          <span>博客： {{ props.form.blog }}</span>
          <span>github： {{ props.form.github }}</span>
        </div>

        <div class="clear-fix"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
let emit = defineEmits(["setVisible"]);
let props = defineProps(["form", "techData"]);

let toolStr = computed(() => {
  let tools = props.techData.tools;
  return tools
    .filter((item) => item.select)
    .reduce((pre, item) => (pre ? pre + "/" + item.name : item.name), "");
});
</script>

<style scoped>
#top {
  font-size: 1.2rem;
  background: #323639;
  height: 2.5em;
}
#top a {
  color: #fff;
  text-decoration: none;
  line-height: 2.3em;
}
#top a .top-download {
  text-decoration: none;
  display: block;
  margin: auto;
  text-align: center;
}
#top .top-title {
  display: none;
}
#wrapper a {
  color: #42a5f5;
  text-decoration: none;
}
.header {
  margin-top: 0.5em;
}
.header .author-name {
  font-size: 1.4rem;
}
.header .header-list {
  margin-top: 0.8em;
}
.subtitle {
  font-size: 1.2rem;
  display: block;
  color: #943634;
  font-weight: 600;
  margin-bottom: 0.5em;
}
.person-info {
  margin-top: 1em;
}
.person-info .detail-list {
  padding-left: 1.5em;
}
.person-info .detail-list span {
  display: block;
}
.pro-skill {
  margin-top: 1em;
}
.work-experience {
  margin-top: 1em;
}
.work-experience .company {
  margin-top: 1em;
}
.work-experience .company h2 {
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
}
.work-experience .company h2 span {
  font-weight: normal;
  display: inline !important;
}
.work-experience .company .tools {
  display: block;
  margin-bottom: 0.5em;
  text-indent: 0;
}
.work-experience .company .project-title {
  font-size: 1.1rem;
  display: block;
  padding-left: 0.5em;
  background: url("../assets/imgs/li_icon.png") no-repeat;
  background-position-y: 0.4em;
  background-position-x: 0.35em;
  -webkit-background-size: 0.6em;
  background-size: 0.6em;
}
.work-experience .company span {
  display: block;
  text-indent: 1em;
}
.work-experience .company p {
  margin: 0;
}
.work-experience .company:first-child {
  margin-top: 0;
}
.open-source {
  margin-top: 1em;
}
.open-source .source-name {
  font-size: 1.1rem;
  font-weight: 600;
}
.honor-reward {
  position: relative;
  margin-bottom: 1em;
  height: 200px;
}
.self-evaluation {
  margin: 1em 0 3em 0;
}
.long-line {
  position: absolute;
  display: block;
  width: 690px;
  height: 2px;
  top: 32px;
  left: 58px;
  background: #1a73e8;
}
.icon {
  width: 35px;
  height: 35px;
  display: inline-block;
  position: absolute;
  left: 22px;
}
.subtitle {
  position: absolute;
  left: 62px;
  font-size: 19px;
  color: #1a73e8;
  font-weight: 600;
  top: 2px;
}
.detail-list {
  line-height: 1.6;
  padding: 50px 60px 0px;
}
#top {
  position: fixed;
  background: #1a73e8;
  left: 0;
  top: 0;
  right: 0;
  margin: 0;
  height: 50px;
  box-shadow: 0 1px 1px #1a73d7;
  font-size: 16px;
  color: #f1f1f1;
  z-index: 99;
}
#top .top-title {
  line-height: 50px;
  display: block;
  text-align: center;
}
#top .top-download {
  position: absolute;
  top: 9px;
  right: 40px;
  display: inline-block;
  line-height: 32px;
  color: #6a6a6a;
  background: #f2f2f2;
  padding: 0 12px;
  border-radius: 5px;
  font-size: 14px;
}
#wrapper {
  width: 800px;
  min-height: 500px;
  background: #fff;
  margin: 70px auto;
}
.header {
  width: 690px;
  margin-left: 50px;
}
.header .header-title {
  padding-top: 34px;
}
.header .header-title .author-name {
  font-size: 28px;
}
.header .header-title .author-intro {
  font-size: 16px;
}
.header .header-list .header-left {
  float: left;
}
.header .header-list .header-left ul {
  padding-left: 10px;
}
.header .header-list .header-right {
  float: right;
}
.header .header-list ul {
  line-height: 1.7;
}
.person-info {
  position: relative;
  min-height: 130px;
}
.person-info .icon {
  background: url("../assets/imgs/person_info_icon.png") no-repeat;
}
.person-info .detail-list .info-left {
  float: left;
}
.person-info .detail-list .info-right {
  float: right;
}
.person-info .detail-list span {
  display: block;
}
.pro-skill {
  position: relative;
  min-height: 156px;
}
.pro-skill .icon {
  background: url("../assets/imgs/pro_skill_icon.png") no-repeat;
}
.pro-skill ul {
  padding: 0;
  margin: 0;
}
.work-experience {
  position: relative;
  min-height: 440px;
}
.work-experience .icon {
  background: url("../assets/imgs/work_experience_icon.png") no-repeat;
}
.work-experience .detail-list .company {
  margin-top: 25px;
}
.work-experience .detail-list .company h2 {
  font-size: 18px;
  margin: 0;
  font-weight: 900;
}
.work-experience .detail-list .company .tools {
  display: block;
  margin-bottom: 16px;
}
.work-experience .detail-list .company .project-title {
  font-weight: bold;
  font-size: 17px;
  background: url("../assets/imgs/li_icon.png") no-repeat;
  -ms-background-position-y: 8px;
  background-position-y: 8px;
  color: #333;
}
.work-experience .detail-list .company .project-intro {
  margin: 2px 0 8px 0;
}
.work-experience .detail-list .company .project-intro p {
  margin-top: 0;
}
.work-experience .detail-list .company .project-intro p:first-child {
  margin: 0;
}
.work-experience .detail-list .company span {
  display: block;
}
.work-experience .detail-list .company:first-child {
  margin-top: 0;
}
.open-source {
  position: relative;
  min-height: 290px;
}
.open-source .icon {
  background: url("../assets/imgs/open_source_icon.png") no-repeat;
}
.open-source .detail-list ul {
  padding: 0;
  margin: 0;
}
.open-source .detail-list .source-name {
  font-weight: bold;
  font-size: 19px;
}
.open-source .detail-list .source-url {
  display: block;
}
.honor-eva {
  min-height: 260px;
}
.honor-eva .honor-reward {
  float: right;
  width: 350px;
  position: relative;
  left: -36px;
}
.honor-reward .icon {
  background: url("../assets/imgs/honor_reward_icon.png") no-repeat;
}
.honor-eva .honor-reward .short-line {
  width: 276px;
}
.honor-eva .honor-reward .detail-list {
  right: 0;
}
.honor-eva .self-evaluation {
  float: left;
  width: 460px;
  position: relative;
}
.honor-eva .self-evaluation .icon {
  background: url("../assets/imgs/self_evaluation_icon.png") no-repeat;
}
.honor-eva .self-evaluation .short-line {
  width: 350px;
}
.honor-eva ul {
  padding: 0;
  margin: 0;
}
.clear-fix {
  clear: both;
}
a {
  color: #000;
  font-size: 17px;
}
</style>
