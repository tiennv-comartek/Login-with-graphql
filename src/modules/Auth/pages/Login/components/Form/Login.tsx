import { Button, Card, Checkbox, Col, Dropdown, Form, Image, Input, Layout, Menu, Row, Space } from 'antd';
import React from 'react';
import loginImg from '@assets/images/banner.png';
import logo1 from '@assets/images/logo1.png';
import useLogin from '@modules/Auth/hooks/useLogin';
import 'antd/dist/antd.css';
import './style.scss';
import { LoginInput } from '@/graphql/generated/graphql';

const menu = <Menu />;

const Login = (props: any) => {
  const { onLogin } = useLogin();
  const handleSubmit = (value: LoginInput) => {
    onLogin({
      email: value.email.trim().toLowerCase(),
      password: value.password.trim(),
    });
  };

  return (
    <>
      <Layout className="page_login">
        <div className="language">
          <Row justify="end">
            <Col>
              <Dropdown overlay={menu}>
                <Space>Tiếng Việt</Space>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={0} lg={12}>
              <Image src={loginImg} />
            </Col>
            <Col span={24} lg={12} className="form_login">
              <Card className="login">
                <div className="icon_web">
                  <Image src={logo1} preview={false} />
                </div>
                <div className="tiltle_login">Đăng nhập</div>
                <div>
                  <Form onFinish={handleSubmit}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Không được bỏ trống trường này',
                        },
                      ]}
                    >
                      <Input placeholder="Tên đăng nhập" className="name_login" size="large" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Không được bỏ trống trường này',
                        },
                      ]}
                    >
                      <Input.Password placeholder="Mật khẩu" className="password" size="large" />
                    </Form.Item>
                    <Row justify="space-between">
                      <Col>
                        <Form.Item>
                          <Checkbox defaultChecked={true} className="remember_pass">
                            Ghi nhớ mật khẩu
                          </Checkbox>
                        </Form.Item>
                      </Col>
                      <Col>
                        <Form.Item className="forget_pass">Quên mật khẩu</Form.Item>
                      </Col>
                    </Row>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="btn_submit" size="large">
                        Đăng nhập
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default Login;
