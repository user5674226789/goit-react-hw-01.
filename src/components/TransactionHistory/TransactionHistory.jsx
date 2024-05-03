import css from "./TransactionHistory.module.css"
import clsx from "clsx"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.header}>
                <tr>
                    <th className={css.headerLine}>Type</th>
                    <th className={css.headerLine}>Amount</th>
                    <th className={css.headerLine}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => {
                    return <tr className={css.listItem} key={item.id}>
                        <td className={clsx(css.line, css.type)}>{item.type}</td>
                        <td className={css.line}>{item.amount}</td>
                        <td className={css.line}>{item.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>

    )
}