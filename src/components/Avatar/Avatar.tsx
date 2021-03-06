import React from 'react';
import {AntDesignOutlined} from '@ant-design/icons';
import {AvatarProps} from 'antd/es/avatar/avatar';
import {AvatarStyled} from './Avatar.containers';

const Avatar: React.FC<AvatarProps> = props => {
  return <AvatarStyled icon={<AntDesignOutlined />} {...props} />;
};

Avatar.defaultProps = {
  size: 32,
};

export default Avatar;
