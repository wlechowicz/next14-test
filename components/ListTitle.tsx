export default function ListTitle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex mx-auto py-10 items-start justify-center flex-col w-full">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
