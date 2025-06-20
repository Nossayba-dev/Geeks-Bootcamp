async function getJokeByCategory(category) {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      // If response is not OK, throw an error
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Joke:", data.value); // Output the joke
    return data.value;
  } catch (error) {
    console.error("Error fetching joke:", error.message);
  }
}

// Example usage:
getJokeByCategory('dev');
