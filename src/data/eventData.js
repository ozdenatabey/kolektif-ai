// UNIQUE ID ÜRETME ALGORİTMASI, BUNU KAYIT ALIRKEN KULLAN
function generateUUID() {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const events = [
  {
    id: generateUUID(),
    name: "Uygulamalı Veri Bilimi Projesi",
    img: "/src/assets/event-1.jpg",
    date: "28 Eylül",
    timeRange: "13:00-16:00",
    constructor: "Seda Yeşilkapa",
    location: "MMO İstanbul Şubesi",
  },
  {
    id: generateUUID(),
    name: "Büyük Dil Modellerine Giriş Eğitimi",
    img: "/src/assets/event-2.jpg",
    date: "5 Ekim",
    timeRange: "13:00-16:00",
    constructor: "Halit Efe Tanrıkulu",
    location: "MMO İstanbul Şubesi",
  },
  {
    id: generateUUID(),
    name: "Uygulamalı Algoritmanın Temelleri",
    img: "/src/assets/event-3.jpg",
    date: "17 Kasım",
    timeRange: "13:00-16:00",
    constructor: "Bedirhan Bosna",
    location: "Makina Hangar",
  },
  {
    id: generateUUID(),
    name: "Nesne Tabanlı Programlamaya Giriş - JAVA",
    img: "/src/assets/event-4.jpg",
    date: "1 Aralık",
    timeRange: "13:00-16:00",
    constructor: "Özden Atabey",
    location: "MMO İstanbul Şubesi",
  },
];

export const news = [
  {
    id: generateUUID(),
    title: "Robotik Otomasyon Çözümleri Zirvesi",
    img: "https://picsum.photos/id/30/500",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae cum error harum ipsum porro reprehenderit nesciunt earum asperiores doloremque quia iure commodi, similique ab iusto itaque praesentium distinctio ipsam, hic ut est perspiciatis? Ipsa ut enim alias perspiciatis itaque!",
  },
  {
    id: generateUUID(),
    title: "Makina Zirvesi",
    img: "https://picsum.photos/id/10/500",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae cum error harum ipsum porro reprehenderit nesciunt earum asperiores doloremque quia iure commodi, similique ab iusto itaque praesentium distinctio ipsam, hic ut est perspiciatis? Ipsa ut enim alias perspiciatis itaque!",
  },
  {
    id: generateUUID(),
    title: "Fabrika Otomasyon Çözümleri Zirvesi",
    img: "https://picsum.photos/id/20/500",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem recusandae cum error harum ipsum porro reprehenderit nesciunt earum asperiores doloremque quia iure commodi, similique ab iusto itaque praesentium distinctio ipsam, hic ut est perspiciatis? Ipsa ut enim alias perspiciatis itaque!",
  },
];
