import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { QuizContext } from "../context/quiz";
import Card from "../ui/Card";
import classes from "./CreateUser.module.css";

const CreateUser = () => {
  const [quizState] = useContext(QuizContext);

  const [name, setName] = useState(quizState.yourName);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>To enter, please tell us your name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {/* <nav>
          <Link to="/instructions">
            <button type="submit">Go</button>
          </Link>
        </nav> */}
        <button>Go</button>
      </form>
      <div>{quizState.yourName}</div>
    </Card>
  );
};

export default CreateUser;
