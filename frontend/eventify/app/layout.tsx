import type { Metadata } from "next";
import "./globals.css";
import {Layout, Menu} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Link from "next/link";

const items = [
    {key: "home", label : <Link href={"/home"}>Home</Link>},
    {key: "events", label : <Link href={"/events"}>Events</Link>},
    {key: "login", label : <Link href={"/login"}>Login</Link>},
    {key: "register", label : <Link href={"/"}>Register</Link>},
]

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: "100vh"}}>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={items}
                    style={{flex: 1, minWidth: 0}}/>
            </Header>
            <Content style={{padding: "0 48px"}}>{children}</Content>
            <Footer style={{textAlign: "center"}}>
                Eventify 2024 Created by Ruzil Zakirov
            </Footer>
        </Layout>

      </body>
    </html>
  );
}
