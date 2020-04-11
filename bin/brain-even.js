#!/usr/bin/env node
import { helloName, repeatFunc } from '../src/index.js';
import evenBrain from '../games/brain-even.js';

repeatFunc(helloName(), evenBrain);
