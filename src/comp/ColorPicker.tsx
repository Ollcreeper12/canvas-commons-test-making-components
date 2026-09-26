import {colorSignal, initial, Layout, LayoutProps, Rect, signal} from '@canvas-commons/2d';
import {Color, ColorSignal, createSignal, PossibleColor, SignalValue, SimpleSignal} from "@canvas-commons/core";
import {Controller} from './ColorPicker/Controller';

export interface ColorPickerProperties extends LayoutProps {

    color?: SignalValue<PossibleColor>;
    previewHeight?: SignalValue<number>;
    radius?: SignalValue<number>;


}

export class ColorPicker extends Layout {

    @initial('#000000')
    @colorSignal()
    public declare readonly color: ColorSignal<this>

    @initial(150)
    @signal()
    public declare readonly previewHeight: SimpleSignal<number, this>

    @initial(10)
    @signal()
    public declare readonly radius: SimpleSignal<number, this>


    public constructor(props: ColorPickerProperties) {
        super({
            ...props,
            layout: true,
            alignItems: 'center',
            direction: 'column',
        });


        // The Preview
        this.add(
            <>
                <Rect
                    fill={() => this.color()}
                    // width={() => rgba().width()}
                    height={() => this.previewHeight()}
                    radius={() => [
                        this.radius(),
                        this.radius(),
                        0,
                        0
                    ]}
                    position={() => [0, -this.radius() * 2]}
                    alignItems={"center"}
                    padding={10}
                    smoothCorners
                >
                    <Controller text={"A:"} scale={0}/>
                </Rect>


                // The RGBA


                <Rect

                    layout
                    direction={'column'}
                    alignItems={'center'}
                    padding={10}
                    gap={0}
                    fill={'#282828'}
                    radius={() => [
                        0,
                        0,
                        this.radius(),
                        this.radius()
                    ]}
                    position={() => [0, this.previewHeight() / 2]}

                    shadowColor={'#212121'}
                    shadowOffsetY={5}
                    shadowBlur={5}

                    smoothCorners
                >
                    <Controller
                        text={"R:"}
                        color={this.color}
                        fillWidth={() => this.getRGB().r}
                        fillText={() => this.getRGB().r.toString()}/>
                    <Controller
                        text={"G:"}
                        color={this.color}
                        fillWidth={() => this.getRGB().g}
                        fillText={() => this.getRGB().g.toString()}/>
                    <Controller
                        text={"B:"}
                        color={this.color}
                        fillWidth={() => this.getRGB().b}
                        fillText={() => this.getRGB().b.toString()}/>
                    <Controller
                        text={"A:"}
                        color={this.color}
                        fillWidth={() => this.getRGB().a}
                        fillText={() => this.getRGB().a.toString()}
                    />
                </Rect>
            </>
        );


    }

    private getRGB() {
        const colorHex: string = this.color().hex("rgba")

        return {
            r: parseInt(colorHex.slice(1, 3), 16),
            g: parseInt(colorHex.slice(3, 5), 16),
            b: parseInt(colorHex.slice(5, 7), 16),
            a: parseInt(colorHex.slice(7, 9), 16),
        }
    }
}
