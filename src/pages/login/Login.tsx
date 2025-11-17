import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Login = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        padding: "20px",
        background: "#f0f2f5",
      }}
    >
      <Col xs={24} sm={20} md={12} lg={8} xl={6}>
        <Card
          style={{
            borderRadius: 12,
            padding: "20px",
          }}
        >
          <Title level={3} style={{ textAlign: "center", marginBottom: 30 }}>
            Login
          </Title>

          <Form layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter password"
                size="large"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              style={{ marginTop: 10 }}
            >
              Login
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
