import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Disha Yadav",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Meet and greet with the fellas",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Abdul Ahad",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/569169/pexels-photo-569169.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Making the world a better place",
      img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
