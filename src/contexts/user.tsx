import React, { createContext, useState, useContext } from "react";


interface IUser {
    userId: string;
    nodeId: string;
    html_url: string;
    avatar_url: string;
    login: string;
}


interface IDataContext {
    users: IUser[],
    removedUsers: IUser[]
    updateUsers(user: IUser[]): Promise<void>;
    removeUsers(idUser: string): Promise<false | undefined>
}

const UserContext = createContext<IDataContext>({} as IDataContext);


export const UserProvider: React.FC = ({ children }) => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [removedUsers, setRemovedUsers] = useState<IUser[]>([]);

    async function updateUsers(user: IUser[]) {
        setUsers(user)
    }

    async function removeUsers(userId: string) {
        const userIndex = users.findIndex((user: IUser) => user.userId === userId)


        if (userIndex === undefined) {
            return false;
        }

        setRemovedUsers([...removedUsers, users[userIndex]]);

        const newUsers: IUser[] = users.filter((user: IUser) => user.userId !== userId)



        setUsers(newUsers)
    }

    return (
        <UserContext.Provider value={{ users, removedUsers, updateUsers, removeUsers }}>
            {children}
        </UserContext.Provider>
    )
};



export function useUser() {
    const currentContext = useContext(UserContext);
    const { users, updateUsers, removeUsers, removedUsers } = currentContext;
    return { users, updateUsers, removeUsers, removedUsers };
}

export default UserContext;
