import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Header, Users, Title } from './style';
import { FiChevronLeft } from 'react-icons/fi'
import User from '../../Components/User';
import logoImg from '../../assets/logo.svg'

import useUser from '../../contexts/user'


interface IUser {
  userId: string;
  nodeId: string;
  html_url: string;
  avatar_url: string;
  login: string;
}

interface RepositoryParams {
  users: IUser;
}


const Removed: React.FC = () => {

  const { removedUsers } = useContext(useUser);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to='/'>
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <Title>Usuários removido de sua lista</Title>

      <Users>
        {removedUsers && (
          removedUsers.map((user) => (
            <User user={user} key={user.userId} removeUser={() => function () { }} />
          ))
        )}
      </Users>

    </>
  );
}

export default Removed;