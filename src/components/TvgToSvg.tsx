import * as TvgType from "../scripts/tiny-vector-graphics/TvgType";
/*
function TvgLayout({ layout }: { layout: TvgType.Layout }) {
  const ref = useRef<SVGGElement>(null);
  return (
    <g ref={ref} id={layout.id}>
      <TvgToSvg tvg={layout.children} />
    </g>
  );
}
*/

function DecodeStroke(stroke: TvgType.Stroke | undefined) {
  if (stroke === undefined) {
    return { stroke: 'none' };
  }
  else {
    return {
      stroke: stroke?.color,
      strokeWidth: stroke?.width,
      strokeDasharray: (
        stroke?.dasharray?.map((item) => { return String(item) }).join(' ') ?? ''
      )
    };
  }
}

function DecodeFill(fill: TvgType.Fill | undefined) {
  if (fill === undefined) {
    return { fill: 'none' };
  }
  else {
    return {
      fill: fill.color,
      fillRule: fill.rule
    };
  }
}

function DecodeFont(font: TvgType.Font | undefined) {
  return {
    fontFamily: font?.family,
    fontSize: font?.size,
    fontWeight: font?.weight,
    fontStyle: font?.style
  };
}

function DecodeTextPlacement(placement: TvgType.TextPlacement | undefined) {
  return {
    textAnchor: placement?.anchor,
    dominantBaseline: placement?.baseline,
  };
}

export function TvgToSvg({ tvg }: { tvg: TvgType.TvgElement[] }) {
  return (
    <>
      {tvg.map((item, index) => {
        switch (item.type) {
          case 'rect':
            return (
              <rect
                key={index}
                x={item.x}
                y={item.y}
                width={item.width}
                height={item.height}
                rx={item.rx}
                ry={item.ry}
                {...DecodeStroke(item.stroke)}
                {...DecodeFill(item.fill)}
              />
            );
          case 'ellipse':
            return (
              <ellipse
                key={index}
                x={item.cx}
                y={item.cy}
                rx={item.rx}
                ry={item.rx}
                {...DecodeStroke(item.stroke)}
                {...DecodeFill(item.fill)}
              />
            );
          case 'line':
            return (
              <line
                key={index}
                x1={item.x1}
                y1={item.y1}
                x2={item.x2}
                y2={item.y2}
                {...DecodeStroke(item.stroke)}
              />
            );
          case 'polyline':
            return (
              <polyline
                key={index}
                points={
                  item.points.map((value) => {
                    return `${value[0]},${value[1]}`;
                  }).join(' ')
                }
                {...DecodeStroke(item.stroke)}
                {...DecodeFill(item.fill)}
              />
            );
          case 'polygon':
            return (
              <polygon
                key={index}
                points={
                  item.points.map((value) => {
                    return `${value[0]},${value[1]}`;
                  }).join(' ')
                }
                {...DecodeStroke(item.stroke)}
                {...DecodeFill(item.fill)}
              />
            );
          case 'text':
            return (
              <text
                key={index}
                x={item.x}
                y={item.y}
                {...DecodeTextPlacement(item.placement)}
                {...DecodeFont(item.font)}
                {...DecodeStroke(item.stroke)}
                {...DecodeFill(item.fill)}
              >{item.text}</text >
            );
          case 'group':
            return (
              <g key={index}>
                <TvgToSvg tvg={item.children} />
              </g>
            );
          default:
            break;
        }
      })}
    </>
  );
}
