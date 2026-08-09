---
title: "focus-cli"
description: "a productivity tool"
date: 2026-06-09
tags: ["Python"]
---

# why i built focus cli

## the problem

I spend most of my day in a terminal. Every time I wanted to time-box a study or coding session, I had to break that flow — open a browser tab, launch some bloated app with a UI I didn't ask for, or dig out my phone (and immediately get distracted by it). None of that matched how I actually work.

Most existing timer tools fall into one of two camps:

- **Too heavy** — Electron apps, browser extensions, or full GUI programs that pull focus away from the terminal, load slowly, and want accounts, syncing, and settings menus for something as simple as "count down 25 minutes."
- **Too graphical / too distracting** — Pomodoro apps covered in animations, notifications, and gamified streak badges. Ironically, tools meant to help you focus end up being the thing that breaks your focus.

I wanted something that respected the terminal-first workflow I already live in, and that got out of the way once it was running.

## the idea

`focus-cli` started from a simple constraint: **a focus timer should feel like part of the shell, not an app bolted onto it.**

That meant:

- No GUI. No browser. Just a command.
- Minimal, readable terminal output — nothing flashy, nothing that competes for attention.
- Data stays on my machine. No accounts, no cloud sync, no telemetry.
- If something optional (like ambient audio) isn't available, the tool shouldn't crash — it should just quietly skip it and keep working.

This is also just an extension of how I already set up my system — I run Arch with Hyprland, and I generally prefer lightweight, composable tools over heavyweight ones with a lot of hidden behavior. `focus-cli` is that same philosophy applied to something I use daily: sitting down and actually doing the work.

## what it's for

Practically, I built this for the sessions where I need to:

- Sit down and grind through a CP problem set or a coding project without checking the clock every five minutes.
- Structure study blocks with real breaks instead of losing time to open-ended "I'll just work until I feel like stopping."
- See, at a glance, whether I actually kept a streak going — not for the dopamine hit of a badge, but as an honest record of whether deep work happened that day.

## design priorities

In rough order:

1. **Stay out of the way.** The timer should run, and I should be able to forget it's running until it's done.
2. **Fail gracefully.** Missing audio files or a broken data file shouldn't take down the whole tool — it should degrade, not crash.
3. **Keep it simple to read and contribute to.** No unnecessary abstraction. Someone should be able to open the source and understand the whole flow in one sitting.
4. **Local-first.** My focus data is mine. It lives in a file on my disk, not on someone else's server.

## what this project is not

- It's not trying to replace full productivity suites or task managers.
- It's not gamified — no points, no leaderboard, no streak-shaming.
- It's not trying to be configurable to the point of complexity. A `--silent` flag and a break timer cover most of what's actually needed.

## closing thought

`focus-cli` is less about building "a timer" and more about building a tool that matches how I actually want to work: terminal-native, quiet, local, and honest. It's a small project, but it's one I use every day — which, to me, is the real test of whether something was worth building.
