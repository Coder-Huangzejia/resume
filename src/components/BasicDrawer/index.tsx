import React,{ FC, memo, useCallback } from "react";
import { BasicDataType } from "../../types/static";
import { Form, Drawer, Row, Col, Input, Select } from "antd";
interface BasicDrawerProps {
  onChange: (changedFields: BasicDataType) => void;
  handleCloseDrawer: (str: "basicDrawerVisible") => void;
  visible: boolean;
  initialValues: BasicDataType;
}
const BasicDrawer: FC<BasicDrawerProps> = memo(
  ({ onChange, visible, handleCloseDrawer, initialValues }) => {
    const { Item } = Form;
    const { TextArea } = Input;
    const { Option } = Select;
    const [form] = Form.useForm();
    const onClose = useCallback(() => {
      handleCloseDrawer("basicDrawerVisible");
    }, [handleCloseDrawer]);
    return (
        <Drawer
          title="基本信息"
          width={'fit-content'}
          closable={false}
          open={visible}
          key="basicDrawer"
          styles={{body:{ paddingBottom: "80px",overflow: 'hidden' },footer:{textAlign: "right"}}}
          onClose={onClose}
        >
          <Form
            layout="vertical"
            form={form}
            initialValues={initialValues}
            onValuesChange={onChange}
          >
            <Row gutter={16}>
              <Col span="12">
                <Item label="名字" name="name">
                  <Input placeholder="请输入你的姓名" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="学历" name="education">
                  <Select placeholder="985、211记得加粗" allowClear>
                    <Option value="JuniorCollege">大专</Option>
                    <Option value="Undergraduate">本科</Option>
                    <Option value="SuperUndergraduate">985全日制本科</Option>
                    <Option value="Master">研究生</Option>
                  </Select>
                </Item>
              </Col>
             
            </Row>
            <Row gutter={16}>
              
              <Col span="12">
                <Item label="毕业学校" name="school">
                  <Input placeholder="985/211一定要写！" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="专业" name="major">
                  <Input placeholder="非计算机相关专业可不填" />
                </Item>
              </Col>
             
            </Row>
            <Row gutter={16}>
            <Col span="12">
                <Item label="联系方式" name="mobile">
                  <Input placeholder="请输入你的手机" />
                </Item>
              </Col>
            <Col span="12">
                <Item label="邮箱" name="email">
                  <Input placeholder="163邮箱比较正规" />
                </Item>
              </Col>
             
            </Row>
            <Row gutter={16}>
              <Col span="12">
                <Item label="年龄" name="age">
                  <Input placeholder="请输入你的年龄" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="期望薪资" name="salary">
                  <Input placeholder="不填为面议" />
                </Item>
              </Col>
              <Col span="12">
                <Item label="工作经验" name="frontEndTime">
                  <Input placeholder="时间：3年" />
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
                <Item label="Github" name="github">
                  <Input placeholder="请输入你的Github网址" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span="24">
                <Item label="自我评价" name="evaluation">
                  <TextArea rows={6} placeholder="写行业相关的评价！" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span="24">
                <Item label="荣誉奖励" name="reward">
                  <TextArea rows={4} placeholder="写行业相关的证书！" />
                </Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
    );
  }
);
export default BasicDrawer;
