import { Divider } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';

function Footer() {
  return (
    <footer className="p-4 text-center w-full">
      <Divider />
      <Title level={5} type="secondary">
        Powered by News API / The Guardian / The New York Times
      </Title>
    </footer>
  );
}

export default Footer;
