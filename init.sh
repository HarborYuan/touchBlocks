#!/bin/bash
cd blockchains
truffle compile --reset
truffle migrate --all
cd ..