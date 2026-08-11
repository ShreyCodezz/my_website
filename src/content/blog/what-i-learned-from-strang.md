---
title: "what i learned from strang"
description: "learnings from linear algebra by gilbert strang"
date: "2026-08-11"
tags: ["maths"]
---

book -> linear algebra and its applications\
link -> https://link.amazon/B06TM7abJ

## Chapter 1 — Matrices and Gaussian Elimination

The first chapter begins by introducing systems of linear equations.

We start with **n equations in n variables** and gradually develop the ideas of Gaussian elimination and determinants.

Making its way towards elimination and determinants.

$$
\det(A) =
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
= ad-bc
$$


### Types of solutions

**One solution** — the equations intersect at exactly one point.\
**No solution** — the equations are inconsistent.\
**Infinitely many solutions** — the equations describe the same geometric object (or, more generally, there are free variables).


### Geometry of Linear Equations

Now let's look at linear equations geometrically.

Consider the system:

$$
\begin{aligned}
2x+3y &= 5\
4x-y &= 6
\end{aligned}
$$

Each equation represents a **line** in the $xy$-plane.

The first equation,

$$
2x+3y=5
$$

can be written as

$$
y=-\frac{2}{3}x+\frac{5}{3}
$$

and the second,

$$
4x-y=6
$$

can be written as

$$
y=4x-6
$$

So instead of thinking about these only as algebraic equations, we can think of them as **two lines**.

Their solution is the point where the two lines intersect.

For this system, the two lines intersect at exactly one point, so the system has **one solution**.

This gives us a nice geometric interpretation of the three possible types of solutions:

* **One solution:** the lines intersect at one point.
* **No solution:** the lines are parallel and never intersect.
* **Infinitely many solutions:** both equations represent the same line.

### Matrix Multiplication

Before getting into Gaussian elimination, we first need to understand **matrix multiplication**.

Suppose we have a matrix $A$ and a vector $\mathbf{x}$:

$$
A=
\begin{bmatrix}
2 & 3\\
4 & -1
\end{bmatrix},
\qquad
\mathbf{x}=
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

When we multiply them,

$$
A\mathbf{x}
===========

\begin{bmatrix}
2 & 3\\
4 & -1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

we multiply each **row of $A$** with the **column vector $\mathbf{x}$**:

$$
A\mathbf{x}
===========

\begin{bmatrix}
2x+3y\\
4x-y
\end{bmatrix}
$$

So the system

$$
\begin{aligned}
2x+3y &= 5\\
4x-y &= 6
\end{aligned}
$$

can be written much more compactly as

$$
A\mathbf{x}=\mathbf{b}
$$

where

$$
A=
\begin{bmatrix}
2 & 3\\
4 & -1
\end{bmatrix},
\qquad
\mathbf{x}=
\begin{bmatrix}
x\\
y
\end{bmatrix},
\qquad
\mathbf{b}=
\begin{bmatrix}
5\\
6
\end{bmatrix}
$$

This is one of the main reasons matrix multiplication is so important: **a whole system of linear equations can be represented as one matrix equation.**

### The Row-Column Rule

For general matrices, each entry of the product comes from taking the **dot product of a row from the first matrix with a column from the second matrix**.

If

$$
A_{m\times n}B_{n\times p}=C_{m\times p}
$$

then the entry $c_{ij}$ is

$$
c_{ij}=
\sum_{k=1}^{n}a_{ik}b_{kj}
$$

In simple terms:

**row × column = one entry of the answer.**

This rule is the foundation of matrix multiplication and will become especially useful when we start thinking about matrices as transformations and linear equations.

### Triangular Factors and Row Exchange

After understanding matrix multiplication, we can look at what happens during **Gaussian elimination**.

The main goal of elimination is to turn the matrix into an **upper triangular matrix**.

Consider

$$
A=
\begin{bmatrix}
2 & 3\\
4 & -1
\end{bmatrix}
$$

We can eliminate the entry below the first pivot using

$$
R_2 \rightarrow R_2-2R_1
$$

which gives

$$
U=
\begin{bmatrix}
2 & 3\\
0 & -7
\end{bmatrix}
$$

