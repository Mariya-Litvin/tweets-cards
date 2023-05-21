import { useState } from "react";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "All", label: "All" },
    { value: "Follow", label: "Follow" },
    { value: "Followings", label: "Followings" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    //   if (selectedValue==="follow")
  };

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChange}
        style={{
          backgroundColor: "#3b83bd",
          color: "#fff",
          padding: "4px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "none",
          width: "120px",
          fontWeight: "500",
        }}
      >
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
