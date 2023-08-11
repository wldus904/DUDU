import React from "react";
import Link from "next/link";
import styled from "styled-components";
import MainIcon from "../icon/MainIcon";
import MenuButton from "../button/MenuButton";
import { useRouter } from "next/router";

const MenuWrapper = styled.div`
    height: 100vh;
    width: 255px;
    border-right: 1px solid #eeeeee;
    font-size: 12px;
`;
const MenuContents = styled.nav`
    display: flex;
    flex-direction: column;
`;

const SideMenu = () => {
    const router = useRouter();
    const menus = [
        { name: "About", url: "/about" },
        { name: "Users", url: "/users" },
        { name: "Users API", url: "/api/users" },
    ];
    const move = (e, url) => {
        e.preventDefault();
        router.push(url);
    };

    return (
        <MenuWrapper>
            <MainIcon padding="20px" />
            <MenuContents>
                {menus.map((menu) => {
                    return (
                        <MenuButton
                            key={menu.url}
                            href={menu.url}
                            onClick={(e) => move(e, menu.url)}
                        >
                            {menu.name}
                        </MenuButton>
                    );
                })}
            </MenuContents>
        </MenuWrapper>
    );
};

export default SideMenu;
