#!/usr/bin/env node
'use strict';

const Input = require('./lib/input');
const Notes = require('./lib/notes');
const { Console } = require('console');

const newNote = new Input();
new Notes(newNote);

