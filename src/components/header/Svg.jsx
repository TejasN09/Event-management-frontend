import React, { useEffect } from 'react';

function Svg() {
  useEffect(() => {
    const svg = document.getElementById('my-svg');
    const setViewBox = () => {
      const vw = window.innerWidth;
      if (vw < 768) {
        svg.setAttribute('viewBox', '0 0 768 255');
      } else if (vw >= 768 && vw < 1024) {
        svg.setAttribute('viewBox', '0 0 1024 255');
      } else {
        svg.setAttribute('viewBox', '0 0 1440 240');
      }
    };
    setViewBox();
    window.addEventListener('resize', setViewBox);
    return () => {
      window.removeEventListener('resize', setViewBox);
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(1 -1)"
      width="100%"
      height="auto"
      viewBox="0 0 1440 240"
      className="flex-no-shrink fill-current"
      id="my-svg"
    >
      <path
        fill="#800080"
        fillOpacity="1"
        d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,144C672,128,768,64,864,69.3C960,75,1056,149,1152,154.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  );
}

export default Svg;


