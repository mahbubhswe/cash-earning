import { Tabs } from "react-simple-tabs-component";
import "react-simple-tabs-component/dist/index.css";
import Turooffer from "../components/Turooffer";
import HandCash from "../components/HandCash";
const tabs1 = () => {
  return <Turooffer></Turooffer>;
};

const tabs2 = () => {
  return <HandCash></HandCash>;
};

const tabs = [
  {
    label: "AdGate Media",
    Component: tabs1,
  },
  {
    label: "OfferToro",
    Component: tabs2,
  },
];

export default function Task() {
  return (
    <div className="cartSd">
      <Tabs tabs={tabs} />
    </div>
  );
}
