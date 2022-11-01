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
                content: "about",
                className:
                    "menu-item transition duration-700 ease hover:opacity-50 font-raleway tracking-widest",
            },
            {
                id: "projects",
                href: "/projects",
                content: "projects",
                className:
                    "menu-item transition duration-700 ease hover:opacity-50 font-raleway tracking-widest",
            },
            {
                id: "resume",
                href: "https://gitconnected.com/karinfdez/resume",
                content: "resume",
                className:
                    "menu-item transition duration-700 ease hover:opacity-50 font-raleway tracking-widest",
                newTab: true,
            },
        ],
        noMatchPage: {
            message: "Page not found. Click on right icon to find desired page",
        },
    },
};
