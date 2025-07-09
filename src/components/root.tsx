import { useContext, useEffect, useState } from "react";
import { refresh } from "../utils/auth.ts";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import { ThemeContext } from "../utils/context.tsx";

const Root = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const [status, setStatus] = useState<boolean>()
  useEffect(() => {
    async function request() {
      setStatus(await refresh())
      return
    }
    request()
  }, [])
  useEffect(() => {
    if (status) {
      if (
        /* Check if the app is already at dashboard page */
        !location.pathname.includes("/dashboard")
      ) {
        /* Then navigates to dashboard page */
        navigate("/dashboard")
      }
    } else if (
      /* Check if the refresh was success */
      status != undefined
      ||
      (
        status != undefined
        &&
        /* Check if the refresh status is false */
        !status
        &&
        /* Check if the path is not at authentication page */
        !location.pathname.includes("/auth/")
      )
    ) {
      /* Then navigates to login page */
      navigate("/auth/login")
    }
  }, [status])
  return (
    <div className={`dark:text-white w-svw h-svh background ${theme}`}>
      <div className="w-full h-full backdrop-blur-lg backdrop-brightness-105 dark:backdrop-brightness-50 p-1.5 md:p-2 xl:p-2.5 duration-150">
        <div className="w-full h-full rounded-lg inset-shadow-[0_0_8px_rgba(0,0,0,.25)] background flex overflow-y-scroll overflow-x-hidden box-border">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
