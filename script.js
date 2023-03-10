'use strict'
{
  let word; //ローマ字
  let math = 0; //random
  let mathOk = 0; //かぶりのない数字
  let count = -1; //正解単語数
  let index = 0; //ローマ字のindex
  let time = 40; //制限時間
  let random = []; //数字を入れる配列
  let a = 0; //キーが押された回数

  const saying = document.querySelector('#saying');
  const meaning = document.querySelector('#meaning');
  const roman = document.querySelector('#roman');
  const timer = document.querySelector('#timer');

  //40秒のカウントダウンをid=timerに出力
  function timeAttack() {
    let id = setInterval(() => {
      time--;
      timer.textContent = time;
      if (time <= 0) {
        clearInterval(id);
      };
    }, 1000);
  }

  //id=gameの中身がランダムな数字で変化していく
  //それぞれのidに出たindexを出力

  function setWord() {
    count++;
    for (let i = 0; i <= random.length; i++) {
      math = Math.floor(Math.random() * proverb.length);
      if (!random.includes(math)) {
        mathOk = math;
        random.push(math);
        break;
      }
    }
    saying.textContent = proverb[mathOk]["saying"];
    meaning.textContent = proverb[mathOk]["meaning"];
    roman.textContent = proverb[mathOk]["roman"];
    word = proverb[mathOk]["roman"];
    index = 0;
  }

  //window.alertで結果を表示、OK押したらリロードする関数
  const evaluation = ["まだまだ～！もう1回やってみよう！", "素晴らしい！さすがですね！ナイスです!!!", "素晴らしい！この調子で20個クリアしちゃいましょう！", "控えめに言って天才！！", "it's God's Hand!!あなたを超えられる人はいないです…"]; 

  function result (index) {
    if (!alert("Finished!!\nあなたが打てたことわざは20個中、" + count + "個です。\n" + evaluation[index])){
      document.location.reload()
    };
    
  }

  //keyと文字列が一致してるかで判断し0秒になったらkeyを無効にする

  window.addEventListener("keypress", e => {
    if (e.key === 'Enter' && a === 0) {
      a++;
      setWord();
      timeAttack();
    } else if (a === 0) {
      ;
    } else if (time === 0) {
      e.preventDefault();
    };

    if (a === 1 && e.key !== word[index]) {
      return;
    }
      index++;

      roman.textContent = '_'.repeat(index) + word.substring(index);
      //インデックスの回数_にしてインデックスの位置からまた表示させる

    if ((index === word.length && time !== 0) || count === 20) {
      setWord();
    } else if (time === 0) {
      if (count >= 0 && count < 5) {
        result(0);
        return;
      } else if (count >= 5 && count < 10) {
        result(1);
        return;
      } else if (count >= 10 && count <= 15) {
        result(2);
        return;
      } else if (count >= 16 && count < 20) {
        result(3);
        return;
      } else if (count === 20) {
        result(4);
        return;
      }
    }
  });

}
