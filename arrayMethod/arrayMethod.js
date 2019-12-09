const arrayMethod = objectArray => {
  return objectArray
    .filter(object => object.firstName.length < 5)
    .reduce((object, { firstName }) => {
      return {
        ...object,
        [firstName]: firstName.length
      };
    }, {});
};

module.exports = arrayMethod;
