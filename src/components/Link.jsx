
export default function link({texto, tamanhoFonte, caixaFonte, pesoFonte, entreLetras, efeitoSobre}){

    const style =`
    ${tamanhoFonte}
    ${caixaFonte}
    ${pesoFonte}
    ${entreLetras}
    ${efeitoSobre}`

    return <a className={style} href="">{texto}</a>
}