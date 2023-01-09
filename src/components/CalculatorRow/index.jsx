import style from "./CalculatorRow.module.css";

export default function CalculatorRow() {
    const { row, root, tabs, buttonTab } = style;

    return (
        <div className={root}>
            <div className='container'>
                <div className={row}>
                    <div className={tabs}>
                        <button className={buttonTab}>
                            Розрахувати калорії
                        </button>
                        <button className={buttonTab}>Розрахувати білок</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
