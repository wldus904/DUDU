import React from "react";
import Link from "next/link";
import styled from "styled-components";
import MainIcon from "../icon/MainIcon";
import MenuButton from "../button/MenuButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";

const MainIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .close {
        width: 28px;
        height: 28px;
        cursor: pointer;
    }
`;
const MenuWrapper = styled.div`
    max-width: 260px;
    min-width: 260px;
    border-right: 1px solid #eee;
    font-size: 12px;
`;
const MenuContents = styled.nav`
    height: calc(100vh - 108px);
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: hidden;
    overflow-x: hidden;
    &:hover {
        overflow-y: overlay;
    }
`;

const SideMenu = (props) => {
    const router = useRouter();
    let [currentPath, setCurrentPath] = useState(router.pathname);
    const menus = [
        { name: "About", url: "/about" },
        { name: "Users", url: "/users" },
        { name: "Users API", url: "/api/users" },
    ];

    const move = (e, url) => {
        e.preventDefault();
        router.push(url);
    };

    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            setCurrentPath(router.pathname);
        });
    });

    return (
        <MenuWrapper>
            <MainIconWrapper>
                <MainIcon />
                <BsX onClick={() => props.toggleMenu()} className="close"></BsX>
            </MainIconWrapper>
            <MenuContents>
                {menus.map((menu) => {
                    return (
                        <MenuButton
                            key={menu.url}
                            href={menu.url}
                            currentPath={currentPath}
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
