import React from 'react';
import styled from 'styled-components';
import SubmitButton from '../../Common/SubmitButton';
import sampleImage from '../../../icon/sample-workspace.png';

const Item = styled.section`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 28px;
    border-top: 1px solid ${(props) => props.theme.color.lightGrey};
    padding-top: 20px;
  }
`;

const ItemInfoLayer = styled.section`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
`;

const WorkSpaceImage = styled.div`
  width: 75px;
  height: 75px;
  background-image: url(${sampleImage});
  margin-right: 16px;
  border-radius: 5px;
`;

const WorkSpaceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkSpaceName = styled.section`
  font-weight: 700;
  padding-bottom: 10px;
`;

const WorkSpaceMembers = styled.section`
  font-weight: 400;
  color: grey;
  font-size: 14px;
`;

interface WsItemProps {
  id: string;
  name: string;
  members: string[];
}

export default function WsItem({ ws }: { ws: WsItemProps }) {
  return (
    <Item key={ws.id}>
      <ItemInfoLayer>
        <WorkSpaceImage></WorkSpaceImage>
        <WorkSpaceInfo>
          <WorkSpaceName>{ws.name}</WorkSpaceName>
          <WorkSpaceMembers>{ws.members.length}의 멤버</WorkSpaceMembers>
        </WorkSpaceInfo>
      </ItemInfoLayer>
      <SubmitButton
        fontSize="14px"
        fontWeight="400"
        text="Let's Snack"
        borderRadius="5px"
        light={true}
        submitHandler={() => console.log('enter workspace')}
      ></SubmitButton>
    </Item>
  );
}
