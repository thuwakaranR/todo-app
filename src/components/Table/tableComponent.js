import React, { useState, useEffect } from 'react';
import { Table, Col, Button } from 'antd';
import axios from 'axios'; // Import axios
import moment from 'moment'; // Import moment for date formatting

const TableComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksPerPage] = useState(5);

  const markTaskAsDone = (record) => {
    console.log('Marking task as done:', record);
  };

  const columns = [
    { 
      title: 'Task',
      dataIndex: 'todo',
      width: '60%', // Set width of Task column to 60%
      render: (text, record) => (
        <div>
          <span>{text}</span>
          {record.status === 'In Progress' && (
            <Button 
              type="primary" 
              size="small" 
              onClick={() => markTaskAsDone(record)}
              style={{ marginLeft: '10px' }}
            >
              Mark as Done
            </Button>
          )}
        </div>
      )
    },
    { 
      title: '', 
      dataIndex: 'priority', 
      width: '20%', // Set width of Priority column to 20%
      render: (priority) => (
        <span style={{ color: priority === 'High' ? 'red' : priority === 'Medium' ? 'yellow' : 'blue' }}>
          {priority}
        </span>
      )
    },
    { 
      title: '', 
      dataIndex: 'createdAt', 
      width: '20%', // Set width of Date column to 20%
      render: (date) => moment(date).format('MMM DD') // Format date using moment.js
    },
  ];

  useEffect(() => {
    getAllTasks(); 
  }, []); 

  const getAllTasks = async () => {
    try {
      const response = await axios.get(
        "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do"
      );
      if (response && response.data) {
        console.log(response.data);
        setTasks(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Col span={24} style={{ marginRight: '5px' }}>
      <div style={{ background: '#fff' }}>
        <Table 
          columns={columns} 
          dataSource={tasks} 
          onChange={onChange} 
          pagination={{ 
            pageSize: tasksPerPage,
            position: 'center' 
          }}
        />
      </div>
    </Col>
  );
};

export default TableComponent;
