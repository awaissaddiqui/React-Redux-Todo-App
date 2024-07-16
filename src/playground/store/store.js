// store.js

import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/UserReducer';

// Function to save state to local storage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.error('Could not save state', err);
    }
};

// Function to load state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Could not load state', err);
        return undefined;
    }
};

// Load state from local storage
const persistedState = loadState();

export const store = configureStore({
    reducer: {
        users: UserReducer,
    },
    preloadedState: persistedState,
});

// Subscribe to store updates and save state to local storage
store.subscribe(() => {
    saveState(store.getState());
});



