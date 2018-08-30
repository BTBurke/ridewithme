module.exports = {
    secretbox: {
        // directory underneath docs/ in which you'll publish your posts (required)
        namespace: "secretbox",
        card: {
            // Short description that will appear on the card on the homepage
            // under rides in progress (required)
            description: "Ride along as Bryan builds secretbox.io to help developers securely manage their secrets.",
            // Link to the directory where your README.md serves as the landing 
            // page for your story (defaults to <namespace>/)
            link: ""
        },
        author: {
            // Author's name (required)
            name: "Bryan Burke",
            // URL to avatar relative to the .vuepress/public directory or absolute URL (required)
            avatarsrc: "btburke.jpg",
            // Short personal bio (required only if using the <About> component)
            bio: "Avid builder. Hockey fanatic. Enjoys the challenge of building side businesses.",
            // Email (optional)
            email: "bryan@secretbox.io",
            // Twitter (optional)
            twitter: "@bryanburke",
            // Github (optional)
            github: "BTBurke",
            // Gitlab (optional)
            gitlab: ""
        },
        project: {
            // URL to project logo relative to the .vuepress/public directory or absolute URL
            // if falsy a random image is displayed. Should be 900x900 or larger, square.
            // It will be cropped to a 16:9 format on the homepage.
            logosrc: "secretbox.png",
            // Longer description of your project (required only if using the <About> component)
            description: "Secretbox.io helps teams keep their secrets secure while still making it easy for developers to manage them from dev to prod.",
            // Github URL to project (optional)
            github: "",
            // Gitlab URL to project (optional)
            gitlab: "",
            // Landing page URL (optional)
            landing: ""
        }
    },
    ///////////////////////////////////
    // Add yourself above this point //
    ///////////////////////////////////
    add: {
        card: {
            description: "Building something cool?  Share your story with others to document your journey.",
            cta: "Add Your Story",
            link: "contributing.html"
        },
        author: {
            name: "You",
            avatarsrc: "https://placeimg.com/320/320/people"
        },
        project: {
            logosrc: "https://placeimg.com/900/900/tech"
        }
    }
}