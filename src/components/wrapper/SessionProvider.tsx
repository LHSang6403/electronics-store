"use client";

import { readUserSession } from "@app/auth/_actions";
import { useSessionStore } from "@zustand/useSessionStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default async function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data,
    isSuccess,
    isLoading,
    error,
  }: {
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    error: any;
  } = useQuery({
    queryKey: [`session`],
    queryFn: async () => await readUserSession(),
    staleTime: 1000 * 60 * 5,
  });

  // || data.session.user.user_metadata.role !== "staff"
  if (error) {
    throw new Error("User not logged in.");
  }
  if (isLoading) {
    // console.log("Loading session");
  }

  const { userSession, saveSession } = useSessionStore();

  useEffect(() => {
    if (isSuccess) {
      saveSession(data?.data?.session);
    }
  }, [isSuccess, data?.data?.session]);

  // console.log("### session in zustand", userSession);

  return <>{children}</>;
}
