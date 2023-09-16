import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Home} from './components/AdrianaSProposal/AdrianaSProposal';
import { FinkAcademyCourse } from './components/AdrianaSProposal/FinkAcademyCourse/FinkAcademyCourse';
import { Chat } from './components/AdrianaSProposal/Chat/Chat';
import { Route, Routes } from 'react-router-dom';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<FinkAcademyCourse />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
     
    </div>
  );
});
