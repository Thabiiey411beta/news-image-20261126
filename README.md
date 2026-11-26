# The World — Thursday 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/Thabiiey411beta/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/Thabiiey411beta/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One image summing up the world's news of **Thursday 26 November 2026**, built
for the make.fun bounty
[news-image-20261126](https://make.fun/bounty/news-image-20261126), using the
winner-style template (45 dated, sourced, verification-labelled stories —
the first entry on the upgraded 45-story layout).

## What the page shows

- **Lead — Hormuz tankers ablaze:** two supertankers carrying over 4 million
  barrels catch fire after striking mines in the Strait of Hormuz.
- **Riyadh — Houthi missiles intercepted:** the Saudi-led coalition says it
  stopped ballistic missiles aimed at Riyadh as a blast rocks Sanaa.
- **Cairo — 31 killed:** a fuel tanker overturns and burns on the ring road,
  the day's deadliest single incident.
- **Trade — US tariffs:** Washington unveils tariffs on 14 partners; Brazil
  calls them "unacceptable" and the EU, Japan and Singapore push back.
- **Markets — Bitcoin $60,877 (+3.2%):** gold $3,598 (+3.8%), Brent $95.29
  (+0.89%) on Hormuz supply fears; S&P 500 7,182.78 (−0.25%), US markets
  closed for Thanksgiving.
- **Sport — Champions League:** Liverpool rout Club Brugge 3-0, Lille stun
  Bayern 2-1, PSG held 2-2 by Roma; South Africa thrash Bangladesh in the
  Centurion Test; the World Chess Championship is tied 1-1.

## How it was built

- `stories.json` — all 45 stories, researched from named outlets on the day,
  each with a place, region, source and verification label (CONFIRMED /
  OFFICIAL / REPORTED / CLAIM). The date-check strip names the stories left
  out because they happened on an earlier day.
- `entry.png` — the 1024×1024 front page, rendered from `stories.json`
  with the template renderer (build-time tool, not shipped here).
- `main.ts` — ships `entry.png` byte-for-byte, with PNG-magic, 1 MiB and
  1024×1024 IHDR guards plus an IEND-trailer check.

## Verify

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
