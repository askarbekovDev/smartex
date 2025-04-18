import React from "react";

export interface IFooterLink {
    label: string;
    icon?: React.JSX.Element;
}

export interface IFooterLinks {
    title: string;
    links: IFooterLink[];
}