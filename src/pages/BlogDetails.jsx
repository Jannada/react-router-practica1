import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const BlogDetails = () => {
  const params = useParams();
  console.log(params);

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <h1 key={data.id}>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
      <Link to="/blog">Volver</Link>
    </>
  );
};
