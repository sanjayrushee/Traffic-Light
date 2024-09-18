const GreenLight = ({ isActive }) => {
  return (
    <div className={`w-16 h-16 mt-2 mb-2  rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-500'}`}></div>
  );
};

export default GreenLight;
