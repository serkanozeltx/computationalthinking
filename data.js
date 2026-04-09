const questions = [
  {
    id: 1,
    images: [],
    tr: {
      text: "Ali ellerini yıkamak için aşağıdaki adımları takip edecektir. Ancak adımların sıralamasında hata yapılmıştır.<br/><br/>1. Musluğu aç ve ellerini ıslat.<br/>2. Ellerine sabun al.<br/>3. Temiz bir havlu veya kağıt havlu ile ellerini kurula.<br/>4. Elleri bol su ile durula.<br/>5. Ellerini en az 20 saniye boyunca ovarak yıka.<br/>6. Musluğu bir havlu veya dirseğinle kapat.<br/><br/><strong>Yukarıda verilen adımlardan hangi ikisi yer değiştirirse, Ali ellerini doğru şekilde yıkar?</strong>",
      options: ["3 - 5", "1 - 4", "2 - 4", "4 - 5"]
    },
    en: {
      text: "Ali will follow the steps below to wash his hands. However, there is a mistake in the order of the steps.<br/><br/>1. Turn on the tap and wet your hands.<br/>2. Put soap on your hands.<br/>3. Dry your hands with a clean towel or paper towel.<br/>4. Rinse your hands with plenty of water.<br/>5. Rub and wash your hands for at least 20 seconds.<br/>6. Turn off the tap with a towel or your elbow.<br/><br/><strong>Which two steps above should be swapped for Ali to wash his hands correctly?</strong>",
      options: ["3 - 5", "1 - 4", "2 - 4", "4 - 5"]
    },
    correctAnswerIndex: 0
  },
  {
    id: 2,
    images: ["images/img_1.png", "images/img_2.png", "images/img_3.png", "images/img_4.png", "images/img_5.png"],
    tr: {
      text: "Zeynep, parkta kaybolan bir çocuğu aramaktadır. Çocuğu bulabilmek için parktaki 5 farklı kişiden çocuğun resmini çizmelerini istemiştir.<br/><br/><strong>Zeynep’in, çizilen 5 farklı resme göre kaybolan çocuk hakkında yaptığı yorumlardan hangisi kesinlikle doğrudur?</strong>",
      options: ["Kahverengi bir kıyafeti vardır.", "Elinde tenis raketi vardır.", "Kahverengi ayakkabı giymektedir.", "Sarı saçlıdır."]
    },
    en: {
      text: "Zeynep is looking for a lost child in the park. To find the child, she asked 5 different people in the park to draw a picture of the child.<br/><br/><strong>Which of Zeynep's comments about the lost child based on the 5 different drawings is definitely true?</strong>",
      options: ["The child has a brown outfit.", "The child is holding a tennis racket.", "The child is wearing brown shoes.", "The child has blonde hair."]
    },
    correctAnswerIndex: 2
  },
  {
    id: 3,
    images: [],
    tr: {
      text: "Aynalı sazan balığı, tatlı sularda yaşayan bir balık türü olmasına rağmen düşük tuzluluk seviyelerine uyum sağlayabilir. Aşağıdaki tabloda balığın yüzebileceği göllerin isimleri, derinlikleri, tuzlulukları ve su sıcaklıkları verilmiştir.<br/><br/><table class='data-table'><tr><th>İsim</th><th>Derinlik</th><th>Tuzluluk</th><th>Sıcaklık</th></tr><tr><td>Köyiçi Gölü</td><td>8 m</td><td>997,9 kg/m³</td><td>16ºC</td></tr><tr><td>Ferah Gölü</td><td>12 m</td><td>1000,13 kg/m³</td><td>24ºC</td></tr><tr><td>Eymir Gölü</td><td>7 m</td><td>998,9 kg/m³</td><td>18ºC</td></tr><tr><td>Pazar Gölü</td><td>4 m</td><td>999,7 kg/m³</td><td>22ºC</td></tr><tr><td>Çamlı Gölü</td><td>22 m</td><td>1000,3 kg/m³</td><td>19ºC</td></tr></table><br/><strong>Aynalı sazan balığı, en tuzlu gölden başlayarak en az tuzlu göle kadar yüzmek istiyor. Bu durumda, balığın yüzmesi gereken rota nasıl olmalıdır?</strong>",
      options: [
        "Ferah Gölü, Çamlı Gölü, Pazar Gölü, Eymir Gölü, Köyiçi Gölü",
        "Ferah Gölü, Çamlı Gölü, Köyiçi Gölü, Eymir Gölü, Pazar Gölü",
        "Çamlı Gölü, Pazar Gölü, Eymir Gölü, Köyiçi Gölü, Ferah Gölü",
        "Çamlı Gölü, Ferah Gölü, Pazar Gölü, Eymir Gölü, Köyiçi Gölü"
      ]
    },
    en: {
      text: "Mirror carp, despite being a freshwater fish, can adapt to low salinity levels. The table below shows the names, depths, salinity, and water temperatures of the lakes the fish can swim in.<br/><br/><table class='data-table'><tr><th>Name</th><th>Depth</th><th>Salinity</th><th>Temperature</th></tr><tr><td>Köyiçi Lake</td><td>8 m</td><td>997.9 kg/m³</td><td>16ºC</td></tr><tr><td>Ferah Lake</td><td>12 m</td><td>1000.13 kg/m³</td><td>24ºC</td></tr><tr><td>Eymir Lake</td><td>7 m</td><td>998.9 kg/m³</td><td>18ºC</td></tr><tr><td>Pazar Lake</td><td>4 m</td><td>999.7 kg/m³</td><td>22ºC</td></tr><tr><td>Çamlı Lake</td><td>22 m</td><td>1000.3 kg/m³</td><td>19ºC</td></tr></table><br/><strong>The mirror carp wants to swim from the highest salinity lake to the lowest salinity lake. What should be its swimming route?</strong>",
      options: [
        "Ferah Lake, Çamlı Lake, Pazar Lake, Eymir Lake, Köyiçi Lake",
        "Ferah Lake, Çamlı Lake, Köyiçi Lake, Eymir Lake, Pazar Lake",
        "Çamlı Lake, Pazar Lake, Eymir Lake, Köyiçi Lake, Ferah Lake",
        "Çamlı Lake, Ferah Lake, Pazar Lake, Eymir Lake, Köyiçi Lake"
      ]
    },
    correctAnswerIndex: 3
  },
  {
    id: 4,
    images: ["images/img_6.png", "images/img_7.png"],
    tr: {
      text: "Bir müşterisi Terzi Selma Hanım’a yukarıdaki görseldeki kelebek resmini getirerek aynısını dikmesini istemiştir.<br/><br/>Selma Hanım tasarımı oluşturabilmek için yukarıdaki çeşitli çokgen parçalarını kumaştan keserek parçaları hazırlayacaktır. Parçaları hazırlarken şekilleri istediği şekilde döndürebilecek ve kumaşı boyayacak, ardından parçaları birbirine monte edecektir. Her bir çokgen parçasını hazırlamasının kaç dakika sürdüğü çokgen parçalarının üzerine yazılmıştır.<br/><br/><strong>Buna göre, Selma Hanım’ın tasarımı oluşturabileceği minimum süre kaç dakikadır?</strong>",
      options: ["24", "25", "26", "27"]
    },
    en: {
      text: "A customer brought the butterfly picture shown above to Tailor Ms. Selma and asked her to sew the exact same design.<br/><br/>To create the design, Ms. Selma will prepare the pieces by cutting the various polygon shapes shown above from fabric. While preparing the pieces, she can rotate the shapes any way she wants, dye the fabric, and then assemble the pieces together. The time in minutes it takes to prepare each polygon piece is written on the pieces.<br/><br/><strong>What is the minimum time in minutes Ms. Selma needs to create the design?</strong>",
      options: ["24", "25", "26", "27"]
    },
    correctAnswerIndex: 1
  },
  {
    id: 5,
    images: ["images/img_8.png", "images/img_9.png", "images/img_10.png", "images/img_11.png", "images/img_12.png"],
    tr: {
      text: "Züleyha, elindeki 5 pipeti kullanarak ilk baştaki şekli oluşturmuştur. Belgin, Züleyha’nın oluşturduğu şekilde bir pipeti hareket ettirerek yeni bir şekil oluşturmuştur.<br/><br/><strong>Buna göre aşağıdakilerden hangisi Belgin’in oluşturduğu şekillerden biri olamaz?</strong>",
      options: ["Seçenek A", "Seçenek B", "Seçenek C", "Seçenek D"]
    },
    en: {
      text: "Züleyha created the first shape using 5 straws. Belgin created a new shape by moving exactly one straw in Züleyha's shape.<br/><br/><strong>Which of the following cannot be a shape created by Belgin?</strong>",
      options: ["Option A", "Option B", "Option C", "Option D"]
    },
    correctAnswerIndex: 2
  },
  {
    id: 6,
    images: ["images/img_13.png", "images/img_14.png", "images/img_15.png", "images/img_16.png"],
    tr: {
      text: "Bir büfeci, sandviçleri aşağıdaki kurala göre yapıyor:<br/><br/>1. Domates ekmekle doğrudan temas etmemelidir.<br/>2. Peynir domatesin altında olmalıdır.<br/>3. Salatalık ve peynir marulun üstünde olmalıdır.<br/>4. Tüm malzemeler sandviç ekmeği arasında olmalıdır.<br/><br/><strong>Aşağıda üstten görünümü verilen sandviçlerden (Seçenekler A, B, C, D) hangisi, yukarıdaki kurallara uygun olarak yapılmıştır?</strong>",
      options: ["A", "B", "C", "D"]
    },
    en: {
      text: "A vendor makes sandwiches according to the following rules:<br/><br/>1. The tomato must not directly touch the bread.<br/>2. The cheese must be below the tomato.<br/>3. The cucumber and cheese must be above the lettuce.<br/>4. All ingredients must be between the sandwich bread.<br/><br/><strong>Which of the sandwiches (A, B, C, D) shown from the top view below is made according to the rules above?</strong>",
      options: ["A", "B", "C", "D"]
    },
    correctAnswerIndex: 0
  },
  {
    id: 7,
    images: ["images/img_17.png", "images/img_18.png", "images/img_19.png", "images/img_20.png", "images/img_21.png", "images/img_22.png", "images/img_23.png"],
    tr: {
      text: "Üç A4 kağıdı birden fazla renk kullanılarak farklı desenlerde boyanıyor. Ardından her kağıttan yapboz parçası şeklinde birer parça kesiliyor. (İlk 3 resim kesilen parçaları göstermektedir.)<br/><br/><strong>Kesim işlemi sonucunda yukarıdaki 3 yapboz parçası ortaya çıktığına göre, seçeneklerdeki (A, B, C, D) A4 sayfalarından hangisi yapboz parçalarının kesildiği sayfalardan birisi olamaz?</strong>",
      options: ["A", "B", "C", "D"]
    },
    en: {
      text: "Three A4 papers are painted with different patterns using multiple colors. Then, one puzzle piece is cut from each paper. (The first 3 images show the cut pieces.)<br/><br/><strong>Given that the 3 puzzle pieces above resulted from the cutting process, which of the A4 pages (A, B, C, D) cannot be one of the pages from which the pieces were cut?</strong>",
      options: ["A", "B", "C", "D"]
    },
    correctAnswerIndex: 2
  },
  {
    id: 8,
    images: ["images/img_24.png"],
    tr: {
      text: "Ali, bir saat boyunca kalabileceği bir sanat sergisine gidecek ve sergide eserleri bulunan sanatçıların söyleşilerine katılacaktır. Zaman çizelgesinde, sanatçıların söyleşi programı verilmiştir.<br/><br/><strong>Ali, bir saat içinde en fazla sayıda söyleşiye katılmak istiyorsa, hangi zaman dilimi için bilet almalıdır?</strong>",
      options: ["5:30 – 6:30", "7:00 – 8:00", "8:30 – 9:30", "10:30 – 11:30"]
    },
    en: {
      text: "Ali will go to an art exhibition where he can stay for exactly one hour, and he will attend the talks of the artists whose works are in the exhibition. The timeline above shows the artists' talk schedule.<br/><br/><strong>If Ali wants to attend the maximum number of talks within exactly one hour, which time slot should he buy a ticket for?</strong>",
      options: ["5:30 – 6:30", "7:00 – 8:00", "8:30 – 9:30", "10:30 – 11:30"]
    },
    correctAnswerIndex: 2
  },
  {
    id: 9,
    images: [],
    tr: {
      text: "Kütüphane görevlisi Orhan, kitapları belirli kurallara göre sıralı bir şekilde işlemektedir. Her kitap, kategorisinin belirlenmesi, kaydedilmesi ve rafa yerleştirilmesi adımlarından geçerek toplam <strong>30 dakikada</strong> işlenir. Orhan, kitapları geldiği sırayla işleme alır ve bir kitabın işlemleri tamamlanmadan diğerine başlamaz.<br/><br/><table class='data-table'><tr><th>Kitap Türü</th><th>Geliş Saati</th></tr><tr><td>Masal</td><td>14.00</td></tr><tr><td>Bilimsel - Makale</td><td>14.15</td></tr><tr><td>Roman</td><td>14.30</td></tr></table><br/><strong>Orhan, yukarıdaki kurallara ve geliş saatlerine göre kitapları işler. Buna göre, aşağıdaki ifadelerden hangisi yanlıştır?</strong>",
      options: [
        "Masal kitabı işlemleri saat 14.30'da tamamlanır.",
        "Bilimsel Makale işlemleri saat 15.00'te tamamlanır.",
        "Roman işlemleri saat 15.10'da tamamlanır.",
        "Tüm kitapların işlemleri saat 15.30'da tamamlanır."
      ]
    },
    en: {
      text: "Orhan, a librarian, processes books sequentially according to specific rules. Each book goes through the steps of categorization, registration, and shelving, taking a total of <strong>30 minutes</strong> to process. Orhan processes the books in the order they arrive and does not start processing the next book until the current one is finished.<br/><br/><table class='data-table'><tr><th>Book Type</th><th>Arrival Time</th></tr><tr><td>Fairy Tale</td><td>14.00</td></tr><tr><td>Scientific Article</td><td>14.15</td></tr><tr><td>Novel</td><td>14.30</td></tr></table><br/><strong>Orhan processes the books according to the rules and arrival times above. Which of the following statements is incorrect?</strong>",
      options: [
        "The fairy tale book processing is completed at 14.30.",
        "The scientific article processing is completed at 15.00.",
        "The novel processing is completed at 15.10.",
        "The processing of all books is completed at 15.30."
      ]
    },
    correctAnswerIndex: 2
  },
  {
    id: 10,
    images: ["images/img_25.png", "images/img_26.png", "images/img_27.png"],
    tr: {
      text: "6x5 büyüklüğündeki karelerden oluşan bir led ışıklı panoda üç farklı renkte ışık yanmaktadır. Bu renklerin yanma durumuna karşılık gelen rakamlarla, her satıra karşılık gelecek şekilde yukarıdan aşağıya doğru bir şifreleme sistemi oluşturulmuştur. Örneğin, görseldeki panoya denk gelen şifreleme sistemi yanında verilmiştir.<br/><br/><strong>Buna göre görselde verilen ışıklı led panonun 5. satırını oluşturabilmek için hangi şifreleme yapılmalıdır?</strong>",
      options: ["2 - 1 - 0 - 0 - 1", "1 - 2 - 2 - 0 - 0", "1 - 2 - 2 - 1 - 1", "2 - 1 - 1 - 0 - 0"]
    },
    en: {
      text: "In a 6x5 LED light panel composed of squares, lights of three different colors are turned on. Exploring the color states, a downward encryption system is constructed associating specific numbers with each illuminated color for every row. (For example, the encryption corresponding to the panel is shown in the image).<br/><br/><strong>Which encryption must be used to create the 5th row of the LED light panel shown in the layout?</strong>",
      options: ["2 - 1 - 0 - 0 - 1", "1 - 2 - 2 - 0 - 0", "1 - 2 - 2 - 1 - 1", "2 - 1 - 1 - 0 - 0"]
    },
    correctAnswerIndex: 1
  },
  {
    id: 11,
    images: ["images/img_28.png"],
    tr: {
      text: "Bir kanguru ve kaplumbağa parkurda yarışmaktadır. İkisi de yarışa içinde çilek olan alandan başlayacak ve okları takip ederek bir sonraki alana ilerleyecektir. Aynı sürede kaplumbağa bir alan ilerlerken, kanguru iki alan ilerlemektedir. Örneğin, kaplumbağa ananas bulunan alana vardığında, kanguru armut bulunan alana varmaktadır.<br/><br/><strong>Buna göre kanguru ve kaplumbağanın başlangıç noktasından sonra ilk kez buluştuğu alanda hangi meyve bulunmaktadır?</strong>",
      options: ["Elma", "Limon", "Kiraz", "Karpuz"]
    },
    en: {
      text: "A kangaroo and a turtle are racing on a track. Both will start from the area with the strawberry and proceed to the next area following the arrows. In the same amount of time, the turtle advances one area while the kangaroo advances two areas. For instance, when the turtle reaches the pineapple, the kangaroo reaches the pear.<br/><br/><strong>Which fruit is found in the area where the kangaroo and turtle meet for the first time after the starting point?</strong>",
      options: ["Apple", "Lemon", "Cherry", "Watermelon"]
    },
    correctAnswerIndex: 2
  },
  {
    id: 12,
    images: ["images/img_29.png", "images/img_30.png", "images/img_31.png", "images/img_32.png", "images/img_33.png"],
    tr: {
      text: "Terzi Ayşe Hanım elindeki kare kumaşın tamamını parçalara ayırıp bu parçaları birleşme noktalarından dikerek yeni bir tasarım oluşturacaktır.<br/><br/><strong>Terzi Ayşe Hanım, oluşturduğu tasarımda yalnızca bir yeri diktiğine göre, yaptığı tasarım aşağıdakilerden (A, B, C, D) hangisi olabilir?</strong>",
      options: ["Tasarım A", "Tasarım B", "Tasarım C", "Tasarım D"]
    },
    en: {
      text: "Tailor Mrs. Ayşe will divide her entire square fabric into pieces and sew them together at the joints to create a new design.<br/><br/><strong>Given that Mrs. Ayşe sewed in only one specific joint place, which of the options (A, B, C, D) could be her design?</strong>",
      options: ["Design A", "Design B", "Design C", "Design D"]
    },
    correctAnswerIndex: 0
  },
  {
    id: 13,
    images: ["images/img_34.png", "images/img_35.jpg", "images/img_36.png", "images/img_37.png", "images/img_38.png", "images/img_39.png", "images/img_40.png"],
    tr: {
      text: "Gülsüm elindeki 6 kibriti kullanarak aşağıdaki şekli oluşturmuştur. Yusuf bu şekildeki 1 kibriti hareket ettirerek yeni bir şekil oluşturacaktır.<br/><br/><strong>Buna göre, aşağıdakilerden hangisi Yusuf’un elde edebileceği şekillerden birisi olamaz?</strong>",
      options: ["Şekil A", "Şekil B", "Şekil C", "Şekil D"]
    },
    en: {
      text: "Gülsüm created the base shape using 6 matchsticks. Yusuf will create a new shape by moving exactly 1 matchstick in this shape.<br/><br/><strong>Which of the following cannot be one of the shapes Yusuf can obtain?</strong>",
      options: ["Shape A", "Shape B", "Shape C", "Shape D"]
    },
    correctAnswerIndex: 3
  },
  {
    id: 14,
    images: ["images/img_41.png"],
    tr: {
      text: "Denizci Ahmet, elindeki haritayı takip ederek hazineye ulaşmak istiyor. Denizci Ahmet, “Başla” yazan yerden başlayacak ve her seferinde bir yüzü kırmızı (K) bir yüzü mavi (M) olan bir madeni parayı havaya atıp tutarak, paranın üzerindeki renge göre ilerleyecektir. Ahmet parayı attığı durumda oluşan tüm basamakları ilerlemek zorundadır. Örneğin, parayı 4 kere attıysa, 3. adımda hazineye ulaşsa bile 4. adımı da ilerlemesi gerekmekte ve böylece hazineyi es geçmektedir.<br/><br/>Örneğin, Denizci Ahmet’in her adımda parayı atması sonucu oluşan sonuç KMMM ise buna göre Denizci Ahmet’in ilerlemesi haritada gösterilmektedir.<br/><br/><strong>Buna göre Denizci Ahmet, hangi sıra ile ilerlerse son adımında hazineye ulaşabilir?</strong>",
      options: ["KKMKMMK", "MKMMMK", "KKKMKKMM", "KMKKMKKMK"]
    },
    en: {
      text: "Sailor Ahmet wants to reach the treasure following the map he has. Sailor Ahmet will start from the point marked \"Start\" and will advance at each step by tossing a coin that has one red (K/R) face and one blue (M/B) face, tracking the color that lands face up. Ahmet must advance exactly all the steps decided by the total number of coin tosses. For example, if he tossed the coin 4 times, even if he reached the treasure on the 3rd step, he has to move a 4th step and thus bypasses the treasure.<br/><br/>If the outcome is KMMM (RBBB), his progression is mapped out in the visualization.<br/><br/><strong>Which coin sequence will lead Sailor Ahmet to land exactly on the treasure on his very last step?</strong>",
      options: ["KKMKMMK", "MKMMMK", "KKKMKKMM", "KMKKMKKMK"]
    },
    correctAnswerIndex: 0
  },
  {
    id: 15,
    images: [],
    tr: {
      text: "Arif’in bir kitaplığı vardır ve kitaplarını aşağıdaki kurallara göre düzenleyecektir:<br/><br/>1. Aynı türdeki kitaplar yan yana dizilecektir.<br/>2. En fazla sayıda kitap içeren tür, kitaplıkta en başta yer alacaktır. En az sayıda kitap içeren tür ise en sonda yer alacaktır.<br/>3. Aynı türe ait kitaplar, basım yıllarına göre en eskiden en yeniye doğru, baştan sona sıralanacaktır.<br/><br/><table class='data-table'><tr><th>Kitap İsmi</th><th>Şeker Dağı’nın Gizemi</th><th>Gökyüzü Bilginleri</th><th>Gizemli Saat Kulesi</th><th>Tarih Kitabı Çetesi</th><th>Fındık Diyarı</th><th>Ayın Arkadaşları</th></tr><tr><td><strong>Türü</strong></td><td>Macera</td><td>Bilim</td><td>Macera</td><td>Tarih</td><td>Macera</td><td>Bilim</td></tr><tr><td><strong>Basım Yılı</strong></td><td>2019</td><td>2008</td><td>2010</td><td>2018</td><td>2005</td><td>2012</td></tr></table><br/><strong>Buna göre Arif, kitapları baştan sona doğru hangi sırayla dizecektir?</strong>",
      options: [
        "Gökyüzü Bilginleri, Ayın Arkadaşları, Fındık Diyarı, Gizemli Saat Kulesi, Şeker Dağı’nın Gizemi, Tarih Kitabı Çetesi",
        "Fındık Diyarı, Gizemli Saat Kulesi, Şeker Dağı’nın Gizemi, Ayın Arkadaşları, Gökyüzü Bilginleri, Tarih Kitabı Çetesi",
        "Fındık Diyarı, Gizemli Saat Kulesi, Şeker Dağı’nın Gizemi, Gökyüzü Bilginleri, Ayın Arkadaşları, Tarih Kitabı Çetesi",
        "Ayın Arkadaşları, Gökyüzü Bilginleri, Fındık Diyarı, Gizemli Saat Kulesi, Şeker Dağı’nın Gizemi, Tarih Kitabı Çetesi"
      ]
    },
    en: {
      text: "Arif has a bookshelf and will arrange his books according to the following rules:<br/><br/>1. Books of the same genre will be placed side by side.<br/>2. The genre with the most books will be placed first on the shelf. The genre with the least books will be placed last.<br/>3. Books belonging to the same genre will be ordered chronologically from oldest to newest based on their publication year.<br/><br/><table class='data-table'><tr><th>Book Title</th><th>Mystery of Sugar Mountain</th><th>Sky Scholars</th><th>Mysterious Clock Tower</th><th>History Book Gang</th><th>Hazelnut Land</th><th>Friends of the Moon</th></tr><tr><td><strong>Genre</strong></td><td>Adventure</td><td>Science</td><td>Adventure</td><td>History</td><td>Adventure</td><td>Science</td></tr><tr><td><strong>Publication Year</strong></td><td>2019</td><td>2008</td><td>2010</td><td>2018</td><td>2005</td><td>2012</td></tr></table><br/><strong>In what order will Arif arrange the books from beginning to end?</strong>",
      options: [
        "Sky Scholars, Friends of the Moon, Hazelnut Land, Mysterious Clock Tower, Mystery of Sugar Mountain, History Book Gang",
        "Hazelnut Land, Mysterious Clock Tower, Mystery of Sugar Mountain, Friends of the Moon, Sky Scholars, History Book Gang",
        "Hazelnut Land, Mysterious Clock Tower, Mystery of Sugar Mountain, Sky Scholars, Friends of the Moon, History Book Gang",
        "Friends of the Moon, Sky Scholars, Hazelnut Land, Mysterious Clock Tower, Mystery of Sugar Mountain, History Book Gang"
      ]
    },
    correctAnswerIndex: 2
  },
  {
    id: 16,
    images: ["images/img_42.jpg"],
    tr: {
      text: "Bir sakız makinesi, sırasıyla kırmızı, mavi, yeşil, sarı şeklinde sakız vererek bunu bir döngü şeklinde devam ettirmektedir. Sakız makinesi belirli bir noktadan sonra bozulmuş ve bu noktadan itibaren en başa dönmüştür.<br/><br/>Sakız makinesini tamir etmek için sakızın bozulduğu adımı bulması gereken tamirci, 25. adımda makineden sarı sakızın düştüğünü tespit etmiştir.<br/><br/><strong>Buna göre, makine kaçıncı adımda bozulmuş olabilir?</strong>",
      options: ["8", "10", "16", "19"]
    },
    en: {
      text: "A gumball machine dispenses gumballs in a cycle in the sequence: red, blue, green, yellow. After a certain point, the machine broke and from that point onwards, it reset to the very beginning of the cycle.<br/><br/>The repairman, needing to find the step where the machine broke to fix it, determined that a yellow gumball fell out on the 25th step.<br/><br/><strong>Which step could the machine have broken at?</strong>",
      options: ["8", "10", "16", "19"]
    },
    correctAnswerIndex: 3
  },
  {
    id: 17,
    images: [],
    tr: {
      text: "Makine tamir edilmeden çalışmaya devam ettirilirse (önceki sakız makinesi sorusu), <strong>30. adımda makineden hangi renkte sakız düşer?</strong>",
      options: ["Kırmızı", "Mavi", "Yeşil", "Sarı"]
    },
    en: {
      text: "If the machine continues to operate without being repaired (based on the previous gumball machine question), <strong>what color gumball will fall out on the 30th step?</strong>",
      options: ["Red", "Blue", "Green", "Yellow"]
    },
    correctAnswerIndex: 0
  },
  {
    id: 18,
    images: [],
    tr: {
      text: "Öğrenciler, bir eğitim dönemi boyunca farklı performans görevlerinden puanlar almıştır. Öğretmen, her öğrencinin hangi görevden kaç puan aldığını, toplam puanlarını ve her performans görevi için öğrencilerin aldığı toplam puanları bir tabloya kaydetmiştir. Ancak, tabloda bazı notlar silinmiştir.<br/><br/><table class='data-table'><tr><th>Öğrenci</th><th>Görev 1</th><th>Görev 2</th><th>Görev 3</th><th>Toplam</th></tr><tr><td>Serkan</td><td>20</td><td>8</td><td>?</td><td>42</td></tr><tr><td>Hatice</td><td>9</td><td>?</td><td>13</td><td>?</td></tr><tr><td>Meryem</td><td>?</td><td>11</td><td>14</td><td>40</td></tr><tr><td>İsmail</td><td>11</td><td>?</td><td>?</td><td>29</td></tr><tr><td><strong>Toplam</strong></td><td>?</td><td>43</td><td>45</td><td>?</td></tr></table><br/><strong>Yukarıda verilen tabloya göre, Hatice 2. performans görevinden kaç puan almıştır?</strong>",
      options: ["10", "14", "15", "3"]
    },
    en: {
      text: "Students received points from different performance tasks throughout an educational term. The teacher recorded how many points each student received from which task, their total points, and the total points received by all students for each performance task in a table. However, some grades in the table have been erased.<br/><br/><table class='data-table'><tr><th>Student</th><th>Task 1</th><th>Task 2</th><th>Task 3</th><th>Total</th></tr><tr><td>Serkan</td><td>20</td><td>8</td><td>?</td><td>42</td></tr><tr><td>Hatice</td><td>9</td><td>?</td><td>13</td><td>?</td></tr><tr><td>Meryem</td><td>?</td><td>11</td><td>14</td><td>40</td></tr><tr><td>İsmail</td><td>11</td><td>?</td><td>?</td><td>29</td></tr><tr><td><strong>Total</strong></td><td>?</td><td>43</td><td>45</td><td>?</td></tr></table><br/><strong>According to the table given above, how many points did Hatice get from the 2nd performance task?</strong>",
      options: ["10", "14", "15", "3"]
    },
    correctAnswerIndex: 1
  }
];



