export const getThemeClass = (condition, trueClass, falseClass) => {
  return condition ? trueClass : falseClass;
};

export const getThemeColor = (isHackerMode) => {
  return isHackerMode ? 'emerald' : 'blue';
};
