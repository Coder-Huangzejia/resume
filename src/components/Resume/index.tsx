import  React,{ FC, memo, useMemo }  from "react";
import {
  DrawerVisibleType,
  BasicDataType,
  JobDataType,
  TechDataType,
  WorkDataType,
} from "../../types/static";
import { formatJobPeriod } from "../../util/date";
import "./index.css";
import { Tag } from "antd";

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
      salary,
      major,
      evaluation,
      reward,
      age,
    } = basicData;
    const { frame } = techData;
    const toolStr = useMemo(() => {
      return techData.tools
        .filter((item) => item.select)
        .reduce((pre, item) => (pre ? pre + "、" + item.name : item.name), "");
    }, [techData]);
    return (
      <div id="resume-wrapper">
        <div
          className="header"
          onClick={() => handleOpenDrawer("basicDrawerVisible")}
        >
          <div className="header-title">
            <span className="author-name">{name}</span>
            <span className="author-intro">求职意向：web前端开发/全栈开发</span>
          </div>
          <div className="header-list">
            <div className="header-left">
              <ul>
                <p>学历： <span>本科</span></p>
              <p>毕业院校： <span>{school}</span></p>
              {/* <p>工作经验： <span>{frontEndTime}</span></p> */}
                <p>博客： <span className="blog-text">juejin.cn/user/2419405862219277/posts</span></p>
              </ul>
            </div>
            <div className="header-right">
              <ul>
                
              <p>性别&年龄： <span><span style={{marginRight: 15}}>男</span>{age}岁</span></p>
                <p>邮箱： <span>{email}</span></p>
                <p>联系方式： <span>{mobile}</span></p>
                {/* <li style={{ display: github ? "list-item" : "none" }}>GitHub： {github}</li> */}
                <p style={{ display: salary ? "list-item" : "none" }}>期望薪资： {salary}</p>
                <p style={{ display: major ? "list-item" : "none" }}>
                  专业： {major}
                </p>
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
            <ul style={{fontSize:17}}>
              <li>熟练掌握 React ，熟练使用 AntDesign 进行 ToB 企业级中后台管理项目开发</li>
              <li style={{ display: frame[0].select ? "list-item" : "none" }}>
                熟练掌握 Vue2/3 ，并具有uni-app项目经验
              </li>
              <li>
              熟练运用 Egg.js、Mongoose，具备 2 年 Nodejs 后端 Web 服务开发经验
              </li>
              {/* <li>
                  熟悉 WebGL+ Three.js 相关Web3D技术
              </li> */}
              <li>
              具备移动端混合式App开发及兼容问题处理的经验
              </li>
              <li>
              具备微信小程序原生开发经验
              </li>
              <li>
                熟悉常用前端工程化工具 {toolStr}
                ，推动前端团队 CI / CD 基础工程建设
              </li>
              <li>
                了解 Python、Go 后端开发和 MySQL、MongoDB 和 Redis 等数据库知识
              </li>
              {/* <li>
                具有
                {techData.list
                  .filter((item) => item.select)
                  .reduce(
                    (pre, item) => (pre ? pre + "、" + item.name : item.name),
                    ""
                  )}
                开发经验
              </li> */}
              
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
                  <div style={{display:'inline-block'}} dangerouslySetInnerHTML={{__html:v.companyName}}/>
                  <span style={{ float: "right" }}>
                    {formatJobPeriod(v.period)}
                  </span>
                </h2>
                {/* <span className="tools">
                  部门：{v.department} | 职位：{v.position}
                </span> */}
                {/* <span className="project-title">工作职责</span> */}
                <div className="project-intro">{v.jobDescription}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="open-source"
          onClick={() => handleOpenDrawer("workDrawerVisible")}
        >
          <span className="icon"></span>
          <span className="subtitle">项目经历</span>
          <span className="long-line"></span>
          <div className="detail-list" id="project-source-id">
            {workData.map((v, i) => (
              <div key={i} className="project-item" style={{marginTop:i===1?90:20}}>
                <span className="source-name">{v.workName}</span>
                {v.address?<div dangerouslySetInnerHTML={{__html:v.address}}/>:''}
                <div style={{ margin: "10px 0",display:'flex' }}>
                  <span className="project-title">✨技术栈</span>
                  <div className="project-skill">
                  {v.skill?.split('+').map((item, ii) => (
                    <Tag key={ii}  color="cyan">{item}</Tag>
                  ))}
                  </div>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <span className="project-title">📌业务概述</span>
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
          style={{display: reward ? "list-item" : "none"}}
          className="honor-reward"
          onClick={() => handleOpenDrawer("basicDrawerVisible")}
        >
          <span className="icon"></span>
          <span className="subtitle">荣誉奖励</span>
          <span className="long-line short-line"></span>
          <div className="detail-list">{reward}</div>
        </div>
        {/* <div
          className="person-info"
          onClick={() => handleOpenDrawer("basicDrawerVisible")}
        >
          <span className="icon"></span>
          <span className="subtitle">博客</span>
          <span className="long-line"></span>
          <div className="detail-list">
            <ul>
              <li>掘金博客： {blog}</li>
            </ul>
            <div className="clear-fix"></div>
          </div>
        </div> */}
      </div>
    );
  }
);
export default Resume;
