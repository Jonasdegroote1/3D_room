import { NavigationItem } from "Types/NavigationItem";

export namespace NAVIGATION {
  export enum PATH {
    INTERACTIVE_DIORAMA = "interactive-diorama",
    REFERNCE = "reference",
  }

  export const ITEMS: Array<NavigationItem> = [
    {
      label: "Interactive Diorama",
      to: PATH.INTERACTIVE_DIORAMA,
    },{
      label: "Reference Page", 
      to: PATH.REFERNCE,
    },
  ];
}
