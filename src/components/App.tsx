import {useState} from 'react';
import classes from './App.module.scss'
import {AnimationSection} from "./AnimationSection";

export function App(){

    const [count, setCount] = useState(0);

    return(
        <div>
            <button className={classes.button} onClick={() => setCount(prev => prev + 1)}>+1</button>
            {count}
        </div>
    )
}
