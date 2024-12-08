
## Problem 1:
The indexes of static cards (TODO, Doing, Done) were 0, 1, 2. When mapping the indexes for dynamic cards, they were starting directly from 0, which caused an index conflict and led to drop events being triggered on the wrong cards.

Solution: I started the indexes for the dynamic cards with an offset from the static cards (index + 3), so that the indexes for static (0, 1, 2) and dynamic cards (3, 4, ...) are separate.

## problem 2:
