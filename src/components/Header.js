import { AppBar, Toolbar, makeStyles, Button } from "@material-ui/core";
import React from "react";
import logo from '../images/csj_homepagelogo.png'
import { Link as RouterLink } from "react-router-dom";
const headersData = [
    {
        label: "ホーム",
        href: "/home",
    },

    {
        label: "ソリューション",
        href: "/solution",
    },

    {
        label: "会社情報",
        href: "/about_company",
    },

    {
        label: "お問い合わせ",
        href: "/contact",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#004f99",
    },
    getMenuButtons: {
        fontFamily: "Open Sans,sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
}));


export default function Header() {
    const { header } = useStyles();

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {companyLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const companyLogo = (
        <img src={logo} alt="csj_株式会社コムサット・ジャパン" />
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                    }}
                >
                    {label}
                </button>
            );
        });
    };

    return (
        <header>
            <AppBar>{displayDesktop}</AppBar>
        </header>
    );
}