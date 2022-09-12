import { FC, memo, useCallback } from "react";
import { FormStaticType } from "../../types/static";
import { Form, Drawer, Row, Col, Input } from "antd";
interface BasicDrawerProps {
  form: FormStaticType;
  setVisible: (str: "basicDrawerVisible") => void;
  visible: boolean;
}
const BasicDrawer: FC<BasicDrawerProps> = memo(
  ({ form, visible, setVisible }) => {
    const { Item } = Form;
    const { TextArea } = Input;
    const rules = {
      name: [{ required: true, message: "Please enter user name" }],
      url: [{ required: true, message: "please enter url" }],
      owner: [{ required: true, message: "Please select an owner" }],
      type: [{ required: true, message: "Please choose the type" }],
      approver: [{ required: true, message: "Please choose the approver" }],
      dateTime: [
        {
          required: true,
          message: "Please choose the dateTime",
          type: "object",
        },
      ],
      description: [
        { required: true, message: "Please enter url description" },
      ],
    };

    const onClose = useCallback(() => {
      setVisible("basicDrawerVisible");
    }, [setVisible]);
    return (
      <>
        <Drawer
          title="请输入你的基本信息"
          width="720"
          visible={visible}
          bodyStyle={{ paddingBottom: "80px" }}
          footerStyle={{ textAlign: "right" }}
          onClose={onClose}
        >
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span="12">
                <Item label="名字" name="name">
                  <Input placeholder="请输入你的姓名" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="联系方式" name="mobile">
                  <Input placeholder="请输入你的手机" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span="12">
                <Item label="邮箱" name="email">
                  <Input placeholder="请输入你的邮箱" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="前端工作经验" name="frontEndTime">
                  <Input placeholder="时间：1年" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span="12">
                <Item label="毕业学校" name="school">
                  <Input placeholder="请输入你的毕业学校" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="专业" name="major">
                  <Input placeholder="请输入你的专业" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span="12">
                <Item label="年龄" name="age">
                  <Input placeholder="请输入你的毕业学校" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="期望薪资" name="salary">
                  <Input placeholder="请输入你的期望薪资" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span="12">
                <Item label="博客" name="blog">
                  <Input placeholder="请输入你的博客地址或个人网址" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="github" name="github">
                  <Input placeholder="请输入你的github网址" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span="24">
                <Item label="自我评价" name="description">
                  <TextArea rows={4} placeholder="请输入自我评价" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span="24">
                <Item label="荣誉奖励" name="reward">
                  <TextArea rows={4} placeholder="请输入你获取的荣誉奖励" />
                </Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
);
export default BasicDrawer;
