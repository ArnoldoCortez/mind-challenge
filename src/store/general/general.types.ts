export type Notification = {
  position?: {
    vertical: "bottom" | "top";
    horizontal: "left" | "center" | "right";
  };
  type?: "info" | "error" | "success" | "warning";
  show?: boolean;
  message: string;
};

export type GeneralState = {
  notification?: Notification;
};
