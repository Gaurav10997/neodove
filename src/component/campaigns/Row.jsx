import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export default function Row({ name, deletepinned }) {
  return (
    <>
      <div className="row">
        <div className="left__row">
          <div className="first__letter">{name ? name[0] : "Z"}</div>
          <p>{name}</p>
        </div>
        <div className="right">
          <CloseOutlinedIcon
            onClick={() => deletepinned(name)}
          ></CloseOutlinedIcon>
        </div>
      </div>
    </>
  );
}
