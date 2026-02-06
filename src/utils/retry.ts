export async function retry(fn: any, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch {
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw new Error("Failed after retries");
}
