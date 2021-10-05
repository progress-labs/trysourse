import axios from 'axios'

const headerConfigs = {
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'xmlhttprequest',
    },
};

const state = {
    cartData: {
        items: []
    },
    loading: false,
    visible: false
}

const mutations = {
    TOGGLE(state) {
        state.visible = !state.visible
    },

    SHOW(state) {
        state.visible = true;
    },

    HIDE(state) {
        state.visible = false;
    },

    cartLoading(state) {
        state.loading = !state.loading;
    },

    initCart(state, payload) {
        state.cartData = payload;
    }
}

const getters = {
    cartItems: state => state.cartData.item_count,
}

const actions = {
    toggle({ commit }) {
        commit('TOGGLE')

        if (state.visible) {
            document
                .querySelector("body")
                .classList.add("max-h-screen", "relative", "overflow-hidden");
        } else {
            document
                .querySelector("body")
                .classList.remove("max-h-screen", "relative", "overflow-hidden");
        }
    },
    show({ commit }) {
        commit('SHOW')

        if (state.visible) {
            document
                .querySelector("body")
                .classList.add("max-h-screen", "relative", "overflow-hidden");
        } else {
            document
                .querySelector("body")
                .classList.remove("max-h-screen", "relative", "overflow-hidden");
        }
    },
    hide({ commit }) {
        commit('HIDE')
    },

    async initCart({ commit }) {
        commit('cartLoading');
        return axios
            .get("/cart.js")
            .then(response => {
                commit("initCart", response.data)
                commit('cartLoading');
                return response.data
            })
            .catch(error => error.message)
    },

    removeItem({ commit }, payload) {
        commit('cartLoading');
        let products = Array.isArray(payload) ? payload : [payload];

        const mappedPayload = products.reduce((acc, i) => {
            acc[i.key] = 0;
            return acc
        }, {});

        return axios.post("/cart/update.js",
            {
                updates: mappedPayload
            }, headerConfigs)
            .then(response => {
                commit("initCart", response.data)
                commit('cartLoading');
            }).catch(error => error.message)
    },

    addItem: ({ dispatch }, payload) => {
        if (state.loading) return;

        let products = Array.isArray(payload) ? payload : [payload];

        return axios.post('/cart/add.js', {
            items: products
        }, headerConfigs).then(() => {
            dispatch('initCart').then(() => dispatch('show'))
        }).catch(error => error.message)
    },

    updateItem({ commit }, { product, quantity }) {
        commit('cartLoading');
        return axios.post("/cart/update.js",
            {
                updates: { [product.key]: quantity }
            }, headerConfigs)
            .then(response => {
                commit("initCart", response.data)
                commit('cartLoading');
            }).catch(error => error.message)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
