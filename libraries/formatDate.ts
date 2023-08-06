export default function formatDateString(date: string): string {
  const dateFmt = new Date(date);
  const [dateNumber, monthNumber, yearNumber] = [
    dateFmt.getDate() < 10 ? `0${ dateFmt.getDate() }` : `${ dateFmt.getDate() }`,
    (dateFmt.getMonth() + 1) < 10 ? `0${ dateFmt.getMonth() + 1 }` : `${ dateFmt.getMonth() + 1 }`,
    `${ dateFmt.getFullYear() }`
  ];
  return `${ dateNumber } - ${ monthNumber } - ${ yearNumber }`;
}