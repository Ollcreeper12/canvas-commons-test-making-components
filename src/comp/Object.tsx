import {colorSignal, Icon, initial, Node, NodeProps, Rect, signal, Txt} from '@canvas-commons/2d';
import {
    all,
    ColorSignal,
    createRef,
    createSignal,
    easeInOutCubic,
    PossibleColor,
    SignalValue,
    SimpleSignal,
    TimingFunction
} from "@canvas-commons/core";

export interface ObjectProperties extends NodeProps {
    text?: SignalValue<string>;
    icon?: SignalValue<string>;
    fontFamily?: SignalValue<string>;

    iconSize?: SignalValue<number>;
    fontSize?: SignalValue<number>;
    radius?: SignalValue<number>;

    color?: ColorSignal<PossibleColor>;
    textColor?: ColorSignal<PossibleColor>;
}


export class Object extends Node {

    @initial("_")
    @signal()
    public declare readonly text: SimpleSignal<string, this>;

    @initial("mdi:cube-outline")
    @signal()
    public declare readonly icon: SimpleSignal<string, this>;

    @initial("JetBrains Mono")
    @signal()
    public declare readonly fontFamily: SimpleSignal<string, this>;

    @initial(3)
    @signal()
    public declare readonly iconSize: SimpleSignal<number, this>;

    @initial(32)
    @signal()
    public declare readonly fontSize: SimpleSignal<number, this>;

    @initial(10)
    @signal()
    public declare readonly radius: SimpleSignal<number, this>;

    @initial('#7e33bd')
    @colorSignal()
    public declare readonly color: ColorSignal<this>

    @initial('#ffffff')
    @colorSignal()
    public declare readonly textColor: ColorSignal<this>

    private paddingOverrideActive = createSignal(false);
    private paddingOverrideValue = createSignal(0);

    private iconNode = createRef<Icon>();
    private rectNode = createRef<Rect>();
    private textNode = createRef<Txt>();

    public constructor(props: ObjectProperties) {

        super({});

        this.add(
            <Rect
                ref={this.rectNode}
                fill={() => this.color()}
                radius={() => this.radius()}
                layout
                alignItems={'center'}
                direction={'row'}
                padding={() =>
                    this.paddingOverrideActive() ?
                        this.paddingOverrideValue() :
                        (Math.max(3, this.iconSize()) - 2) * 10
                }
                paddingLeft={() => (Math.max(3, this.iconSize()) - 2) * 10 + 15}
                gap={() => (Math.max(3, this.iconSize()) - 2) * 20}
                smoothCorners
                shadowColor={'#212121'}
                shadowOffsetY={5}
                shadowBlur={5}
                clip
            >
                <Icon
                    ref={this.iconNode}
                    scale={() => this.iconSize()}
                    icon={() => this.icon()}
                />
                <Txt
                    ref={this.textNode}
                    fill={() => this.textColor()}
                    fontSize={() => this.fontSize()}
                    fontFamily={() => this.fontFamily()}
                    text={() => this.text()}
                />
            </Rect>
        );
    }

    public textLegacyAnimate(text: string, duration?: number, timingFunc?: TimingFunction) {
        return this.textNode().text(text, duration ?? 1, timingFunc ?? easeInOutCubic)
    }

    public getTargetHeight() {
        const padding = (this.icn() - 2) * 10

        return Math.max(
            this.iconNode().height(),
            this.textNode().height()
        ) + padding * 2
    }

    public getPaddingDynamicValue() { return (this.icn() - 2) * 10 }

    public* paddingOverride(value: number, time?: number, timingFunction?: TimingFunction) {
        this.paddingOverrideActive(true);

        yield* this.paddingOverrideValue(value, time ?? 1, timingFunction ?? easeInOutCubic)
    }

    public* paddingStopOverride(time?: number, timingFunction?: TimingFunction) {
        yield* this.paddingOverrideValue(this.getPaddingDynamicValue(), time ?? 1, timingFunction ?? easeInOutCubic)

        this.paddingOverrideActive(false)
    }

    public* animateFromFlat(time?: number, timingFunction?: TimingFunction) {
        yield* all(
            this.rectNode().height(0, 0).to(this.getTargetHeight(), time ?? 1, timingFunction ?? easeInOutCubic),
            this.paddingOverride(0, time ?? 1, timingFunction ?? easeInOutCubic),
            this.paddingStopOverride(time ?? 1, timingFunction ?? easeInOutCubic),
        );
    }

    public* animateToFlat(time?: number, timingFunction?: TimingFunction) {
        yield* all(
            this.rectNode().height(0, time ?? 1, timingFunction ?? easeInOutCubic),
            this.paddingOverride(0, time ?? 1, timingFunction ?? easeInOutCubic),
        );
    }

    private icn() {
        return Math.max(3, this.iconSize())
    }

}
