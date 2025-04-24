import { ICardData, TCardStrategyRender } from "@/interfaces/card";
import { SIMPLE, GRADIENT } from "@/utils/constants";
import React from "react";

const SimpleCard = React.lazy(() => import("./strategies/SimpleCard"));
const GradientCard = React.lazy(() => import("./strategies/GradientCard"));

const cardStrategies: { [key: string]: TCardStrategyRender<ICardData> } = {
  [SIMPLE]: { render: (props: ICardData) => <SimpleCard {...props} /> },
  [GRADIENT]: { render: (props: ICardData) => <GradientCard {...props} /> },
};

const CardStrategyPicker = (props: ICardData) =>
  cardStrategies[props.strategy]?.render(props) || null;

export default CardStrategyPicker;
