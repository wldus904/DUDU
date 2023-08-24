import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./layout/Header";
import SideMenu from "./layout/SideMenu";
import Footer from "./layout/Footer";
import {
    LayoutWrapper,
    OverLay,
    LayoutBox,
    SideMenuBox,
    MainBox,
    Contents,
} from "@/styles/layout.ts";
import { useState } from "react";

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "DUDU" }: Props) => {
    let [isShow, setIsShow] = useState(false);

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LayoutWrapper>
                <OverLay onClick={() => setIsShow(false)} className={isShow ? "on" : ""}></OverLay>
                <SideMenuBox className={isShow ? "on" : ""}>
                    <SideMenu />
                </SideMenuBox>
                <Header toggleMenu={() => setIsShow(!isShow)} />
                <LayoutBox>
                    <MainBox>
                        <Contents>{children}</Contents>
                        <Footer />
                    </MainBox>
                </LayoutBox>
            </LayoutWrapper>
        </div>
    );
};

export default Layout;
