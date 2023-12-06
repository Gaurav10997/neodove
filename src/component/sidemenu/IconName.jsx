export default function IconName({ icon, name, state, handleChangeState }) {
  return (
    <div
      className={`icon__name ${state}`}
      onClick={() => handleChangeState(name)}
    >
      {icon}
      <p className="name">{name}</p>
    </div>
  );
}
