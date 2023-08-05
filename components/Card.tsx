type CardTypes = {
  children?: React.ReactElement | React.ReactElement[];
  onClick?: () => any;
};

export default function Card(props: CardTypes) {
  return (
    <div className="card" onClick={ props.onClick }>
      { props.children }
    </div>
  );
};