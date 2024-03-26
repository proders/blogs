// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'proder',
    // tagline: '山海自有归期，\n' + '风雨自有相逢。',
    tagline:'勤奋是一种可以吸引一切美好事物的天然磁石',
    favicon: 'img/svg/avatar.svg',

    // Set the production url of your site here
    url: 'https://proders.github.io', // 当前页面的url，setting里面 都可以看到部署后的url
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/blogs',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'proders', // Usually your GitHub org/user name.
    projectName: 'blogs', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash:true,

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    // i18n: {
    //   defaultLocale: 'en',
    //   locales: ['en'],
    // },
    i18n: {
        defaultLocale: "zh-Hans",
        locales: ["zh-Hans"],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    include: ['**/*.{md,mdx}'],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'proder',
                logo: {
                    alt: 'proder',
                    src: 'img/svg/avatar.svg',
                },
                items: [
                    {
                        to: '/docs/knowledgeStructure/',
                        label: '💼知识体系',
                        position: 'left',
                        logo: {
                            alt: '知识体系',
                            src: 'img/logo.svg',
                            width: '100px',
                            height: '100px',
                        }
                    },
                    {
                        to: '/docs/life/',
                        label: '👨🏻‍🌾生活',
                        position: 'left',
                    },
                    {
                        to: '/docs/log/2023-11',
                        label: '📽️日志',
                        position: 'left',
                    },
                    {
                        to: '/map/',
                        label: '👨🏻‍🌾map',
                        position: 'left',
                    },
                    {to: '/blog', label: '🚴Blog', position: 'left'},
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
            /*    links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],*/
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
       /*     algolia:{
                appId: 'YOUR_APP_ID',
                apiKey: 'YOUR_SEARCH_API_KEY',
                indexName: 'YOUR_INDEX_NAME',
            }*/
        },
    titleDelimiter: '🦖', // 默认为 `|`
    themes: [
        // '@docusaurus/theme-search-algolia',
 /*       [
            "@easyops-cn/docusaurus-search-local", {
            hashed: true,
            language: ["en", "zh"],
        }],*/
    ],
    customFields: {
        BaiDuMapKey: '5hvFnIXmHKgIOCF7F4rRNVNfFDyllgvR',
    },
    plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
