import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
export const Blog = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error...</p>;
  return (
    <>
      <h1>Blog</h1>
      <ul className="list-group">
        {data.map((item) => (
          <Link
            className="list-group-item"
            to={`/blog/${item.id}`}
            key={item.id}
          >
            {item.id} - {item.title}
          </Link>
        ))}
      </ul>
    </>
  );
};
