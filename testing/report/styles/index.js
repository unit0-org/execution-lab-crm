import { tokens } from './tokens.js';
import { layout } from './layout.js';
import { badges } from './badges.js';
import { storyCard } from './storyCard.js';
import { behaviourList } from './behaviourList.js';
import { logs } from './logs.js';
import { evidence } from './evidence.js';

const sheets = [
  tokens,
  layout,
  badges,
  storyCard,
  behaviourList,
  logs,
  evidence
];

export const reportStyles = `<style>${sheets.join('')}</style>`;
