import React from "react";

import Torso from "./components/UI/Torso/Torso";
import LeftTools from "./components/UI/Desktop/LeftTools/LeftTools";
import RightTools from "./components/UI/Desktop/RightTools/RightTools";
import Toolbar from "./components/UI/Mobile/Toolbar/Toolbar";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Preloader from "./assets/images/preloader";

function App() {
  return (
    <div className="MainView">
			<Preloader />
      <LeftTools />
      <Torso />
      <RightTools />
      <Toolbar />
      <Backdrop />
    </div>
  );
}

export default App;
