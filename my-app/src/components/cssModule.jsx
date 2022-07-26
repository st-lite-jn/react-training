import classes from "../scss/App.module.scss";

export const CSSModule = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>CSSモジュールです</p>
            <button className={classes.button}>ボタン</button>
        </div>
    )
}