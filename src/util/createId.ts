/* n자리수 랜덤 숫자 id를 만들어주는 함수 */
export function generateId(digit: number) {
  const id = Math.floor(Math.random() * 10 ** digit);
  return id;
}
