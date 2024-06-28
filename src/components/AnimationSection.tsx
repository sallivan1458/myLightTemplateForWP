import classes from './App.module.scss';

export function AnimationSection(){
    return (
        <section>
            <div className={classes.bigBlueElement}></div>
            <div className={classes.animText}>Lorem ipsum dolor sit amet.</div>
            <div className={classes.bigGreenElement}></div>
        </section>

    )
}