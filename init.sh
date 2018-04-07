#!/bin/bash
cd blockchains
truffle compile --all
truffle migrate --reset
cd ..
node fake.js
node remote.js