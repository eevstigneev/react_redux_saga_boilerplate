import React, {useEffect} from 'react';
import {Button, Form as AntForm, Input} from 'antd';
import {FormProps, FormInstance} from 'antd/es';
import {MemberDTO} from 'src/store/member/member.interfaces';

type FormInstanceInRule = Omit<FormInstance, 'scrollToField' | '__INTERNAL__' | 'getFieldInstance'>;
const defaultRules = [{required: true}, {max: 255, message: 'Поле не должно содержать более 255 символов.'}];
const passwordCompare = ({getFieldValue}: FormInstanceInRule) => ({
  validator(_: unknown, value: string) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('Пароли не совпадают!');
  },
});

const Form: React.FC<FormProps<MemberDTO.UpdateRequest | MemberDTO.CreateRequest>> = props => {
  const [form] = AntForm.useForm();
  const {initialValues} = props;
  useEffect(() => {
    if (initialValues) form.setFieldsValue(initialValues);
  }, [form, initialValues]);
  return (
    <AntForm form={form} {...props}>
      {initialValues?.id && (
        <AntForm.Item name="id" hidden>
          <Input name="id" />
        </AntForm.Item>
      )}
      <AntForm.Item label="Фамилия" name="lastName" rules={defaultRules}>
        <Input autoComplete="lastName" />
      </AntForm.Item>
      <AntForm.Item label="Имя" name="firstName" rules={defaultRules}>
        <Input autoComplete="firstName" />
      </AntForm.Item>
      <AntForm.Item
        label="Email"
        name="email"
        rules={[{type: 'email', message: 'Поле email заполнено не правильно!'}, ...defaultRules]}
      >
        <Input autoComplete="email" />
      </AntForm.Item>
      <AntForm.Item label="Пароль" name="password" rules={initialValues?.id ? undefined : defaultRules}>
        <Input.Password autoComplete="new-password" />
      </AntForm.Item>
      <AntForm.Item
        name="confirm"
        label="Проверка пароля"
        dependencies={['password']}
        hasFeedback
        rules={initialValues?.id ? undefined : [passwordCompare, ...defaultRules]}
      >
        <Input.Password autoComplete="new-password" />
      </AntForm.Item>
      <Button type="primary" htmlType="submit" size="large">
        Сохранить
      </Button>
    </AntForm>
  );
};

Form.defaultProps = {
  layout: 'vertical',
  name: 'user-form',
};

export default Form;
