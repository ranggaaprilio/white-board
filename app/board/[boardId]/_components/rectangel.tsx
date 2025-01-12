import {RectangleLayer} from "@/types/canvas";


interface RectangelProps {
    id:string,
    layer:RectangleLayer,
    onPointerDown:(e:React.PointerEvent,id:string) => void,
    selectionColor?:string,
}

export const Rectangel = ({
    id,
    layer,
    onPointerDown,
    selectionColor,
}:RectangelProps) => {

    const {
        x,
        y,
        height,
        width,
        fill,
    } =layer;



    return (
        <rect
            className={"drop-shadow-md"}
            style={{
                transform:`translate(${x}px,${y}px)`,
            }}
            x={0}
            y={0}
            width={width}
            height={height}
            onPointerDown={(e) => onPointerDown(e,id)}
            stroke={"transparent"}
            strokeWidth={1}
            fill={"#000"}
        />
    )
}