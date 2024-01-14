export function generateTimestampz() {
  const currentDatetime = new Date();
  const timestampz = currentDatetime.toISOString();
  return timestampz;
}
