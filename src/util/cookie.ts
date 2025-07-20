import { DARK_MODE_COOKIE } from "../constant";

export const getDarkModeFromCookies = (cookieString = ""): boolean => {
  if (typeof document !== "undefined") {
    // Client side
    const cookies = document.cookie.split(";");
    const darkModeCookie = cookies.find((cookie) =>
      cookie.trim().startsWith(`${DARK_MODE_COOKIE}=`)
    );
    return darkModeCookie ? darkModeCookie.split("=")[1] === "true" : false;
  }

  // Server side
  const cookies = cookieString.split(";");
  const darkModeCookie = cookies.find((cookie) =>
    cookie.trim().startsWith(`${DARK_MODE_COOKIE}=`)
  );
  return darkModeCookie ? darkModeCookie.split("=")[1] === "true" : false;
};

export const toggleDarkModeCookie = (): void => {
  if (typeof document !== "undefined") {
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    const isDark = getDarkModeFromCookies();
    const newValue = isDark ? "false" : "true";
    document.cookie = `${DARK_MODE_COOKIE}=${newValue}; path=/; max-age=${maxAge}`;
  }
};
