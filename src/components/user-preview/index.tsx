import React from 'react';

import {
  UserPreviewContainer,
  UserPreviewAvatar,
  UserPreviewName,
} from './styled';
import {IUserPreview} from '../../interfaces/general';
import {useNavigate} from 'react-router-dom';

export const UserPreview: (props: IUserPreview) => JSX.Element = (
    props: IUserPreview,
) => {
  const navigate = useNavigate();

  return (
    <UserPreviewContainer
      key={props.id}
      onClick={() => navigate(`/${props.id}`)}
    >
      <UserPreviewAvatar src={props.picture}/>
      <UserPreviewName>
        {props.title}{props.title.length > 0 ? '. ' : ''}
        {props.firstName} {props.lastName}
      </UserPreviewName>
    </UserPreviewContainer>
  );
};
