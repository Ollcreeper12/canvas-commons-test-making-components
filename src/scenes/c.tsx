import {makeScene2D, Rect} from '@canvas-commons/2d';
import {all, Color, createRef, waitUntil} from '@canvas-commons/core';
import {Object} from "../comp/Object";
import {ColorPicker} from "../comp/ColorPicker";
import {NamedToggle} from "../comp/NamedToggle";
import {Toggle} from "../comp/Toggle";

export default makeScene2D(function* (view) {

    const opt = createRef<NamedToggle>()

    view.add(
        <NamedToggle ref={opt} text={"Hello"} textFont={"JetBrains Mono"}/>
    )

    yield* opt().toggle()

    yield* waitUntil("end");

});
