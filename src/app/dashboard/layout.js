"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/app/dashboard/loading";


export default function DashboardLayout({ children }) {
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
        router.push("/");
        return;
      }
      setIsSuccess(true)
    })();
  }, [router]);
  if(!isSuccess) return <Loading />

  return <>{children}</>;
}

async function getUser() {
  try {
    const { data } = await axios.get("/api/auth/me");
    return {
      user: data,
      error: null,
    };
  } catch (e) {
    return {
      user: null,
      error: e,
    };
  }
}
