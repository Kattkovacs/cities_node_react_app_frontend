import React from "react";
import Select from "react-select";

export default function CountrySelect({ countries, handleSelect }) {
  return (
    <div>
      <Select
        className="m-3"
        isClearable
        options={countries}
        onChange={(selectedOption) =>
          selectedOption != null ? handleSelect(selectedOption.id) : ""
        }
        placeholder="Select a country"
      ></Select>
    </div>
  );
}
