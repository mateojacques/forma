export type TLinkType = "internal" | "external";

export interface INavigationLink {
  href: string;
  content: string;
  type: TLinkType;
}
