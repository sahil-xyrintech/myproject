export default {
    state() {
        return {
            userDetails: {
                userName: 'sahil',
                userPassword: '123456',
                roles: 'Web Developer'
            },
            isAuthenticated: false,
            currentUser: null
        }
    },
    mutations: {
        SET_AUTHENTICATION(state, value) {
            state.isAuthenticated = value
        },
        LOGOUT_USER(state) {
            state.isAuthenticated = false
        },
        SET_USER(state, value) {
            state.currentUser = value.name
        }
    },
    actions: {
        isAuthLogin(context, payload) {
            const currenUserDetails = context.state.userDetails
            if (payload.name === currenUserDetails.userName && payload.password === currenUserDetails.userPassword) {
                context.commit('SET_AUTHENTICATION', true)
                context.commit('SET_USER', payload)
            } else {
                context.commit('SET_AUTHENTICATION', false)
            }
            console.log(payload)

            // const filteredUsers = userDetails.filter(user => {
            //     return user.name === name && user.password === password
            //   })
            //   return filteredUsers.length > 0
        },
        isAuthLogout(context) {
            context.commit('LOGOUT_USER')
        }

    },
    getters: {
        userDetails(state) {
            return state.userDetails
        },
        userAuthentication(state) {
            return state.isAuthenticated
        },
        currentLogedUser(state) {
            return state.currentUser
        }
    }
}