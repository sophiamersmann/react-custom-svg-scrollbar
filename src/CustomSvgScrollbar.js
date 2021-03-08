import { useEffect, useRef } from 'react';

import { select, pointers } from 'd3-selection';
import { brushY } from 'd3-brush';

import './CustomSvgScrollbar.css';

function CustomSvgScrollbar(props) {
  const container = useRef(null);
  const gBrush = useRef(null);
  const brushHeight = useRef(0);

  const containerHeight = 600;

  let hasBrushed = false;
  const brushing = {
    byDragDrop: false,
    byClick: false
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
    const [Y0, Y1] = [0, containerHeight];

    select(gBrush.current)
      .call(brush.move, y1 > Y1 ? [Y1 - dy, Y1] 
        : y0 < Y0 ? [Y0, Y0 + dy] 
        : [y0, y1]);
  }

  function brushStart() {
    select(gBrush.current)
      .select('.overlay')
      .attr('cursor', 'ns-resize');
  }

  function brushed({ selection, sourceEvent }) {
    if (sourceEvent === undefined && hasBrushed && !brushing.byClick) return;

    brushing.byDragDrop = true;
    hasBrushed = true;

    const top = selection[0] / containerHeight;
    container.current.scrollTo({ top: top * container.current.scrollHeight });
  }

  function brushEnded() {
    brushing.byDragDrop = false;
    brushing.byClick = false;
  }

  useEffect(() => {
    const g = select(gBrush.current);

    g
      .call(brush)
      .call(g => g.select('.overlay')
          .datum({type: 'selection'})
          .on('mousedown touchstart', beforeBrushStarted));

    g.select('.selection').attr('cursor', 'ns-resize');
    g.selectAll('.handle').remove();
  });

  useEffect(() => {
    const visible = container.current.clientHeight / container.current.scrollHeight;
    brushHeight.current = visible * containerHeight;
    select(gBrush.current)
      .call(brush.move, [0, visible * containerHeight]);
  });

  let ticking = false;
  let top = 0;

  function onScroll() {
    if (brushing.byDragDrop) return;
    
    top = container.current.scrollTop;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y1 = (top / container.current.scrollHeight) * containerHeight;
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
        ref={container}
        className="container"
        onScroll={onScroll}
        style={{height: containerHeight}}
      >
        {props.children}
      </div>
      <div className="scrollbar">
        <svg width="50" height={containerHeight}>
          <rect width="50" height={containerHeight} fill="khaki"></rect>
          <g ref={gBrush} className="brush"></g>
        </svg>
      </div>
    </div>
  );
}

export default CustomSvgScrollbar;
