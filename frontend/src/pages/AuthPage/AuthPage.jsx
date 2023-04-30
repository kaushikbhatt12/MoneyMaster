import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (
    <main>
      <h1 className="ledgerly">Money Master</h1>
      <h3>{showSignUpForm ? "Welcome to Money Master" : "Welcome back!"}</h3>
      {showSignUpForm ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
      <Link onClick={() => setShowSignUpForm(!showSignUpForm)}>
        {showSignUpForm ? "Already a user? Log in here." : "New to Money Master? Sign up here."}
      </Link>
    </main>
  );
}