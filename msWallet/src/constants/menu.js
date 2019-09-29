const data = [
  {
    id: "start",
    icon: "iconsminds-dashboard",
    label: "menu.start",
    to: "/app/mensalidades/start",
  },
  {
    id: "mensalidades",
    icon: "iconsminds-museum",
    label: "menu.ies",
    to: "/app/mensalidades",
    subs: [
        {
        id: "umesp",
        icon: "iconsminds-bar-chart-4",
        label: "menu.umesp",
        to: "/app/mensalidades/umesp"
      },
      {
        id: "unimep",
        icon: "iconsminds-bar-chart-4",
        label: "menu.unimep",
        to: "/app/mensalidades/unimep"
      },     
      {
        id: "centenario",
        icon: "iconsminds-bar-chart-4",
        label: "menu.centenario",
        to: "/app/mensalidades/centenario"
      },     
      {
        id: "izabela",
        icon: "iconsminds-bar-chart-4",
        label: "menu.izabela",
        to: "/app/mensalidades/izabela"
      },     
      {
        id: "granbery",
        icon: "iconsminds-bar-chart-4",
        label: "menu.granbery",
        to: "/app/mensalidades/granbery"
      },
      {
        id: "ipa",
        icon: "iconsminds-bar-chart-4",
        label: "menu.ipa",
        to: "/app/mensalidades/ipa"
      },
      {
        id: "ead",
        icon: "iconsminds-bar-chart-4",
        label: "menu.ead",
        to: "/app/mensalidades/ensinoADistancia"
      }
        ]
  },
  // {
  //   id: "secondmenu",
  //   icon: "iconsminds-gears",
  //   label: "menu.second-menu",
  //   to: "/app/second-menu"
  //   // subs: [
  //   //   {
  //   //     icon: "simple-icon-paper-plane",
  //   //     label: "menu.second",
  //   //     to: "/app/second-menu/second"
  //   //   }
  //   // ]
  // },
  // {
  //   id: "blankpage",
  //   icon: "iconsminds-receipt-4",
  //   label: "menu.blank-page",
  //   to: "/app/blank-page"
  // },
  // {
  //   id: "docs",
  //   icon: "iconsminds-library",
  //   label: "menu.docs",
  //   to: "https://gogo-react-docs.coloredstrategies.com/",
  //   newWindow:true
  // }
];
export default data;
