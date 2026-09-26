import {Code, makeScene2D, Txt, Rect} from '@canvas-commons/2d';
import {createRef, Direction, slideTransition, waitUntil} from '@canvas-commons/core';
import {WIPText} from "../../comp/WIPText";

export default makeScene2D(function* (view) {


    const code = createRef<Code>()

    view.add(
        <>
            <Code
                ref={code}
                code={`\
from manim import *

class animation(Scene):
    def construct(self):
        matrix = MathTex(r"""
            \\begin{bmatrix}
                  1
                \\\\2
            \\end{bmatrix}
        """)
        
        self.play(Write(matrix))
        self.wait(3)
`}
            />
            <WIPText />
        </>
    )


    yield* slideTransition(Direction.Top, 1);

    yield* waitUntil("end");

});