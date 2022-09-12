import { useCallback, useEffect, useState } from "react";
import Resume from "./components/Resume";

export default () => {
  const [formBasic, setFormBasic] = useState({
    name: "一泽今天写bug了吗",
    mobile: "123456789",
    email: "3055859479@qq.com",
    frontEndTime: "2年",
    school: "中南大学",
    major: "计算机科学与技术（非相关专业可不填）",
    age: 25,
    salary: "25k（不填为面议）",
    blog: "www.blog.com(没有可不填)",
    github: "www.github.com(没有可不填)",
  });

  const [techData, setTechData] = useState({
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

  const [data, setData] = useState({
    BasicDrawerVisible: false,
    techDrawerVisible: true,
  });

  const setVisibleFn = useCallback((name: string) => {
    setData((data) => {
      data[name] = true;
    });
  }, []);

  useEffect(() => {
    console.log(techData);
  }, [techData]);

  return (
    <>
      <Resume setVisible={setVisibleFn} form={formBasic} techData={techData} />
      <BasicDrawer
        visible={data.BasicDrawerVisible}
        form={formBasic}
        setVisible={(content) => (data.BasicDrawerVisible = content)}
      />
      <TechDrawer
        visible={data.techDrawerVisible}
        techData={techData}
        setVisible={(content) => (data.techDrawerVisible = content)}
      />
    </>
  );
};
