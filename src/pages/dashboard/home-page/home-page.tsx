import { useQuery } from '@tanstack/react-query';
import { IMAGES } from '../../../assets';
import Card from '../../../components/card/card';
import { columns } from '../../../components/table/mock-data';
import Table from '../../../components/table/table';
import Title from '../../../components/title/title';
import classes from './home-page.module.scss';
import fetchUsers, { IUser } from '../../../api/fetch-users';
import Loader from '../../../components/loader/loader';
import { useEffect, useMemo } from 'react';
import { useLendsqrContext } from '../../../context/context-provider';

const HomePage = () => {
  const { setUsers } = useLendsqrContext();
  const { data: mockData = [], error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    if (mockData) {
      setUsers(mockData);
    }
  }, [mockData, setUsers]);

  const [userCount, activeUserCount, userLoanCount, userSavingCount] = useMemo(() => {
    const userCount = mockData.length;
    const activeUserCount = mockData.filter((data: IUser) => data.status === 'Active').length;
    const userLoanCount = mockData.filter((data: IUser) => data.loan > 0).length;
    const userSavingCount = mockData.filter((data: IUser) => data.amount > 0).length;
    return [userCount, activeUserCount, userLoanCount, userSavingCount];
  }, [mockData]);

  const cardData = useMemo(() => [
    { icon: IMAGES.Users, title: 'USERS', value: userCount },
    { icon: IMAGES.UsersActive, title: 'ACTIVE USERS', value: activeUserCount },
    { icon: IMAGES.UsersWithLoan, title: 'USERS WITH LOANS', value: userLoanCount },
    { icon: IMAGES.UserWithSavings, title: 'USERS WITH SAVINGS', value: userSavingCount },
  ], [userCount, activeUserCount, userLoanCount, userSavingCount]);

  if (error) return <div>Error loading data</div>;

  return (
    <div className={classes.home}>
      <Title text="Users" />
      <div className={classes['card-section']}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
          />
        ))}
      </div>
      {isLoading ? (
        <div className={classes['loader-cont']}>
          <Loader style={{ width: 24, height: 24 }} />
        </div>
      ) : (
        <Table columns={columns} data={mockData} rowsPerPage={10} />
      )}
    </div>
  );
};

export default HomePage;
