import { List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { RxDot } from 'react-icons/rx';
import { useIntl } from 'react-intl';

export default function ProjectInfo() {
  const intl = useIntl();

  return (
    <Stack direction={'column'}>
      <Typography color="#cbf000" variant="button" fontSize={20}>
        {intl.formatMessage({ id: 'our_projects' })}
      </Typography>
      <Stack direction={'row'}>
        <Stack direction={'column'}>
          <Typography variant="button" fontSize={20}>
            {intl.formatMessage({ id: 'sold' })}
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RxDot color="#cbf000" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="button" style={{ color: '#FFFFFF' }}>
                    Mejia
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                    Mykonos
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
                    Punta de bombon
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                      Zafiro
                    </Typography>
                    <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                      Punta Arena
                    </Typography>
                    <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                      Coral
                    </Typography>
                  </>
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
                    Cusco
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                    Killa
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Stack>
        <Stack direction={'column'}>
          <Typography variant="button" fontSize={20}>
            {intl.formatMessage({ id: 'on_sale' })}
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <RxDot color="#cbf000" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="button" style={{ color: '#FFFFFF' }}>
                    Tumbes
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                    Bahia Serena
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
                    Cerro Colorado
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                    O2 by Ontario
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
                    Punta de bombon
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                    Punta arena II
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
                    Mejia
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                    Santorini
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
                    La joya
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                    Prado Piamonte
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
}
