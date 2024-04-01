import Link from "next/link";

const WebSearchPage = async ({ searchParams }) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX_KEY}&q=${searchParams.searchTerm}`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center">
        <h1>No result Found for {searchParams.searchTerms}</h1>
        <p className="text-lg ">
          Try something else
          <button className="btn pl-4">
            <Link href="/" className="text-blue-500">
              Home
            </Link>
          </button>
        </p>
      </div>
    );
  }

  return (
    <div>
      {results &&
        results.map((result) => <h1 key={result.id}>{result.title}</h1>)}
    </div>
  );
};

export default WebSearchPage;
