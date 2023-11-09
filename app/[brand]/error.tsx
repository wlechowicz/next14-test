"use client";

export default function RootError({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-4xl font-bold text-center">Uh oh!</div>
      <div className="text-2xl text-center">{error.message}</div>
    </div>
  );
}
