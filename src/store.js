"use strict";

import { createStore } from 'redux'
import miniWoop from './reducers'

let store = createStore(miniWoop);

export default store;