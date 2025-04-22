import mockData from "../../examples/innovify.json";

export const EXAMPLE_JSON_DATA = mockData;

export const LOGO_ORDER_CLASS_BY_POSITION_NAME: { [key: string]: string } = {
  left: "order-0",
  center: "order-1",
};

export const LOGO_SIZE_CLASS_BY_SIZE_NAME: { [key: string]: string } = {
  small: "h-10",
  normal: "h-14",
  big: "h-20",
};

export const NAVIGATION_ORDER_CLASSES_BY_LOGO_POSITION_NAME: {
  [key: string]: string;
} = {
  left: "order-1",
  center: "order-0",
};

export const NAVIGATION_POSITION_CLASSES_BY_POSITION_NAME: {
  [key: string]: string;
} = {
  left: "",
  center: "absolute left-1/2 transform -translate-x-1/2",
};

export const ELEVATION_CLASSES: { [key: number]: string } = {
  0: "shadow-none",
  1: "shadow-sm",
  2: "shadow-md",
  3: "shadow-lg",
  4: "shadow-xl",
  5: "shadow-2xl",
};

export const BUTTON_COLOR_CLASSES: { [key: string]: string } = {
  primary: "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ease-in duration-100",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded ease-in duration-100",
};
