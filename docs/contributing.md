# Contributing

This site welcomes stories about how you built your business step-by-step.  There are only a few requirements:

* **Transparency**: Share your story without filtering the results.  Show people the data and be open and honest about your progress.

* **Consistency**: Post something at least twice a month as you work on your project.  Every major step you take should be clear for people following along.

* **Reproducability**: Share what you learned and your take aways so they help others.  Structure your content so people can clearly follow what you're doing: choosing an idea, validating, marketing, product development, etc.  It's not a day-by-day account of how you changed the color of your login button or a developer's blog about how much you love React.  It should be focused on the steps of buildling your business such that someone else can follow your playbook to help build their's.

## How to contribute

This is a static site powered by [Vuepress](https://vuepress.vuejs.org/).  It uses a pull-request model to add new content.  Posts are written in Markdown and I've created a few widgets here and there to help make the site easier for others to use.  The best example is to follow the structure that I've layed out for my project under the `secretbox/` directory.

To get started:

1. Fork [this repository](https://github.com/BTBurke/ridewithme) on Github
2. Add your project to `docs/.vuepress/data.js`.  Follow the comments in the file to figure out what the different options are.
3. Add your assets to the `docs/.vuepress/public` folder - an avatar and logo are enough to get started.
3. Create your own directory under `docs/<yourproject>` and a README.md that will serve as your landing page for your story.  Take a look at the example in the `secretbox/` directory.
4. Create your first post by writing the beginning of your story in a markdown file.
5. Send me a pull request and I'll merge it in.

## Components to help tell your story

There are a few components built in that will help tell your story.  I'll fill this section in once I get at least one contributor, but there are components for an author's bio, graphs, data tables, and signing up to your pre-launch mailing list (coming soon).  Open an issue if you have an idea for another component or want to create one.

**Pull requests accepted!**  Yes, it's a little ugly right now.  If you're a designer or developer and want to help build out the platform, send me a pull request.  I welcome all contributions.  The site can take full advantage of almost anything you can do in [Vue](https://vuejs.org/).