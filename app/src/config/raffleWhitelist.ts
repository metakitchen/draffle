import {PublicKey} from '@solana/web3.js';
import {RaffleMetaData} from '../lib/types';
import {TESTING} from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
    ['5G9btTRB2ARAUhUytYE7dJJJJeAAkKJWM4hpsmxGEvh6', {name: 'test #1'}],
    ['5cm2JLh3BReEtXq4itHsLT2t7qLbX3fmUAXyY2Rps61k', {name: 'test #2'}],
    ['FZyJJEd4vphYK9YiJ1pJpCvfmdcjQ2FLyYzbH6LDoH9w', {name: 'test #3'}],
    ['ECSMEa9hgDrqdmjqsRUNgPnKxGiMVM5YnBYtUhuem1Tm', {name: 'test #4'}],
    ['BX6ZwWdJPigtsSNMg56EA9x6oousVoLGy7s8AXNXzqa2', {name: 'test #5'}],
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
        {name: 'dRaffle with a loooooooooooooooong name'},
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
        '3q7SVXixY5WHbaZVrX4PfjowKfiuEpccw2bcYx2qSsYt',
        {
            name: 'Ganja Gators #4401 (GAGMI) NFT',
        },
    ],


    [
        'Cg2zQWoWsw5obkm1vHh36TzECLNvC7oJX3Y3YbXuEt1r',
        {
            name: 'Baked Beavers #5306 NFT',
        },
    ],

    [
        'BcEzEkpc7afsZu77RhBCxGFrBXVs6QiEfUfeqqhfzUZx',
        {
            name: 'Outlaws NFT',
        },
    ],
    [
        'HvVkXuBUfUtwqNCHRjcmN4TWLj1SJX5rcreVCK37i5hi',
        {
            name: 'Faceless Souls NFT',
        },
    ],
    [
        '8rHjmS7iCaHa9DLfCiVdYQDG5BonaNAZ9mNmaKNsL2hx',
        {
            name: 'Degen Boyz Dao #5182 NFT',
        },
    ],
    [
        'CaJCsAMfiigVSYBAxVX2HPQKAWejrEphuYeWzneiUxGA',
        {
            name: '3 OG Chef Free Mint Tokens',
            overviewImageUri: 'mk.jpeg',
        },
    ],
    [
        '7dMCWd7u7rebeXYigyqhTVx6Knwb27BU2UA2hoUMstem',
        {
            name: 'Degen Boyz Dao #5509 NFT',
        },
    ],

]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
