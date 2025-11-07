
export default function Ul({children, modeloCaixa, distanciamento}){
    const style =`
${modeloCaixa}
${distanciamento}`;
    return <ul className={style}>{children}</ul>;
}