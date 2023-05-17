import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GeneralState, Notification } from "./general.types";

const initialState: GeneralState = {
  notification: undefined,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    resetGeneral: () => initialState,
    setNotification: (
      state,
      action: PayloadAction<Notification | undefined>
    ) => {
      state.notification = action.payload;
    },
  },
});

export const { resetGeneral, setNotification } = generalSlice.actions;
export default generalSlice.reducer;
