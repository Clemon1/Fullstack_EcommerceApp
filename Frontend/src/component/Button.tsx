interface prop {
  name: String;
}
const Button = ({ name }: prop) => {
  return <button className='Btn_auth'>{name} </button>;
};

export default Button;
