
export default function nav({children, modeloCaixa , justificacao, altura, alinhamento}){

    const style = `
    ${modeloCaixa}
    ${justificacao}
    ${altura}
    ${alinhamento}

    `;

    return<nav className={style}>{children}</nav>;
}