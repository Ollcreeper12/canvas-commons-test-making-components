import {makeScene2D, Rect} from '@canvas-commons/2d';
import {all, createRef, waitUntil} from '@canvas-commons/core';
import {Object} from "../comp/Object";

export default makeScene2D(function* (view) {
    // Create your animations here

    const rect = createRef<Rect>();

    const obj1 = createRef<Object>();
    const obj2 = createRef<Object>();
    const obj3 = createRef<Object>();

    view.add(
        <>
            <Rect
                ref={rect}
                fill={'#1c3b70'}
                layout
                padding={20}
                radius={20}
                alignItems={"stretch"}
                direction={"column"}
                scale={2}
            >
                <Object
                    ref={obj1}
                    opacity={0}
                    fontFamily={"JetBrains Mono"}
                    height={0}
                    icon={"mdi:folder-outline"}
                />
                <Object
                    ref={obj2}
                    opacity={0}
                    fontFamily={"JetBrains Mono"}
                    height={0}
                    icon={"mdi:folder-multiple-outline"}
                />
                <Object
                    ref={obj3}
                    opacity={0}
                    fontFamily={"JetBrains Mono"}
                    height={0}
                    icon={"mdi:folder-outline"}
                />
            </Rect>
        </>
    );

    yield* all(
        obj1().paddingOverride(0, 0),
        obj2().paddingOverride(0, 0),
        obj2().paddingOverride(0, 0),
        obj3().paddingOverride(0, 0),

        rect().padding(0,0)
    )


    yield* waitUntil("vkh")
    yield* all(
        rect().padding(20,1),

        obj1().textLegacyAnimate("vk-headers", 1),
        obj1().opacity(1, 0),
        obj1().animateFromFlat(),
    );

    yield* waitUntil("helpers")
    yield* all(
        obj2().textLegacyAnimate("vma/volk", 1),
        obj2().opacity(1, 0),
        obj2().animateFromFlat(),

        rect().gap(20,1),
    );


    yield* waitUntil("glfw")
    yield* all(
        obj3().textLegacyAnimate("glfw", 1),
        obj3().opacity(1, 0),
        obj3().animateFromFlat(),
        obj3().height(0,0).to(obj3().getTargetHeight(), 1),
    );

    yield* waitUntil("end");

});
