"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
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
        className=" min-h-28 w-full h-auto rounded-xl p-5 "
      />
      <button
        onClick={async () => {
          const { data } = await submitAnswer(id, answer);
          console.log(data);
          if (data == "Can't Attempt Same Question Again") {
            toast.error("Can't Attempt Same Question Again");
            return;
          } else if (data == "Please Follow the Order") {
            toast.error("Please Follow the Order");
            return;
          } else {
            toast.success(
              "Answer Submitted, click on close to unlock next card"
            );
          }
          router.push("/dashboard");
        }}
        className="deco-btn  flex items-center justify-center m-2"
      >
        Submit
      </button>
    </>
  );
};

// data.data == "Can't Attempt Same Question Again"
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
