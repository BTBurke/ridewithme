module.exports = {
    title: 'Ride With Me', 
    description: 'Ride Along with Indie Hackers as they Build a Business Step by Step',
    theme: 'cool',
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: true },
        // options for markdown-it-toc
        toc: { includeLevel: [1, 2, 3, 4] },
        config: md => {
            // use more markdown-it plugins!
            //md.use(require("markdown-it-katex"));
            //md.use(require("markdown-it-plantuml"))
        }
    },
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Ride Alongs', items: [
              {text: 'secretbox.io', link: '/secretbox/'}
          ] },
        ]
      }
  }