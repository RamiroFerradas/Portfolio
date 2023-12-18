export const Routes = (text) => {
  return [
    {
      id: 1,
      active: "home",
      text: text.Home,
      href: "home",
    },
    {
      id: 2,
      active: "about",
      text: text.About,
      href: "about",
    },
    {
      id: 3,
      active: "services",
      text: text.Services,
      href: "services",
    },
    {
      id: 4,
      active: "works",
      text: text.Works,
      href: "works",
    },
    {
      id: 5,
      active: "contact",
      text: text.Contact,
      href: "contact",
    },
  ];
};
