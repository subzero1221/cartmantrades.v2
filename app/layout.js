import Link from "next/link";
import "../app/_styles/globals.css";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./_components/UserContext";
import MeIcon from "./_components/MeIcon";
import { cookies } from "next/headers";
import { getUserData } from "./_utils/actions";

export const metadata = {
  title: {
    template: "%s ",
    default: "Welcome / Cartman trades",
  },
};

export async function getUserDetails() {
  const cookieStore = cookies();
  const userToken = cookieStore.get("jwt") || "";

  let userData = {};

  if (userToken) {
    userData = await getUserData();
    // Assuming getUserData is defined and fetches user data
  }

  return {
    userToken,
    userData,
  };
}

export default async function RootLayout({ children }) {
  const { userToken, userData } = await getUserDetails();

  return (
    <html lang="en">
      <UserContextProvider
        initialUserToken={userToken}
        initialUserData={userData}
      >
        <body>
          <header className="bg-white shadow-md">
            <div className="container flex items-center justify-between p-2 mx-auto">
              <Link href="/" className="flex items-center">
                <div className="relative w-24 h-24">
                  <Image
                    src="/cartman.png"
                    alt="Logo"
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform transform rounded-full shadow-lg hover:scale-105 hover:bg-blue-500"
                  />
                </div>
              </Link>

              <nav className="flex items-center justify-center flex-grow space-x-16">
                <Link
                  href="/cryptos"
                  className="text-gray-800 transition-colors hover:text-blue-500"
                >
                  💲 Cryptos
                </Link>
                <Link
                  href="/latestnews"
                  className="text-gray-800 transition-colors hover:text-blue-500"
                >
                  📰 News
                </Link>
                <Link
                  href="/community"
                  className="text-gray-800 transition-colors hover:text-blue-500"
                >
                  👨‍👨‍👧‍👦 Community
                </Link>
                <Link
                  href="/about"
                  className="text-gray-800 transition-colors hover:text-blue-500"
                >
                  🧐 About
                </Link>
              </nav>

              <div className="flex items-center">
                <MeIcon user={userData} token={userToken} />
              </div>
            </div>
          </header>
          <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Toaster />
            {children}
          </main>
          <footer className="py-4 bg-white shadow-md">
            <div className="container mx-auto text-center">
              <p className="text-gray-600">© 2024 Cartman Trades</p>
            </div>
          </footer>
        </body>
      </UserContextProvider>
    </html>
  );
}
