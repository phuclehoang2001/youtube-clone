import {
  HOME_CATEGORIES_FAIL,
  HOME_CATEGORIES_REQUEST,
  HOME_CATEGORIES_SUCCESS,
} from "../actionType";

const initialState = {
  loading: false,
  categories: [],
  error: null,
};

export const homeVideoCategoriesReducer = (
  prevState = initialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_CATEGORIES_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case HOME_CATEGORIES_SUCCESS:
      return {
        ...prevState,
        loading: false,
        categories: payload.categories,
        error: null,
      };
    case HOME_CATEGORIES_FAIL:
      return {
        ...prevState,
        categories: [],
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};
