---
title: "A small math note"
description: "Testing KaTeX rendering on the site."
date: 2025-12-20
tags: ["maths", "intro"]
---

Math should render inline like Euler's identity $e^{i\pi} + 1 = 0$, and as
display blocks too:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

A matrix example:

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix}
$$

And a derivation from the chain rule:

$$
\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot g'(x)
$$

That should be enough to confirm it's working in both light and dark themes.