import { useState } from "react";
import PropTypes from "prop-types";

const Select = ({ handleChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "all", label: "Show All" },
    { value: "false", label: "Follow" },
    { value: "true", label: "Followings" },
  ];

  const handleChangeSelect = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    handleChange(value);
  };

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChangeSelect}
        style={{
          backgroundColor: "#3b83bd",
          color: "#fff",
          padding: "4px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "none",
          width: "130px",
          fontWeight: "500",
        }}
      >
        <option value="" disabled>
          Select value...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
