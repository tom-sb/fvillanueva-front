import { Button, Stack, Typography } from '@mui/material';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';

export default function ContactInfo() {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <Stack direction={'column'} alignItems="center" justifyContent="center">
      <Stack direction={'row'} alignItems="center" justifyContent="center" gap={2}>
        <FaFacebook />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Ontario
        </Typography>
      </Stack>
      <Button
        variant="contained"
        endIcon={<FaYoutube />}
        sx={{ borderRadius: 15, bgcolor: '#cbf000', color: '#1c284c' }}
        onClick={() => {
          navigate(ROUTES.ABOUTUS);
        }}
      >
        {intl.formatMessage({ id: 'contact_us' })}
      </Button>
    </Stack>
  );
}
