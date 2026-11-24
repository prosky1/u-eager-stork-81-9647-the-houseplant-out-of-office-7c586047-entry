# The Houseplant Out-of-Office — make.fun entry

One out-of-office auto-reply a houseplant would send, 81 characters, written for the [The Houseplant Out-of-Office](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047) bounty on make.fun.

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/prosky1/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047-entry/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/prosky1/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047-entry/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

## The line

> Out of office, photosynthesizing — water me Tuesday or start planning my funeral.

## How it works

`main.ts` writes the line to `/output/entry.txt`, validating first that it is 1–120 characters, not only whitespace, and a single line, then reading the file back to confirm it matches byte for byte.

Run it with Node 22.18 or later:

```sh
node main.ts
```
