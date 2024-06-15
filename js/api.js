"use strict";

/**
 * Fetch data from the given URL.
 * @param {string} url - The URL to fetch data from.
 * @param {function} onSuccess - The callback function to call on success.
 * @param {function} onError - The callback function to call on error.
 */

const fetchData = async (url, onSuccess, onError) => {
  const RATE_LIMIT_STATUS = 403;
  const RATE_LIMIT_HEADER_REMAINING = "X-RateLimit-Remaining";
  const RATE_LIMIT_HEADER_RESET = "X-RateLimit-Reset";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === RATE_LIMIT_STATUS) {
        const rateLimitRemaining = response.headers.get(
          RATE_LIMIT_HEADER_REMAINING
        );
        const rateLimitReset = response.headers.get(RATE_LIMIT_HEADER_RESET);

        if (rateLimitRemaining === "0") {
          const resetTime = new Date(
            rateLimitReset * 1000
          ).toLocaleTimeString();
          const errorMessage = `Rate limit exceeded. Try again at ${resetTime}.`;
          onError && onError(errorMessage);
          alert(errorMessage);
          return;
        }
      }
      onError && onError(`HTTP error! status: ${response.status}`);
      return;
    }

    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError && onError(error.message || "An error occurred.");
  }
};

export default fetchData;
