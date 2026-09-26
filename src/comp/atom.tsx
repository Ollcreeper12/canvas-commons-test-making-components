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

export interface AtomProps extends NodeProps {
    elementID?: SignalValue<number>;
    shellWidth?: SignalValue<number>;
}


export class Atom extends Node {

    @initial(1)
    @signal()
    public declare readonly elementID: SimpleSignal<number>;

    @initial(10)
    @signal()
    public declare readonly shellWidth: SimpleSignal<number>;

    public constructor(props: AtomProps) {

        super({
            ...props

        });

        this.add(
            <>
                <Circle
                    width={100}
                    height={100}
                    lineWidth={this.shellWidth}
                    stroke={'#ffffff'}
                />
            </>
        );

    }

}
