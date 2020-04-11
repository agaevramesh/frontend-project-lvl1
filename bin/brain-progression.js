#!/usr/bin/env node
import { helloName, repeatFunc } from '../src/index.js';
import progressionBrain from '../games/brain-progression.js';

repeatFunc(helloName(), progressionBrain);
