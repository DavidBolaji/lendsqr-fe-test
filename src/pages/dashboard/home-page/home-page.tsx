import { IMAGES } from "../../../assets";
import Card from "../../../components/card/card";
import { columns, mockData } from "../../../components/table/mock-data";
import Table from "../../../components/table/table";
import Title from "../../../components/title/title";
import classes from './home-page.module.scss'

const cardData = [
  { icon: IMAGES.Users, title: "USERS", value: "2,453" },
  { icon: IMAGES.UsersActive, title: "ACTIVE USERS", value: "2,453" },
  { icon: IMAGES.UsersWithLoan, title: "USERS WITH LOANS", value: "12,453" },
  {
    icon: IMAGES.UserWithSavings,
    title: "USERS WITH SAVINGS",
    value: "102,453",
  },
];

const HomePage = () => {
  return (
    <div className={classes.home}>
      <Title text="Users" />
      <div className={classes["card-section"]}>

        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
          />
        ))}
        
      </div>
      <Table columns={columns} data={mockData} rowsPerPage={5} />
    </div>
  );
};

export default HomePage;
