import {Circle, Line, makeScene2D, Rect, Code} from '@canvas-commons/2d';
import {all, createRef, waitUntil} from '@canvas-commons/core';
import {Atom} from "../../comp/atom";

export default makeScene2D(function* (view) {

    const code = createRef<Code>()

    view.add (
        <>
            <Code
                ref={code}
                code={``}
            />
        </>
    )

    yield* waitUntil("addImport");
    yield* code().code.append(`from manim import *`, 1)


    yield* waitUntil("classIt");
    yield* code().code.append(`\n
class animation(Scene):
    def construct(self):\
`, 1)

    yield* waitUntil("addMatrix");
    yield* code().code.append(`\n
        matrix = MathTex(r"""
            \\begin{bmatrix}
            \\end{bmatrix}
        """)
`, 1)

    yield* waitUntil("addItemsToMatrix");
    yield* code().code.insert([7, 0], `\
                  1
                \\\\2
`, 1)

    yield* waitUntil("writeToScreen")
    yield* code().code.append(`\n
        self.play(Write(matrix))
        self.wait(3)
`, 1)


    yield* waitUntil("end");

});