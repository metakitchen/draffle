import React, { FC, useMemo } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui';

import { useStyles } from './styles';

const WalletButton: FC = () => {
  const classes = useStyles();
  const { connected, publicKey } = useWallet();
    const base58 = useMemo(() => publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), [publicKey]);

  return (
    <WalletMultiButton
      variant="outlined"
      color="secondary"
      className={
        connected ? classes.walletDisconnectButton : classes.walletConnectButton
      }
    >
        {connected && base58 ? base58.slice(0, 4) + '..' + base58.slice(-4) : 'Connect'}
    </WalletMultiButton>
  );
};

export default WalletButton;
