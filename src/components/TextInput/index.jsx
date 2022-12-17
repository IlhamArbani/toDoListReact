import style from './textInput.module.css'

const TextInput = (props) => {
  return (
    <div className={style.container}>
      <input
        onKeyUp={props.onKeyUp}
      />
    </div>
  )
}

export default TextInput;
