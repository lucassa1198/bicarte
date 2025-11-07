
export default function Header ({ children, corFundo, corTexto, espacamento}){
        
        const style =`
        ${corFundo}
        ${corTexto}
        ${espacamento}
       
        `
    return<header className={style}>{children}</header>;
}