import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { reducer, State } from "./reducer";

export const makeStore: MakeStore<State> = (context: Context) =>
  createStore(reducer, applyMiddleware(logger));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
