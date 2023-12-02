import { SplitViewPanels } from './components/';
import { Modal } from './components/';
import { SearchBar } from './components/';
import { DatePicker } from './components';
import { Toggle } from './components';
import { Input } from './components/';
import { Slider } from './components/';
import { InfiniteScroll } from './components/';
import { placeholderArray } from './utils';
import TestIMG from './assets/test/testimg.jpg';
import TestIMG2 from './assets/test/diner.jpg';
import './App.css';

export const App = () => {
  return (
    <>
      <section className="appContainer">
        <div className="screenContainer panels">
          <SplitViewPanels
            leftPanel={<div>Left Panel Content</div>}
            rightPanel={<div>Right Panel Content</div>}
          />
        </div>
        <div className="screenContainer datepicker">
          <DatePicker />
        </div>
        <div className="screenContainer modal">
          <Modal />
        </div>
        <div className="screenContainer searchBar">
          <SearchBar searchBarData={placeholderArray} />
        </div>
        <div className="screenContainer toggle">
          <Toggle />
        </div>
        <div className="screenContainer searchBar">
          <Input type="text" />
        </div>
        <div className="screenContainer">
          <Slider
            urlArray={[
              <Toggle />,
              <Input type="text" />,
              <img src={TestIMG} alt="testIMG" />,
              <img src={TestIMG2} alt="testIMG2" />,
            ]}
          />
        </div>
        <div className="screenContainer searchBar">
          <InfiniteScroll />
        </div>
      </section>
    </>
  );
};

export default App;
