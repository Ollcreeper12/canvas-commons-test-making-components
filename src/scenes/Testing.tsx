import {makeScene2D, Rect, Layout} from '@canvas-commons/2d';
import {all, createRef, waitUntil} from '@canvas-commons/core';
import {Object} from "../comp/Object";
import {ColorPicker} from "../comp/ColorPicker";

export default makeScene2D(function* (view) {

    const picker = createRef<ColorPicker>()

    view.add(
        <>
            <ColorPicker ref={picker} />
        </>
    );

    yield* waitUntil("end");

});
