import User from "./User.client";

export type UserData = {
  id: number;
  firstName: string;
};

async function fetchUserData(userId: number): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        fetch("https://dummyjson.com/users/" + userId)
          .then((res) => res.json())
          .then((json) => resolve(json)),
      4000
    );
  });
}

const userId = Math.floor(Math.random() * 100);

export default async function SomeUserStuff() {
  const result = await fetchUserData(userId);

  return (
    <>
      <div>
        User specific data streamed from{" "}
        {typeof window === "undefined" ? "server" : "client"}
      </div>
      <User id={result.id} firstName={result.firstName} />
    </>
  );
}
