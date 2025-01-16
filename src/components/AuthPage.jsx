import React, { useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  const validateEmail = (email) => email.endsWith("@student.sspu.ac.in");

  const handleAuth = () => {
    if (!validateEmail(email)) {
      setError("Please use your college email (@student.sspu.ac.in).");
      return;
    }
    if (isSignUp) {
      console.log("Signing Up:", email);
    } else {
      console.log("Signing In:", email);
    }
  };

  return (
    <div>
      <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
      <input
        type="email"
        placeholder="Enter your college email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isSignUp ? "Sign Up" : "Sign In"}</button>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
      </p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AuthPage;
