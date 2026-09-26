import {Node, Rect, Txt} from "@canvas-commons/2d";

export class WIPText extends Node {

    public constructor() {
        super({

        });

        this.add(
            <Rect
                layout
                fill={'#000000'}
                padding={20}
                paddingTop={10}
                paddingBottom={10}
                radius={20}
                lineWidth={30}
                stroke={'#ffffff'}
            >
                <Txt
                    text={"NOT FINISHED!!!"}
                    fill={'#ffffff'}
                    fontSize={48 * 2}
                />
            </Rect>
        )

    }



}