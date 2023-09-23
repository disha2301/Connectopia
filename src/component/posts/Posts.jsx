import "./posts.scss"
import Post from "../post/Post";

const Posts = () => {

    //TEMPORARY
    const posts = [
      {
        id: 1,
        name: "Abdul Ahad",
        userId: 1,
        profilePic:
          "https://media.licdn.com/dms/image/D5603AQHgzl2zw3fw8w/profile-displayphoto-shrink_800_800/0/1694108787694?e=1700697600&v=beta&t=6-SF4gGK_cThZAxw0c-F7g1q8HdNjzoEXPR7LoroxKs",
        desc: "Meet and greet with the fellas",
        img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        id: 2,
        name: "Disha Yadav",
        userId: 2,
        profilePic:
          "https://media.licdn.com/dms/image/C4D03AQEvnmlTNQG2Fw/profile-displayphoto-shrink_800_800/0/1655374609183?e=1700697600&v=beta&t=KrITLMd68ZOaTG1mqJf4SbNGfqoGDiepDB_oPdvox2A",
        desc: "Making the world a better place",
      },
    ];

    return <div className="posts">
    {posts.map(post=>(
     <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;