import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const targetDate = new Date('2025-04-20T00:00:00');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Trigger animation once when 20% of the component is visible

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({});
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div ref={ref} className="h-[50vh] flex flex-col justify-center items-center px-10 rounded-2xl">
      {isInView && ( 
        <motion.div
          initial={{ y: 50, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center tracking-wide text-[#1a237e]">
            🚀 Hurry Up! Seats Are Filling Fast!
          </h2>

          {timeLeft.days !== undefined ? (
            <>
              <div className="flex space-x-8 text-center mt-6">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <motion.div
                    key={unit}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    className="flex flex-col items-center p-5 bg-[#2c21b6] text-[#f8b62d] rounded-2xl shadow-lg m-auto"
                  >
                    <span className="text-6xl font-bold">{formatTime(value)}</span>
                    <span className="text-sm uppercase mt-2 tracking-widest">{unit}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-lg mt-10 tracking-wider italic text-[#1a237e] text-center">
                Registration Ends On: April 20, 2025
              </p>
            </>
          ) : (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8 }}
              className="text-2xl mt-4 text-[#1a237e] font-semibold"
            >
              Registration Closed
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Countdown;
