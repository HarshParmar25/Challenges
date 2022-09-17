function setOffsetLimit(offset: string, limit: string): string {
  let sql = "";
  if (offset && limit) {
    sql = `LIMIT ${offset}, ${limit}`;
  } else if (limit) {
    sql = `LIMIT ${limit}`;
  }
  return sql;
}
export { setOffsetLimit };
