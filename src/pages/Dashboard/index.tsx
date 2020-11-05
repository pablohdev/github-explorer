import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { FiTrash } from 'react-icons/fi'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Users, Header } from './styles'
import User from '../../Components/User';

import useUser from '../../contexts/user'


interface IUser {
    userId: string;
    nodeId: string;
    html_url: string;
    avatar_url: string;
    login: string;
}


function Dashboard() {

    const [searchUser, setSearchUser] = useState('');
    const { users, removeUsers, updateUsers } = useContext(useUser);

    async function handleRemoveUsers(userId: string) {

        removeUsers(userId)

    }

    useEffect(() => {


        async function loadUsers() {


            try {
                const response = await api.get(`/users`);


                const users = response.data.slice(0, 10).map((user: any) => ({
                    userId: user.id.toString(),
                    nodeId: user.node_id,
                    html_url: user.html_url,
                    avatar_url: user.avatar_url,
                    login: user.login,
                }))

                updateUsers(users)
            } catch (e) {
                alert('Infelizmente encontramos uma instabilidade na api, tente novamente em 10 minutos')
            }


        }

        if (users.length === 0) {
            loadUsers();
        }



    }, [updateUsers, users])


    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to='/removed'>
                    <FiTrash size={16} color="#FF0000" />
                    Excluidos
                </Link>
            </Header>
            <Title>Explore usuários no Github</Title>

            <Form>
                <input
                    placeholder="Busque um usuário da lista"
                    onChange={e => setSearchUser(e.target.value)}
                    value={searchUser}
                />
            </Form>

            <Users>
                {searchUser ?
                    users.filter(function (user) {
                        if (user.login.includes(searchUser) || user.userId.includes(searchUser)) {
                            return true;
                        }

                        return false;
                    }).map((filteredUser) => (
                        <User user={filteredUser} key={filteredUser.userId} removeUser={handleRemoveUsers} />
                    ))
                    :
                    users.map((user) => (
                        <User user={user} key={user.userId} removeUser={handleRemoveUsers} />
                    ))}
            </Users>
        </>
    );
}

export default Dashboard;