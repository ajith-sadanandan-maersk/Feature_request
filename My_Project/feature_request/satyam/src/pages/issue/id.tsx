import Footer from "@/components/footer.js";
import React, { useState } from "react";
import Header from "../../components/nav";
import { FaUserAlt } from "react-icons/fa";
import { BsThreeDots, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { Modal, Button, TextArea, Typography, Sidebar } from "@anchor/react-components";
import {
  IssueHeading,
  Column,
  Container,
  IdeaStatus,
  Votes,
  Page,
  Row,
  UserDetails,
  IssueDetails,
  SubmitIdea,
  ShareIssue,
  Count,
  Comments,
  OptionsBtn,
  CommentContainer,
  SocialMedia,
  CommentContent,
  UserContainer,
  UserIcon,
  Likes,
  Vote,
  DropDown,
  DropContent,
  MediaItem,
} from "../../styles/id.elements";

import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineCheckSquare,
  AiOutlineUser,
} from "react-icons/ai";
import { GoCheck } from "react-icons/go";
import { BsGlobe } from "react-icons/bs";

const Issue = () => {
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);

  // function CreateComment() {
  //   // var UserContainers= document.getElementById('container')
  //   // var div = document.createElement('div');
  //   // div.getElementsByClassName('inner');
  //   // UserContainers.append(div)
  // }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => setCollapse(!collapse);

  return (
    <>
      <Header />
      <Page>
        <Row>
          <IssueHeading>
            <Typography variant="h1" fontStyle="bold">
              We need feature request for personal use
            </Typography>
          </IssueHeading>
          <Column>
            {/* <div
              style={{
                position: "relative",
                top: "-100px",
                bottom: "15px",
                overflowY: "scroll",
                marginLeft: "2px",
                marginBottom: "500px",
                zIndex: "0",
              }}
            >
              <Sidebar
                activeNav="home"
                items={[
                  {
                    icon: <AiOutlineHome />,
                    id: "home",
                    path: "/home",
                    title: "Home",
                  },
                  {
                    icon: <AiOutlineCalendar />,
                    id: "tasklist",
                    path: "/tasklist",
                    subMenu: [
                      {
                        // icon: <GoCheck />,
                        id: "my_tasks",
                        path: "/my_tasks",
                        title: "My task (10)",
                      },
                      {
                        id: "johns_task",
                        path: "/john-task",
                        title: "John’s task",
                      },
                      {
                        id: "williams_task",
                        path: "/williams-task",
                        title: "William’s task",
                      },
                      {
                        id: "all_task",
                        path: "/all-task",
                        title: "All task",
                      },
                      {
                        id: "completed_task",
                        path: "/completed-task",
                        title: "Completed task",
                      },
                    ],
                    title: "Tasklist",
                  },
                  {
                    icon: <AiOutlineUser />,
                    id: "admin",
                    path: "/admin",
                    title: "Admin",
                  },
                  {
                    icon: <AiOutlineCheckSquare />,
                    id: "modeler",
                    path: "/modeler",
                    title: "Modeler",
                  },
                  {
                    icon: <BsGlobe />,
                    id: "process",
                    path: "/process",
                    subMenu: [
                      {
                        icon: "clipboard-check-text",
                        id: "process_instances",
                        path: "/process-instances",
                        title: "Process Instances",
                      },
                      {
                        icon: "clipboard-check-text",
                        id: "create_workflow",
                        path: "/create-workflow",
                        title: "Create Workflow",
                      },
                      {
                        icon: "clipboard-check-text",
                        id: "deploy",
                        path: "/deploy",
                        title: "Deploy",
                      },
                    ],
                    title: "Process",
                  },
                ]}
                onNavClick={function noRefCheck() {}}
                // ((onNavClick: string) => void)
                // onNavClick={(e)=>{e.indexOf}}
                onToggle={function noRefCheck() {}}
              />
            </div> */}

            <Container>
              <Column>
                <Row>
                  <Column>
                    <IdeaStatus>Investigating</IdeaStatus>
                    <OptionsBtn>
                      <BsThreeDots onClick={handleClick} />
                      {click && (
                        <div
                          style={{
                            position: "fixed",
                            margin: "-99px -20px",
                          }}
                        >
                          <Sidebar
                            activeNav="subscribe"
                            items={[
                              {
                                icon: "icon",
                                id: "subscribe",
                                path: "/subscribe",
                                title: "Subscribe to RSS Feed",
                              },
                              {
                                icon: "icon",
                                id: "new",
                                path: "/new",
                                title: "Mark as New",
                              },
                              {
                                icon: "icon",
                                id: "read",
                                path: "/read",
                                title: "Mark as Read",
                              },
                              {
                                icon: "icon",
                                id: "bookmark",
                                path: "/bookmark",
                                title: "Bookmark",
                              },
                            ]}
                            onNavClick={function noRefCheck() {}}
                            onToggle={function noRefCheck() {}}
                          />
                        </div>
                      )}

                      {/* <DropDown>
                        <DropContent href="#">Subscribe to RSS Feed</DropContent>
                        <DropContent href="#">Mark as New</DropContent>
                        <DropContent href="#">Mark as Read</DropContent>
                        <DropContent href="#">Bookmark</DropContent>
                        <DropContent href="#">Print Friendly Page</DropContent>
                      </DropDown> */}
                    </OptionsBtn>
                  </Column>
                  <Column>
                    <Count>{count} </Count>
                    <Votes onClick={() => setCount(count + 1)} color="#33d6ff" />
                  </Column>
                  <Column>
                    <h3>Upvotes</h3>
                    <Vote onClick={() => setCount(count + 1)}>Upvote</Vote>
                  </Column>
                  <Column>
                    <h3 color="blue">Submitted by: </h3>
                    <UserDetails>User Name</UserDetails>
                    <h3 color="red">Aug 02, 2021</h3>
                  </Column>
                  <Row>
                    <IssueDetails>
                  <Typography variant="body1">

                    I would love to buy the personal version of windows 365 which u can do like an
                    addon to Microsoft 365 for personal and family use i would definitely buy if u
                    add it. I would love to buy the personal version of windows 365 which u can do like an
                    addon to Microsoft 365 for personal and family use i would definitely buy if u
                    add it. I would love to buy the personal version of windows 365 which u can do like an
                    addon to Microsoft 365 for personal and family use i would definitely buy if u
                    add it.
                  </Typography>
                  </IssueDetails>
                  <Button
                    iconPosition="right"
                    label="Add Comment"
                    onClick={function noRefCheck() {}}
                    size="medium"
                    type="button"
                    variant="filledAlt"
                  />
                  </Row>
                  {/* <AddCommentBtn onClick={CommentContainer}>Add Comment</AddCommentBtn> */}

                  <Modal
                    actions={{
                      primaryAction: (
                        <Button
                          label="Submit"
                          type="submit"
                          onClick={function noRefCheck() {}}
                          variant="filledAlt"
                        />
                      ),
                      secondaryAction: (
                        <Button
                          label="Cancel"
                          // type="reset"
                          onClick={function noRefCheck() {}}
                          // onClick={()=>{this.style.display = 'none'}}
                          variant="outlined"
                        />
                      ),
                      tertiaryAction: (
                        <Button
                          label="Back"
                          // type="reset"
                          onClick={function noRefCheck() {}}
                          variant="outlined"
                        />
                      ),
                    }}
                    heading="User Name"
                    onClose={function noRefCheck() {}}
                    // open
                    showCloseIcon
                    size="medium"
                  >
                    <TextArea
                      fit="medium"
                      id="text-area"
                      label="Comment"
                      onChange={function noRefCheck() {}}
                      placeholder="Add your comment"
                      required
                      rows={7}
                      value=""
                    />
                  </Modal>
                </Row>
              </Column>
            </Container>
            <Row>
              <SubmitIdea>
                <Button
                  iconPosition="right"
                  label="Submit An Idea"
                  onClick={function noRefCheck() {}}
                  size="medium"
                  type="button"
                  variant="filledAlt"
                />
              </SubmitIdea>
              <ShareIssue>
                <Button
                  iconPosition="right"
                  label="Share this Issue"
                  onClick={handleCollapse}
                  size="medium"
                  variant="filledAlt"
                />
                {collapse && (
                  <SocialMedia>
                    <MediaItem to="https://www.twitter.com">
                      
                      <FiTwitter />
                    </MediaItem>
                    <MediaItem to="https://www.facebook.com">
                      <FiFacebook />
                    </MediaItem>
                    <MediaItem to="https://www.instagram.com">
                      <BsInstagram />
                    </MediaItem>
                    <MediaItem to="https://www.linkedin.com">
                      <BsLinkedin />
                    </MediaItem>
                  </SocialMedia>
                )}
              </ShareIssue>
            </Row>
          </Column>
          <Comments>
            <h3>Comments</h3>
          </Comments>
          <Column>
            {/* <div id='container'> */}
            {/* <UserContainer className='inner' id='UserContainer'> */}
            <UserContainer>
              <Row>
                <Column>
                  <UserIcon>
                    <FaUserAlt />
                  </UserIcon>
                  <CommentContainer>User Details</CommentContainer>
                  <OptionsBtn>
                    <BsThreeDots />
                    <DropDown>
                      <DropContent href="#">Mark as New</DropContent>
                      <DropContent href="#">Mark as Read</DropContent>
                      <DropContent href="#">Bookmark</DropContent>
                      <DropContent href="#">Print</DropContent>
                      <DropContent href="#">Email to a Friend</DropContent>
                    </DropDown>
                  </OptionsBtn>
                </Column>
                <CommentContent>Hi this Comment Content</CommentContent>
                <Column>
                  <Votes color="grey" onClick={() => setLikes(likes + 1)} />
                  <Likes font-size="10px">{likes} Likes</Likes>
                </Column>
              </Row>
            </UserContainer>
            {/* </div> */}
          </Column>
        </Row>
      </Page>
      {/* <Footer /> */}
    </>
  );
};

export default Issue;
