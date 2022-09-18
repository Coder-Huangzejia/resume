import { FC, memo, useCallback } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input } from "antd";
import { WorkDataItemType, WorkDataType } from "../../types/static";
interface WorkDrawerProps {
  handleCloseDrawer: (str: "workDrawerVisible") => void;
  visible: boolean;
  initialValues: WorkDataType;
  onChange: (_: WorkDataItemType, allValues: { work: WorkDataType }) => void;
}
const WorkDrawer: FC<WorkDrawerProps> = memo(
  ({ visible, handleCloseDrawer, initialValues, onChange }) => {
    const onClose = useCallback(() => {
      handleCloseDrawer("workDrawerVisible");
    }, [handleCloseDrawer]);
    const { TextArea } = Input;
    const { Item, List } = Form;
    return (
      <>
        <Drawer
          title="工作项目"
          width={720}
          key="workDrawer"
          visible={visible}
          bodyStyle={{ paddingBottom: "80px" }}
          footerStyle={{ textAlign: "right" }}
          onClose={onClose}
        >
          <Form
            autoComplete="off"
            initialValues={{ work: initialValues }}
            onValuesChange={onChange}
          >
            <List name="work">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div
                      key={key}
                      style={{
                        position: "relative",
                        borderBottom: "1px solid #f0f0f0",
                        marginBottom: "12px",
                      }}
                    >
                      <Item
                        {...restField}
                        name={[name, "workName"]}
                        label="项目名称"
                        rules={[
                          { required: true, message: "请填写项目名称！" },
                        ]}
                      >
                        <Input
                          placeholder="项目名称"
                          style={{ width: "288px" }}
                        />
                      </Item>
                      <Item
                        {...restField}
                        name={[name, "skill"]}
                        label="项目技术"
                        rules={[{ required: true, message: "请填写技术栈！" }]}
                      >
                        <Input
                          placeholder="技术栈"
                          style={{ width: "288px" }}
                        />
                      </Item>

                      <Item
                        {...restField}
                        name={[name, "content"]}
                        label="项目内容"
                        rules={[
                          { required: true, message: "请填写项目内容！" },
                        ]}
                      >
                        <TextArea
                          placeholder="描述一下项目"
                          style={{ minHeight: "100px" }}
                        />
                      </Item>
                      <Button
                        type="link"
                        onClick={() => remove(name)}
                        block
                        style={{
                          position: "absolute",
                          right: "20%",
                          top: "20%",
                          width: "95px",
                          color: "red",
                        }}
                        icon={<MinusCircleOutlined />}
                      >
                        删除此项
                      </Button>
                    </div>
                  ))}
                  <Item>
                    <Button
                      type="dashed"
                      onClick={add}
                      block
                      icon={<PlusOutlined />}
                    >
                      添加工作项目或作品
                    </Button>
                  </Item>
                </>
              )}
            </List>
          </Form>
        </Drawer>
      </>
    );
  }
);
export default WorkDrawer;
