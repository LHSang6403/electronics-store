export async function waiting(time: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, time));
}
