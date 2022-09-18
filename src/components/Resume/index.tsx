import { FC, memo, useMemo } from "react";
import { DrawerVisibleType, FormStaticType, JobDataType, TechDataType } from "../../types/static";
import "./index.css";

interface ResumeProps {
  techData: TechDataType;
  formData: FormStaticType;
  handleOpenDrawer: (name: keyof DrawerVisibleType) => void;
  jobData:JobDataType
}

const Resume: FC<ResumeProps> = memo(({ techData, formData, handleOpenDrawer,jobData }) => {
  const {
    name,
    mobile,
    email,
    school,
    frontEndTime,
    salary,
    github,
    blog,
    major,
    evaluation,
    reward
  } = formData;
  const { webgl, frame } = techData;
  const toolStr = useMemo(() => {
    return techData.tools
      .filter((item) => item.select)
      .reduce((pre, item) => (pre ? pre + "/" + item.name : item.name), "");
  }, [techData]);
  return (
    <div id="resume-wrapper">
      <div className="header" onClick={() => handleOpenDrawer("basicDrawerVisible")}>
        <div className="header-title">
          <span className="author-name">{name}</span>
          <span className="author-intro"></span>
        </div>
        <div className="header-list">
          <div className="header-left">
            <ul>
              <li>联系方式： {mobile}</li>
              <li>邮箱： {email}</li>
              <li>毕业学校： {school}</li>
            </ul>
          </div>
          <div className="header-right">
            <ul>
              <li>前端工作经验： {frontEndTime}</li>
              <li>期望薪资： {salary || "面议"}</li>
              <li style={{ display: major ? "list-item" : "none" }}>
                专业： {major}
              </li>
            </ul>
          </div>
          <div className="clear-fix"></div>
        </div>
      </div>

      <div className="pro-skill">
        <span className="icon"></span>
        <span className="subtitle">技能清单</span>
        <span className="long-line"></span>
        <div
          className="detail-list"
          onClick={() => handleOpenDrawer("techDrawerVisible")}
        >
          <ul>
            <li>熟练掌握HTML/CSS/JavaScript</li>
            <li>
              熟悉常用前端工程化工具{toolStr}
              ，掌握模块化思想和技术实现方案
            </li>
            <li>
              <span style={{ display: webgl[0].select ? "list-item" : "none" }}>
                熟悉图形学和webgl，熟练使用threejs框架，
              </span>
              <span style={{ display: webgl[1].select ? "list-item" : "none" }}>
                熟练canvas相关渲染及动画操作
              </span>
            </li>
            <li style={{ display: frame[2].select ? "list-item" : "none" }}>
              熟练掌握Axure，Photoshop、 illustrator
              等设计软件，能独立完成产品功能的交互界面设计
            </li>
            <li style={{ display: frame[1].select ? "list-item" : "none" }}>
              熟练掌握React前端框架，会应用react生态常用工具，如redux/react-router/umi/dva
            </li>
            <li style={{ display: frame[1].select ? "list-item" : "none" }}>
              熟练使用React常用UI框架，如Ant Design
            </li>
            <li style={{ display: frame[0].select ? "list-item" : "none" }}>
              熟练掌握Vue2和Vue3，会应用Vue生态常用工具，如vue-router/vuex
            </li>
            <li style={{ display: frame[0].select ? "list-item" : "none" }}>
              熟练使用Vue常用UI框架，如Ant Design Pro/ElementUI
            </li>
            <li>熟悉CSS预编译语言，掌握LESS/SASS预编译语言等</li>
            <li>
              熟悉计算机网络理论，掌握基于Ajax的前端应用开发经验，会熟练使用Axios等网络请求库
            </li>
            <li>
              具有
              {techData.list
                .filter((item) => item.select)
                .reduce(
                  (pre, item) => (pre ? pre + "、" + item.name : item.name),
                  ""
                )}
              开发经验
            </li>
            <li>
              有良好的编码习惯，对前端技术有持续的热情，个性乐观开朗,逻辑性强，善于与团队融为一体
            </li>
          </ul>
        </div>
      </div>

      <div className="work-experience">
        <span className="icon"></span>
        <span className="subtitle">工作经历</span>
        <span className="long-line"></span>
        <div className="detail-list"  onClick={() => handleOpenDrawer("jobDrawerVisible")}>
          {
            jobData.map((v,i)=> <div className="company" key={i}>
            <h2>
              {v.companyName} <span>{v.period}</span>
            </h2>
            <span className="tools">
              部门：{v.department} | 职位：{v.position}
            </span>
            <span className="project-title">工作描述</span>
            <span className="project-intro">
             {v.jobDescription}
            </span>
          </div>)
          }
        </div>
      </div>

      <div className="open-source">
        <span className="icon"></span>
        <span className="subtitle">工作项目或作品</span>
        <span className="long-line"></span>
        <div className="detail-list">
          <ul>
            <li>
              <span className="source-name">项目名称：xxxx</span>
              <br />
              <span>
                一款使用Spring Framework +
                AngularJS写的单页应用博客系统，使用MyBatis作为ORM框架，写作语法支持Markdown。部署在阿里云的CentOS服务器上，使用Nginx作的权限控制和端口转发。
              </span>
              <span className="source-url">
                源代码地址：<a href="#">www.xxxxxx.com</a>
              </span>
            </li>
            <li>
              <span className="source-name">项目名称：xxxx</span>
              <br />
              <span>
                里边存放了从开始学写代码后的一些记录，ACM刷题、Java学习、Android学习、框架以及其他的学习，并有使用JS、Java、Android写过的一些小东西。
              </span>
              <span className="source-url">
                地址：<a href="#">www.xxxxxx.com</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="honor-eva">
        <div className="self-evaluation">
          <span className="icon"></span>
          <span className="subtitle">自我评价</span>
          <span className="long-line"></span>
          <div className="detail-list">
           {evaluation}
          </div>
        </div>
        <div className="clear-fix"></div>
      </div>
      <div className="honor-reward">
        <span className="icon"></span>
        <span className="subtitle">荣誉奖励</span>
        <span className="long-line short-line"></span>
        <div className="detail-list">
         {reward}
        </div>
      </div>
      <div className="person-info">
        <span className="icon"></span>
        <span className="subtitle">博客</span>
        <span className="long-line"></span>
        <div className="detail-list">
          <ul>
            <li>掘金博客： {blog}</li>
            <li>GitHub： {github}</li>
          </ul>
          <div className="clear-fix"></div>
        </div>
      </div>
    </div>
  );
});
export default Resume;
