import "./style.scss";

type TagProps = {
  color: string;
  label: string;
  val: string;
  icon: React.ReactNode;
};

const Tag = (props: TagProps) => {
  const { label, val, icon } = props;
  return (
    <div className="tag">
      {icon}
      <span>{label}</span>
      <span> {val}</span>
    </div>
  );
};

export default Tag;
