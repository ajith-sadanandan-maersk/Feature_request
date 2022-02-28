import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f0f0;
  margin-top: 0;
  padding-left: 55px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Heading = styled.h1`
  height: 70px;
`;

export const Content = styled.h3`
  height: 30px;
  margin-bottom: 10px;
`;

export const MidBar = styled.nav`
  height: 80px;
  margin-top: 20px;
  margin-right: 80px;
  padding: 20px;
  display: flex;
  background: white;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    float: none;
  }
`;

export const Search = styled.input`
  type: text;
  height: 30px;
  font-size: 17px;
  padding: 5px;
  border: 1px solid #ccc;
`;

export const SearchIcon = styled.button`
  background: 	#87cefa;
  border: 	#87cefa;
  height: 30px;
  align-items: center;
  padding-top: 6px;
  padding-left: 7px;
  padding-right: 7px;
  cursor: pointer;
`;
export const Searchbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
