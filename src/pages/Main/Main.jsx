import styled from "styled-components";
import FilterButton from "../../components/common/button/FilterButton";

export default function Main() {
  return (
    <ButtonWrap>
      <FilterButton text="성별" />
      <FilterButton text="색상" />
      <FilterButton text="사이즈" />
      <FilterButton text="가격대" />
      <FilterButton text="종류" />
    </ButtonWrap>
  );
}

const ButtonWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 13px;

  width: 370px;
  height: 33px;

  margin-left: 153px;
  margin-top: 22px;
`;
