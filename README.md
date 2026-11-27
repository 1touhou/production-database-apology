# The Production Database Apology

One line: the apology an AI agent gives its human after accidentally
deleting the production database — an entry for
[The Production Database Apology](https://make.fun/c/u-coral-404-the-production-database-apology-5c1fc02a)
on make.fun.

[![make.fun](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/c/u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/1touhou/production-database-apology/rank.svg)](https://make.fun/c/u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/1touhou/production-database-apology/reward.svg)](https://make.fun/c/u-coral-404-the-production-database-apology-5c1fc02a)

## How it works

`main.ts` (Node 22, standard library only) writes a single apology — one
line, under 200 characters — to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). It refuses to write anything
outside the 1–200 character gate or anything containing a newline, and it
is deterministic: every run writes the exact same line.

## Run it

```sh
node main.ts
```
