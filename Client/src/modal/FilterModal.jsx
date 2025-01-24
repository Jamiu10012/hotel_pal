const FilterModal = ({ data, handleIsGuestClose }) => {
  const handleSelectGuests = (guests) => {
    handleIsGuestClose(guests);
  };
  return (
    <div className="filter-modal-container absolute flex justify-center flex-col items-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="list-filt"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          onClick={() => handleSelectGuests(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default FilterModal;
