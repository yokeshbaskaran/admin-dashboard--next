import React from "react";
import { Table, Tag, Space } from "antd";
const LearningTable = () => {
  const columns = [
    {
      title: "Course name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, text) => (
        <Tag color={text.status === "completed" ? "green" : "blue"}>
          {text.status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>View</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      id: "1",
      courseName: "Design Accessibility",
      duration: "5 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "2",
      courseName: "UX Research",
      duration: "6 hours",
      level: "Intermediate",
      status: "In Progress",
    },
    {
      id: "3",
      courseName: "Design Accessibility",
      duration: "5 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "4",
      courseName: "UX Research",
      duration: "6 hours",
      level: "Intermediate",
      status: "In Progress",
    },
    {
      id: "5",
      courseName: "Design Accessibility",
      duration: "5 hours",
      level: "Advanced",
      status: "completed",
    },
    {
      id: "6",
      courseName: "UX Research",
      duration: "6 hours",
      level: "Intermediate",
      status: "In Progress",
    },
  ];
  return <Table className="mt-4" columns={columns} dataSource={data} />;
};

export default LearningTable;
