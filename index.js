#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Input = require('./lib/input');
const Notes = require('./lib/notes');
const { Console } = require('console');

const input = new Input();
const notes = new Notes();

input.valid() ? notes.execute(input.command) : console.log('error');

