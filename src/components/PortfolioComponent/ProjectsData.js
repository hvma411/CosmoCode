const IMAGE_PATH = "./src/utils/assets/"

export const ProjectName = {
    ZIELONOJEMY: "ZielonoJemy",
    CMS: "CMS",
    BEST_SHOP: "BestShop",
    COSMO_CODE: "CosmoCode",
    PYRAMIDS: "Pyramids",
    SAND_DUNES: "Sand Dunes",
    ECLIPSE: "Eclipse",
    MOUNTAINS: "Mountains",
}

export const ProjectType = {
    WEB: "web",
    ART: "art"
}

export const projectData = {
    "ZielonoJemy": {
        id: 1,
        projectTitle: "ZielonoJemy",
        projectDescription: `Dietitian blog website created for my friend. You can find here a few subpages and blog part with articles. There is search function in blog part - user can search articles using tags added to articles. Whole layout design was created by me.
                             There is also administration panel (CMS) created for content management - it's next project in my portfolio. Website is temporarily closed for my friend wish but I prepared a demo project - click below to visit website.`,
        projectTechStack: [
            "React",
            "Firebase",
            "Scss"
        ],
        projectUrl: "https://greenblog.web.app/",
        repoUrl: "https://github.com/hvma411/GreenBlog",
        projectType: ProjectType.WEB,
        desktopImage: IMAGE_PATH + "ZielonojemyFullPageDesktop.png",
        mobileImage: IMAGE_PATH + "ZielonojemyFullPageMobile.jpg",
        RWD: true,

    },
    "CMS": {
        id: 2,
        projectTitle: "CMS",
        projectDescription: `My proprietary content management system app created for web apps/blogs. App was created only with front-end (React and SCSS) and It uses Firebase as back-end.
                             App functions: main desktop with statistics, add/edit/delete articles, added articles list view, add article without publishing it - publish it on click, promoted/featured articles, promoted/featured articles list - stop promoting articles, timetable of automatically publishing articles (in progress), simple to do list (in progress), settings of web app - more than content management settings (in progress).
                             App already works but new features are still in progress. This system will be used as a main content management system for websites that I create for customers`,
        projectTechStack: [
            "React",
            "Firebase",
            "Scss"
        ],
        projectUrl: "",
        repoUrl: "",
        projectType: ProjectType.WEB,
        desktopImage: IMAGE_PATH + "CMSLandingPhoto.jpg",
        mobileImage: "",
        RWD: false
    },
    "BestShop": {
        id: 3,
        projectTitle: "BestShop",
        projectDescription: `My frist ever created landing page website. It is simple layout without any special functions. Website is responsive and It was created with React and SCSS. Website is hosted on Firebase.`,
        projectTechStack: [
            "React",
            "Scss",
            "Firebase"
        ],
        projectUrl: "https://best-shop.web.app/",
        repoUrl: "https://github.com/hvma411/BestShop",
        projectType: ProjectType.WEB,
        desktopImage: IMAGE_PATH + "BestShopDesktop.png",
        mobileImage: IMAGE_PATH + "BestShopMobile.png",
        RWD: true,
    },
    "CosmoCode": {
        id: 4,
        projectTitle: "CosmoCode",
        projectDescription: `My portfolio website - second version. Whole layout design including all menu icons were designed by me.`,
        projectTechStack: [
            "React",
            "Redux",
            "Scss",
            "Firebase",
        ],
        projectUrl: "https://www.cosmo-code.web.app/",
        repoUrl: "https://github.com/hvma411/CosmoCode",
        projectType: ProjectType.WEB,
        desktopImage: IMAGE_PATH + "CosmoCodeLandingPhoto.jpg",
        mobileImage: IMAGE_PATH + "cosmomobile.jpeg",
        RWD: true
    },
    "Pyramids": {
        id: 5,
        projectTitle: "Pyramids",
        projectDescription: "Digital art created with Procreate",
        projectType: ProjectType.ART,
        desktopImage: IMAGE_PATH + "art1.jpg",
        mobileImage: IMAGE_PATH + "",
    },
    "Sand Dunes": {
        id: 5,
        projectTitle: "Sand Dunes",
        projectDescription: "Digital art created with Procreate",
        projectType: ProjectType.ART,
        desktopImage: IMAGE_PATH + "art2.jpg",
        mobileImage: IMAGE_PATH + "",
    },
    "Eclipse": {
        id: 5,
        projectTitle: "Eclipse",
        projectDescription: "Digital art created with Procreate",
        projectType: ProjectType.ART,
        desktopImage: IMAGE_PATH + "art3.jpg",
        mobileImage: IMAGE_PATH + "",
    },
    "Mountains": {
        id: 5,
        projectTitle: "Mountains",
        projectDescription: "Digital art created with Procreate",
        projectType: ProjectType.ART,
        desktopImage: IMAGE_PATH + "art4.jpg",
        mobileImage: IMAGE_PATH + "",
    }
}