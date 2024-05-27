import {
  AnimationElement,
  Screen,
  SplitViewPanels,
  VerticalNavDrawer,
  Modal,
  DatePicker,
  Toggle,
  SearchBar,
  Card,
  Image
} from './components/';

import TestIMG2 from './assets/test/diner.jpg';
import { placeholderArray } from './utils';

import './App.css';

export const App = () => {
  return (
    <>
      <Screen>
        <SplitViewPanels
          leftPanel={<div>Left Panel Content</div>}
          rightPanel={<div>Right Panel Content</div>}
        />
        <VerticalNavDrawer
          toggleSelector="show"
          targetSelector=".card"
          thresholdValue={0.5}
        />
        <Modal />
        <DatePicker />
        <Toggle />
        <SearchBar searchBarData={placeholderArray} />
        <Card>
          <Image src={TestIMG2} />
        </Card>

        <AnimationElement
          toggleSelector="show"
          targetSelector=".element"
          thresholdValue={0.5}
        />
      </Screen>
    </>
  );
};

export default App;
