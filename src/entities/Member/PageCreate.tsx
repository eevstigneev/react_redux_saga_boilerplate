import React from 'react';
import {useNavigate} from 'react-router';
import {PageHeader} from 'antd';
import {useMemberAction, addOne} from 'src/store/member/member.actions';
import {MemberDTO} from 'src/store/member/member.interfaces';
import Form from './Form';

const PageCreate: React.FC = () => {
  const navigator = useNavigate();
  const addMember = useMemberAction(addOne);
  return (
    <>
      <PageHeader title="Создание пользователя" onBack={() => navigator('../')} />
      <Form<MemberDTO.CreateRequest> onFinish={addMember} />
    </>
  );
};

export default PageCreate;
