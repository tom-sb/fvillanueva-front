import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ROUTES } from '../../../utils/constants';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LanguageSwitch from '../../molecules/header/language-switch';
import Logo from '../../molecules/header/logo';

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
      text: intl.formatMessage({ id: 'home' }),
      onClick: () => {
        navigate(ROUTES.HOME);
      },
      route: ROUTES.HOME,
    },
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
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo handleClick={() => navigate(ROUTES.HOME)} />
        <Box sx={{ bgcolor: 'blue', display: { xs: 'none', md: 'flex' } }}>
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
        <LanguageSwitch />
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
