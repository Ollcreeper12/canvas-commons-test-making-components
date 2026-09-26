import {Circle, Line, makeScene2D, Rect, Code} from '@canvas-commons/2d';
import {all, createRef, Direction, slideTransition, waitUntil} from '@canvas-commons/core';
import {Atom} from "../../comp/atom";

export default makeScene2D(function* (view) {


    const code = createRef<Code>()

    view.add (
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
        </>
    )


    yield* slideTransition(Direction.Top, 1);
    
    yield* waitUntil("end");

});