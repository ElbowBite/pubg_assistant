import React from "react";

import Torso from "./components/UI/Torso/Torso";
import LeftTools from './components/UI/Desktop/LeftTools/LeftTools';
import RightTools from './components/UI/Desktop/RightTools/RightTools';
import Toolbar from "./components/UI/Mobile/Toolbar/Toolbar";

function App() {
  return (
    <>
      <div className='DesktopView'>
				<LeftTools />
        <Torso />
				<RightTools />
      </div>
      <Toolbar />
    </>
  );
}

export default App;
