export function differenceBeetwenTimesInMinutes(from: number, to: number) {
  const fromMinutes = from / 60;
  const toMinutes = to / 60;

  if (fromMinutes < toMinutes) {
    return toMinutes - fromMinutes;
  }

  return fromMinutes - toMinutes;
}
