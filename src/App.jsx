import { useState } from "react";
import "./App.css";
import Section_our_mission from "./component/Section_our_mission/Section_our_mission";
import Section_Advantages from "./component/Section_Advantages/Section_Advantages";
import Section_credit from "./component/Section_credit/Section_credit";
import Section_direction from "./component/Section_direction/Section_direction";
import Section_platform from "./component/Section_platform/Section_platform";
import Section_score from "./component/Section_score/Section_score";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Section_our_mission />
      <Section_direction />
      <Section_platform />
      <Section_score />
      <Section_Advantages />
      <Section_credit />
    </>
  );
}

export default App;
