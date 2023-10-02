import "./settings.css";

interface Props {
  active: boolean;
  setActive: (data: boolean) => void;
  children: JSX.Element;
}
const Settings = ({ active, setActive, children }: Props) => {
  return (
    <div
      className={active ? "modalSettings active" : "modalSettings"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Settings;
