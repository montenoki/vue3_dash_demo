// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'


export interface State {
    themeName: string
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        themeName: "light",
        count: 4,
    },
    getters: {
        getThemeName: (state) => {
            return state.themeName
        }
    },
    mutations: {
        updateThemeName(state, payload) {
            state.themeName = payload.themeName
        }
    }
})

export function useStore() {
    return baseUseStore(key)
}