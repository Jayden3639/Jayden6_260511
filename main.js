
const gwae = [
    { sym: "乾", name: "건", eng: "The Creative", mean: "하늘, 강함, 아버지" },
    { sym: "坤", name: "곤", eng: "The Receptive", mean: "땅, 유순함, 어머니" },
    { sym: "屯", name: "준", eng: "Difficulty at the Beginning", mean: "진통, 처음, 어려움" },
    { sym: "蒙", name: "몽", eng: "Youthful Folly", mean: "어리석음, 계몽, 교육" },
    { sym: "需", name: "수", eng: "Waiting", mean: "기다림, 수확, 비" },
    { sym: "訟", name: "송", eng: "Conflict", mean: "다툼, 소송, 논쟁" },
    { sym: "師", name: "사", eng: "The Army", mean: "군대, 무리, 전쟁" },
    { sym: '比', name: '비', eng: 'Holding Together', mean: '화합, 조화, 연합' },
    { sym: "小畜", name: "소축", eng: "The Taming Power of the Small", mean: "작은 축적, 작은 성공" },
    { sym: "履", name: "리", eng: "Treading", mean: "밟다, 예절, 실천" },
    { sym: "泰", name: "태", eng: "Peace", mean: "평화, 안정, 번영" },
    { sym: "否", name: "비", eng: "Standstill", mean: "막힘, 정체, 불운" },
    { sym: "同人", name: "동인", eng: "Fellowship with Men", mean: "사람들과 함께, 동지" },
    { sym: "大有", name: "대유", eng: "Possession in Great Measure", mean: "큰 소유, 풍요, 성공" },
    { sym: "謙", name: "겸", eng: "Modesty", mean: "겸손, 겸양, 자기낮춤" },
    { sym: "豫", name: "예", eng: "Enthusiasm", mean: "열정, 준비, 즐거움" },
    { sym: "隨", name: "수", eng: "Following", mean: "따름, 추종, 순응" },
    { sym: "蠱", name: "고", eng: "Work on What Has Been Spoiled", mean: "부패, 벌레, 개혁" },
    { sym: "臨", name: "림", eng: "Approach", mean: "다가감, 통치, 군림" },
    { sym: "觀", name: "관", eng: "Contemplation", mean: "바라봄, 관찰, 명상" },
    { sym: "噬嗑", name: "서합", eng: "Biting Through", mean: "깨물어 뚫음, 결단" },
    { sym: "賁", name: "비", eng: "Grace", mean: "꾸밈, 아름다움, 장식" },
    { sym: "剝", name: "박", eng: "Splitting Apart", mean: "벗겨짐, 쇠퇴, 몰락" },
    { sym: "復", name: "복", eng: "Return", mean: "회복, 다시 시작, 부활" },
    { sym: "無妄", name: "무망", eng: "Innocence", mean: "망상 없음, 순수, 자연스러움" },
    { sym: "大畜", name: "대축", eng: "The Taming Power of the Great", mean: "큰 축적, 큰 성공" },
    { sym: "頤", name: "이", eng: "Nourishment", mean: "턱, 기르는 것, 음식" },
    { sym: "大過", name: "대과", eng: "Preponderance of the Great", mean: "큰 과오, 지나침, 위기" },
    { sym: "坎", name: "감", eng: "The Abysmal", mean: "물, 험난, 빠짐" },
    { sym: "離", name: "리", eng: "The Clinging", mean: "불, 밝음, 의지" },
    { sym: "咸", name: "함", eng: "Influence", mean: "느낌, 감응, 서로 통함" },
    { sym: "恒", name: "항", eng: "Duration", mean: "항상, 지속, 꾸준함" },
    { sym: "遯", name: "돈", eng: "Retreat", mean: "물러남, 도망, 은둔" },
    { sym: "大壯", name: "대장", eng: "The Power of the Great", mean: "큰 힘, 장대함, 씩씩함" },
    { sym: "晉", name: "진", eng: "Progress", mean: "나아감, 발전, 승진" },
    { sym: "明夷", name: "명이", eng: "Darkening of the Light", mean: "밝음이 상함, 암흑" },
    { sym: "家人", name: "가인", eng: "The Family", mean: "가족, 집안 사람" },
    { sym: "睽", name: "규", eng: "Opposition", mean: "어그러짐, 반목, 불화" },
    { sym: "蹇", name: "건", eng: "Obstruction", mean: "절뚝거림, 어려움, 장애" },
    { sym: "解", name: "해", eng: "Deliverance", mean: "풀림, 해결, 해방" },
    { sym: "損", name: "손", eng: "Decrease", mean: "덜어냄, 손해, 감소" },
    { sym: "益", name: "익", eng: "Increase", mean: "더함, 이익, 증가" },
    { sym: "夬", name: "쾌", eng: "Break-through", mean: "결단, 터놓음, 과감함" },
    { sym: "姤", name: "구", eng: "Coming to Meet", mean: "만남, 우연한 만남" },
    { sym: "萃", name: "췌", eng: "Gathering Together", mean: "모임, 군중, 집중" },
    { sym: "升", name: "승", eng: "Pushing Upward", mean: "올라감, 상승, 승진" },
    { sym: "困", name: "곤", eng: "Oppression", mean: "곤란, 괴로움, 막힘" },
    { sym: "井", name: "정", eng: "The Well", mean: "우물, 변치 않음" },
    { sym: "革", name: "혁", eng: "Revolution", mean: "개혁, 변화, 혁명" },
    { sym: "鼎", name: "정", eng: "The Cauldron", mean: "솥, 안정, 새로움" },
    { sym: "震", name: "진", eng: "The Arousing", mean: "우레, 움직임, 놀람" },
    { sym: "艮", name: "간", eng: "Keeping Still", mean: "산, 그침, 멈춤" },
    { sym: "漸", name: "점", eng: "Development", mean: "점진적 발전, 나아감" },
    { sym: "歸妹", name: "귀매", eng: "The Marrying Maiden", mean: "시집가는 소녀, 종말" },
    { sym: "豐", name: "풍", eng: "Abundance", mean: "풍요, 큼, 번성" },
    { sym: "旅", name: "려", eng: "The Wanderer", mean: "나그네, 여행, 불안정" },
    { sym: "巽", name: "손", eng: "The Gentle", mean: "바람, 공손, 순종" },
    { sym: "兌", name: "태", eng: "The Joyous", mean: "못, 기쁨, 말" },
    { sym: "渙", name: "환", eng: "Dispersion", mean: "흩어짐, 풀림, 이산" },
    { sym: "節", name: "절", eng: "Limitation", mean: "마디, 절제, 한계" },
    { sym: "中孚", name: "중부", eng: "Inner Truth", mean: "마음 속 믿음, 성실" },
    { sym: "小過", name: "소과", eng: "Preponderance of the Small", mean: "작은 과오, 조금 지나침" },
    { sym: "旣濟", name: "기제", eng: "After Completion", mean: "이미 이루어짐, 완성" },
    { sym: "未濟", name: "미제", eng: "Before Completion", mean: "아직 이루어지지 않음, 미완성" }
];

function renderGwae() {
    const container = document.getElementById('gwae-container');
    gwae.forEach(item => {
        const gwaeCard = document.createElement('div');
        gwaeCard.classList.add('gwae-card');

        const sym = document.createElement('div');
        sym.classList.add('sym');
        sym.textContent = item.sym;

        const name = document.createElement('div');
        name.classList.add('name');
        name.textContent = `${item.name} (${item.eng})`;

        const mean = document.createElement('div');
        mean.classList.add('mean');
        mean.textContent = item.mean;

        gwaeCard.appendChild(sym);
        gwaeCard.appendChild(name);
        gwaeCard.appendChild(mean);

        container.appendChild(gwaeCard);
    });
}

renderGwae();
