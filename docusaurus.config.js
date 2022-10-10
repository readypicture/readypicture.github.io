const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: 'Ready Picture',
        tagline: '반갑습니다. Ready Picture 입니다.',
        url: 'https://readypicture.github.io/',
        baseUrl: '/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/favicon.ico',
        organizationName: 'ReadyPicture', // Usually your GitHub org/user name.
        projectName: 'readypicture.github.io', // Usually your repo name.

        presets: [
            [
                '@docusaurus/preset-classic',
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve('./sidebars.js'),
                        // Please change this to your repo.
                        editUrl:
                            'https://github.com/facebook/docusaurus/edit/main/website/',
                        exclude: ['tutorial-basics/**', 'tutorial-extras/**'],
                    },
                    blog: {
                        showReadingTime: true,
                        // Please change this to your repo.
                        editUrl:
                            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                    },
                    theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                }),
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                navbar: {
                    title: 'Ready Picture',
                    logo: {
                        alt: 'My Site Logo',
                        src: 'img/logo.svg',
                    },
                    items: [
                        {
                            type: 'doc',
                            docId: 'mealpick/개인정보처리방침',
                            position: 'left',
                            label: '프로젝트',
                        },
                        // { to: '/blog', label: 'Blog', position: 'left' },
                        {
                            href: 'https://github.com/readypicture',
                            label: 'GitHub',
                            position: 'right',
                        },
                    ],
                },
                footer: {
                    style: 'dark',
                    links: [
                        {
                            title: 'Docs',
                            items: [
                                {
                                    label: '프로젝트',
                                    to: '/docs/mealpick/개인정보처리방침',
                                },
                            ],
                        },
                        // {
                        //     title: 'Community',
                        //     items: [
                        //         {
                        //             label: 'Stack Overflow',
                        //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        //         },
                        //         {
                        //             label: 'Discord',
                        //             href: 'https://discordapp.com/invite/docusaurus',
                        //         },
                        //         {
                        //             label: 'Twitter',
                        //             href: 'https://twitter.com/docusaurus',
                        //         },
                        //     ],
                        // },
                        {
                            title: 'More',
                            items: [
                                // {
                                //     label: 'Blog',
                                //     to: '/blog',
                                // },
                                {
                                    label: 'GitHub',
                                    href: 'https://github.com/readypicture',
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} Ready Picture, Inc. Built with Docusaurus.`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                },
            }),
    }
);
