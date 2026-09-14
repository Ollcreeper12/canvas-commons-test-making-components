import {makeScene2D, Rect} from '@canvas-commons/2d';
import {all, Color, createRef, waitUntil} from '@canvas-commons/core';
import {Object} from "../comp/Object";
import {ColorPicker} from "../comp/ColorPicker";

export default makeScene2D(function* (view) {

    view.add(
        <ColorPicker color={new Color('#3890c1')}/>
    )


    yield* waitUntil("end");

});
