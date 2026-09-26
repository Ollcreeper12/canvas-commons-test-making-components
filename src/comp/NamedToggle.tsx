import {colorSignal, initial, Rect, RectProps, signal, Txt} from "@canvas-commons/2d";
import {Color, ColorSignal, createRef, PossibleColor, SignalValue, SimpleSignal} from "@canvas-commons/core";
import {Toggle} from "./Toggle";

export interface NamedToggleProps extends RectProps {
    bgColor?: SignalValue<PossibleColor>;
    state?: SignalValue<boolean>;
    radiusRect?: SignalValue<number>;

    text?: SignalValue<string>
    textColor?: SignalValue<PossibleColor>;
    textSize?: SignalValue<number>;
    textFont?: string;

}

export class NamedToggle extends Rect {

    @initial(false)
    @signal()
    public declare readonly state: SimpleSignal<PossibleColor, this>

    @initial('#663de9')
    @colorSignal()
    public declare readonly bgColor: ColorSignal<this>

    @initial(100000)
    @signal()
    public declare readonly radiusRect: SimpleSignal<number, this>

    @initial("_")
    @signal()
    public declare readonly text: SimpleSignal<string, this>

    @initial(32)
    @signal()
    public declare readonly textSize: SimpleSignal<number>;

    @initial('#ffffff')
    @colorSignal()
    public declare readonly textColor: ColorSignal<this>

    private tg = createRef<Toggle>()

    public constructor(props?: NamedToggleProps) {
        super({
            ...props,
            //layout: true,
            fill: () => this.bgColor(),
            padding: 20,
            radius: () => this.radiusRect(),
            //justifyContent: "center",
            //alignItems: "center",
            gap: 20


        });

        this.add(
            <>
                <Txt
                    fill={() => this.textColor()}
                    text={() =>  this.text()}
                    fontFamily={props.textFont ?? "Arial"}
                    fontSize={() => this.textSize()}
                />

                <Toggle ref={this.tg} initialState={false}/>

            </>
        )
    }


    public *toggle(time?: number) {
        yield* this.tg().toggle(time ?? 1)
    }
}