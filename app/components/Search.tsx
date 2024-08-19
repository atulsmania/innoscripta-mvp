'use client';

import { Button, Form, Input } from 'antd';
import { useSearchParams } from 'next/navigation';
import { redirectWithParams } from '../constants/utils';

type FieldType = {
  query?: string;
};

function Search() {
  const query = useSearchParams()?.get('query');

  return (
    <Form
      onFinish={redirectWithParams}
      className="w-full flex md:max-w-md"
      initialValues={{
        query: query ?? '',
      }}
    >
      <Form.Item<FieldType> name="query" className="flex-1">
        <Input
          size="large"
          className="max-w-[]"
          placeholder="Search for articles"
          allowClear
        />
      </Form.Item>

      <Button size="large" type="primary" htmlType="submit" className="ml-4">
        Search
      </Button>
    </Form>
  );
}

export default Search;
