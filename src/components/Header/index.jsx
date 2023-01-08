import style from "./Header.module.css";

export default function Header() {
    const { logo } = style;
    return (
        <>
            <header>
                <p className={logo}>СПОРТИВНИЙ КАЛЬКУЛЯТОР</p>
            </header>
        </>
    );
}
