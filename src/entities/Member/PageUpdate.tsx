import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router';
import {PageHeader} from 'antd';
import {useMemberAction, useMemberStore, fetchOne, updateOne} from 'src/store/member/member.actions';
import {MemberDTO} from 'src/store/member/member.interfaces';
import Form from './Form';

const PageCreate: React.FC = () => {
  const navigator = useNavigate();
  const {memberId} = useParams();
  const {item: member} = useMemberStore();
  const fetchMember = useMemberAction(fetchOne);
  const updateMember = useMemberAction(updateOne);

  useEffect(() => {
    fetchMember({id: memberId});
  }, [memberId, fetchMember]);

  return (
    <>
      <PageHeader title="Редактирование пользователя" onBack={() => navigator('../')} />
      <Form<MemberDTO.UpdateRequest> onFinish={updateMember} initialValues={member ?? {}} />
    </>
  );
};

export default PageCreate;
