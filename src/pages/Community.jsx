import React from "react";
import "../css/community.css";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { BsCalendarEventFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import CommentCard from "../components/CommentCard";
import CommentBox from "../components/CommentBox";

function Community() {
  const chats = [
    {
        id:1,
        userName:'Rahul',
        message:'Hey! How are you?',
        messageTime:'12AM'
    },
    {
        id:2,
        userName:'Rima',
        message:'Any Update?',
        messageTime:'12AM'
    },
    {
        id:3,
        userName:'Chandni',
        message:'Audition at 5?',
        messageTime:'12AM'
    },
    {
        id:4,
        userName:'Khyati',
        message:'Thankyou!',
        messageTime:'12AM'
    },
    {
        id:5,
        userName:'Rishabh',
        message:'I might know someone.',
        messageTime:'12AM'
    },
  ]
  const postedContent = [
    {
      id: 1,
      imgSrc: "/community/2.png",
      name: "Rahul",
      production: "mooi Productions",
      postedDate: "12 Jan 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      likes: 37,
    },
    {
      id: 2,
      imgSrc: "/community/3.png",
      name: "Avni",
      production: "Model",
      postedDate: "11 Jan 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      likes: 224,
    },
    {
      id: 3,
      imgSrc: "/community/4.png",
      name: "Arjun",
      production: "VS Productions",
      postedDate: "11 Jan 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      likes: 10,
    },
  ];
  return (
    <>
      <div className="community-section-1">
        <div className="container-1">
          <img src="/community/1.png" alt="" />
          <input type="text" placeholder="Start a Post" />
          <div className="button-container">
            <div>
              <span>
                <TfiLayoutMediaRightAlt />
              </span>
              <span>Media</span>
            </div>
            <div>
              <span>
                <BsCalendarEventFill />
              </span>
              <span>Event</span>
            </div>
            <div>
              <span>
                <MdArticle />
              </span>
              <span>Article</span>
            </div>
            <div style={{ width: "123px" }}>
              <span>
                <IoPeopleSharp />
              </span>
              <span>Job Post</span>
            </div>
          </div>
        </div>
      </div>
      <div className="community-section-2">
        <div className="sidebar">
          <p className="title">Conversations</p>

           {
            chats.map(({userName,message,messageTime}) => (
                <CommentBox userName={userName} message={message} messageTime={messageTime}/>
            ))
           }

        </div>
        <div className="comment-section">
          {postedContent.map(
            ({ imgSrc, name, production, postedDate, content, likes }) => (
              <CommentCard
                imgSrc={imgSrc}
                name={name}
                production={production}
                postedDate={postedDate}
                content={content}
                likes={likes}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Community;
