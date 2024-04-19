"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const SubmitAnswer = ({ id }) => {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  return (
    <>
      <input
        type="text"
        onChange={(e) => setAnswer(e.target.value)}
        style={{
          fontFamily: "Bruno Ace SC, sans-serif",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        placeholder="Enter your answer here..."
        className=" min-h-28 w-full h-auto rounded-xl p-5"
      />
      <button
        onClick={async () => {
          console.log("before");
          const res = await submitAnswer(id, answer);
          console.log("after");
          console.log(res);
          router.push("/dashboard");
        }}
        className="deco-btn  flex items-center justify-center m-2"
      >
        Submit
      </button>
    </>
  );
};

async function submitAnswer(cardId, answer) {
  try {
    const { data } = await axios.put(`/api/auth/submitanswer`, {
      cardId,
      answer,
    });
    return {
      data,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: err,
    };
  }
}

export default SubmitAnswer;
