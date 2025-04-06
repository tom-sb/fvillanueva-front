import { useLocale } from '../../../contexts/locale.provider';
import { MaterialUISwitch } from './language-switch.styled';

export default function LanguageSwitch() {
  const { locale, switchLocale } = useLocale();
  const handleChange = () => {
    console.log('newAlignment');
  };

  return (
    <MaterialUISwitch
      sx={{ m: 1 }}
      defaultChecked
      onClick={handleChange}
      checked={locale === 'es'}
      onChange={switchLocale}
    />
  );
}
