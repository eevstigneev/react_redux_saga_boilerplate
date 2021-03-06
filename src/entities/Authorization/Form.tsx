import React from 'react';
import {Button, Form as AntForm, Input} from 'antd';
import type {LoginDTO} from 'src/store/auth/auth.interfaces';

interface Props {
  handleSubmit(props: LoginDTO.Request): void;
  loading?: boolean;
}

const Form: React.FC<Props> = ({handleSubmit, loading}) => {
  return (
    <AntForm layout="vertical" name="auth-form" onFinish={handleSubmit}>
      <AntForm.Item label="Email" name="email" rules={[{required: true}]}>
        <Input autoComplete="email" />
      </AntForm.Item>

      <AntForm.Item label="Пароль" name="password" rules={[{required: true}]}>
        <Input.Password autoComplete="current-password" />
      </AntForm.Item>

      <Button loading={loading} disabled={loading} type="primary" htmlType="submit" size="large">
        Войти
      </Button>
    </AntForm>
  );
};

export default Form;
