import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'left',
  },
  entrantRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
  },
  wallet: {
    width: '400px',
    fontFamily: 'monospace'
  },
  tickets: {
    wdth: '100px',
    fontFamily: 'monospace'

  },
  walletButtonContainer: {
    margin: '20px 0 0 0',
  },
}));
