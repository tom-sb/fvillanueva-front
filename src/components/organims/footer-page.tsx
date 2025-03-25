import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton, Stack } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SocialNetworkIcons from '../molecules/footer/social-network-icons';
import FindInfo from '../molecules/footer/find-us-info';
import ProjectInfo from '../molecules/footer/projects-info';
import AboutUsInfo from '../molecules/footer/about-us-info';
import ContactInfo from '../molecules/footer/contact-info';

function FooterPage() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1c284c',
        color: 'white',
        py: 2,
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Stack direction={'column'} gap={2} alignItems="center">
        <Stack direction={'row'} gap={5}>
          <Stack direction={'column'} gap={4}>
            <ContactInfo />
            <AboutUsInfo />
          </Stack>
          <ProjectInfo />
          <FindInfo />
        </Stack>
        <Stack direction={'row'} gap={40} justifyContent={'space-between'}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={3}>
            <Typography>2024 @ All rights reserved by ONTARIO</Typography>
            <IconButton onClick={() => console.log('Go oother side')}>
              <AutoStoriesOutlinedIcon htmlColor="#cbf000" />
              <Typography sx={{ color: 'white' }} fontSize={20}>
                {' '}
                Libro de Reclamaciones{' '}
              </Typography>
            </IconButton>
          </Stack>
          <SocialNetworkIcons />
        </Stack>
      </Stack>
    </Box>
  );
}
export default FooterPage;
