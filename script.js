'use strict'
{ 
  let word; //ローマ字
  let math = 0; //random
  let mathOk = 0;
  let count = 0; //正解単語数
  let loc = 0; //ローマ字のindex
  let time = 40; //制限時間
  let random = []; //数字を入れる配列
  let a = 0; //キーが押された回数

  const saying = document.querySelector('#saying');
  const meaning = document.querySelector('#meaning');
  const roman = document.querySelector('#roman');
  const timer = document.querySelector('#timer');

  //40秒のカウントダウンをid=timerに出力
    function timeAttack() {  
      let id = setInterval(function(){
        time--;
        timer.textContent = time;
        if(time <= 0) clearInterval(id);
      },1000);
    }
  
//id=gameの中身がランダムな数字で変化していく
//それぞれのidに出たindexを出力

  function setWord(num){
    count++;
    for(let i = 0; i <= random.length; i++){
      math = Math.floor(Math.random() * proverb.length);
      if(!random.includes(math)){
        mathOk = math;
        random.push(math);
        break;
      }
    }
    saying.textContent = proverb[mathOk]["saying"];
    meaning.textContent = proverb[mathOk]["meaning"];
    roman.textContent = proverb[mathOk]["roman"];
    word = proverb[mathOk]["roman"];
    loc = num;
  }
  
//keyと文字列が一致してるかで判断し0秒になったらkeyを無効にする

  window.addEventListener("keypress", e => {
    a++;
    if (e.keyCode === 13 && a === 1){
        setWord(-1);
        timeAttack();
    } else if (time === 0){
      e.preventDefault();
    }

    if(a >= 2 && e.key !== word[loc]){
      return;
    }
      loc++;
    
    roman.textContent = '_'.repeat(loc) + word.substring(loc);
    //インデックスの位置まで_にしてインデックスの位置からまた表示させる

    if(loc === word.length && time !== 0){
        setWord(0);
    } else if(time === 0){
      if(count >= 0 && count < 5){
        window.alert("Finished!!\nあなたが打てたことわざは20問中、" + count + "問です。\nまだまだ～！もう1回やってみよう！")
        return;
      } else if (count >= 5 && count < 10){
        window.alert("Finished!!\nあなたが打てたことわざは20問中、" + count + "問です！\n素晴らしい！さすがですね！ナイスです!!!")
        return;
      } else if (count >= 10 && count <= 15){
        window.alert("Finished!!\nあなたが打てたことわざは20問中、" + count + "問です！\n素晴らしい！この調子で全問クリアしちゃいましょう！")
        return;
      } else if (count >= 16 && count < 20){
        window.alert("Finished!!\nあなたが打てたことわざは20問中、" + count + "問です！\n控えめに言って天才！！")
        return;
      } else if (count === 20){
        window.alert("Finished!!\nあなたが打てたことわざは20問中、" + count + "問です！\nit's God's Hand!!あなたを超えられる人はいないです…")
        return;
      }
    }
  });

}
