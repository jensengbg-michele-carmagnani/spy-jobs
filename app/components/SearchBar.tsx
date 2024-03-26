"use client";
import axios from "axios";
import { FormEvent, useState } from "react";

type Urls = {
  url: string[];
};

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const retrieveGoogleURLSforSearchTerm = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const encodeSearchQuery = encodeURI(searchTerm);

    const response = await axios.get(
      "https://app.scrapingbee.com/api/v1/store/google",
      {
        params: {
          api_key:
            "J7YKDD5XUOKSJZ0S96DDYEQEYMXPFJO61PYJJFRDX6AUZTVUSPJEWBE46QHYJPS53F25GQD1TEAQT2JI",
          search: encodeSearchQuery,
        },
      }
    );
    const organicResults = response.data.organic_results;
    console.log("Organic Results", organicResults);

    const urls = organicResults.map((organicResult: Urls) => organicResult.url);
    console.log(urls);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form
      className="flex items-center justify-center"
      onSubmit={retrieveGoogleURLSforSearchTerm}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Enter search term..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
