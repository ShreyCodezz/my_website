---
title: "F1 Race Analyzer"
description: "How i used fastf1 to analyze the race pace of two drivers in a race"
date: 2026-05-17
tags: ["Python", "Matplotlib", "FastF1", "Pandas"]
---

## What it does

Pulls Formula 1 race session data using the FastF1 API and compares the lap-time performance of two drivers. The project loads historical race data, filters valid and representative quick laps, calculates average lap times, and identifies which driver was faster on average.

Using Pandas, it processes lap-level timing data into a simple comparison table. Matplotlib is used to visualize lap times against lap numbers, making it easier to spot pace differences and variations throughout a race. The project also uses FastF1's caching functionality to avoid repeatedly downloading the same session data.

The first version focuses on comparing drivers such as Max Verstappen and Charles Leclerc in a selected Grand Prix. It is built in a Jupyter Notebook, with dependencies managed through `uv`, making the analysis easy to run, experiment with, and extend.

## Why I built it

I wanted to work with real Formula 1 data instead of relying on toy datasets, while getting more comfortable with Python, Pandas, and data visualization.

F1 lap timing data provides an interesting way to practice data analysis because even a simple comparison involves filtering records, handling missing lap times, converting timedeltas into numerical values, and interpreting differences between drivers.

I'm also interested in the engineering and data-analysis side of motorsport. This project is an initial step toward understanding how driver performance can be studied using real session data rather than just race results or finishing positions.

Building it in a Jupyter Notebook gave me the opportunity to explore the data step by step, inspect the results, and visualize pace differences. Using `uv` to manage dependencies also helped me practice setting up a reproducible Python project.

## What's next

- **Telemetry comparison:** Extend the project to compare speed, throttle, braking, gear, and RPM traces between drivers.
- **Interactive visualizations:** Add interactive charts to explore lap times and driver comparisons more easily.
- **Tyre analysis:** Compare lap times across tyre compounds and investigate how pace changes over a stint.
- **Sector analysis:** Break down performance by sector to identify where drivers gain or lose time.
- **Reusable project structure:** Move reusable analysis functions into Python modules and make the project configurable for different seasons, events, and session types.
- **Automated reports:** Generate saved race-analysis reports with driver statistics, plots, and key performance comparisons.

The current version is a foundation for a more detailed F1 performance-analysis tool, starting with lap-time comparisons and gradually moving toward telemetry and race-strategy analysis.
