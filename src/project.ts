import {makeProject} from '@canvas-commons/core';
import {parser} from "@lezer/python";
import {Code, LezerHighlighter} from "@canvas-commons/2d";

import arrow_tick from './scenes/arrow_tick?scene';
import testing from './scenes/testing?scene';
import code_stuff from './scenes/code_testing/code_stuff?scene';
import view_matrix from './scenes/code_testing/view_matrix?scene';
import code_stuff_with_transform from './scenes/code_testing/code_stuff_with_transform?scene';

Code.defaultHighlighter = new LezerHighlighter(
    parser.configure({
        // Provide a space-separated list of dialects to enable:
        dialect: 'python',
    }),
);

export default makeProject({
  scenes: [
      code_stuff,
      view_matrix,
      code_stuff_with_transform,
  ],
});
