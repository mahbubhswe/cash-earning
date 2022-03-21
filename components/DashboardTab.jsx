import { Tabs } from "react-simple-tabs-component";
import "react-simple-tabs-component/dist/index.css";
import Earning from "../components/Earning";
import Profile from "../components/Profile";
import Withdraw from "../components/Withdraw";

const tabs1 = () => {
  return <Profile></Profile>;
};

const tabs2 = () => {
  return <Earning></Earning>;
};

const tabs3 = () => {
  return <Withdraw></Withdraw>;
};

const tabs = [
  {
    label: "Profile",
    Component: tabs1,
  },
  {
    label: "Earning",
    Component: tabs2,
  },
  {
    label: "Withdraw",
    Component: tabs3,
  },
];

export default function Task() {
  return (
    <div className="cartSd">
      <Tabs tabs={tabs} />
    </div>
  );
}
