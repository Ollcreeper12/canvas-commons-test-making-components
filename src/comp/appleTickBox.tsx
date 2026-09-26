import {Circle, CircleProps, Icon, initial, NodeProps, Rect, RectProps, signal, Txt, Node} from '@canvas-commons/2d';
import {
    all,
    createRef,
    createSignal,
    easeInOutCubic,
    SignalValue,
    SimpleSignal,
    TimingFunction
} from "@canvas-commons/core";

export interface TickProps extends NodeProps {
    circleStrokeWidth?: SignalValue<number>;
    initialState?: SignalValue<boolean>;
}


export class AppleTickCircle extends Node {

    @initial(20)
    @signal()
    public declare readonly circleStrokeWidth: SimpleSignal<number>;

    @initial(false)
    @signal()
    public declare readonly initialState: SimpleSignal<boolean>;

    public constructor(props: TickProps) {
        super({
            ...props
        });
    }

}