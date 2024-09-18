const PedestrianButton = ({ setPedestrianRequested }) => {
  const handleClick = () => {
    setPedestrianRequested(true);
  };

  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handleClick}
    >
      Pedestrian Request
    </button>
  );
};

export default PedestrianButton;
