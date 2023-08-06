export default function cutDescription(text: string): string {
  return `${ text.slice(0, 250) }${ text.length > 100 ? '...' : '' }`;
}