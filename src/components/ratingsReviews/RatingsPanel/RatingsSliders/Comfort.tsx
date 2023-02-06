import React, { FC } from 'react';

interface ComfortProps{
  position: {
    id: number;
    value: string;
  }
}

const Comfort: FC<ComfortProps> = ({ position }) => {

  const pointerPosition = (position) => {
    if (!position) {
      return;
    }
    return position.value + "%";
  }

  return (
    <div className="ratings-sliders">
      <span className="slider-title">Comfort</span>
      <div className="slider">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="pointer" style={{
          position: "absolute",
          left: `${pointerPosition(position)}`,
        }}>V</div>
      </div>
      <div className="slider-tags">
        <div>Poor</div> <div>Perfect</div>
      </div>
  </div>
  )
}


export default Comfort;