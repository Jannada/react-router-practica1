import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   // setSearchParams({ filter: "Juan" });
  // }, [searchParams]);
  // // // Solo para fines ilustrativos

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error...</p>;

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter: filter });
    } else {
      setSearchParams({});
    }
  };
  return (
    <>
      <h1>Blog</h1>
      <input
        type="text"
        name=""
        onChange={handleChange}
        className="form-control my-3"
        value={searchParams.get("filter") || ""}
      />
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

// Aquí estamos consumiendo con el Hook personalizado que creamos anteriormente
