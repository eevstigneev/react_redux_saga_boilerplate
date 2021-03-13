import React, {useEffect} from 'react';
import {PageHeader} from 'antd';
import {useNavigate} from 'react-router';
import AddButton from 'src/components/AddButton/AddButton';
import {ROUTES} from 'src/routes';
import {removeOne, fetch, useMemberAction, useMemberStore} from 'src/store/member/member.actions';
import Table from './Table';

const PageList: React.FC = () => {
  const {list} = useMemberStore();
  const handleFetch = useMemberAction(fetch);
  const handleDelete = useMemberAction(removeOne);
  const navigator = useNavigate();

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
      <PageHeader title="Пользователи" onBack={() => navigator('../')} />
      <Table handleDeleteRow={handleDelete} rowKey="id" dataSource={list} />
      <AddButton href={ROUTES.MEMBER_CREATE} />
    </>
  );
};

export default PageList;
