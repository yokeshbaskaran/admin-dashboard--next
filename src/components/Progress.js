import { Avatar, Card, Flex, Progress, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Title from "antd/es/typography/Title";

const { Text } = Typography;

export default function UserProgress() {
  return (
    <Card title="Progress">
      <Flex vertical align="center">
        <Avatar size={64} icon={<UserOutlined />} />
        <Title level={4} style={{ marginBottom: 3, marginTop: 5 }}>
          Namee Sai
        </Title>
        <Text type="secondary">Basic Member</Text>
      </Flex>
      <div>
        <Text>Front-End</Text>
        <Progress percent={90} status="active" />
      </div>
      <div>
        <Text>Back-End</Text>
        <Progress percent={50} status="active" />
      </div>
      <div>
        <Text>DEVOPS</Text>
        <Progress percent={30} status="active" />
      </div>
      <div>
        <Text>Testings</Text>
        <Progress percent={60} status="active" />
      </div>
    </Card>
  );
}
