import { useParams } from "react-router-dom";
import BackNav from "../../../components/details-dashboard/back-nav/back-nav";
import Title from "../../../components/title/title";
import CustomButton from "../../../components/button/custom-button";
import UserDetail from "../../../components/details-dashboard/user-details/user-details";
import Tabs from "../../../components/tab/tab";
import { IUser } from "../../../api/fetch-users";
import { useLendsqrContext } from "../../../context/context-provider";
// import { useEffect } from "react";

const SingleUserPage = () => {
  const { userId } = useParams();
  const {getLocalUsers} =  useLendsqrContext()


  const user = getLocalUsers()?.find((_: Partial<IUser>) => _.id === userId!) 
 
  return (
    <>
      <BackNav />
      <div className="flex space" style={{ marginTop: "1.2rem" }}>
        <Title text="User Details" />
        <div className="flex" style={{ gap: "2rem" }}>
          <CustomButton
            text="Blacklist User"
            className="text-error transparent"
            style={{
              minWidth: "12em",
              height: "4rem",
              border: "1px solid #E4033B",
              textTransform: "uppercase"
            }}
          />
          <CustomButton
            text="Activate User"
            className="text-primary transparent "
            style={{
              minWidth: "12em",
              height: "4rem",
              border: "1px solid #39CDCC",
              textTransform: "uppercase"
            }}
          />
        </div>
      </div>
      <UserDetail user={user!} />
      <Tabs user={user!} />
    </>
  );
};

export default SingleUserPage;
