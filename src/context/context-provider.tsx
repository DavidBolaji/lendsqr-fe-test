import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IUser } from '../api/fetch-users';

const LendSqrContext = createContext<{
  users: Partial<IUser>[];
  setUsers: Dispatch<SetStateAction<Partial<IUser>[]>>;
  getLocalUsers: () => IUser[] | []
}>({
  users: [],
  setUsers: () => [],
  getLocalUsers: () => []
});

const getLocalUsers = () => {
  return JSON.parse(!localStorage.getItem('users') ? '[]': localStorage.getItem('users')!)
}

export const LendSqrProvider: FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<Partial<IUser>[]>(getLocalUsers());

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  
  return (
    <LendSqrContext.Provider
      value={{
        users,
        setUsers,
        getLocalUsers
      }}
    >
      {children}
    </LendSqrContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLendsqrContext = () => useContext(LendSqrContext);
