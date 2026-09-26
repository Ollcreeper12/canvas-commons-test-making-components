import {Node, NodeProps, signal, Video} from "@canvas-commons/2d";
import {createRef, SignalValue, SimpleSignal, ThreadGenerator, waitFor} from "@canvas-commons/core";

export interface VidProps extends NodeProps {
    videoSource: SignalValue<string>;
}

export class Vid extends Node {




    @signal()
    public declare readonly videoSource: SimpleSignal<string,  this>

    private videoNode = createRef<Video>();

    public constructor(props: VidProps) {
        super({
            ...props
        });

        const videoNode = createRef<Video>()

        this.add(
            <>
                <Video
                    ref={videoNode}
                    src={() => this.videoSource()}
                />
            </>
        )

        this.videoNode = videoNode;

    }

    public play(): ThreadGenerator;
    public play(duration: number): ThreadGenerator;

    public *play(duration?: number): ThreadGenerator {

        if (duration === undefined) {
            while (!Number.isFinite(this.videoNode().getDuration()) || this.videoNode().getDuration() <= 0) {
                yield* waitFor(0.001);
            }

            this.videoNode().play();

            yield* waitFor(this.videoNode().getDuration());
        } else {
            this.videoNode().play()
            yield* waitFor(duration)
        }
    }

}