export const buyCake = (numberOfCakes) => (
  { type: 'BUY_CAKE', payload: numberOfCakes }
)

export const sellCake = (numberOfCakes) => (
  { type: 'SELL_CAKE', payload: numberOfCakes }
)