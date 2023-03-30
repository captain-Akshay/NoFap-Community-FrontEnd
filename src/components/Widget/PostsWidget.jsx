import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = window.localStorage.getItem("nofaptoken");
  const getPosts = async () => {
    const response = await fetch("https://mensford-nofap-backend.onrender.com/posts", {
      method: "GET",
      headers: { Authorization: `${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `https://mensford-nofap-backend.onrender.com/posts/${userId}`,
      {
        method: "GET",
        headers: { Authorization: `${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          name,
          description,
          postPath,
          userPath,
          likes,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${name}`}
            description={description}
            picturePath={postPath}
            userPicturePath={userPath}
            likes={likes}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;