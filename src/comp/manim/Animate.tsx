import {Node} from "@canvas-commons/2d";
import {ThreadGenerator} from "@canvas-commons/core";

export type DrawStyle =
    | "write"
    | "fadeIn"
    | "fadeOut";

declare module "@canvas-commons/2d" {
    interface Node {
        animate(style: DrawStyle, duration?: number): ThreadGenerator;
    }
}

Node.prototype.animate = function (
    style: DrawStyle,
    duration = 1,
): ThreadGenerator {
    switch (style) {
        case "write":
            return write(this, duration);

        case "fadeIn":
            return fadeIn(this, duration);

        case "fadeOut":
            return fadeOut(this, duration);

        default:
            throw new Error(`Unknown Draw Style: ${style}`);
    }
};

export function* fadeOut(node: Node, duration?: number) {
    yield* node.opacity(0, duration)
}

export function* fadeIn(node: Node, duration?: number) {
    yield* node.opacity(1, duration)
}