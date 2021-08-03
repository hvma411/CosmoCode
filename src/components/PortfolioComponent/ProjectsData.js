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
        projectDescription: "Lorem zielonojemy lorem lorem lorem",
        projectTechStack: [
            "React",
            "Firebase",
            "Scss"
        ],
        projectUrl: "https://zielonojemy.pl/",
        projectType: ProjectType.WEB,
        className: "web1",
        RWD: true,

    },
    "CMS": {
        id: 2,
        projectTitle: "CMS",
        projectDescription: "Lorem cms lorem lorem lorem",
        projectTechStack: [
            "React",
            "Firebase",
            "Scss"
        ],
        projectUrl: "",
        projectType: ProjectType.WEB,
        className: "web2",
        RWD: false
    },
    "BestShop": {
        id: 3,
        projectTitle: "BestShop",
        projectDescription: "Lorem bestshop lorem lorem lorem",
        projectTechStack: [
            "React",
            "Scss"
        ],
        projectUrl: "",
        projectType: ProjectType.WEB,
        className: "web3",
        RWD: true,
    },
    "CosmoCode": {
        id: 4,
        projectTitle: "CosmoCode",
        projectDescription: "Lorem cosmocode lorem lorem lorem",
        projectTechStack: [
            "React",
            "Redux",
            "Scss",
            "Firebase",
        ],
        projectUrl: "",
        projectType: ProjectType.WEB,
        className: "web4",
        RWD: true
    },
    "Pyramids": {
        id: 5,
        projectTitle: "Pyramids",
        projectDescription: "Lorem pyrmids",
        projectType: ProjectType.ART,
        className: "art1",
    },
    "Sand Dunes": {
        id: 5,
        projectTitle: "Sand Dunes",
        projectDescription: "Lorem sand dunes",
        projectType: ProjectType.ART,
        className: "art2",
    },
    "Eclipse": {
        id: 5,
        projectTitle: "Eclipse",
        projectDescription: "Lorem eclipse",
        projectType: ProjectType.ART,
        className: "art3",
    },
    "Mountains": {
        id: 5,
        projectTitle: "Mountains",
        projectDescription: "Lorem Mountains",
        projectType: ProjectType.ART,
        className: "art4",
    }
}