import { JSX } from "react";

export type TCardStrategyRender<T> = {
  render: (props: T) => JSX.Element;
};

export interface ICardData {
  title: string;
  description: string;
  media: {
    type: string;
    source_url: string;
  };
  cta: {
    type: string;
    content: string;
    href: string;
  };
  strategy: string;
}
