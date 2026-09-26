import {initial, signal, Video, VideoProps} from '@canvas-commons/2d';
import {SignalValue, SimpleSignal, waitFor} from "@canvas-commons/core";

export interface Video2Properties extends VideoProps {
    source: SignalValue<string>;
    autoPlay?: SignalValue<boolean>;
}


export class Video2 extends Video {

    @signal()
    public declare readonly source: SimpleSignal<string, this>

    @initial(false)
    @signal()
    public declare readonly autoPlay: SimpleSignal<boolean, this>

    public constructor(props: Video2Properties) {

        super({...props,});
        this.src(() => this.source())


    }

    public* playVideo() {
        while (!Number.isFinite(this.getDuration()) || this.getDuration() <= 0) {
            yield* waitFor(0.001);
        }

        this.play();

        yield* waitFor(this.getDuration());
    }


}
