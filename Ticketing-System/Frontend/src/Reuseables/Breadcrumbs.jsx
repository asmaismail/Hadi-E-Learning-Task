import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const Breadcrumbs = ({ items }) => (
  <div className="w-[1300px] rounded-md ml-24 h-28 mb-8 bg-radial-at-tl from-blue-900 via-violet-600 to-fuchsia-300 flex items-center">
    <Breadcrumb className="ml-[550px] text-center">
      <Breadcrumb.Item className="flex items-center">
        <HomeOutlined className="text-white" />
        <span className="text-white font-bold ml-2">Home</span>
      </Breadcrumb.Item>
      {items.map((item, index) => (
        <Breadcrumb.Item className="flex items-center" key={index}>
          <span className="text-white font-bold ml-2">{item.title}</span>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  </div>
);

export default Breadcrumbs;
