import { DetailState, DETAIL_TYPE, Data } from "../types/detailType";

const initialState: DetailState = {
  isLoading: false,
  data: {
    plot: "",
    actors: "",
    ratings: [],
  },
  error: null,
};

export const detailReducer = (
  state: DetailState = initialState,
  action: { type: string; payload: Data | string }
) => {
  switch (action.type) {
    // case DETAIL_TYPE.LOADING:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    case DETAIL_TYPE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case DETAIL_TYPE.ERROR:
      return {
        ...state,
        isLoading: false,
        data: initialState.data,
        error: action.payload,
      };
    default:
      return state;
  }
};
