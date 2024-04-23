import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '價格',
      href: getPermalink('/pricing'),
    },
    {
      text: '案例',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: '產生訴狀', href: '', target: '_blank' }],
};

export const footerData = {
  links: [

  ],
  secondaryLinks: [
  ],
  socialLinks: [
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
  `,
};
