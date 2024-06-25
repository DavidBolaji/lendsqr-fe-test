import { useQuery } from '@tanstack/react-query';
import { IMAGES } from '../../../assets';
import Card from '../../../components/card/card';
import { columns } from '../../../components/table/mock-data';
import Table from '../../../components/table/table';
import Title from '../../../components/title/title';
import classes from './home-page.module.scss';
import fetchUsers from '../../../api/fetch-users';
import Loader from '../../../components/loader/loader';
import { useEffect } from 'react';
import { useLendsqrContext } from '../../../context/context-provider';

const cardData = [
  { icon: IMAGES.Users, title: 'USERS', value: '2,453' },
  { icon: IMAGES.UsersActive, title: 'ACTIVE USERS', value: '2,453' },
  { icon: IMAGES.UsersWithLoan, title: 'USERS WITH LOANS', value: '12,453' },
  {
    icon: IMAGES.UserWithSavings,
    title: 'USERS WITH SAVINGS',
    value: '102,453',
  },
];

const HomePage = () => {
  const {setUsers} = useLendsqrContext()
  const { data: mockData, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    if(mockData) {
      setUsers(mockData)
    }
  }, [mockData, setUsers])

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
        <Loader
          style={{
            width: 24,
            height: 24,
          }}
        />
        </div>
      ) : (
        <Table columns={columns} data={mockData} rowsPerPage={10} />
      )}
    </div>
  );
};

export default HomePage;
