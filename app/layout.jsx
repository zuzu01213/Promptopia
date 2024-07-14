import { Inter } from "next/font/google";
import "../styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promptopia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="assets/images/logo.svg" />
      <body className="body ">
        <Provider>

          <div className="main">
            <div className="gradient"/>
          </div>

          <main className="app">
            <Nav/>
            {children}
          </main>
          
        </Provider>
      </body>
    </html>
  );
}
