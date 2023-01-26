import {createStore} from 'redux'

import {profile} from './profile/store'

const store = createStore(profile)

export default store;
