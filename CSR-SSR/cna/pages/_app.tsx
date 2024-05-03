import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <h1>This is Create-Next-App </h1>
      <p>Using Server-Side Rendering</p>
      <p>Fast at First time!!</p>
    </div>
  );
}
