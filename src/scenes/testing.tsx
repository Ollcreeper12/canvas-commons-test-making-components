import {Circle, Line, makeScene2D, Rect} from '@canvas-commons/2d';
import {all, createRef, waitUntil} from '@canvas-commons/core';
import {Atom} from "../comp/atom";
import {Object} from "../comp/Object";

export default makeScene2D(function* (view) {

    const obj = createRef<Object>()

    view.add(
        <Object
            ref={obj}
            text={"SomeNode"}
        />
    )

    yield* obj().text("Hewo", 1)



});
