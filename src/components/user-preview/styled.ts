import styled from 'styled-components/macro';

export const UserPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
  gap: 9px;
  border-radius: 5px;
  border: 1px solid #9f9f9f;
  background: #e5e5e5;
  cursor: pointer;
  margin: 4px;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;

export const UserPreviewAvatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  border: 2px solid #888888;
`;

export const UserPreviewName = styled.p`
    text-transform: capitalize;
`;
