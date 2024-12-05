
## Problem 1:
Static cards (TODO, Doing, Done) ke indexes 0, 1, 2 the. Dynamic cards ka index map karte waqt directly 0 se start kar rahe the, is wajah se index conflict ho raha tha, aur drop events galat cards par trigger ho rahe the.

Solution:
Dynamic cards ke indexes ko static cards ke baad offset karke shuru kiya (index + 3), taaki static (0, 1, 2) aur dynamic cards (3, 4, ...`) ke indexes alag-alag ho jayein.

## problem 2: