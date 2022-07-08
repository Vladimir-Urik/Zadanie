import React from 'react';

import {
  UserPreviewContainer,
  UserPreviewAvatar,
  UserPreviewName,
} from './styled';
import {IUserPreview} from '../../interfaces/general';
import {useMatch, useNavigate, useResolvedPath} from 'react-router-dom';

export const UserPreview: (props: IUserPreview) => JSX.Element = (
    props: IUserPreview,
) => {
  const navigate = useNavigate();
  const resolved = useResolvedPath(`/${props.id}`);
  const match = useMatch({path: resolved.pathname, end: true});

  return (
    <UserPreviewContainer
      key={props.id}
      onClick={() => navigate(`/${props.id}`)}
      active={!!match}
    >
      <UserPreviewAvatar src={props.picture}/>
      <UserPreviewName>
        {props.title}{props.title.length > 0 ? '. ' : ''}
        {props.firstName} {props.lastName}
      </UserPreviewName>
    </UserPreviewContainer>
  );
};
