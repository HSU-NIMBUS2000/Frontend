import React from "react";
import styled from "styled-components";
import Polygon from "../../assets/image/Polygon.svg";
import Search from "../../assets/image/Search.svg";

function SearchBar() {
  return (
    <MainLayout>
        {/* 검색 카테고리 선택 */}
      <SearchCategory>
        <option value="disease">병명</option>
        <option value="patient">환자명</option>
        <option value="content">내용</option>
      </SearchCategory>

      {}
      <SearchKeyword />
      <SearchBtn />
    </MainLayout>
  );
}

export default SearchBar;

const MainLayout = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const SearchCategory = styled.select`
  font-size: 15px;
  font-weight:600;
  padding-left: 20px;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  outline: none;
  color: white;
  width: 11%;
  height: 50px;
  background-color: #6572d2;
  background-image: url(${Polygon});
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 1.2em;
  appearance: none; // 브라우저 기본 스타일 제거
  box-sizing: border-box;
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

const SearchBtn = styled.button`
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  background-color: #6572d2;
  border: none;
  cursor: pointer;
  background-size: 50%;
  border-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;
