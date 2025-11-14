
const Box = ({children, largura }) => {

const style = `
${largura}

`;

  return (
    <>
      <div className={style}>{children}</div>
    </>
  );
}

export default Box;
