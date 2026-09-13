import {Circle, makeScene2D} from '@canvas-commons/2d';
import {all, createRef, waitUntil} from '@canvas-commons/core';
import {Object} from "../comp/Object";

export default makeScene2D(function* (view) {
    // Create your animations here

    const obj = createRef<Object>();

    view.add(
        <>

            <Object
                ref={obj}
                text={""}
                opacity={0}
                fontFamily={"JetBrains Mono"}
            />
        </>
    );

    yield* all(
        obj().textLegacyAnimate("Hello"),
        obj().opacity(1, 0),
        obj().animateFromFlat(),
    );

    yield* waitUntil("end");

});
