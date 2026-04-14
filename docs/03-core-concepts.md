# Core Concepts

## Ownership

Every value has an owner.
When ownership moves, the previous binding can no longer use the value.

The key lesson:

- understand who owns data
- understand how long it should live
- avoid cloning blindly just to silence errors

## Borrowing

Borrowing lets you use data without taking ownership.

Important rules:

- many immutable references are allowed
- only one mutable reference is allowed at a time
- mutable and immutable references cannot overlap unsafely

## Lifetimes

At first, lifetimes feel abstract.
In practice, they describe how long references remain valid.

You do not need to master advanced lifetime syntax on day one.
You do need to understand that references cannot outlive the data they point to.

## Enums and Pattern Matching

Rust makes enums far more powerful than in many other languages.
They are a core modeling tool, not just named constants.

## Option and Result

These are central to idiomatic Rust.

- `Option<T>` models absence
- `Result<T, E>` models fallible operations

Instead of hiding failure, Rust encourages you to model it explicitly.

## Traits

Traits define shared behavior.
They are foundational for abstraction, extension, and reusable APIs.

## Compiler Feedback

A major skill in Rust is learning to read compiler errors as guidance rather than punishment.
The compiler often tells you more than it first appears to.
