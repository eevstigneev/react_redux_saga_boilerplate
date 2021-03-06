import React from 'react';
import {ColumnsType} from 'antd/es/table/Table';
import {Button, Popconfirm, Space, Table as AntTable} from 'antd';
import {TableProps} from 'antd/lib/table/Table';
import {Link} from 'react-router-dom';
import {DeleteOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import {Member, MemberDTO} from 'src/store/member/member.interfaces';
import {createPath, ROUTES} from 'src/routes';

const COLUMNS = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (value: string, {id}: Member) => (
      <Link to={createPath({path: ROUTES.MEMBER_UPDATE, params: {memberId: id}})}>{value}</Link>
    ),
  },
  {
    title: 'Фамилия',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Имя',
    dataIndex: 'firstName',
    key: 'firstName',
  },
];

const QuestionCircleOutlinedStyled = styled(QuestionCircleOutlined)`
  color: red;
`;

const withHandlers = (handleDeleteRow: Props['handleDeleteRow']): ColumnsType<Member> => {
  if (!handleDeleteRow) {
    return COLUMNS;
  }
  return [
    ...COLUMNS,
    {
      key: 'action',
      width: '64px',
      render: (_: unknown, {id}: Member) => (
        <Space size="middle">
          <Popconfirm
            title="Вы уверены"
            okText="Да"
            cancelText="Нет"
            icon={<QuestionCircleOutlinedStyled />}
            onConfirm={() => handleDeleteRow({id})}
          >
            <Button type="link" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];
};

interface Props extends TableProps<Member> {
  handleDeleteRow?: (payload: MemberDTO.DeleteRequest) => void;
}

const Table: React.FC<Props> = props => {
  const {handleDeleteRow} = props;
  const columns = withHandlers(handleDeleteRow);
  return <AntTable columns={columns} {...props} />;
};

export default Table;
