#!/bin/bash

curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain stable -y
source "$HOME/.cargo/env"
