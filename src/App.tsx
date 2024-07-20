import {
  Avatar,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import ProfileAvatar from './assets/profile.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';

const App = () => {
  return (
    <Container maxWidth='md' sx={{ py: 5 }}>
      <Stack direction='row' justifyContent='space-between'>
        <Avatar
          alt='Anawil Karavek'
          src={ProfileAvatar}
          sx={{ height: 150, width: 150 }}
        />
        <Stack>
          <Typography variant='h4'>Anawil Karavek</Typography>
          <Typography variant='overline' flexGrow={1}>
            Computer Scientist Graduate | Aspiring Back-end Developer
          </Typography>
          <ButtonGroup sx={{ alignSelf: 'flex-end' }}>
            <IconButton
              href='https://www.linkedin.com/in/akaravek/'
              target='_blank'
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton href='https://github.com/ak0411' target='_blank'>
              <GithubIcon />
            </IconButton>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Divider sx={{ mt: 5 }} />
    </Container>
  );
};

export default App;
