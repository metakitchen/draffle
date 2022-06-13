# Build and Deploy
```
solana config set -u  https://ssc-dao.genesysgo.net/
```

```
anchor build
```
```
solana config set -k ~/.config/solana/deploy-keypair.json
```
```

solana program deploy --program-id ~/.config/solana/draffle-keypair.json target/deploy/draffle.so -u https://ssc-dao.genesysgo.net/
```

# CLI Commands

```
solana config set -k ~/.config/solana/mint-keypair.json
```
1. Create raffle

   ```bash
   target/debug/draffle create-raffle \
       7BPCwgL97UMWcSuyUmDdNTzGnDvruyfGKTmUaSbLzohP \
       3 \
       "2022-06-14 23:00" \
       --max-entrants 2000 \
       --provider.cluster mainnet \
       --provider.wallet ~/.config/solana/mint-keypair.json \
       --program-id RAfqHaNYVVNoc5Xj5fgpZD9QRXothdxQ2frNsDCvc5J
   ```

   ```bash
   target/debug/draffle create-raffle \
       So11111111111111111111111111111111111111111 \
       1 \
       "2022-06-04 00:15" \
       --max-entrants 420 \
       --provider.cluster devnet \
       --provider.wallet ~/.config/solana/mint-keypair.json \
       --program-id RAfqHaNYVVNoc5Xj5fgpZD9QRXothdxQ2frNsDCvc5J
   ```

   ```bash
   # EXPLANATION
   target/debug/draffle create-raffle \
       So11111111111111111111111111111111111111111 \ # SPL token mint address that can be used to buy tickets, this is USDC
       "0.1" \ # Cost per ticket in given token
       "2022-04-22 14:55" \ # Raffle end date in UTC timezone. Double check this if you encounter a 0x1771 error.
       --max-entrants 420 \ # Max tickets available for given raffle
       --provider.cluster devnet \ # Cluster
       --provider.wallet operations/keypair.json # Keypair to execute command with
       --program-id <program-id> # Deployed raffle program

   # OUTPUT
   5tA54UMYd1tBSJ2VTaUBFE7mWZsM3n1pPucMyzvguQU1 # Program ID
   Raffle address: CGraPGpJhZ9M35weYyQgnVVnBeyv1btyMsp8eAdD6Kr1 # Raffle address. Note this down.
   Cluster clock unix_timestamp: 1649035423, raffle end_timestamp: 1649036100
   ```

  * After a raffle has been created, make sure to take a note of the `raffle address` outputted.

2. Add prize to raffle
   There can be multiple prizes to a single raffle. The prize(s) can be NFTs or fungible tokens. The wallet adding the prize has to own that token, which will be transferred to the raffle.

   ```bash
   target/debug/draffle add-prize \
       8eN6xbpE1Q1KDTRQxe6ZQxzySPdskSMVdqqQZPHmJZAi \
       7nW2ezNL7nmLy2xkFUCak2BtVCzsXY5A7LdZ7w5rJWAx \
       1 \
       0 \
       --provider.cluster mainnet \
       --provider.wallet ~/.config/solana/mint-keypair.json \
       --program-id RAfqHaNYVVNoc5Xj5fgpZD9QRXothdxQ2frNsDCvc5J
   ```

   ```bash
   # EXPLANATION
   target/debug/draffle add-prize \
       <raffle-address> \ # Raffle address (pubkey)
       <prize-mint> \ # Token (pubkey) of the prize to be added. Mint address in case of fungible tokens.
       1 \ # How many of the token should be added as prize. Use 1 for NFTs
       0 \ # Position in the array of prizes. Starting at 0, 1, 2...
       --provider.cluster devnet \
       --provider.wallet operations/operator-keypair.json
       --program-id <program-id>
   ```

3. Check raffle state
   After you've added a prize (or at any point really) you can check the details of the raffle with the following command

   ```bash
   target/debug/draffle show-raffle \
   CNRhLrD7GAARwdTXAkMMk7GqyjzJj7B2MSwVbosknHx8 \
   --provider.cluster mainnet

   ```
   ```
   # OUTPUT
   5tA54UMYd1tBSJ2VTaUBFE7mWZsM3n1pPucMyzvguQU1 # Raffle program ID
   Raffle {
       creator: 3Xaq71yEsJzyXmvwPf3fd7DywMULQvc2zYcRejDsdfQ8, # Should be your operator-keypair address
       total_prizes: 1,
       claimed_prizes: 0,
       randomness: None,
       end_timestamp: 1649036100, # End timestamp in UNIX time
       ticket_price: 1,
       entrants: H8p1wcT3aZ8h9Q9x9w95VPqGedYjWKHFSsRvxvDVzJWT, # Account storing entrants
   }
   ```

   At this point you should spin up the frontend to check on the raffle at the `/admin_panel` path.

4. Reveal Winners
   This can only be done after a raffle has ended and the buffer period has completed. If you get an error executing this, try again later.

   ```bash
   target/debug/draffle reveal-winners \
       <raffle-address> \
       --provider.cluster mainnet \
       --provider.wallet ~/.config/solana/mint-keypair.json \
       --program-id RAfqHaNYVVNoc5Xj5fgpZD9QRXothdxQ2frNsDCvc5J
   ```

5. Collect proceeds

   ```bash
   target/debug/draffle collect-proceeds \
       CNRhLrD7GAARwdTXAkMMk7GqyjzJj7B2MSwVbosknHx8 \
       EkUdd3D3CqJ1M4h1M5xdmbNuextRvxsZrmTzGQ6EtWD6 \
       --provider.cluster mainnet \
       --provider.wallet ~/.config/solana/mint-keypair.json \
       --program-id RAfqHaNYVVNoc5Xj5fgpZD9QRXothdxQ2frNsDCvc5J

   ```
   ```bash
   # EXPLANATION
   target/debug/draffle collect-proceeds \
       <raffle-address> \ # Raffle address
       <target-token-account> \ # The token account matching the token used to pay for tickets, where the proceeds will be deposited.
       --provider.cluster devnet \
       --provider.wallet scripts/operator-keypair.json \
       --program-id <program-id>
   ```
6. close

   ```bash
   target/debug/draffle close-entrants \
       CC8PPHdmapBcbrrjtK3Ppu9Sc3VxatZRMW3azCmAqpuw \
       --provider.cluster mainnet \
       --provider.wallet ~/.config/solana/mint-keypair.json \
       --program-id RAfqHaNYVVNoc5Xj5fgpZD9QRXothdxQ2frNsDCvc5J
   ```
