import { utils } from '@project-serum/anchor';
import { TESTING } from './misc';
import { DISPENSER_PROGRAM_ID, DISPENSER_REGISTRY_ADDRESS } from './programIds';

export const ADMIN_ACCOUNTS = TESTING
  ? [
        'PeRq2L7uPQpabwMo4bpsVdDjaMRz9P7hb61LYTsUCjw',
        '8yDHnibVDAy8hZqnThGEp2BX3555pJC81iv4PDxJz2mF',
        '7rb5BqRA7TJgbD5zeJmhJgz9EMTgDzPKLbpdxtu2p4S4',
        'H71RvvgBSC4danyWkXgMJZNYDdDXnCGyH9YKRgXF6idj',
        '9jKHqYTiR6rnh5Sdp9csFR66fZgUo38y6C6oZdp7nwpL',
    ]
  : [
        'PeRq2L7uPQpabwMo4bpsVdDjaMRz9P7hb61LYTsUCjw',
        '8yDHnibVDAy8hZqnThGEp2BX3555pJC81iv4PDxJz2mF',
        '7rb5BqRA7TJgbD5zeJmhJgz9EMTgDzPKLbpdxtu2p4S4',
        'H71RvvgBSC4danyWkXgMJZNYDdDXnCGyH9YKRgXF6idj',
        '9jKHqYTiR6rnh5Sdp9csFR66fZgUo38y6C6oZdp7nwpL',
    ];

export const [VAULT_TOKEN_IN] = utils.publicKey.findProgramAddressSync(
  [Buffer.from('vault_token_in'), DISPENSER_REGISTRY_ADDRESS.toBytes()],
  DISPENSER_PROGRAM_ID
);
console.log(`VAULT_TOKEN_IN: ${VAULT_TOKEN_IN.toBase58()}`);

export const [VAULT_TOKEN_OUT] = utils.publicKey.findProgramAddressSync(
  [Buffer.from('vault_token_out'), DISPENSER_REGISTRY_ADDRESS.toBytes()],
  DISPENSER_PROGRAM_ID
);
console.log(`VAULT_TOKEN_OUT = ${VAULT_TOKEN_OUT.toBase58()}`);
