import style from './item.module.css';

const Item = (props) => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h6>{props.title}</h6>
      </div>
      <div className={style.buttonDone} onClick={() => props.onDone(props.value)}>
        <p>Done</p>
      </div>
    </div>
  );
}

export default Item;
