import React from 'react';
import {PlusCircleOutlined} from '@ant-design/icons';
import {ButtonProps} from 'antd/es';
import {Link} from 'react-router-dom';
import {ButtonStyled} from './AddButton.containers';

const AddButton: React.FC<ButtonProps & {href: string}> = props => {
  const {href, ...restProps} = props;
  return (
    <Link to={href}>
      <ButtonStyled {...restProps}>
        <PlusCircleOutlined />
      </ButtonStyled>
    </Link>
  );
};

AddButton.defaultProps = {
  type: 'text',
};

export default AddButton;
