import React, { useState } from "react";
import { CloseOutlined, PictureOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Menu, Row, Typography } from "antd";
import TableComponent from "./components/Table/tableComponent";
import HeaderComponent from "./components/Header";
import ChartComponent from "./components/Chart/Chart";
import ListComponent from "./components/list";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;

const items = [{ key: "1", label: "Dashboard", icon: <PictureOutlined /> }];

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCancel = () => {
    console.log("Cancel action triggered");
  };

  const siderStyle = {
    backgroundColor: "#33074f",
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={siderStyle}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >
        <Header
          style={{
            padding: 10,
            ...siderStyle,
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={4} style={{ margin: 0, color: "white" }}>
            Acmy Solutions
          </Title>
        </Header>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ backgroundColor: "#451d5f", paddingTop: "20px" }}
        />
      </Sider>
      <Layout>
        <HeaderComponent />
        <Content style={{ margin: "10px 16px" }}>
          <Row
            style={{
              padding: 10,
              minHeight: 100,
              background: "#fff",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <Title level={3} style={{ margin: 0 }}>
              Welcome Back, John Doe
            </Title>
            <CloseOutlined
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={handleCancel}
            />
            <Row justify="space-between" style={{ width: "100%" }}>
              <Col>
                <p>
                  The end of the year is coming. Are you planning your
                  performance interviews? You can do this super efficiently with
                  Acmy.
                </p>
              </Col>
            </Row>
            <Row justify="space-between" style={{ width: "100%" }}>
              <Col>
                <p>
                  <a style={{ color: "#A91B60" }} href="/">
                    Look here for more information
                  </a>
                </p>
              </Col>
            </Row>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col
              span={12}
              style={{
                marginRight: "5px",
                height: "500px",
                background: "#fff",
              }}
            >
              <TableComponent />
            </Col>

            <Col span={11}>
              <Row gutter={[0, 10]}>
                <Col span={24} style={{ height: "200px", background: "#fff" }}>
                  <ListComponent />
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }} gutter={[0, 50]}>
                <Col span={24} style={{ height: "300px", background: "#fff" }}>
                  <Divider/>
                  <ChartComponent />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
