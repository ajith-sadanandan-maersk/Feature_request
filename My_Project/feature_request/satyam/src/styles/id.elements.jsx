import styled from "styled-components";
import { FiThumbsUp } from "react-icons/fi";
import Link from "next/link";

export const Page= styled.div`
  background-color: #f0f0f0;
  margin: -10px;
  padding: 0;
`
export const IssueHeading = styled.div`
  height: 50px;
  /* margin-top: -40px; */
  margin-left: 40px;
  margin-right: 30px;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  
`;

export const Column = styled.div`
  display: flex;
  grid-auto-flow: column dense;
`;

export const Row = styled.div`
    grid-auto-flow: row dense;

`

export const Container = styled.div`
  margin: 20px;
  margin-left: 284px;
  border-radius: 7px;
  margin-right: 30px;
  width: 720px;
  padding: 15px 15px;
  padding-left: 40px;
  display: flex;
  border: none;
  transition: 0.3s;
  background-color: white;
  box-shadow: 1px 6px 10px 1px rgba(0,0,0,0.2);

  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const IdeaStatus = styled.div`
  border: 2px solid #f8a662;
  background-color: #f89262;
  margin: 20px 0;
  border-radius: 5px;
  padding: 8px;
  width: auto;
  font-family:'Franklin Gothic Medium'; 
  height: auto;
  
`;

export const DropDown = styled.div`
  display: none;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropContent = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
  display: block;
  font-size: 0.85rem;

  &:hover{
    background-color: #e2f0f7;
    border-left: 4px solid #90cfee;
  }
`

export const Votes = styled(FiThumbsUp)`
  font-size: 22px;
  margin-top: 8px;
  margin-left: 61px;

  &:hover {
    border-bottom: 2px solid #4b59f7;
    cursor: pointer;
  }
`;

export const Vote = styled.div`
  margin-left: 25px;
  margin-top: 18px;
  font-size: 18px;
  color: #33d6ff;

  &:hover {
    border-bottom: 2px solid #4b59f7;
    cursor: pointer;
  }
`;

export const Count = styled.div`
    height: 50px;
    margin-left: 20px;
    margin-bottom: -30px;
    font-size: 2rem;
`;

export const SocialMedia = styled.div`
  /* font-size: 1.5rem; */
  display: grid;
  background-color: #f0f0f0;
  /* width: 100px; */
  /* height: 10px; */
  justify-content: center;
  transition-property: height;
  transition-duration: 5s;
  
`;

export const MediaItem = styled.div`
  /* border: 1px solid black; */
  font-size: 1.5rem;
  align-items: center;
  /* padding: 2px; */
  justify-content: center;
  margin-top: 10px;
  

  &:hover{
    cursor: pointer;
    border-bottom: 1px solid blue;
  }
`

export const UserContainer = styled.div`
  margin: 20px;
  border-radius: 8px;
  margin-left: 284px;
  margin-right: 30px;
  padding: 15px 15px;
  width: 750px;
  background-color: white;
  display: flex;
  border: none;
  transition: 0.3s;
  box-shadow: 1px 6px 10px 1px rgba(0,0,0,0.2);

  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const UserDetails = styled.h3`
  height: 10px;
  width: 110px;
  align-items: center;
  margin-left: 10px;
`;

export const IssueDetails = styled.div`
border-top: 1px solid #e0e0e0;
border-bottom: 1px solid #e0e0e0;
height: 80px;
color: gray;
font-size: 15px;
margin-top: 1px;
margin-bottom: 10px;
width: 650px;
padding: 20px;
`;

export const AddCommentBtn = styled.button`
  background-color: #62b0f8;
  margin-top: -20px;
  margin-left: 740px;
  width: 113px;
  padding: 11px;

  &:hover {
    cursor: pointer;
    background-color: #91cafc;

  }
`;

export const SubmitIdea = styled.button`
  border: none;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const ShareIssue = styled.button`
  border : none;
  margin-top: 20px;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Comments = styled.div`
  background-color: #2c387e;
  color: white;
  border-radius: 8px;
  border: 2px solid #62b0f8;
  margin-left: 284px;
  margin-right: 860px;
  align-items: center;
  justify-content: center;
  padding-left: 17px;
  border: 1px solid black;
`;

export const UserIcon = styled.div`
  font-size: 20px;
  margin-top: 17px;
  margin-left: 10px;
`

export const CommentContainer = styled.h3`
  align-items: center;
  width: 100px;
  margin-left: 10px;
  margin-bottom: -30px;
`;

export const OptionsBtn = styled.button`
  background-color: white;
  margin: 10px;
  border: none;
  font-size: 20px;
  padding: 10px;
  margin-left: 560px;

  &:hover {
    cursor: pointer;
    ${DropDown}{
      display: block;
    }
  }
`;

export const CommentContent = styled.div`
  margin-left: 40px;
  margin-top: -10px;
  padding: 20px;
  height: 50px;
  width: 650px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`;

export const Likes = styled.div`
    /* height: 50px; */
    margin-top: 8px;
    margin-left: 10px;
    font-size: 1.2rem;
`;

export const Modal = styled.div`
  height: 40px;
`;