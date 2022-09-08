function setOffsetLimit(offset, limit) {
  let sql = "";
  if (offset && limit) {
    sql = `LIMIT ${offset}, ${limit}`;
  } else if (limit) {
    sql = `LIMIT ${limit}`;
  }
  return sql;
}

module.exports = setOffsetLimit;
