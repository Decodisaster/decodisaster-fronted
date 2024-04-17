"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/dashboard/loading";

const AuthRedirect = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();
      if (error) {
        router.push("/");
        return;
      }
      if (!user) {
        router.push("/dashboard");
        return;
      }
      setIsSuccess(true);
    })();
  }, [router]);
  if (!isSuccess) return <Loading />;
  return <div></div>;
};

export default AuthRedirect;

async function getUser() {
  try {
    const res = await axios.get("/api/auth/home");
    console.log(res);
    return {
      user: null,
      // error: data,
    };
  } catch (e) {
    return {
      // user: data,
      error: null,
    };
  }
}
