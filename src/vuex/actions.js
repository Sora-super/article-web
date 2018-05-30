
import * as types from './mutation-types'

const makeAction = (type) => {
  return ({commit}, ...args) => commit(type, ...args)
}

