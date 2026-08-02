export function removeSign(value: string | undefined): number {
  if (!value) return 0;
  return parseFloat(value.replace(/[^\d.-]/g, ""));
}