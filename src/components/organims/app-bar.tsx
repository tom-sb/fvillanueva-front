import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { ROUTES } from '../../utils/constants';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LanguageSwitch from '../molecules/language-switch';

interface IItemsRoutes {
  text: string;
  icon?: JSX.Element;
  onClick: () => void;
  route?: string;
}

function ResponsiveAppBar() {
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();

  const itemsRoutes: IItemsRoutes[] = [
    {
      text: intl.formatMessage({ id: 'aboutus' }),
      onClick: () => {
        navigate(ROUTES.ABOUTUS);
      },
      route: ROUTES.ABOUTUS,
    },
    {
      text: intl.formatMessage({ id: 'suburbs' }),
      icon: <LocalOfferOutlinedIcon />,
      onClick: () => {
        navigate(ROUTES.SUBURBS);
      },
    },
    {
      text: intl.formatMessage({ id: 'multifam' }),
      icon: <LocalOfferOutlinedIcon />,
      onClick: () => {
        navigate(ROUTES.MULTIFAM);
      },
      route: ROUTES.MULTIFAM,
    },
    {
      text: intl.formatMessage({ id: 'socialresp' }),
      onClick: () => {
        navigate(ROUTES.SOCIALRESP);
      },
      route: ROUTES.SOCIALRESP,
    },
    {
      text: intl.formatMessage({ id: 'refered' }),
      onClick: () => {
        navigate(ROUTES.REFERED);
      },
      route: ROUTES.REFERED,
    },
    {
      text: intl.formatMessage({ id: 'news' }),
      onClick: () => {
        navigate(ROUTES.NEWS);
      },
      route: ROUTES.NEWS,
    },
  ];

  const regex_pdf_uuid = /pdfs\/[a-z0-9-]+/;
  if (regex_pdf_uuid.test(location.pathname)) {
    return null;
  }

  return (
    <AppBar position="static" sx={{ bgcolor: '#1c284c' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {itemsRoutes.map((page) => (
              <Button
                key={page.route}
                onClick={page.onClick}
                sx={{ my: 2, color: '#cbf000', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <LanguageSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
