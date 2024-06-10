import React from 'react';
import './dark-mode.css';
import { Toggle } from '../Toggle/toggle';
import useLocalStorage from 'use-local-storage';

export const DarkMode = () => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [dark, setDark] = useLocalStorage("isDark", preference);
    return (
        <div className='darkMode' data-theme={dark ? "dark" : "light"}>
            <Toggle isChecked={dark} handleChange={() => { setDark(!dark) }} />
            <h1 className='title'>Hello Worldies</h1>
            <div className='box'>
                <h2>This is Box!</h2>
            </div>
        </div>
    )
}
