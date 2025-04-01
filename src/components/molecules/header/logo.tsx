import { Box, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

interface LogoProps {
  handleClick: () => void;
}
export default function Logo({ handleClick }: LogoProps) {
  return (
    <Box onClick={handleClick}>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
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
    </Box>
  );
}
