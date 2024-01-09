
import React, { useEffect, useRef, useState } from "react";

type MentionInputType = {
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    name?: string
  ) => void;
};

const MentionInput: React.FC<MentionInputType> = ({ value, handleChange }) => {
  const [mentionedName, setMentionedName] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name: string = e.target.value;
    setMentionedName(name);
    handleChange(e, name);
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  useEffect(() => {
    const show: boolean = value.charAt(value.length - 1) === "@";
    setShowDropdown(show);
    inputRef.current?.focus();
    return () => {
      setMentionedName("");
      setShowDropdown(false);
    };
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "800px",
      }}
    >
      <div>
        <input
          ref={inputRef}
          value={value}
          onChange={handleChange}
          name="x-mention"
          style={{
            padding: "10px",
            lineHeight: "10px",
            fontSize: "30px",
            width: "800px",
          }}
          placeholder="Enter Comment"
        />
      </div>
      <div>
        {showDropdown ? (
          <select
            size={4}
            style={{
              padding: "10px",
              lineHeight: "10px",
              fontSize: "30px",
              overflowY: "hidden",
              outline: "none",
              width: "800px",
            }}
            value={mentionedName}
            onChange={handleSelect}
          >
            <optgroup label="Select Person">
              <option tabIndex={0} value="Rahul">Rahul</option>
              <option tabIndex={1} value="Tina">Tina</option>
              <option tabIndex={2} value="Anjali">Anjali</option>
            </optgroup>
          </select>
        ) : null}
      </div>
    </div>
  );
};

export default MentionInput;

