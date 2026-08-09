---
title: "f1 telemetry project"
description: "f1 telemetry"
date: 2026-05-17
tags: ["Python", "Matplotlib", "FastF1", "Pandas"]
---

## what it does

Pulls session data (practice, qualifying, race) via the FastF1 API and builds
comparison views between drivers or laps — throttle/brake traces, speed
deltas by corner, and sector-time breakdowns.

Under the hood, FastF1 hands back timing data, car telemetry (speed, throttle,
brake, gear, RPM, DRS), and lap-level metadata at a fairly high sampling rate.
The project takes that raw stream and aligns it by distance rather than time,
so two different laps — even from different drivers or different sessions —
can be overlaid meaningfully. From there it's mostly Pandas: resampling,
merging driver traces on a common distance axis, computing rolling deltas,
and slicing laps into sectors and corners so the comparisons aren't just
"driver A vs driver B" in the abstract but "driver A vs driver B, corner 7."

The first real version of this was a qualifying comparison script — pulling a
session, picking two drivers, and plotting throttle/brake traces stacked
against the speed-delta line so you can see exactly where one driver is
carrying more speed or braking later. It started rough (a hardcoded season
year, no real validation if a driver code didn't exist in that session, and
file paths that weren't portable across machines), and cleaning those up
was as much a part of the learning process as the telemetry work itself.

## why i built it

I wanted a reason to get properly comfortable with Pandas beyond toy datasets,
and F1 telemetry is a genuinely rich time-series problem: high-frequency
sensor data, session-to-session comparisons, and real questions to answer
("where exactly did driver A lose time to driver B?").

There's also a more specific motivation underneath that: I'm interested in F1
from the engineering side, not just as a fan. Race engineers and performance
analysts are constantly doing exactly this kind of comparative telemetry work
— pulling traces, overlaying laps, isolating where time is won or lost — just
at a scale and with tooling I don't have access to. Rebuilding a small,
honest version of that workflow with public data was a way to actually
practice the skill instead of just reading about it. It's the same instinct
that got me into FastF1 in the first place: if I want to move toward
performance/data engineering in motorsport, I should be able to point at
something I built that does a real version of that job, not just a tutorial
project with a dataset swapped in.

It also turned out to be a good forcing function for thinking in vectorized
terms instead of loops — corner-by-corner analysis on lap data pushed me to
actually use groupby, merge_asof, and rolling windows properly instead of
working around them.

## what's next

- Clean up the plotting layer so it's reusable across sessions without
  rewriting boilerplate each time — right now a lot of the matplotlib setup
  (axes, labels, driver-color mapping) gets duplicated per script
- Add a simple corner-by-corner delta view that summarizes time gained/lost
  per corner instead of just eyeballing it off the speed trace
- Package it so it's easy to point at any session and get a report — ideally
  a single command that takes a year, event, session type, and driver codes,
  and spits out a saved comparison report
- Longer term: tire degradation views across a stint, and a rough strategy
  simulation layer, both of which were on the original project idea list but
  didn't make it into this first version
