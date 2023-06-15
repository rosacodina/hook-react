import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

  const {data, isLoading, hasError} = useFetch("https://api.breakingbadquotes.xyz/v1/quotes/");
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>

      {
        isLoading
          ? (
            <div className="alert alert-info text-center">Loading...</div>
          )
          : (
            <blockquote className="blockquote text-end">
            <p className="mb-1">{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
          )
      }

      <button className="btn btn-primary">Next quote</button>

    </>
  )
}
