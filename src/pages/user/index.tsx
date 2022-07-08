import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getUser} from '../../services';
import {IUser} from '../../interfaces/general';
import {UserAvatar, UserLocationContainer} from './styled';
import {formatDate} from '../../utils';

export const User: React.FC = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>(null);
  useEffect(() => {
    getUser(id).then((user) => {
      setUser(user);
      setLoading(false);
    }).catch((e) => {
      console.error(e);
    });
  }, [id]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <UserAvatar src={user.picture} />
      <p>Title: {user.title}</p>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
      <p>Date of birth: {formatDate(new Date(user.dateOfBirth))}</p>
      <p>Phone number: {user.phone}</p>
      <p>Location:</p>
      <UserLocationContainer>
        <p>Street: {user.location.street}</p>
        <p>City: {user.location.city}</p>
        <p>State: {user.location.state}</p>
        <p>Country: {user.location.country}</p>
        <p>Timezone: {user.location.timezone}</p>
      </UserLocationContainer>
    </>
  );
};
