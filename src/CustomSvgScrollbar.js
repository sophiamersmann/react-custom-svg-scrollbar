import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { select, pointers } from 'd3-selection';
import { brushY } from 'd3-brush';

import './CustomSvgScrollbar.css';

function styles(styles) {
  return function(selection) {
    for (let property in styles) {
      selection.style(property, styles[property]);
    }
  };
}

function CustomSvgScrollbar(props) {
  const container = useRef(null);
  const gBrush = useRef(null);
  const handleHeight = useRef(0);

  // required for scrolling
  let ticking = false;
  let top = 0;

  const brushing = {
    byDragDrop: false,
    byClick: false,
    hasBrushed: false,
  };

  const brush = brushY()
    .filter((e) => !e.ctrlKey && !e.button
      && (e.metaKey || e.target.__data__.type !== 'overlay'))
    .on('start', brushStart)
    .on('brush', brushed)
    .on('end', brushEnded);

  function beforeBrushStarted(e) {
    brushing.byClick = true;

    const dy = handleHeight.current;
    const [[,cy]] = pointers(e);
    const [y0, y1] = [cy - dy / 2, cy + dy / 2];
    const [Y0, Y1] = [0, props.height];

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
    if (!selection || (!sourceEvent && brushing.hasBrushed && !brushing.byClick)) return;

    brushing.byDragDrop = true;

    const top = selection[0] / props.height;
    container.current.scrollTo({
      top: top * container.current.scrollHeight,
    });
  }

  function brushEnded() {
    brushing.byDragDrop = false;
    brushing.hasBrushed = true
  }

  // initialize brush
  useEffect(() => {
    const g = select(gBrush.current);

    // set height of brush handle
    const visible = props.height / container.current.scrollHeight;
    handleHeight.current = visible * props.height;

    // initialize brush
    g
      .call(brush)
      .call(brush.move, [0, handleHeight.current])
      .call((g) => g.select('.overlay')
        .on('mousedown touchstart', beforeBrushStarted));

    // customize handle styles
    g.select('.selection')
      .attr('cursor', 'ns-resize')
      .call(styles(props.handleStyles));
    
    // prevent brush resize
    g.selectAll('.handle').remove();
  });

  function onScroll() {
    if (brushing.byDragDrop) return;
    
    top = container.current.scrollTop;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y1 = (top / container.current.scrollHeight) * props.height;
        select(gBrush.current)
          .call(brush.move, [y1, y1 + handleHeight.current]);
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
        style={{ flexBasis: props.width }}
      >
        <svg
          width={props.width}
          height={props.height}
        >
          {props.track}
          <g className="brush" ref={gBrush} />
        </svg>
      </div>
    </div>
  );
}

CustomSvgScrollbar.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number,
  track: PropTypes.node,
  handleStyles: PropTypes.object,
};

CustomSvgScrollbar.defaultProps = {
  height: 600,
  width: 20,
};

export default CustomSvgScrollbar;
