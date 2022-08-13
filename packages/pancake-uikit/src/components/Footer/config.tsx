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
    label: "Facebook",
    icon: "Facebook",
    href: "https://www.facebook.com/Runtogether.official",
  },
  {
    label: "Globe",
    icon: "Globe",
    href: "https://runtogether.net/",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/RunTogether_Nft",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/Runtogethergroup?fbclid=IwAR2k6m9kmLrf6BrKbFUWZp4giAhuRAqbOT6xTDprNeBndRkT2d-Er3bd8VU",
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
export const MoreInformationLeft = [
  {
    label: "Kiến thức chạy bộ",
    href: "https://whitepaper.runtogether.net/about-run-together/general",
  },
  {
    label: "Tin tức sự kiện",
    href: "https://docsend.com/view/rf3ygdnx67sqxe6d",
  },
  {
    label: "Runshop",
    href: "https://bscscan.com/address/0xc643E83587818202E0fFf5eD96D10Abbc8Bb48e7",
  },
]

export const MoreInformationRight = [
  {
    label: "Whitepaper",
    href: "https://whitepaper.runtogether.net/about-run-together/general",
  },
  {
    label: "Pitchdesk",
    href: "https://docsend.com/view/rf3ygdnx67sqxe6d",
  },
  {
    label: "Hỗ trợ",
    href: "https://bscscan.com/address/0xc643E83587818202E0fFf5eD96D10Abbc8Bb48e7",
  },
  {
    label: "Liên hệ",
    href: "https://bscscan.com/address/0xc643E83587818202E0fFf5eD96D10Abbc8Bb48e7",
  },
]

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
