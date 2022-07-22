import React, {useEffect, useState} from 'react';
import {Virtuoso} from 'react-virtuoso';
import {UserPreview} from '../../components';
import {IUserPreview} from '../../interfaces/general';
import {HomeContainer, UserInfoContainer} from './styled';
import {getUsers} from '../../services';
import {Outlet} from 'react-router-dom';

export const Home: React.FC = () => {
  const [total, setTotal] = useState<number>(null);
  const [users, setUsers] = useState<IUserPreview[]>([]);

  const load = () => {
    if (total == users.length) return;

    getUsers(users.length/10).then((data) => {
      setUsers((users) => [...users, ...data.data]);
      setTotal(data.total);
    }).catch((e) => {
      console.error(e);
    });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <HomeContainer>
      <Virtuoso
        style={{height: '100vh', width: '300px'}}
        data={users}
        endReached={load}
        itemContent={(_index: number, user: IUserPreview) => {
          return <UserPreview
            id={user.id}
            title={user.title}
            firstName={user.firstName}
            lastName={user.lastName}
            picture={user.picture}
          />;
        }}
        components={{}}
      />
      <UserInfoContainer>
        <Outlet />
      </UserInfoContainer>
    </HomeContainer>
  );
};
