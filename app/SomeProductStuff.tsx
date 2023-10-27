type Data = {
  id: number;
  title: string;
  category: string;
};

export default async function SomeProductStuff() {
  async function fetchProductData(): Promise<Data> {
    "use server";
    return new Promise((resolve) => {
      const prodId = Math.floor(Math.random() * 100);
      setTimeout(
        () =>
          fetch("https://dummyjson.com/products/" + prodId)
            .then((res) => res.json())
            .then((json) => resolve(json)),
        3000
      );
    });
  }

  const result = await fetchProductData();

  return (
    <span>
      Data streamed from {typeof window === "undefined" ? "server" : "client"}
      <br />
      We got: {result.title} ({result.category})!
    </span>
  );
}
