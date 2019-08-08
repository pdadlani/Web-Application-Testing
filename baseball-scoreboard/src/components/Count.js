import React from 'React';

export const strike = (currentState) => {
  if (currentState + 1 >= 3) {
    return 0
  } else {
    return currentState + 1
  }
}

export const ball = (currentState) => {
  if (currentState + 1 >= 4) {
    return 0
  } else {
    return currentState + 1
  }
}

export const foul = (currentState) => {
  if (currentState + 1 >= 2) {
    return 2
  } else {
    return currentState + 1
  }
}