function solution(wallpaper) {
  // 파일의 y좌표를 저장할 배열 선언
  const yCoordinates = [];
  // 파일의 x좌표를 저장할 배열 선언
  const xCoordinates = [];

  // 이중 반복문을 사용하여 wallpaper 내의 파일의 위치를 찾습니다.
  for (let row = 0; row < wallpaper.length; row++) {
    for (let col = 0; col < wallpaper[row].length; col++) {
      // "#"인 경우 파일이 있는 위치이므로 좌표를 저장합니다.
      if (wallpaper[row][col] === "#") {
        yCoordinates.push(row);
        xCoordinates.push(col);
      }
    }
  }

  // 찾은 좌표 값을 오름차순으로 정렬합니다.
  xCoordinates.sort((a, b) => a - b);
  yCoordinates.sort((a, b) => a - b);

  // 최소 크기의 드래그 영역을 나타내는 배열 [startY, startX, endY, endX] 반환
  return [yCoordinates[0], xCoordinates[0], yCoordinates[yCoordinates.length - 1] + 1, xCoordinates[xCoordinates.length - 1] + 1];
}