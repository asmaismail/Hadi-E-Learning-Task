import { useState, useEffect } from 'react';
import { FaUser, FaGraduationCap, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';

const CounterUp = () => {
  const [counters, setCounters] = useState([
    { icon: <FaUser className="text-yellow-500" />, count: 0, text: 'Satisfied Customers' },
    { icon: <FaChalkboardTeacher className="text-yellow-500" />, count: 0, text: 'Experinced staff' },
    { icon: <FaBuilding className="text-yellow-500" />, count: 0, text: 'Sub-Campuses' },
    { icon: <FaGraduationCap className="text-yellow-500" />, count: 0, text: 'Services' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters => prevCounters.map(counter => ({
        ...counter,
        count: counter.count < getMaxCount(counter.text) ? counter.count + 1 : counter.count
      })));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const getMaxCount = (text) => {
    switch (text) {
      case 'Satisfied Customers':
        return 10000;
      case 'Experinced staff':
        return 500;
      case 'Sub-Campuses':
        return 500;
      case 'Services':
        return 4;
      default:
        return 0;
    }
  };

  return (
    <div className="flex lg:flex-row w-full flex-col  lg:72 h-auto justify-center mt-20 mb-20 bg-blue-400">
      <div className="mx-20 w-auto gap-x-44 flex lg:flex-row flex-col lg:h-72 h-auto  justify-center items-center">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col font-bold text-[40px] text-yellow items-center mx-4">
            {counter.icon}
            <p className="text-[30px] text-white font-bold">{counter.count}</p>
            <p className="text-gray-300 font-bold text-[20px]">{counter.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterUp;