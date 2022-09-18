import { FC, memo, useCallback } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input } from "antd";
import RangePicker from "../components/RangePicker";
import { jobPickTimeRange } from "../util/date";
import { JobDataItemType, JobDataType } from "../types/static";
interface JobDrawerProps {
  handleCloseDrawer: (str: "jobDrawerVisible") => void;
  visible: boolean;
  initialValues: JobDataType;
  onChange: (_: JobDataItemType, allValues: { job: JobDataType }) => void;
}
const JobDrawer: FC<JobDrawerProps> = memo(
  ({ visible, handleCloseDrawer, initialValues, onChange }) => {
    const onClose = useCallback(() => {
      handleCloseDrawer("jobDrawerVisible");
    }, [handleCloseDrawer]);
    const { TextArea } = Input;
    const { Item, List } = Form;
    return (
      <>
        <Drawer
          title="工作经历"
          width={720}
          visible={visible}
          key="jobDrawer"
          bodyStyle={{ paddingBottom: "80px" }}
          footerStyle={{ textAlign: "right" }}
          onClose={onClose}
        >
          <Form
            autoComplete="off"
            initialValues={{ job: initialValues }}
            onValuesChange={onChange}
          >
            <List name="job">
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
                        name={[name, "companyName"]}
                        label="公司名称"
                        rules={[
                          { required: true, message: "请填写公司名称！" },
                        ]}
                      >
                        <Input
                          placeholder="公司名称要写全名"
                          style={{ width: "288px" }}
                        />
                      </Item>
                      <Item
                        {...restField}
                        name={[name, "period"]}
                        label="工作时间"
                        rules={[{ required: true, message: "请选择工作时间" }]}
                      >
                        <RangePicker
                          placeholder={["入职时间", "离职时间"]}
                          allowClear={true}
                          ranges={jobPickTimeRange}
                        />
                      </Item>
                      <Item
                        {...restField}
                        name={[name, "department"]}
                        label="所在部门"
                        rules={[{ required: true, message: "请填写部门！" }]}
                      >
                        <Input placeholder="部门" style={{ width: "288px" }} />
                      </Item>
                      <Item
                        {...restField}
                        name={[name, "position"]}
                        label="工作职位"
                        rules={[{ required: true, message: "请填写职位！" }]}
                      >
                        <Input placeholder="职位" style={{ width: "288px" }} />
                      </Item>
                      <Item
                        {...restField}
                        name={[name, "jobDescription"]}
                        label="工作职责"
                        rules={[
                          { required: true, message: "请填写工作职责！" },
                        ]}
                      >
                        <TextArea
                          placeholder="描述你都做些啥"
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
                      添加工作经历
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
export default JobDrawer;
