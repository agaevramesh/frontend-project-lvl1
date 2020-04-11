#!/usr/bin/env node
import { helloName, repeatFunc } from '../src/index.js';
import calcBrain from '../games/brain-calc.js';

repeatFunc(helloName(), calcBrain);
