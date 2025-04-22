export type TCallToActionType = "primary" | "secondary";

export interface ICallToAction {
  href: string;
  type: TCallToActionType;
  content: string;
}
