
const Button = ({texto, corFundo, cursor}) => {

const style = `

${corFundo}
${cursor}

`;

  return (
    <>
      <button className={style}>{texto}</button>
    </>
  );
}

export default Button;
