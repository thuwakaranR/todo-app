import { List, Typography, Row, Col } from "antd";
import React from "react";

const { Text } = Typography;

const ListComponent = () => {
    const data = [
        {
            content: <span><b style={{ color: "black" }}>Kushantha Charuka</b> created <span style={{ color: "black" }}>Contract #00124</span> need <span style={{ color: "red" }}>John Beige's signature</span></span>,
            timestamp: "Sep 16, 2022 at 11:30 AM"
        },
        {
            content: <span><b style={{ color: "black" }}>Lorem ipsum</b> <b style={{ color: "black" }}>dolor sit amet,</b> consectetur adipiscing elit. <b style={{ color: "black" }}>Maecenas</b> pretium neque</span>,
            timestamp: "Sep 16, 2022 at 11:45 AM"
        },
        {
            content: <span><b style={{ color: "black" }}>Lorem ipsum</b> <b style={{ color: "black" }}>dolor sit amet,</b> consectetur adipiscing elit. <b style={{ color: "black" }}>Maecenas</b> pretium neque</span>,
            timestamp: "Sep 16, 2022 at 11:45 AM"
        }
    ];

    return (
        <List
            header={<div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>ActivityFeed</div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Row gutter={[16, 16]} style={{ width: '100%' }}>
                        <Col span={24} md={18}>
                            <div>{item.content}</div>
                        </Col>
                        <Col span={24} md={6}>
                            <Text type="secondary" style={{ textAlign: 'right' }}>{item.timestamp}</Text>
                        </Col>
                    </Row>
                </List.Item>
            )}
        />
    );
};

export default ListComponent;
