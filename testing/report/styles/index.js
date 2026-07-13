import { tokens } from './tokens.js';
import { layout } from './layout.js';
import { badges } from './badges.js';
import { storyCard } from './storyCard.js';
import { behaviourList } from './behaviourList.js';

const sheets = [tokens, layout, badges, storyCard, behaviourList];

export const reportStyles = `<style>${sheets.join('')}</style>`;
