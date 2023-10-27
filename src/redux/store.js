import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createIndexedDBStorage from "redux-persist-indexeddb-storage";
import buy from './buy';
import cash from './cash';
import accountInfo from './accountInfo';
import purchases from './purchases';
import search from './search';
import item from './item';
const IDBStorage = createIndexedDBStorage("my-app");

const rootReducer = combineReducers({
    buy,
    cash,accountInfo,purchases,search,item
  });
const persistConfig = {
  key: 'root',
  storage: IDBStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
export default store;

