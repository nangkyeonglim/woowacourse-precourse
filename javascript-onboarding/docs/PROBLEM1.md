## ๐ ๊ธฐ๋ฅ ์๊ตฌ ์ฌํญ

ํฌ๋น์ ํฌ๋กฑ์ด ํ์ด์ง ๋ฒํธ๊ฐ 1๋ถํฐ ์์๋๋ 400 ํ์ด์ง์ ์ฑ์ ์ฃผ์ ๋ค. ์ฑ์ ์ดํด๋ณด๋ ์ผ์ชฝ ํ์ด์ง๋ ํ์, ์ค๋ฅธ์ชฝ ํ์ด์ง๋ ์ง์ ๋ฒํธ์ด๊ณ  ๋ชจ๋  ํ์ด์ง์๋ ๋ฒํธ๊ฐ ์ ํ์์๋ค. ์ฑ์ด ๋ง์์ ๋  ํฌ๋น์ ํฌ๋กฑ์ ํ์ด์ง ๋ฒํธ ๊ฒ์์ ํตํด ๊ฒ์์์ ์ด๊ธด ์ฌ๋์ด ์ฑ์ ๊ฐ๊ธฐ๋ก ํ๋ค. ํ์ด์ง ๋ฒํธ ๊ฒ์์ ๊ท์น์ ์๋์ ๊ฐ๋ค.

1. ์ฑ์ ์์๋ก ํผ์น๋ค.
2. ์ผ์ชฝ ํ์ด์ง ๋ฒํธ์ ๊ฐ ์๋ฆฌ ์ซ์๋ฅผ ๋ชจ๋ ๋ํ๊ฑฐ๋, ๋ชจ๋ ๊ณฑํด ๊ฐ์ฅ ํฐ ์๋ฅผ ๊ตฌํ๋ค.
3. ์ค๋ฅธ์ชฝ ํ์ด์ง ๋ฒํธ์ ๊ฐ ์๋ฆฌ ์ซ์๋ฅผ ๋ชจ๋ ๋ํ๊ฑฐ๋, ๋ชจ๋ ๊ณฑํด ๊ฐ์ฅ ํฐ ์๋ฅผ ๊ตฌํ๋ค.
4. 2~3 ๊ณผ์ ์์ ๊ฐ์ฅ ํฐ ์๋ฅผ ๋ณธ์ธ์ ์ ์๋ก ํ๋ค.
5. ์ ์๋ฅผ ๋น๊ตํด ๊ฐ์ฅ ๋์ ์ฌ๋์ด ๊ฒ์์ ์น์๊ฐ ๋๋ค.
6. ์์ ๋ฉด์ด๋ ๋ง์ง๋ง ๋ฉด์ด ๋์ค๋๋ก ์ฑ์ ํผ์น์ง ์๋๋ค.

ํฌ๋น์ ํฌ๋กฑ์ด ํผ์น ํ์ด์ง๊ฐ ๋ค์ด์๋ ๋ฐฐ์ด pobi์ crong์ด ์ฃผ์ด์ง ๋, ํฌ๋น๊ฐ ์ด๊ธด๋ค๋ฉด 1, ํฌ๋กฑ์ด ์ด๊ธด๋ค๋ฉด 2, ๋ฌด์น๋ถ๋ 0, ์์ธ์ฌํญ์ -1๋ก return ํ๋๋ก solution ๋ฉ์๋๋ฅผ ์์ฑํ๋ผ.

### ์ ํ์ฌํญ

- pobi์ crong์ ๊ธธ์ด๋ 2์ด๋ค.
- pobi์ crong์๋ [์ผ์ชฝ ํ์ด์ง ๋ฒํธ, ์ค๋ฅธ์ชฝ ํ์ด์ง ๋ฒํธ]๊ฐ ์์๋๋ก ๋ค์ด์๋ค.

### ์คํ ๊ฒฐ๊ณผ ์์

| pobi       | crong      | result |
| ---------- | ---------- | ------ |
| [97, 98]   | [197, 198] | 0      |
| [131, 132] | [211, 212] | 1      |
| [99, 102]  | [211, 212] | -1     |

### ๐จ ๊ธฐ๋ฅ ๋ชฉ๋ก

- ํ์ด์ง ๋ฒํธ์ ๊ฐ ์๋ฆฌ์๋ฅผ ๋ํ๋ ๊ธฐ๋ฅ
- ํ์ด์ง ๋ฒํธ์ ๊ฐ ์๋ฆฌ์๋ฅผ ๊ณฑํ๋ ๊ธฐ๋ฅ
- ์ผ์ชฝ ํ์ด์ง์ ๊ณฑ๊ณผ ํฉ, ์ค๋ฅธ์ชฝ ํ์ด์ง์ ๊ณฑ๊ณผ ํฉ์ ์ ์ค ๊ฐ์ฅ ํฐ ์๋ฅผ ๊ตฌํ๋ ๊ธฐ๋ฅ
- ์ ์๋ฅผ ๋น๊ตํ์ฌ ์น์๋ฅผ ๊ตฌํ๋ ๊ธฐ๋ฅ
- ํ์ด์ง ๋ฒํธ์ ์ ํจ์ฑ์ ๊ฒ์ฌํ๋ ๊ธฐ๋ฅ
    - 1~400๊น์ง์ ํ์ด์ง ๋ฒ์ ์ธ๊ฐ
    - ์ฐ์๋ ํ์ด์ง์ธ๊ฐ
  