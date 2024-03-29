import { Button, Drawer } from "antd";
import React ,{ FC, memo, useCallback } from "react";
import { TechDataType } from "../../types/static";
import "./index.css";
interface TechDrawerProps {
  techData: TechDataType;
  handleCloseDrawer: (str: "techDrawerVisible") => void;
  visible: boolean;
  onChooseList: (
    type: "tools" | "webgl" | "frame" | "list",
    index: number
  ) => void;
}
const TechDrawer: FC<TechDrawerProps> = memo(
  ({ techData, visible, handleCloseDrawer, onChooseList }) => {
    const { tools, webgl, frame, list } = techData;
    const onClose = useCallback(() => {
      handleCloseDrawer("techDrawerVisible");
    }, [handleCloseDrawer]);
    return (
      <>
        <Drawer
          title="选择你的技术栈"
          width={720}
          open={visible}
          key="techDrawer"
          styles={{body:{ paddingBottom: "80px" },footer:{textAlign: "right"}}}
          onClose={onClose}
        >
          <div className="chooseList">
            {tools.map((v, i) => (
              <div className="btn" key={i}>
                <Button
                  type={v.select ? "primary" : "default"}
                  onClick={() => onChooseList("tools", i)}
                >
                  {v.name}
                </Button>
              </div>
            ))}
            {webgl.map((v, i) => (
              <div className="btn" key={i}>
                <Button
                  type={v.select ? "primary" : "default"}
                  onClick={() => onChooseList("webgl", i)}
                >
                  {v.name}
                </Button>
              </div>
            ))}
            {frame.map((v, i) => (
              <div className="btn" key={i}>
                <Button
                  type={v.select ? "primary" : "default"}
                  onClick={() => onChooseList("frame", i)}
                >
                  {v.name}
                </Button>
              </div>
            ))}
            {list.map((v, i) => (
              <div className="btn" key={i}>
                <Button
                  type={v.select ? "primary" : "default"}
                  onClick={() => onChooseList("list", i)}
                >
                  {v.name}
                </Button>
              </div>
            ))}
          </div>
        </Drawer>
      </>
    );
  }
);
export default TechDrawer;
