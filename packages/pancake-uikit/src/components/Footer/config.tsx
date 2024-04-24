import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Globe",
    icon: "Globe",
    href: "https://ltd.livetrade.io/",
  },
  {
    label: "Facebook",
    icon: "Facebook",
    href: "https://www.facebook.com/livetradeglobal",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/livetradeglobal",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/LiveTrade_chat",
  },
  // {
  //   label: "GitLab",
  //   icon: "GitLab",
  //   href: "https://ltd.livetrade.io/",
  // },
  // {
  //   label: "Telegram",
  //   icon: "Telegram",
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/LiveTradeLTD",
  //     },
  //   ],
  // },
  
];
export const MoreInformation = [
  {
    label: "Whitepaper",
    href: "https://ltd.livetrade.io/wp-content/uploads/2021/07/LTD-Whitepaper_Eng.pdf",
  },
  {
    label: "Docs",
    href: "https://docs.livetrade.io/",
  },
  {
    label: "Smart Contract",
    href: "https://bscscan.com/token/0xDbad544416Df0677254645422bB560AF8408cAe7",
  },
  {
    label: "Audits",
    href: "https://github.com/verichains/public-audit-reports/blob/main/Verichains%20Pulbic%20Audit%20Report%20-%20LiveTrade%20Token%20and%20Treasury%20-%20v1.1.pdf",
  },
]

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
