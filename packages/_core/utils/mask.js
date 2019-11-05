const format = (value, mask) =>
    mask.reduce((newValue, [REGEX_INDEX, GROUP_INDEX]) => newValue.replace(REGEX_INDEX, GROUP_INDEX), value.replace(/[\\.\-\\/]/g, ''))

export { format }
