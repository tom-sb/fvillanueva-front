import { MaterialUISwitch } from './language-switch.styled';

export default function LanguageSwitch() {
  const handleChange = () => {
    console.log('newAlignment');
  };

  return (
    <MaterialUISwitch sx={{ m: 1 }} defaultChecked onClick={handleChange}/>
  );
}
