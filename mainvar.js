export const varProps = {
    portfolio: {
        endpoint: "https://gitconnected.com/v1/portfolio/karinfdez",
    },
    spinner: {
        type: "ThreeDots",
        color: "#173342",
        height: 150,
        width: 150,
    },
    colors: {
        main: "#173342",
        medium: "#22424c",
        light: "#4b7788",
        hover: "#b3d5dd",
    },
    pagination: {
        itemsPerPage: 6,
    },
    textContent: {
        menu: [
            {
                id: "home",
                href: "/",
                content: "about"
            },
            {
                id: "resume",
                href: "https://gitconnected.com/karinfdez/resume",
                content: "resume",
                newTab: true,
            },
            {
                id: "projects",
                href: "/projects",
                content: "projects",
            }
        ],
        noMatchPage: {
            message: "Page not found. Click on right icon to find desired page",
        },
    },
};
