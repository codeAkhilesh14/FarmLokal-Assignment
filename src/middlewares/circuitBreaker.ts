let failures = 0;

export const circuitBreaker = async (fn: Function) => {
  try {
    const result = await fn();
    failures = 0;
    return result;
  } catch (err) {
    failures++;

    if (failures > 5) {
      throw new Error("Service unavailable - Circuit Open");
    }

    throw err;
  }
};
