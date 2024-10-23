import event1Img from "/src/assets/event-1.jpg";
import event2Img from "/src/assets/event-2.jpg";
import event3Img from "/src/assets/event-3.jpg";
import event4Img from "/src/assets/event-4.jpg";

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
    img: event1Img,
    date: "28 Eylül",
    timeRange: "13:00-16:00",
    constructor: "Seda Yeşilkapa",
    location: "MMO İstanbul Şubesi",
  },
  {
    id: generateUUID(),
    name: "Büyük Dil Modellerine Giriş Eğitimi",
    img: event2Img,
    date: "5 Ekim",
    timeRange: "13:00-16:00",
    constructor: "Halit Efe Tanrıkulu",
    location: "MMO İstanbul Şubesi",
  },
  {
    id: generateUUID(),
    name: "Uygulamalı Algoritmanın Temelleri",
    img: event3Img,
    date: "17 Kasım",
    timeRange: "13:00-16:00",
    constructor: "Bedirhan Bosna",
    location: "Makina Hangar",
  },
  {
    id: generateUUID(),
    name: "Nesne Tabanlı Programlamaya Giriş - JAVA",
    img: event4Img,
    date: "1 Aralık",
    timeRange: "13:00-16:00",
    constructor: "Özden Atabey",
    location: "MMO İstanbul Şubesi",
  },
];

export const news = [
  {
    id: generateUUID(),
    title: "Python ile Yapay Zeka'ya Giriş-Workshop",
    date: "26.08.2023",
    constructor: "Mehmet Yiğit Özgenç",
    number: 34,
  },
  {
    id: generateUUID(),
    title: "Yapay Zeka ile Metin Sınıflandırması",
    date: "23.09.2023",
    constructor: "Güldeniz Bektaş",
    number: 17,
  },
  {
    id: generateUUID(),
    title: "Veri Hazırlama ve Temel Modeller",
    date: "23.12.2023",
    constructor: "Umut Toygar Göz",
    number: 16,
  },
  {
    id: generateUUID(),
    title: "Bilgisayar Görüşü (Computer Vision) Atölye",
    date: "24.02.2024",
    constructor: "Umut Toygar Göz",
    number: 15,
  },
  {
    id: generateUUID(),
    title: "Üretken Yapay Zeka Eğitim Serisi - 1",
    date: "09.03.2024",
    constructor: "Enes Sadi Uysal",
    number: 25,
  },
  {
    id: generateUUID(),
    title: "Üretken Yapay Zeka Eğitim Serisi - 2",
    date: "16.03.2024",
    constructor: "Mehmet Yiğit Özgenç",
    number: 22,
  },
  {
    id: generateUUID(),
    title: "Üretken Yapay Zeka Eğitim Serisi - 3",
    date: "23.03.2024",
    constructor: "Akın Yılmaz",
    number: 16,
  },
  {
    id: generateUUID(),
    title: "Üretken Yapay Zeka Eğitim Serisi - 4",
    date: "30.03.2024",
    constructor: "Ayyüce Demirbaş",
    number: 17,
  },
  {
    id: generateUUID(),
    title: "Üretken Yapay Zeka Eğitim Serisi - 5",
    date: "06.04.2024",
    constructor: "Güldeniz Bektaş",
    number: 13,
  },
  {
    id: generateUUID(),
    title: "Üretken Yapay Zeka Eğitim Serisi - 6",
    date: "20.04.2024",
    constructor: "Nusret Özateş",
    number: 12,
  },
  {
    id: generateUUID(),
    title: "Üretken Yapay Zeka Eğitim Serisi - 7",
    date: "11.05.2024",
    constructor: "Mehmet Yiğit Özgenç",
    number: 14,
  },
  {
    id: generateUUID(),
    title: "Uygulamalı Veri Bilimi Projesi",
    date: "28.09.2024",
    constructor: "Sedanur Yeşilkaya Koç",
    number: 21,
  },
];
