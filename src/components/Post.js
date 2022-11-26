import { useState, useEffect } from "react";
import "./style.css";
function Posts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/post")
      .then((res) => res.json())
      .then((post) => setPost(post));
  }, []);
  const first = post[0];
  return (
    <div>
      <div class="wrapper">
        <table>
          <td class="other">USER ID</td>
          <td class="other">ID</td>
          <td class="other">TITLE</td>
          <td class="other">BODY</td>
        </table>
      </div>
      {post.map((first) => (
        <div key={first.id}>
          <div class="wrapper">
            <table>
              <td class="other">{first?.userId}</td>
              <td class="other">{first?.id}</td>
              <td class="other">{first?.title}</td>
              <td class="other">{first?.body}</td>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
