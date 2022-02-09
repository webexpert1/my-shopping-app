import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./product.actions";

export const initialState = 0;

const _productReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) =>{
    if(state <= 1) {
      return state;
    }
    return state - 1;
  }),
  on(reset, (state) => 0)
)

export function productReducer(state: any, action: any) {
  return _productReducer(state, action)
}
