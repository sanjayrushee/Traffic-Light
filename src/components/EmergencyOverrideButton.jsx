const EmergencyOverrideButton = ({ setEmergencyOverride }) => {
  const handleClick = () => {
    setEmergencyOverride(true);
    setTimeout(() => {
      setEmergencyOverride(false);
    }, 5000);
  };

  return (
    <button 
      className="px-4 py-2 bg-red-500 text-white rounded"
      onClick={handleClick}
    >
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;
