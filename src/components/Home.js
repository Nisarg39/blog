import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, onSnapshot } from "firebase/firestore";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const collect = collection(db, "posts");
    onSnapshot(collect, (querySnapshot) => {
      const postsAns = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;

        // console.log(doc.data()); // to see if data is fetched from firebase (see the output on browser console)
        return data;
      });
      setPosts(postsAns);
    });

  }, []);
  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Nisarg</div>
      {posts.map((post, index) => {
        return(
          <div className='post' key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
        )
      })}
    </div>
  );
}

export default Home;