import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
const SearchInput = () => (
  <>
    <Input
      placeholder="Enter your username"
      suffix={
        <Tooltip title="Extra information">
          < SearchOutlined 
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
  </>
);
export default SearchInput;