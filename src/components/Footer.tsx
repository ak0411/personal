import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography textAlign='center'>
      &copy; {new Date().getFullYear()} Anawil Karavek. All rights reserved.
    </Typography>
  );
};

export default Footer;
