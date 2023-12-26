import './Logo.scss';

export default function Logo() {
    const imgUrl = '../images/TK.png';
  return (
    <img className="logo" src={imgUrl} alt='Logo' />
  )
}
