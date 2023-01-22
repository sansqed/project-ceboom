import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function DragMove(props) {
    const {
      onPointerDown,
      onPointerUp,
      onPointerMove,
      onDragMove,
      children,
      style,
      className,
      isSvg = false,
    } = props;
  
    const [isDragging, setIsDragging] = useState(false);
  
    const handlePointerDown = (e) => {
      setIsDragging(true);
  
      onPointerDown(e);
    };
    
    const handlePointerUp = (e) => {
      setIsDragging(false);
      
      onPointerUp(e);
    };
    
    const handlePointerMove = (e) => {
      if (isDragging) onDragMove(e);
      
      onPointerMove(e);
    };
  
    useEffect(() => {
      window.addEventListener('pointerup', handlePointerUp);
  
      return () => {
        window.removeEventListener('pointerup', handlePointerUp);
      }
    }, []);
  
    // Dynamically render a <g> or <div> tag
    const Tag = isSvg ? 'g' : 'div';
  
    return (
      <Tag
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        style={style}
        className={className}
      >
        {children}
      </Tag>
    );
  }
  
  const { func, element, shape, bool, string } = PropTypes;
  
  DragMove.propTypes = {
    onDragMove: func.isRequired,
    onPointerDown: func,
    onPointerUp: func,
    onPointerMove: func,
    children: element,
    style: shape({}),
    className: string,
    isSvg: bool
  }
  
  DragMove.defaultProps = {
    onPointerDown: () => {},
    onPointerUp: () => {},
    onPointerMove: () => {},
  };