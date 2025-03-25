import { IconButton, Stack } from '@mui/material';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default function SocialNetworkIcons() {
  function handleSignOut(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <Stack direction={'row'}>
      <IconButton onClick={handleSignOut}>
        <FaFacebook color={'#cbf000'} />
      </IconButton>
      <IconButton onClick={handleSignOut}>
        <FaTiktok color={'#cbf000'} />
      </IconButton>
      <IconButton onClick={handleSignOut}>
        <FaInstagram color={'#cbf000'} />
      </IconButton>
      <IconButton onClick={handleSignOut}>
        <FaYoutube color={'#cbf000'} />
      </IconButton>
    </Stack>
  );
}
