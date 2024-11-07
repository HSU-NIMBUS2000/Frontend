import React from "react";
import styled from "styled-components";
import Search from "../../../assets/image/Search.svg";
import Dropdown from "./Dropdown/Dropdown";

function SearchBar() {
  return (
    <MainLayout>
        {/* 검색 카테고리 선택 */}
      <Dropdown op1="병명" op2="환자명" op3="내용"/>


      {}
      <SearchKeyword />
      <SearchBtnWrap>
        <SearchBtn src={Search}></SearchBtn>
      </SearchBtnWrap>
    </MainLayout>
  );
}

export default SearchBar;

const MainLayout = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const SearchKeyword = styled.input`
  background-color: #d7e3ff;
  font-size: 15px;
  font-weight:600;
  height: 20px;
  padding: 15px;
  border: none;
  border-radius: 2em;
  outline: none;
  flex-grow: 1;
  color:#6572D2;
`;

const SearchBtnWrap = styled.div`
  height: 50px;
  background-color: #6572d2;
  border: none;
  cursor: pointer;
  background-size: 50%;
  border-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px 0 15px;
`;

const SearchBtn = styled.img`
width: 40px;
height: 40px;
`
