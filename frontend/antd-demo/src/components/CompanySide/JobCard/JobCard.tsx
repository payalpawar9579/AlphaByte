import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import { Link } from 'react-router-dom';
import { jobData } from '../../../Constants';
import JobDetails from '../JobDetails/JobDetails';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const JobCard: React.FC = () => {
  const handleCardClick = (id: number) => {
    // Navigate to job details page
    window.location.href = `/job/${id}`;
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: window.innerWidth <= 640 ? 1 : 2, // Change page size to 1 for mobile
        
      }}
      dataSource={jobData}
      className="max-w-full overflow-hidden" // Tailwind CSS classes
      renderItem={(item) => (
        <Link to={`/job/${item.id}`} key={item.id}>
          <List.Item
            onClick={() => handleCardClick(item.id)}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={<img width={272} alt="logo" src={item.img} />}
            className="overflow-hidden" // Tailwind CSS class
          >
            <div className="overflow-y-auto max-h-full py-0"> {/* Tailwind CSS classes */}
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </div>
          </List.Item>
        </Link>
      )}
    />
  );
};

export default JobCard;
