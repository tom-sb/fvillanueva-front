import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{ borderRadius: 12, bgcolor: '#cbf000', height: 30 }}
    >
      <ToggleButton sx={{ bgcolor: 'blueviolet' }} value="web">
        ES
      </ToggleButton>
      <ToggleButton value="android">EN</ToggleButton>
    </ToggleButtonGroup>
  );
}
