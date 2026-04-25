import { useState } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import FilterModal from "./FilterModal";

const FILTERS = ["성별", "색상", "사이즈", "가격대", "종류"];

export default function FilterSection({ onFilterChange }) {
  const [openFilter, setOpenFilter] = useState(null);
  const [activeSelections, setActiveSelections] = useState({});

  const handleToggle = (filterName) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };

  const handleApply = (filterName, selectedOptions) => {
    const next = { ...activeSelections, [filterName]: selectedOptions };
    if (selectedOptions.length === 0) delete next[filterName];
    setActiveSelections(next);
    onFilterChange(next);
  };

  return (
    <>
      <FilterWrap>
        {FILTERS.map((filter) => (
          <FilterButton
            key={filter}
            text={filter}
            isActive={activeSelections[filter]?.length > 0}
            onClick={() => handleToggle(filter)}
          />
        ))}
      </FilterWrap>

      {openFilter && (
        <FilterModal
          selectedFilter={openFilter}
          currentSelections={activeSelections[openFilter] || []}
          onClose={() => setOpenFilter(null)}
          onApply={handleApply}
        />
      )}
    </>
  );
}

const FilterWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: 153px;
  margin-top: 28px;
`;
