import { Button } from "antd";
import { useCallback, useState } from "react";
import BasicDrawer from "./components/BasicDrawer";
import Resume from "./components/Resume/index";
import TechDrawer from "./components/TechDrawer";
import {
  DrawerVisibleType,
  FormStaticType,
  TechDataType,
} from "./types/static";
import downloadPDF from "./util/html2pdf";
import "./App.css";
export default function App() {
  const [formBasic, setFormBasic] = useState<FormStaticType>({
    name: "一泽今天写bug了吗",
    mobile: "123456789",
    email: "3055859479@qq.com",
    frontEndTime: "2年",
    school: "中南大学",
    major: "计算机科学与技术（非相关专业可不填）",
    age: 25,
    salary: "25k（不填为面议）",
    blog: "https://juejin.cn/user/2419405862219277",
    github: "https://github.com/3055859479",
  });

  const [techData, setTechData] = useState<TechDataType>({
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
  });

  const [drawerVisible, setDrawerVisible] = useState<DrawerVisibleType>({
    basicDrawerVisible: false,
    techDrawerVisible: false,
  });

  const handleOpenDrawer = useCallback(
    (name: "basicDrawerVisible" | "techDrawerVisible") => {
      setDrawerVisible((pre) => ({ ...pre, [name]: true }));
    },
    []
  );
  const handleCloseDrawer = useCallback(
    (name: "basicDrawerVisible" | "techDrawerVisible") => {
      setDrawerVisible((pre) => ({ ...pre, [name]: false }));
    },
    []
  );
  const onChooseList = useCallback(
    (type: "tools" | "webgl" | "frame" | "list", targetIndex: number) => {
      const res = techData[type].map((v, i) =>
        i === targetIndex ? { ...v, select: !v.select } : v
      );
      setTechData((pre) => ({ ...pre, [type]: res }));
    },
    [techData]
  );
  const exportPDF = useCallback(() => {
    const pdf = document.getElementById("resume-wrapper") as HTMLElement;
    downloadPDF(pdf, "Web前端开发", false, () => {});
  }, []);

  const save = () => {};
  const onChange=useCallback((changedFields:FormStaticType)=>{
    setFormBasic(pre=>({...pre,...changedFields}))
  },[])
  return (
    <>
      <Resume
        setVisible={handleOpenDrawer}
        formData={formBasic}
        techData={techData}
      />
      <BasicDrawer
        visible={drawerVisible.basicDrawerVisible}
        onChange={onChange}
        initialValues={formBasic}
        setVisible={handleCloseDrawer}
      />
      <TechDrawer
        visible={drawerVisible.techDrawerVisible}
        techData={techData}
        onChooseList={onChooseList}
        setVisible={handleCloseDrawer}
      />
      <div className="operation-wrapper">
        <Button type="link" shape="default" className="save-btn" onClick={save}>
          保存简历
        </Button>
        <Button
          type="link"
          shape="default"
          className="download-btn"
          onClick={exportPDF}
        >
          生成简历
        </Button>
      </div>
    </>
  );
}
