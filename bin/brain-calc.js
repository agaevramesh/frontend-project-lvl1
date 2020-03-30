#!/usr/bin/env node
import { helloName, calcBrain, repeatFunc } from '../src/index.js';

repeatFunc(helloName(), calcBrain);
