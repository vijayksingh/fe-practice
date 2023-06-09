// URL for profile pic : https://picsum.photos/{width}/{height}
/* eslint-disable */

import React from "react";
import { formatDistanceToNow } from "date-fns";
import { parseISO } from "date-fns";
import "./styles.css";

import { data } from "./data";

function Comment({ comment, indent = 0 }) {
  const [fold, setFold] = React.useState(true)
  const marginLeft = `${indent * 24}px`;

  const toggleFold = () => {
    setFold((state) => !state)
  }

  return (
    <div>
      {comment.map((item, index) => {
        return (
          <div className="commentContainer">
            <div className="commentBox" style={{ marginLeft: marginLeft }}>
              <div className="avatar" onClick={toggleFold} style={{cursor: 'pointer'}}>
                <img src={item.avatarUrl} />
              </div>
              <div className="comment">
                <div>
                  <span className="author">{item.author}</span>
                  <span className="time">
                    {formatDistanceToNow(parseISO(item.timestamp), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <div className="content">
                  <span>{item.content}</span>
                </div>
              </div>
            </div>
            {fold && item.replies && item.replies.length > 0 && (
              <Comment comment={item.replies} indent={indent + 1} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function NestedComment() {
  return <Comment comment={[data]} />;
}

export default NestedComment;
