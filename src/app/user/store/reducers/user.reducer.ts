import * as userActions from '../actions'
import { createReducer, on } from '@ngrx/store'
import { initialUserState, UserState } from '../state/user.state'

const _userReducer = createReducer(
  initialUserState,
  on(userActions.signInStart, state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  }),
  on(userActions.signInWithTokenStart, state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  }),
  on(userActions.signInSuccess, (state: UserState, action) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      loggedIn: true,
      ...action.user
    }
  }),
  on(userActions.signInWithTokenSuccess, (state: UserState, action) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      loggedIn: true,
      ...action.user
    }
  }),
  on(userActions.signInWithTokenFailure, (state: UserState, action) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      loggedIn: false
    }
  }),
  on(userActions.signInFailure, state => {
    return { ...state, loading: false, loaded: false }
  }),
  on(userActions.signUpStart, state => {
    return {
      ...state,
      loading: true,
      loaded: false
    }
  }),
  on(userActions.signUpSuccess, (state: UserState, action) => {
    return {
      ...state,
      ...action.user,
      loading: false,
      loaded: true,
      loggedIn: true
    }
  }),
  on(userActions.signUpFailure, state => {
    return {
      ...state,
      loading: false,
      loaded: false
    }
  })
)

export function userReducer (state, action) {
  return _userReducer(state, action)
}
// export interface UserState {
//   data: User[]
//   loaded: boolean
//   loading: boolean
// }

// export const initialState: UserState = {
//   data: [],
//   loaded: false,
//   loading: false
// }

// export function reducer (
//   state = initialState,
//   action: fromUser.UserAction
// ): UserState {
//   switch (action.type) {
//     case fromUser.SIGN_IN: {
//       return {
//         ...state,
//         loading: true,
//         loaded: false
//       }
//     }
//     case fromUser.SIGN_IN_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         loaded: true
//       }
//     }
//     case fromUser.SIGN_IN_FAILURE: {
//       return {
//         ...state,
//         loading: false,
//         loaded: false
//       }
//     }
//   }
//   return state
// }

// // Selectors

// export const getUserLoading = (state: UserState) => {
//   return state.loading
// }

// export const getUserLoaded = (state: UserState) => {
//   return state.loaded
// }
// export const getUser = (state: UserState) => {
//   return state.data
// }

// // case fromUser.SIGN_UP: {
// //   return {
// //     ...state,
// //     loading: true,
// //     loaded: false
// //   }
// // }
// // case fromUser.SIGN_UP_SUCCESS: {
// //   return {
// //     ...state,
// //     loading: false,
// //     loaded: true
// //   }
// // }
// // case fromUser.SIGN_UP_FAILURE: {
// //   return {
// //     ...state,
// //     loading: false,
// //     loaded: false
// //   }
// // }
