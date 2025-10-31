import React, { useEffect, useState } from "react";

function Parent({ userId }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  // Fetch user data
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  // Log when theme changes
  useEffect(() => {
    console.log(`Theme changed to: ${theme}`);
  }, [theme]);

  return (
    <div>
      <h3>{user ? user.name : "Loading..."}</h3>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Parent;
