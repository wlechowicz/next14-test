import { Suspense } from "react";
import SomeProductStuff from "./SomeProductStuff";
import SomeUserStuff from "./SomeUserStuff";

export const revalidate = 0;

const Filler = () => {
  return (
    <span>
      loading... (I was rendered on the{" "}
      {typeof window === "undefined" ? "server" : "client"})
    </span>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex mx-auto p-10 items-center justify-around">
        Hero Image {typeof window === "undefined" ? "server" : "client"}
      </div>
      <div className="flex mx-auto p-10 items-center justify-center flex-col">
        <Suspense fallback={<Filler />}>
          <SomeProductStuff />
        </Suspense>
      </div>
      <div className="flex mx-auto p-10 items-center justify-around">
        Pre-rendered static carousel{" "}
        {typeof window === "undefined" ? "server" : "client"}
      </div>
      <div className="flex mx-auto p-10 items-center justify-around">
        Pre-rendered static carousel{" "}
        {typeof window === "undefined" ? "server" : "client"}
      </div>
      <div className="flex mx-auto p-10 items-center justify-around flex-col">
        <Suspense fallback={<Filler />}>
          <SomeUserStuff />
        </Suspense>
      </div>
      <div className="flex mx-auto p-10 items-center justify-around">
        Pre-rendered static carousel{" "}
        {typeof window === "undefined" ? "server" : "client"}
      </div>
      <div className="flex mx-auto p-10 items-center justify-around">
        Pre-rendered static carousel{" "}
        {typeof window === "undefined" ? "server" : "client"}
      </div>
      <div className="flex mx-auto p-10 items-center justify-around">
        Pre-rendered static carousel{" "}
        {typeof window === "undefined" ? "server" : "client"}
      </div>
    </main>
  );
}
