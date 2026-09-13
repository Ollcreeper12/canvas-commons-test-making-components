import {makeProject} from '@canvas-commons/core';

import audio from '../public/vis1-fcpRender.mp3'
import example from './scenes/example?scene';

export default makeProject({
  audio: audio,
  scenes: [example],
});
