import { useState, useEffect } from "react";
import "../Styles/Quote.css";

export default function Quote() {
  // 1. STATE: Initialize state to hold the quote data
  const [quote, setQuote] = useState("Loading a brilliant quote...");
  const [author, setAuthor] = useState("The Internet");
  const [isLoading, setIsLoading] = useState(true);

  // 2. EFFECT: Run the data fetching function only once after the component mounts
  useEffect(() => {
    // Define the async function inside useEffect
    async function fetchQuote() {
      try {
        const response = await fetch("/api/random");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // ZenQuotes API returns an array, so we access the first element
        const quoteText = data[0].q;
        const quoteAuthor = data[0].a;

        // 3. Update the state with the fetched data
        setQuote(quoteText);
        setAuthor(quoteAuthor);
      } catch (error) {
        console.error("Failed to fetch quote:", error);
        setQuote(
          "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep."
        );
        setAuthor("Scott Adams");
      } finally {
        // Set loading to false once fetching is complete (or failed)
        setIsLoading(false);
      }
    }

    fetchQuote();
  }, []); // The empty dependency array [] ensures this runs ONLY ONCE

  // 4. RENDERING: Use conditional rendering
  return (
    <section className = "Quote" id="Quote">
      <div className="random-quotes">
        {isLoading ? (
          "Loading a brilliant quote..." // Display loading state
        ) : (
          <>
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">– {author}</p>
          </>
        )}
      </div>
    </section>
  );
}

// Don't forget to update your Quote.css!
