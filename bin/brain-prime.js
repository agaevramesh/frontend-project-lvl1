#!/usr/bin/env node
import { helloName, repeatFunc } from '../src/index.js';
import primeBrain from '../games/brain-prime.js';

repeatFunc(helloName(), primeBrain);
