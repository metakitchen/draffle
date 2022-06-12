import { Theme } from '@material-ui/core';
import { makeStyles, darken } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme, { isCurrent: boolean }>(
  (theme: Theme) => ({
    navButtons: ({ isCurrent }) => ({
      fontSize: '16px',
      color: '#FFF',
      '&:hover': {
        textShadow: '0px 0px 5px #555555',
        backgroundColor: 'transparent',
      },
    }),
  })
);
