import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main>
    Server Session :
        {session?.user?.name?(
          <div>
            <h2>
              {session?.user?.name} is signed in!
            </h2>
          </div>
        ):(
          <div>
            <h2>No one is Signed in</h2>  </div>
        )}
    </main>
);
}
