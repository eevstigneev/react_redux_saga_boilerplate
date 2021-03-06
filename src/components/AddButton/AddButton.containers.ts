import styled from '@emotion/styled';
import {Button} from 'antd';

export const ButtonStyled = styled(Button)`
  font-size: 60px;
  height: 62px;
  display: block;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #1bb99a;
  background-clip: content-box;
  color: white;
  padding: 0;
  border: 1px solid #1bb99a;
  border-radius: 50%;
  line-height: 1;
  overflow: hidden;
  &:hover {
    color: #1bb99a;
  }
`;
