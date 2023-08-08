import { useState } from "react";
import PropTypes from "prop-types";
import { SelectButton } from "./Select.styled";

const Select = ({ handleChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "", label: "Show All" },
    { value: "false", label: "Follow" },
    { value: "true", label: "Followings" },
  ];

  const handleChangeSelect = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    handleChange(value);
  };

  return (
    <SelectButton value={selectedValue} onChange={handleChangeSelect}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectButton>
  );
};

export default Select;

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
