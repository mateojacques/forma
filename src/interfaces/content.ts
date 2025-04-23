export interface ISection {
  title: {
    content: string;
    position: string;
  };
  description: {
    content: string;
  };
  layout: string;
  items: {
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
  }[];
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
  [key: string]: TRenderSectionStrategy<any>;
};

