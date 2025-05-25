import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const storedLang = (await cookies()).get("lang")
  let locale
  if (storedLang) {
    locale = storedLang.value
  } else {
    locale = "en-US"
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
