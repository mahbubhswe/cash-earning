import { Tabs } from "react-simple-tabs-component";
import "react-simple-tabs-component/dist/index.css";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const tabs1 = () => {
  return <SignIn></SignIn>;
};

const tabs2 = () => {
  return <SignUp></SignUp>;
};

const tabs = [
  {
    label: "SIGN UP",
    Component: tabs2,
  },
  {
    label: "SIGN IN",
    Component: tabs1,
  },
];

export default function FormTab() {
  return (
    <div className="cartSd">
      <Tabs tabs={tabs} />
    </div>
  );
}
