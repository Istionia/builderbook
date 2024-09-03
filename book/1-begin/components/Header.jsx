import Link from 'next/link';

import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import { styleToolbar } from './SharedStyles';

const Header = () => (
  <div>
    <Toolbar style={styleToolbar}>
      <Grid container direction="row" justifyContent="space-around" align="center">
        <Grid item xs={12} style={{ textAlign: 'right' }}>
          <Link href="/login">Log In</Link>
        </Grid>
      </Grid>
    </Toolbar>
  </div>
);

export default Header;
