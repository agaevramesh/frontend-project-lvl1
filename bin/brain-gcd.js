#!/usr/bin/env node
import { helloName, repeatFunc } from '../src/index.js';
import gcdBrain from '../games/brain-gcd.js';

repeatFunc(helloName(), gcdBrain);
