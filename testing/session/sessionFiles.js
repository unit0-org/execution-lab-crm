import { join } from 'node:path';
import { resultsDir } from '../config/paths.js';

export const sessionDir = join(resultsDir, 'sessions');

export const STAFF_SESSION = join(sessionDir, 'staff.json');
