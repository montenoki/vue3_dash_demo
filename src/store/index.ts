// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'


export interface State {
    theme_name: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        theme_name: "light",
    },
    getters: {
        getThemeName: (state) => {
            return state.theme_name
        }
    },
    mutations: {
        updateThemeName(state, payload) {
            state.theme_name = payload.theme_name
        }
    }
})

export function useStore() {
    return baseUseStore(key)
}