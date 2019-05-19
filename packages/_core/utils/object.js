const compare = (o1, o2) => JSON.stringify(o1) === JSON.stringify(o2)

const getTruthyKeys = obj =>
    Object.entries(obj)
        .map(([key, value]) => (value ? key : null))
        .filter(value => value)

export { compare, getTruthyKeys }
