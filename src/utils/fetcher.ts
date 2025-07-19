export function fetcher(option: "json" | "blob" | "text", method?: "get" | "post") {
  switch (option) {
    case "json":
      return (url: string) => fetch(url, { method: method }).then(r => r.json())
    case "blob":
      return (url: string) => fetch(url, { method: method }).then(r => r.blob())
    case "text":
      return (url: string) => fetch(url, { method: method }).then(r => r.text())
  }
}
