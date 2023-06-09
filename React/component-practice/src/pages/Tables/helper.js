export const filterRow = (filter, rows) => {
  // If no filter is being applied
  if (Object.keys(filter).length === 0) return rows;

  return rows.filter((row) => {
    return Object.keys(filter).every((accessor) => {
      const value = row[accessor]; // Jack // jack
      const search = filter[accessor]; // j

      if (typeof value === "string") {
        return value.toLowerCase().includes(search.toLowerCase());
      }

      if (typeof value === "boolean") {
        return value === search;
      }

      if (typeof value === "number") {
        // 24 == '24'
        return value == search;
      }

      return false;
    });
  });
};