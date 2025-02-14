// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的小可爱",  // 同上...
        "这世界上最可爱的女孩子",
        "雯宝儿~",
        "今天是你的二十岁生日",
        "这是我们在一起的",
        "第四个生日了哦",
        "所谓二十岁",
        "不过是心里住了两个十岁的小朋友",
        "与这个世界交手的第二十一载",
        "愿你贪吃不胖",
        "愿你懒惰不丑",
        "愿你永远健康美好依旧",
        "愿你做过的美梦全都实现",
        "愿你永远都有好运气",
        "愿这岁月悠久",
        "我们即使不见亦能不散",
        "今年要吃好好的哦",
        "要把我家可爱猪猪喂胖胖",
        "然后抱走",
        "hahaha~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        "这世界上最可爱的女孩子": "./imgs/zuikeai.jpeg",
        "雯宝儿~": "./imgs/wenbaoer.jpg",
        "今天是你的二十岁生日": "./imgs/ershisuishengri.jpg",
        "这是我们在一起的": "./imgs/zheshiwomen.png",
        "第四个生日了哦": "./imgs/disige.jpg",
        "所谓二十岁": "./imgs/suoweiershisui.jpg",
        "不过是心里住了两个十岁的小朋友": "./imgs/liangge.jpg",
        "与这个世界交手的第二十一载": "./imgs/diershiyizai.jpg",
        "愿你贪吃不胖": "./imgs/tanchibupang.jpg",
        "愿你懒惰不丑": "./imgs/landuobuchou.jpg",
        "愿你永远健康美好依旧": "./imgs/jiankangmeihao.jpg",
        "愿你做过的美梦全都实现": "./imgs/meimengshixian.png",
        "愿你永远都有好运气": "./imgs/haoyunqi.jpg",
        "愿这岁月悠久": "./imgs/suiyueyoujiu.jpg",
        "我们即使不见亦能不散": "./imgs/bujianbusan.jpg",
        "今年要吃好好的哦": "./imgs/chihaohaode.jpg",
        "要把我家可爱猪猪喂胖胖": "./imgs/weipangpang.jpg",
        "然后抱走": "./imgs/baozou.png",
        "hahaha~~": "./imgs/hahaha.jpeg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "来点儿音乐吧",
        bannar_coming: "继续",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐！！！",
        story: "A MESSAGE FOR YOU",
    }
};
