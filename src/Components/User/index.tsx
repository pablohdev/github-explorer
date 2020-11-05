import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';


import { ContainerUser } from './styles';
import api from '../../services/api'

interface IUser {
    user: {
        userId: string;
        nodeId: string;
        html_url: string;
        avatar_url: string;
        login: string;
    };
    removeUser(userId?: string): void;
}


const User: React.FC<IUser> = ({ user, removeUser }) => {

    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);


    useEffect(() => {

        async function loadUserDate() {

            const result = await api.get(`/users/${user.login}`);



            setFollowers(result.data.followers);
            setFollowing(result.data.following)
        }

        loadUserDate()

    }, [user.login])
    return (
        <ContainerUser>
            <img src={user.avatar_url}
                alt={user.login} />
            <div>
                <strong>{user.login} </strong>
                <p><small>Node ID: {user.nodeId} - User ID: {user.userId}</small></p>
                <p><small>Seguidores: {followers}| Seguindo: {following}</small></p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" >Ver Perfil no Github</a>
            </div>
            <button onClick={() => removeUser(user.userId)}>
                <FiX size={20} color="#FF0000" />
            </button>

        </ContainerUser>
    );
}

export default User;