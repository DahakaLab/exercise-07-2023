import type { AxiosError } from "axios";
import { createStore, createEvent, createEffect } from "effector";

type Reducer<State, Payload> = (state: State, payload: Payload) => State | void;

export const storeFactory = <State>(initValue: State) => {
  const currentStore = createStore<State>(initValue);
  
  const createStoreEvent = <Payload = State>(reducer: Reducer<State, Payload>) => {
    const event = createEvent<Payload>();
    currentStore.on(event, reducer);
    return event;
  };

  const useCreateEffect = <Params>(handler: Function) => {
    const effect = createEffect<Params, State, AxiosError>(handler);
    currentStore.on(effect.doneData, (_, payload) => payload);
    return effect;
  };

  const changeEvent = createStoreEvent<State>((_, payload) => payload);

  return {
    createStoreEvent,
    useStore: () => currentStore,
    useNewDataEvent: () => changeEvent,
    useChangeEvent: <Payload = State>(reducer: Reducer<State, Payload>) => createStoreEvent(reducer),
    useCreateEffect,
  };
};
