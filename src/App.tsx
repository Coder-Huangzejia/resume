import { Button, ConfigProvider } from "antd";
import { useCallback, useState } from "react";
import BasicDrawer from "./components/BasicDrawer";
import Resume from "./components/Resume/index";
import TechDrawer from "./components/TechDrawer";
import {
  DrawerVisibleType,
  BasicDataType,
  JobDataItemType,
  JobDataType,
  TechDataType,
  WorkDataItemType,
  WorkDataType,
} from "./types/static";
import downloadPDF from "./util/html2pdf";
import "./App.css";
import JobDrawer from "./JobDrawer";
import "moment/locale/zh-cn";
import locale from "antd/lib/locale/zh_CN";
import { cloneDeep } from "lodash";
import WorkDrawer from "./components/WorkDrawer";
import { initBasicData, initJobData, initTechData, initWorkData } from "./mock/mock";
import moment from "moment";
export default function App() {
  const [basicData, setBasicData] = useState<BasicDataType>(() =>
    localStorage.getItem("basicData")
      ? JSON.parse(localStorage.getItem("basicData")!)
      : initBasicData
  );

  const [techData, setTechData] = useState<TechDataType>(() =>
  localStorage.getItem("techData")
    ? JSON.parse(localStorage.getItem("techData")!)
    : initTechData);
  const [jobData, setJobData] = useState<JobDataType>(()=>localStorage.getItem("jobData")
  ? JSON.parse(localStorage.getItem("jobData")!).map((v:JobDataItemType)=>({...v,period:v.period.map(k=>moment(k))}))
  : initJobData);
  const [workData, setWorkData] = useState<WorkDataType>(()=>localStorage.getItem("workData")
  ? JSON.parse(localStorage.getItem("workData")!)
  : initWorkData);
  const [drawerVisible, setDrawerVisible] = useState<DrawerVisibleType>({
    basicDrawerVisible: false,
    techDrawerVisible: false,
    jobDrawerVisible: false,
    workDrawerVisible: false,
  });

  const handleOpenDrawer = useCallback((name: keyof DrawerVisibleType) => {
    setDrawerVisible((pre) => ({ ...pre, [name]: true }));
  }, []);
  const handleCloseDrawer = useCallback((name: keyof DrawerVisibleType) => {
    setDrawerVisible((pre) => ({ ...pre, [name]: false }));
  }, []);
  const onBasicChange = useCallback((changedFields: BasicDataType) => {
    setBasicData((pre) => ({ ...pre, ...changedFields }));
  }, []);
  const onChooseList = useCallback(
    (type: "tools" | "webgl" | "frame" | "list", targetIndex: number) => {
      const res = techData[type].map((v, i) =>
        i === targetIndex ? { ...v, select: !v.select } : v
      );
      setTechData((pre) => ({ ...pre, [type]: res }));
    },
    [techData]
  );
  const onJobChange = useCallback(
    (_: JobDataItemType, allValues: { job: JobDataType }) => {
      const ret = allValues.job.map((v) => ({
        companyName: v.companyName,
        period: v.period,
        department: v.department,
        jobDescription: v.jobDescription,
        position: v.position,
      }));
      setJobData(cloneDeep([...ret]));
    },
    []
  );
  const onWorkChange = useCallback(
    (_: WorkDataItemType, allValues: { work: WorkDataType }) => {
      const ret = allValues.work.map((v) => ({
        workName: v.workName,
        skill: v.skill,
        content: v.content,
      }));
      setWorkData(cloneDeep([...ret]));
    },
    []
  );
  // 下载PDF
  const exportPDF = useCallback(() => {
    const pdf = document.getElementById("resume-wrapper") as HTMLElement;
    downloadPDF(pdf, "Web前端开发", false, () => {});
  }, []);

  const save = () => {
    localStorage.setItem("basicData", JSON.stringify(basicData));
    localStorage.setItem("jobData", JSON.stringify(jobData));
    localStorage.setItem("techData", JSON.stringify(techData));
    localStorage.setItem("workData", JSON.stringify(workData));
  };
  const reset = () => {
   setBasicData({...initBasicData})
   setTechData({...initTechData})
   setJobData([...initJobData])
   setWorkData([...initWorkData])
  };

  return (
    <ConfigProvider locale={locale}>
      <Resume
        handleOpenDrawer={handleOpenDrawer}
        basicData={basicData}
        jobData={jobData}
        techData={techData}
        workData={workData}
      />
      <BasicDrawer
        visible={drawerVisible.basicDrawerVisible}
        onChange={onBasicChange}
        initialValues={basicData}
        handleCloseDrawer={handleCloseDrawer}
      />
      <TechDrawer
        visible={drawerVisible.techDrawerVisible}
        techData={techData}
        onChooseList={onChooseList}
        handleCloseDrawer={handleCloseDrawer}
      />
      <JobDrawer
        visible={drawerVisible.jobDrawerVisible}
        handleCloseDrawer={handleCloseDrawer}
        onChange={onJobChange}
        initialValues={jobData}
      />
      <WorkDrawer
        visible={drawerVisible.workDrawerVisible}
        handleCloseDrawer={handleCloseDrawer}
        onChange={onWorkChange}
        initialValues={workData}
      />
      <div className="operation-wrapper">
      <Button type="link" shape="default" className="operation-btn" onClick={reset}>
          重置简历
        </Button>
        <Button type="link" shape="default" className="operation-btn" onClick={save}>
          保存简历
        </Button>
        <Button
          type="link"
          shape="default"
          className="operation-btn"
          onClick={exportPDF}
        >
          生成简历
        </Button>
      </div>
    </ConfigProvider>
  );
}
