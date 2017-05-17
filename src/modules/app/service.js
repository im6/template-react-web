const privateFn = {
  test: 123,
  getWhoteRoute(r) {
    const a = r.reduce((accumulator, currentValue) => accumulator + (currentValue.path || ''), '');
    return a;
  },
};

const output = {
  compareRoutes(r1, r2) {
    const r1str = privateFn.getWhoteRoute(r1);
    const r2str = privateFn.getWhoteRoute(r2);
    return r1str === r2str;
  },
};

export default output;
