import { List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { useIntl } from 'react-intl';
import { RxDot } from 'react-icons/rx';

export default function FindInfo() {
  const intl = useIntl();
  return (
    <Stack direction={'column'}>
      <Typography color="#cbf000" variant="button" fontSize={20}>
        {intl.formatMessage({ id: 'find_us' })}
      </Typography>
      <Typography variant="button" fontSize={20}>
        {intl.formatMessage({ id: 'our_business_office' })}
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <RxDot color="#cbf000" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ color: '#FFFFFF' }} variant="button">
                Arequipa
              </Typography>
            }
            secondary={
              <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                Av. Víctor Andrés Belaunde N°405 Umacollo-Arequipa
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RxDot color="#cbf000" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="button" style={{ color: '#FFFFFF' }}>
                Lima
              </Typography>
            }
            secondary={
              <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                Calle Cantuarias 357, 2do piso. Miraflores - Lima
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RxDot color="#cbf000" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                {'(054) 522 935'}
              </Typography>
            }
            secondary={
              <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                972 582 490
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <RxDot color="#cbf000" />
          </ListItemIcon>
          <ListItemText
            secondary={
              <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                contacto@ontario.com.pe
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Stack>
  );
}
