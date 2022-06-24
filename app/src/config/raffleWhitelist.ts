import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  ['5G9btTRB2ARAUhUytYE7dJJJJeAAkKJWM4hpsmxGEvh6', { name: 'test #1' }],
  ['5cm2JLh3BReEtXq4itHsLT2t7qLbX3fmUAXyY2Rps61k', { name: 'test #2' }],
    ['FZyJJEd4vphYK9YiJ1pJpCvfmdcjQ2FLyYzbH6LDoH9w', { name: 'test #3' }],
    ['ECSMEa9hgDrqdmjqsRUNgPnKxGiMVM5YnBYtUhuem1Tm', { name: 'test #4' }],
    ['BX6ZwWdJPigtsSNMg56EA9x6oousVoLGy7s8AXNXzqa2', { name: 'test #5' }],
  [
    'Ab9brJkBSVu7BwKA364MEiMR6WMdqsvrvTcP2KdqfKnC',
    {
      name: 'dRaffle for the win',
      alternatePurchaseMints: [
        new PublicKey('72UgZ7avdJZBbv3wR7hbWcFy6dyHHNAoJw7CimGA55Zh'),
      ],
    },
  ],
  [
    '36t14CtqKxQvtEuAg42D9WPZtVNHDWFkNAPd8h3U2txT',
    { name: 'dRaffle with a loooooooooooooooong name' },
  ],
  [
    '6scsG1BuD1GhAYgHCbzKLqvgMJjijzWTAgGmj9mhBwFz',
    {
      name: 'Oh my dRaffle',
      overviewImageUri: '/resources/001-mainnet-launch.gif',
      alternatePurchaseMints: [
        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    '8eN6xbpE1Q1KDTRQxe6ZQxzySPdskSMVdqqQZPHmJZAi',
    {
      name: '10 OG Chef Free Mint Tokens',
      overviewImageUri: 'mk.jpeg',
    },
  ],
  [
    'AkzbLBJmP6kadhYzSMn9Z3iwQ2N5vR5TssaQuB8csR9H',
    {
      name: '10 OG Chef Free Mint Tokens',
      overviewImageUri: 'mk.jpeg',
    },
  ],
  [
    'oVwFKCKMVZyymMx7KPbjhPQbUfY4zD4MgHS4yycKn2e',
    {
      name: '3 OG Chef Free Mint Tokens',
      overviewImageUri: 'mk.jpeg',
    },
  ],
  [
    'FdHqRXi6HihJNaCQfZnjUKhUjkujphh7oSE7b3Lhug7x',
    {
      name: '3 OG Chef Free Mint Tokens',
      overviewImageUri: 'mk.jpeg',
    },
  ],
  [
    '3SNWcUaSPJpKQaYpjVCAxXjzwMQggjMQrVbQEP8uo3zK',
    {
      name: '3 OG Chef Free Mint Tokens',
      overviewImageUri: 'mk.jpeg',
    },
  ],
  [
    '3q7SVXixY5WHbaZVrX4PfjowKfiuEpccw2bcYx2qSsYt',
    {
      name: 'Ganja Gators #4401 (GAGMI) NFT',
    },
  ],
  [
    '5agamG4WbuGCzMYzehQPVq3NNKQKVrvPBhFJmgAT7yBu',
    {
      name: '5 OG Chef Free Mint Tokens',
      overviewImageUri: 'mk.jpeg',
    },
  ],
  [
    '8WA58M2RZjL8ZenXGAwFBd14c4YVwKy54jH3bBHJmEvF',
    {
      name: '5 OG Chef Free Mint Tokens',
      overviewImageUri: 'mk.jpeg',
    },
  ],
  [
    'Y5KCuwF55kz177GYpE9WrQQWkujGpRL3ZEB7BwWzNtM',
    {
      name: '5 OG Chef Free Mint Tokens',
      overviewImageUri: 'mk.jpeg',
    },
  ],
  [
    'CjzFZfrMW4D1jZVm5upCobRi96UYnQTk5cescSt12rhV',
    {
      name: 'SAMO raffle',
      overviewImageUri: '/resources/samo-x3.gif',
    },
  ],
  [
    'EZtBKgWq66KT4jRKtd4VT3LWh3mVC4pwcCsqLzKas63G',
    {
      name: 'BitBoat raffle',
      overviewImageUri: '/resources/bitboat-raffle.gif',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
