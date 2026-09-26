import {makeScene2D} from "@canvas-commons/2d";
import {createRef, Direction, slideTransition} from "@canvas-commons/core";
import {Video2} from "../../comp/Video2";
import {Vid} from "../../comp/Vid";

export default makeScene2D(function* (view) {


    const vid = createRef<Vid>()

    view.add(
        <>
            <Vid
                ref={vid}
                videoSource={"/code_testing/render1.mp4"}
            />
        </>
    );

    yield* slideTransition(Direction.Bottom, 1);

    yield* vid().play();


});