This matrix is called **upper triangular** because all the entries below the main diagonal are zero.

### Triangular Factorization

The elimination process can also be written as a matrix factorization.

For this example,

$$
A=
\begin{bmatrix}
2 & 3\\
4 & -1
\end{bmatrix}
$$

can be written as

$$
A=LU
$$

where

$$
L=
\begin{bmatrix}
1 & 0\\
2 & 1
\end{bmatrix}
$$

and

$$
U=
\begin{bmatrix}
2 & 3\\
0 & -7
\end{bmatrix}
$$

Multiplying them gives

$$
LU=
\begin{bmatrix}
1 & 0\\
2 & 1
\end{bmatrix}
\begin{bmatrix}
2 & 3\\
0 & -7
\end{bmatrix}
=============

\begin{bmatrix}
2 & 3\\
4 & -1
\end{bmatrix}
=A
$$

So Gaussian elimination can be viewed not only as a sequence of row operations, but also as a way of factoring a matrix into

$$
\boxed{A=LU}
$$

where $L$ is **lower triangular** and $U$ is **upper triangular**.

### Row Exchange

Sometimes elimination cannot continue normally because the next pivot is zero.

For example,

$$
A=
\begin{bmatrix}
0 & 2\\
3 & 4
\end{bmatrix}
$$

The first pivot is $0$, so we cannot use it to eliminate the entry below it.

In this situation, we can **exchange the two rows**:

$$
R_1 \leftrightarrow R_2
$$

giving

$$
\begin{bmatrix}
3 & 4\\
0 & 2
\end{bmatrix}
$$

Now elimination can continue normally.

This is called a **row exchange** or **row interchange**.

Row exchanges are important because they allow Gaussian elimination to continue when a pivot is zero. In larger matrices, they are also used to choose better pivots and improve numerical stability.

### Inverses and Transposes

### Matrix Inverse

We know that for a number $a$, multiplying by its inverse gives $1$:

$$
a\cdot\frac{1}{a}=1
$$

Matrices have a similar idea.

For a square matrix $A$, its inverse is written as $A^{-1}$ and satisfies

$$
AA^{-1}=A^{-1}A=I
$$

where $I$ is the **identity matrix**.

For a $2\times2$ matrix,

$$
A=
\begin{bmatrix}
a & b\\
c & d
\end{bmatrix}
$$

the inverse is

$$
A^{-1}
======

\frac{1}{ad-bc}
\begin{bmatrix}
d & -b\\
-c & a
\end{bmatrix}
$$

provided that

$$
ad-bc\neq0
$$

Notice that $ad-bc$ is exactly the **determinant** of $A$.

This gives an important connection:

$$
\det(A)\neq0
\quad\Longrightarrow\quad
A^{-1}\text{ exists}
$$

while

$$
\det(A)=0
\quad\Longrightarrow\quad
A^{-1}\text{ does not exist}
$$

### Inverse and Linear Equations

The inverse becomes particularly useful when solving

$$
A\mathbf{x}=\mathbf{b}
$$

If $A^{-1}$ exists, we can multiply both sides by $A^{-1}$:

$$
A^{-1}A\mathbf{x}=A^{-1}\mathbf{b}
$$

Since

$$
A^{-1}A=I
$$

we get

$$
\mathbf{x}=A^{-1}\mathbf{b}
$$

So the inverse gives us another way of thinking about the solution of a system of linear equations.

---

### Matrix Transpose

The **transpose** of a matrix is obtained by switching its rows and columns.

If

$$
A=
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6
\end{bmatrix}
$$

then its transpose, written as $A^T$, is

$$
A^T=
\begin{bmatrix}
1 & 4\\
2 & 5\\
3 & 6
\end{bmatrix}
$$

So a $2\times3$ matrix becomes a $3\times2$ matrix after transposing.

In general,

$$
(A^T)*{ij}=A*{ji}
$$

One useful property is that the transpose reverses the order of multiplication:

$$
(AB)^T=B^TA^T
$$

This will become important later when working with vectors, inner products, symmetric matrices, and many other ideas in linear algebra.

And that's where Chapter 1 — Matrices and Gaussian Elimination comes to an end.
