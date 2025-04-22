export type TLinkType = "internal" | "external";

export interface INavigationLink {
  href: string;
  content: string;
  type: TLinkType;
}

export type TActionButtonType = "primary" | "secondary";

export interface IActionButton {
  href: string;
  type: TActionButtonType;
  content: string;
}
