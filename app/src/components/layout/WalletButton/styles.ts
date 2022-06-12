import { Theme, alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  walletConnectButton: {
    width: '100%',
    backgroundColor: '#000',
    borderColor: '#000',
    boxShadow: `none`,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.4),
      borderColor: '#000',
    },
  },
  walletDisconnectButton: {
    width: '100%',
    backgroundColor: '#000',
    borderColor: '#000',
    boxShadow: `none`,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.4),
      borderColor: '#000',
    },
  },
}));
