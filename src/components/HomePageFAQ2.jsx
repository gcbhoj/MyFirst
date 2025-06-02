import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "./UIComponents/Button.jsx";

const HomePageFAQ2 = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList((prev) => !prev);
  };
  return (
    <>
      <Button
        onClick={toggleList}
        icon={showList ? <FaMinus /> : <FaPlus />}
        border="border-0"
        margin="m-5"
        label="Why learn with Us ?"
        hoverBackground="hover:text-rose-400"
      />

      {showList && (
        <ul className="list-disc pl-8 pr-4 font-serif text-sm text-gray-800 space-y-3 tracking-wide">
          <li>
            <strong>Designed by educatiors and Sanskrit scholars.</strong>
          </li>
          <li>
            <strong>Child-fridndly and adult accessible interface</strong>
          </li>
          <li>
            <strong>Ideal for families, and self paced learners.</strong>
          </li>
          <li>
            <strong>Continuously updated with new levels and content.</strong>
          </li>
        </ul>
      )}
    </>
  );
};

export default HomePageFAQ2;
