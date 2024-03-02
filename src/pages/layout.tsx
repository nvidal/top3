import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold">Daily Event Tracker</h1>
      </header>
      <Main>{children}</Main>
      <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </>
  );
};

const Main = ({ children }: PropsWithChildren) => <div>{children}</div>;
