 const createUrl = (title) =>
    title
      .toLowerCase()
      .replace(/’|'/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

export default createUrl;