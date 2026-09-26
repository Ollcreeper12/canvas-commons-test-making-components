import {Circle, Line, makeScene2D} from '@canvas-commons/2d';
import {all, createRef, waitUntil} from '@canvas-commons/core';

export default makeScene2D(function* (view) {

    const circ = createRef<Circle>();
    const arrow = createRef<Line>();

    view.add(
        <>
            <Circle
                ref={circ}
                size={[200, 200]}
                stroke={'#8ae1f5'}
                lineWidth={20}
                end={0}
            />
            <Line
                ref={arrow}
                points={[
                    [-45, -30],
                    [0, 30],
                    [120, -80]
                ]}
                stroke={'#8ae1f5'}
                lineWidth={20}
                rotation={-5}
                end={0}

            />
        </>
    );


    yield* all(
        circ().end(1, 1),
        arrow().end(1, 1.3),
    )

    yield* waitUntil("end");

});
