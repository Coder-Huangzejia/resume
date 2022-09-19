import { FC, memo, useMemo } from "react";
import {
  DrawerVisibleType,
  BasicDataType,
  JobDataType,
  TechDataType,
  WorkDataType,
  educationSelect
} from "../../types/static";
import { formatJobPeriod } from "../../util/date";
import "./index.css";

interface ResumeProps {
  techData: TechDataType;
  basicData: BasicDataType;
  handleOpenDrawer: (name: keyof DrawerVisibleType) => void;
  jobData: JobDataType;
  workData: WorkDataType;
}

const Resume: FC<ResumeProps> = memo(
  ({ techData, basicData, handleOpenDrawer, jobData, workData }) => {
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
      reward,
      age,
      education
    } = basicData;
    const { webgl, frame } = techData;
    const toolStr = useMemo(() => {
      return techData.tools
        .filter((item) => item.select)
        .reduce((pre, item) => (pre ? pre + "/" + item.name : item.name), "");
    }, [techData]);
    return (
      <div id="resume-wrapper">
        <div
          className="header"
          onClick={() => handleOpenDrawer("basicDrawerVisible")}
        >
          <div className="header-title">
            <span className="author-name">{name}</span>
            <span className="author-intro"></span>
          </div>
          <div className="header-list">
            <div className="header-left">
              <ul>
                <li>联系方式： {mobile}</li>
                <li>年龄： {age}</li>
                <li>邮箱： {email}</li>
                <li>毕业学校： {school}</li>
              </ul>
            </div>
            <div className="header-right">
              <ul>
                <li>前端工作经验： {frontEndTime}</li>
                <li>学历： {educationSelect[education]}</li>
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
                <span
                  style={{ display: webgl[0].select ? "list-item" : "none" }}
                >
                  熟悉图形学和webgl，熟练使用threejs框架，
                </span>
                <span
                  style={{ display: webgl[1].select ? "list-item" : "none" }}
                >
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

        <div
          className="work-experience"
          onClick={() => handleOpenDrawer("jobDrawerVisible")}
        >
          <span className="icon"></span>
          <span className="subtitle">工作经历</span>
          <span className="long-line"></span>
          <div className="detail-list">
            {jobData.map((v, i) => (
              <div className="company" key={i}>
                <h2>
                  {v.companyName}
                  <span style={{ float: "right" }}>
                    {formatJobPeriod(v.period)}
                  </span>
                </h2>
                <span className="tools">
                  部门：{v.department} | 职位：{v.position}
                </span>
                <span className="project-title">工作职责</span>
                <span className="project-intro">{v.jobDescription}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="open-source"
          onClick={() => handleOpenDrawer("workDrawerVisible")}
        >
          <span className="icon"></span>
          <span className="subtitle">工作项目</span>
          <span className="long-line"></span>
          <div className="detail-list">
            {workData.map((v, i) => (
              <div key={i}>
                <span className="source-name">{v.workName}</span>
                <div style={{ margin: "10px 0" }}>
                  <span className="project-title">技术栈</span>
                  <span className="project-intro">{v.skill}</span>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <span className="project-title">项目内容</span>
                  <span className="project-intro">{v.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="honor-eva"
          onClick={() => handleOpenDrawer("basicDrawerVisible")}
        >
          <div className="self-evaluation">
            <span className="icon"></span>
            <span className="subtitle">自我评价</span>
            <span className="long-line"></span>
            <div className="detail-list">{evaluation}</div>
          </div>
          <div className="clear-fix"></div>
        </div>
        <div
          className="honor-reward"
          onClick={() => handleOpenDrawer("basicDrawerVisible")}
        >
          <span className="icon"></span>
          <span className="subtitle">荣誉奖励</span>
          <span className="long-line short-line"></span>
          <div className="detail-list">{reward}</div>
        </div>
        <div
          className="person-info"
          onClick={() => handleOpenDrawer("basicDrawerVisible")}
        >
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
  }
);
export default Resume;