const questionsPart2 = [
  {
    id: 19,
    images: [],
    tr: {
      text: "Zeynep, Mustafa ve Ali kırtasiyeden sevdikleri çıkartmaları alıyor.<br/>Zeynep ve Mustafa kırtasiyeye birlikte gittiklerinde <em>araba, futbol, meyve, bitki, hayvan ve uzay</em> çıkartmaları almışlardır.<br/>Mustafa ve Ali birlikte kırtasiyeye gittiklerinde <em>futbol, meyve, sebze, gülen yüz, hayvan ve kıyafet</em> çıkartmaları almışlardır.<br/><br/><strong>Bu bilgilere göre, Zeynep, Mustafa ve Ali'nin en sevdiği çıkartmalar (sırasıyla) hangisi olabilir?</strong>",
      options: [
        "Zeynep: araba, futbol, bitki | Mustafa: sebze, gülen yüz, kıyafet | Ali: meyve, hayvan, uzay",
        "Zeynep: futbol, meyve, hayvan | Mustafa: araba, bitki, uzay | Ali: sebze, gülen yüz, kıyafet",
        "Zeynep: araba, bitki, uzay | Mustafa: futbol, meyve, hayvan | Ali: sebze, gülen yüz, kıyafet",
        "Zeynep: araba, bitki, hayvan | Mustafa: futbol, meyve, uzay | Ali: sebze, gülen yüz, kıyafet"
      ]
    },
    en: {
      text: "Zeynep, Mustafa, and Ali buy their favorite stickers from the stationery store.<br/>When Zeynep and Mustafa went to the stationery store together, they bought <em>car, football, fruit, plant, animal, and space</em> stickers.<br/>When Mustafa and Ali went together, they bought <em>football, fruit, vegetable, smiley face, animal, and clothing</em> stickers.<br/><br/><strong>Based on this information, which of the following could represent Zeynep, Mustafa, and Ali's favorite stickers (respectively)?</strong>",
      options: [
        "Zeynep: car, football, plant | Mustafa: vegetable, smiley face, clothing | Ali: fruit, animal, space",
        "Zeynep: football, fruit, animal | Mustafa: car, plant, space | Ali: vegetable, smiley face, clothing",
        "Zeynep: car, plant, space | Mustafa: football, fruit, animal | Ali: vegetable, smiley face, clothing",
        "Zeynep: car, plant, animal | Mustafa: football, fruit, space | Ali: vegetable, smiley face, clothing"
      ]
    },
    correctAnswerIndex: 2
  },
  {
    id: 20,
    images: ["images/img_43.png", "images/img_44.png", "images/img_45.png", "images/img_46.png", "images/img_47.png"],
    tr: {
      text: "<strong>Yukarıdaki görselde verilen örüntüye göre soru işareti yerine seçeneklerdeki görsellerden (A, B, C, D) hangisi gelmelidir?</strong>",
      options: ["A", "B", "C", "D"]
    },
    en: {
      text: "<strong>According to the pattern given in the first visual above, which of the option images (A, B, C, D) should replace the question mark?</strong>",
      options: ["A", "B", "C", "D"]
    },
    correctAnswerIndex: 0
  },
  {
    id: 21,
    images: ["images/img_48.png"],
    tr: {
      text: "Melike farklı büyüklükteki yapboz parçalarını farklı yönlerde takarak yukarıdaki dört şekli oluşturmuştur. Soldan sağa doğru oluşturduğu her şekil bir kelimeyi, her parça bir harfi sembolize eder. Kelimelerin ilk harfi en alttaki parçayı, en üstteki parça kelimenin sonuncu harfini temsil etmektedir.<br/><br/><strong>Melike’nin oluşturduğu kelimeler sırasıyla aşağıdakilerden hangisi gibi olabilir?</strong>",
      options: [
        "KALE-KİLE-KÖLE-KÖSE",
        "KART-KURT-KURU-KUZU",
        "SARI- SAPI-KAPI-KATI",
        "SAKA-TAKA-TAKI-MAKİ"
      ]
    },
    en: {
      text: "Melike created the four shapes above by attaching puzzle pieces of different sizes in different directions. From left to right, each shape symbolizes a word, and each piece symbolizes a letter. The bottom piece represents the first letter of the word, and the top piece represents the last letter.<br/><br/><strong>Which of the following could be the words Melike created, in order?</strong>",
      options: [
        "KALE-KİLE-KÖLE-KÖSE",
        "KART-KURT-KURU-KUZU",
        "SARI- SAPI-KAPI-KATI",
        "SAKA-TAKA-TAKI-MAKİ"
      ]
    },
    correctAnswerIndex: 1
  },
  {
    id: 22,
    images: ["images/img_49.jpg"],
    tr: {
      text: "Aşağıdaki harita Dilara’nın iş arkadaşı ağını göstermektedir. Haritada kişiler ve kişiler arasındaki bağlantıyı gösteren çizgiler bulunmaktadır. İki kişi arasında çizgi varsa bu kişiler iş arkadaşıdır. Haritada Dilara haricinde Elif, Zeynep, Mehmet ve Kemal de bulunmaktadır.<br/><br/>Yukarıdaki haritayla ilgili aşağıdaki bilgiler veriliyor:<br/>1. Elif, Zeynep ve Mehmet’in her birinin dört iş arkadaşı vardır.<br/>2. Zeynep ve Mehmet, Kemal ile iş arkadaşıdır.<br/>3. Kemal’in başka iş arkadaşı yoktur.<br/><br/><strong>Buna göre yukarıdaki haritada Elif kaç numarayla gösterilmektedir?</strong>",
      options: ["4", "5", "6", "7"]
    },
    en: {
      text: "The map above shows Dilara's coworker network. The map includes people and lines showing the connections between them. If there is a line between two people, they are coworkers. Besides Dilara, Elif, Zeynep, Mehmet, and Kemal are also on the map.<br/><br/>The following information is given about the map:<br/>1. Elif, Zeynep, and Mehmet each have four coworkers.<br/>2. Zeynep and Mehmet are coworkers with Kemal.<br/>3. Kemal has no other coworkers.<br/><br/><strong>Accordingly, which number represents Elif on the map above?</strong>",
      options: ["4", "5", "6", "7"]
    },
    correctAnswerIndex: 1
  },
  {
    id: 23,
    images: [],
    tr: {
      text: "Aynı haritaya ve bilgilere dayanarak: <strong>Henüz Kemal ile iş arkadaşı olmayan Dilara, Mehmet aracılığıyla tanışacağına göre, Dilara haritada kaç numarayla gösteriliyor olabilir?</strong>",
      options: ["1", "2", "5", "8"]
    },
    en: {
      text: "Based on the same map and information: <strong>Since Dilara, who is not yet a coworker with Kemal, will meet him through Mehmet, which number could represent Dilara on the map?</strong>",
      options: ["1", "2", "5", "8"]
    },
    correctAnswerIndex: 1
  },
  {
    id: 24,
    images: [],
    tr: {
      text: "Okuldaki Çevre Kulübü bir geri dönüşüm projesi başlatmıştır. Her öğrenci getirdiği malzemeleri geri dönüştürebilmek için aşağıdaki kurallara uymalıdır:<br/>1. Her kutu en fazla 10 malzeme alabilir.<br/>2. Bir kutunun geri dönüşüm işlemi toplam 5 dakika sürmektedir.<br/>3. Geri dönüşüm işleminin aynı anda gerçekleştirilebildiği 3 masa vardır.<br/>4. Her masada aynı anda yalnızca bir öğrenci çalışabilir.<br/>5. Öğrenciler geliş saatlerine göre geri dönüşüm işlemine başlarlar.<br/><br/><table class='data-table'><tr><th>Öğrenci</th><th>Malzeme Sayısı</th><th>Geliş Saati</th></tr><tr><td>Ayşe</td><td>8</td><td>12.05</td></tr><tr><td>Mehmet</td><td>14</td><td>12.00</td></tr><tr><td>Zeynep</td><td>6</td><td>12.00</td></tr><tr><td>Kadir</td><td>12</td><td>12.10</td></tr></table><br/><strong>Buna göre aşağıdaki ifadelerden hangisi yanlıştır?</strong>",
      options: [
        "Mehmet geri dönüşüm işlemini 12.10’da bitirecektir.",
        "Tüm geri dönüşüm işlemi 12.20'de biter.",
        "Toplamda 6 kutu malzeme dönüştürülür.",
        "Kadir geri dönüşüm işlemine başlayacağı esnada tüm masalar doludur."
      ]
    },
    en: {
      text: "The Environmental Club at school started a recycling project. Every student must follow these rules to recycle the materials they bring:<br/>1. Each box can hold a maximum of 10 materials.<br/>2. The recycling process for one box takes a total of 5 minutes.<br/>3. There are 3 tables where the recycling process can be performed simultaneously.<br/>4. Only one student can work at a table at the same time.<br/>5. Students start the recycling process based on their arrival times.<br/><br/><table class='data-table'><tr><th>Student</th><th>Number of Materials</th><th>Arrival Time</th></tr><tr><td>Ayşe</td><td>8</td><td>12.05</td></tr><tr><td>Mehmet</td><td>14</td><td>12.00</td></tr><tr><td>Zeynep</td><td>6</td><td>12.00</td></tr><tr><td>Kadir</td><td>12</td><td>12.10</td></tr></table><br/><strong>Which of the following statements is incorrect?</strong>",
      options: [
        "Mehmet will finish his recycling process at 12.10.",
        "The entire recycling process for everyone finishes at 12.20.",
        "A total of 6 boxes of materials are recycled.",
        "All tables are full at the exact moment Kadir begins his recycling process."
      ]
    },
    correctAnswerIndex: 3
  },
  {
    id: 25,
    images: ["images/img_50.png", "images/img_51.png", "images/img_52.png", "images/img_53.png", "images/img_54.png"],
    tr: {
      text: "Yasemin odasına ilk görselde verilen süslemeyi yapmak istiyor. Ancak süslemenin bir parçasını kaybetmiş.<br/><br/><strong>Süslemeyi tamamlaması için soru işareti yerine aşağıdaki seçeneklerde (A, B, C, D) verilen parçalardan hangisi gelmelidir?</strong>",
      options: ["A", "B", "C", "D"]
    },
    en: {
      text: "Yasemin wants to make the decoration shown in the first visual for her room. However, she has lost a piece of the decoration.<br/><br/><strong>Which of the pieces given in the options (A, B, C, D) below should replace the question mark to complete the decoration?</strong>",
      options: ["A", "B", "C", "D"]
    },
    correctAnswerIndex: 2
  },
  {
    id: 26,
    images: ["images/img_55.png", "images/img_56.png", "images/img_57.png", "images/img_58.png", "images/img_59.png"],
    tr: {
      text: "Her bir yüzü farklı bir renge boyanmış bir küpün üç farklı yönden görünümü ilk görselde verilmiştir.<br/><br/><strong>Buna göre seçeneklerdeki (A, B, C, D) görünümlerden hangisi bu küpe ait olamaz?</strong>",
      options: ["A", "B", "C", "D"]
    },
    en: {
      text: "Three different views of a cube, where each face is painted with a different color, are given in the first visual.<br/><br/><strong>Which of the views in the options (A, B, C, D) below cannot belong to this cube?</strong>",
      options: ["A", "B", "C", "D"]
    },
    correctAnswerIndex: 3
  }
];

window.questions = [...questions, ...questionsPart2];
