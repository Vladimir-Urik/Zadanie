import React, {useEffect, useState} from 'react';
import {Virtuoso} from 'react-virtuoso';
import {UserPreview} from '../../components';
import {IUserPreview} from '../../interfaces/general';
import {HomeContainer, UserInfoContainer} from './styled';
import {getUsers} from '../../services';
import {Outlet} from 'react-router-dom';

export const Home: React.FC = () => {
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

  const load = () => {
    if (total != null) {
      const maxPage = (total/10);
      if ((page) > maxPage) return;
    }

    getUsers(page).then((data) => {
      setUsers((users) => [...users, ...data.data]);
      setPage((page) => page+1);
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
        itemContent={(index, user: IUserPreview) => {
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
