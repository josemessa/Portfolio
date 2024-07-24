import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInOutComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // No solo una vez
    threshold: 0.45,     // 10% visible
  });

  return (
    <div ref={ref} className={`fade-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInOutComponent;
