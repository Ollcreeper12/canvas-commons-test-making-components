import {Circle, Line, makeScene2D, Rect} from '@canvas-commons/2d';
import {all, createRef, waitUntil} from '@canvas-commons/core';
import {Atom} from "../comp/atom";

export default makeScene2D(function* (view) {

    const rect = createRef<Rect>();

    view.add(
        <>
            <Rect
                ref={rect}
                width={100}
                height={100}
            />
        </>
    );

    yield* rect().animate("fadeIn")

});
