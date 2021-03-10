import { useEffect, useRef } from 'react';

import { select, pointers } from 'd3-selection';
import { brushY } from 'd3-brush';

import './CustomSvgScrollbar.css';

function CustomSvgScrollbar(props) {
  const container = useRef(null);
  const gBrush = useRef(null);
  const brushHeight = useRef(0);

  const brushing = {
    byDragDrop: false,
    byClick: false,
    hasBrushed: false,
  };

  const brush = brushY()
    .on('start', brushStart)
    .on('brush', brushed)
    .on('end', brushEnded);

  function beforeBrushStarted(e) {
    brushing.byClick = true;

    const dy = brushHeight.current;
    const [[,cy]] = pointers(e);
    const [y0, y1] = [cy - dy / 2, cy + dy / 2];
    const [Y0, Y1] = [0, props.height];

    select(gBrush.current)
      .call(brush.move, y1 > Y1 ? [Y1 - dy, Y1] 
        : y0 < Y0 ? [Y0, Y0 + dy] 
        : [y0, y1]);
  }

  function brushStart() {
    select(this)
      .select('.overlay')
      .attr('cursor', 'ns-resize');
  }

  function brushed({ selection, sourceEvent }) {
    if (!selection || (!sourceEvent && brushing.hasBrushed && !brushing.byClick)) return;

    brushing.byDragDrop = true;

    const top = selection[0] / props.height;
    container.current.scrollTo({ top: top * container.current.scrollHeight });
  }

  function brushEnded() {
    brushing.byDragDrop = false;
    brushing.byClick = false;
    brushing.hasBrushed = true
  }

  useEffect(() => {
    const g = select(gBrush.current);

    // set height of brush
    const visible = container.current.clientHeight / container.current.scrollHeight;
    brushHeight.current = visible * props.height;

    // initialize brush
    g
      .call(brush)
      .call(brush.move, [0, brushHeight.current])
      .call(g => g.select('.overlay')
        .on('mousedown touchstart', beforeBrushStarted));

    // customize cursor
    g.select('.selection').attr('cursor', 'ns-resize');
    
    // prevent brush resize
    g.selectAll('.handle').remove();
  });

  let ticking = false;
  let top = 0;
  function onScroll() {
    if (brushing.byDragDrop) return;
    
    top = container.current.scrollTop;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y1 = (top / container.current.scrollHeight) * props.height;
        select(gBrush.current)
          .call(brush.move, [y1, y1 + brushHeight.current ]);
        ticking = false;
      });
  
      ticking = true;
    }
  }

  return (
    <div className="custom-svg-scrollbar">
      <div
        className="container"
        ref={container}
        onScroll={onScroll}
        style={{ height: props.height }}
      >
        {props.children}
      </div>
      <div
        className="scrollbar"
        style={{
          flexShrink: 0,
          flexGrow: 0,
          flexBasis: props.width
        }}
      >
        <svg width={props.width} height={props.height}>
          {props.track}
          <g className="brush" ref={gBrush} />
        </svg>
      </div>
    </div>
  );
}

export default CustomSvgScrollbar;
