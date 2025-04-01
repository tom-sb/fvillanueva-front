import React from 'react';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { SidebarWrapper, BodyWrapper } from './left-side-panel.styled';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useIntl } from 'react-intl';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';

interface IItemsRoutes {
  text: string;
  icon: JSX.Element;
  onClick: () => void;
  route?: string;
}

const LeftSidePanel: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();

  const itemsRoutes: IItemsRoutes[] = [
    {
      text: intl.formatMessage({ id: 'aboutus' }),
      icon: <GridViewOutlinedIcon />,
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
      icon: <PointOfSaleOutlinedIcon />,
      onClick: () => {
        navigate(ROUTES.MULTIFAM);
      },
      route: ROUTES.MULTIFAM,
    },
    {
      text: intl.formatMessage({ id: 'socialresp' }),
      icon: <PointOfSaleOutlinedIcon />,
      onClick: () => {
        navigate(ROUTES.SOCIALRESP);
      },
      route: ROUTES.SOCIALRESP,
    },
    {
      text: intl.formatMessage({ id: 'news' }),
      icon: <ShoppingCartOutlinedIcon />,
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
    <SidebarWrapper
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: 1,
        borderColor: 'divider',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <BodyWrapper>
        <List
          component="nav"
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 1,
            overflow: 'auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
          aria-labelledby="nested-list-subheader"
          disablePadding
        >
          {itemsRoutes.map((item, idx) => (
            <ListItemButton
              key={idx}
              onClick={item.onClick}
              selected={item.route === location.pathname}
              sx={{ gap: 1 }}
            >
              {item.icon && <ListItemIcon sx={{ minWidth: '24px' }}>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </BodyWrapper>
    </SidebarWrapper>
  );
};

export default LeftSidePanel;
