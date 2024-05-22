import React from "react";
import { Header } from "antd/es/layout/layout";
import { RadarChartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
const AppHeader = () => {
  return (
    <Header className="!bg-white border-b border-[#f1f1f1] flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <RadarChartOutlined className="text-3xl" />
        <div>Academic</div>
      </div>
      <div className="flex items-center gap-2">
        <Avatar size={32} icon={<UserOutlined />} />
        <div>Name S</div>
      </div>
    </Header>
  );
};

export default AppHeader;
