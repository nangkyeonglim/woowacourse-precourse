# 기능 목록

- 게임 시작 멘트를 출력한다.
- 현재 이동 상태를 출력한다.
- 다리의 길이를 입력한다.
  - 예외사항: 숫자가 아닌 값을 입력하는 경우
  - 예외사항: 3 이상 20 이하가 아닌 경우
- 이동한 칸을 입력한다.
  - 예외사항: 'U'이나 'D'이 아닌 경우
- 게임 재시도 여부를 입력한다.
  - 예외사항: 'R'이나 'Q'이 아닌 경우
- 입력된 길이만큼의 다리를 생성한다.
  - 랜덤 난수 생성기로 0이나 1을 생성한다.
  - 0은 아래 칸('D'), 1은 위 칸('U')으로 다리를 생성한다.
- 입력된 방향이 정답인지 아닌지 확인한다.
- 이동한 다리 결과를 업데이트한다.
- 현재 다리 상태를 출력한다.
- 정답인 경우
  - 다리를 끝까지 건넜는지 확인한다.
  - 끝까지 건넌 경우 게임 결과를 출력하고 종료한다.
  - 끝까지 건너지 않은 경우 다리 현재 위치를 한 칸을 이동한다.
  - 한 칸 이동 후 칸을 다시 입력받는다.
- 오답인 경우
  - 게임 재시도 여부를 받아온다.
    - 재시도 시 처음에 만든 다리로 재사용한다.
    - 시도 횟수가 1 증가한다.
    - 다리 현재 위치를 처음으로 옮긴다.
    - 이동할 칸을 입력받는다
  - 게임이 끝나면 최종 결과를 출력한다.
    - 정답 다리 상태를 출력한다.
    - 게임 성공 여부를 출력한다.
    - 총 시도한 횟수를 출력한다.
- 사용자가 잘못된 값을 입력한 경우 `throw`문을 사용해 예외를 발생시키고, "[ERROR]"로 시작하는 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.
