import { themes as prismThemes } from "prism-react-renderer";
import remarkBreaks from "remark-breaks";

const info = {
  name: "auth",
  tagline: "authentication server sdk",
  functionName: "register",
};

const config = {
  title: `${info.name}`,
  tagline: `${info.tagline}`,
  favicon: "img/favicon.ico",
  url: "https://pr4j3sh.github.io",
  baseUrl: `/${info.name}/`,
  organizationName: "pr4j3sh",
  projectName: `${info.name}`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: `https://github.com/pr4j3sh/${info.name}/tree/master/docs/`,
          remarkPlugins: [remarkBreaks],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: `${info.name}`,
      logo: {
        alt: `${info.name}`,
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "left",
          label: "Getting Started",
        },
        {
          type: "doc",
          docId: `api/${info.functionName}`,
          position: "left",
          label: "API Reference",
        },
        {
          href: `https://www.npmjs.com/package/@pr4j3sh/${info.name}`,
          label: "Download",
          position: "right",
        },
        {
          href: `https://github.com/pr4j3sh/${info.name}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "API Reference",
              to: `/docs/api/${info.functionName}`,
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: `https://github.com/pr4j3sh/${info.name}`,
            },
            {
              label: "pr4j3sh",
              href: "https://pr4j3sh.github.io/pr4j3sh/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${info.name}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
