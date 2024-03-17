import React, { useState } from "react";
import { Flex, Progress, Modal, Button } from "antd";
import { FormInstance } from "antd/lib/form";

interface JobFormData {
  title: string;
  img: string;
  description: string;
  companyName: string;
  rating: number;
  views: number;
  avatar: string;
  href: string;
  content: string;
}

const Dashboard: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formRef = React.createRef<FormInstance>();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: JobFormData) => {
    console.log("Received values:", values);
    // You can handle the form submission here, e.g., send the data to an API
    // or update the state to add the new job.
    // For simplicity, let's just close the modal for now.
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="p-5 flex justify-between">
        <Flex gap="large" wrap="wrap">
          <div className="flex-col">
            <div className="my-5">
              <Progress type="circle" percent={75} />
            </div>
            <p>Applied candidates</p>
          </div>
          <div className="flex-col">
            <div className="my-5">
              <Progress type="circle" percent={90} strokeColor={"lightgreen"} />
            </div>
            <p>Selected candidates</p>
          </div>
          <div className="flex-col">
            <div className="my-5">
              <Progress type="circle" percent={70} strokeColor={"red"} />
            </div>
            <p>Rejected candidates</p>
          </div>
        </Flex>
        <div>
          <button
            onClick={showModal}
            className="bg-transparent border border-purple-500 text-purple-500 font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:border-transparent"
          >
            Add Job
          </button>
          <Modal
            title="Add Job"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button form="addJobForm" key="submit" htmlType="submit">
                Submit
              </Button>,
            ]}
          >
            <form
              id="addJobForm"
             
              onSubmit={(e) => {
                e.preventDefault();
                formRef.current?.submit();
              }}
              className="space-y-4"
            >
              <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="img">Image URL</label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  required
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  className="border border-gray-300 rounded-md p-2 resize-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="avatar">Avatar URL</label>
                <input
                  type="text"
                  id="avatar"
                  name="avatar"
                  required
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="href">Website URL</label>
                <input
                  type="text"
                  id="href"
                  name="href"
                  required
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  name="content"
                  required
                  rows={4}
                  className="border border-gray-300 rounded-md p-2 resize-none"
                />
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
