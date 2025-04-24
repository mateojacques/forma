import { ICardData } from "./card";

export interface ISection {
  title: {
    content: string;
    position: string;
  };
  description: {
    content: string;
  };
  layout: string;
  items: ICardData[];
  backgroundColor: string;
  textColor: string;
}

export interface ISectionComponentProps {
  data: ISection;
}

export interface ISectionHeadline {
  title: {
    content: string;
    position: string;
  };
  description: {
    content: string;
  };
}

export type TRenderSectionStrategy<T> = {
  render: (data: T) => React.ReactElement;
};

export type TSectionStrategy = {
  [key: string]: TRenderSectionStrategy<ICardData>;
};

