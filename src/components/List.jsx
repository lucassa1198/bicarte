
export default function List({children, modeloCaixa, distanciamento}){
const style =`
${modeloCaixa}
${distanciamento}`;

    return <li className={style}>{children}</li>;
}