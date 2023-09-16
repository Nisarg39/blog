import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const [post, setPost] = useState({});
  const [error, setError] = useState('');
  
  const { postId } = useParams();   // useParams will fetch data which is passed by Home.js . here postId is being fetched which is passed by home.js as parameter

  useEffect(() => {
    const getPost = async () => {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setPost(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        setError("No such document!");
      }
    }
    getPost();
  }, []);

  return (
    <div className="post-detail">

      <h1>{post.title}</h1>

      <p>{post.content}</p>
    </div>

  );
}

export default PostDetail;