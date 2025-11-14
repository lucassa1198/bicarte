
const Drawer = ({corTexto, texto}) => {

const style = `
${corTexto}
`;

  return (
    <>
      <span className={style}>{texto}</span>
    </>
  );
}

export default Drawer;
