import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { RxDot } from 'react-icons/rx';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';

export default function AboutUsInfo() {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <Stack direction={'column'}>
      <Typography color="#cbf000" variant="button" fontSize={20}>
        {intl.formatMessage({ id: 'about_us_footer' })}
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <RxDot color="#cbf000" />
          </ListItemIcon>
          <ListItemText
            primary={
              <IconButton
                onClick={() => {
                  navigate(ROUTES.ABOUTUS);
                }}
              >
                <Typography style={{ color: '#FFFFFF' }} variant="body1">
                  {intl.formatMessage({ id: 'aboutus' })}
                </Typography>
              </IconButton>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RxDot color="#cbf000" />
          </ListItemIcon>
          <ListItemText
            primary={
              <IconButton
                onClick={() => {
                  navigate(ROUTES.ABOUTUS);
                }}
              >
                <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                  {intl.formatMessage({ id: 'privacy_policy' })}
                </Typography>
              </IconButton>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RxDot color="#cbf000" />
          </ListItemIcon>
          <ListItemText
            primary={
              <IconButton
                onClick={() => {
                  navigate(ROUTES.ABOUTUS);
                }}
              >
                <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                  {intl.formatMessage({ id: 'terms_conditions' })}
                </Typography>
              </IconButton>
            }
          />
        </ListItem>
      </List>
    </Stack>
  );
}
