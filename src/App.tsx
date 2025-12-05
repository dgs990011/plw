import React, { useState } from 'react';

interface AppItem {
  id: number;
  name: string;
  description: string;
  iconUrl: string;
  appUrl: string;
}

interface ImageBoxItem {
  id: number;
  imageUrl: string;
  linkUrl: string;
}

function App() {
  const [heroImage] = useState('https://pic1.imgdb.cn/item/6920248f3203f7be001d08f1.jpg');
  const [heroTitle] = useState('');
  const [heroDescription] = useState('');

  const [apps] = useState<AppItem[]>([

       {
      id: 1,
      name: '非凡娱乐 ',
      description: '（新台大水）',
      iconUrl: 'https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fd.jpg',
      appUrl: 'https://bakmry.gziasti.com/app/register.php?site_id=1050&topId=880722&selfPlanId=855049'
    },
    {
      id: 2,
      name: 'top1体育',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/686c718458cb8da5c895dcf1.jpg',
      appUrl: 'https://bakmry.gziasti.com/app/register.php?site_id=1051&topId=457911'
    },
         {
      id: 3,
      name: '保时捷国际',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68dbfe46c5157e1a884b253c.jpg',
      appUrl: 'https://bsjh5.agrleo.com/app/register.php?site_id=134523275&topId=82386'
    },

         {
      id: 4,
      name: '东升国际',
      description: '十年老台',
      iconUrl: 'https://pic1.imgdb.cn/item/68692e6758cb8da5c89176fe.jpg',
      appUrl: 'https://tz.wx-zxivoq2.com/app/register.php?site_id=2173&topId=1090266'
    },
            {
      id: 5,
      name: '国际人',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68a570b358cb8da5c83d12f7.jpg',
      appUrl: 'https://tz.wx-ulslyd12.com/app/register.php?site_id=2304&topId=1112856'
    },

                {
      id: 6,
      name: 'NG体育',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68b3af8358cb8da5c8655b32.jpg',
      appUrl: 'https://nvjmce.hfjcl.com/app/register.php?site_id=1019&topId=10325130'
    },
            {
      id: 7,
      name: '赏金国际',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/688c1d0e58cb8da5c8f69d23.jpg',
      appUrl: 'https://xjvueb.hefaship.com/app/register.php?site_id=1010&topId=3094701'
    },
              {
      id: 8,
      name: '壹号娱乐',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/688c1d0e58cb8da5c8f69d21.webp',
      appUrl: 'https://gfvgx.jgqvji.com/app/register.php?site_id=800&pt=20784FBB-9EDA-E1C7-A955-C82CA771D0F3'
    },
                   {
      id: 9,
      name: '亿万28',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68a570b358cb8da5c83d12f9.jpg',
      appUrl: 'https://xjvueb.hefaship.com/app/register.php?site_id=1017&topId=7061046'
    },
    {
      id: 10,
      name: '超凡国际',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68692e6558cb8da5c89176f7.jpg',
      appUrl: 'https://pkajim.hfjcl.com/app/register.php?site_id=1032&topId=1056008'
    },
        {
      id: 11,
      name: '问鼎国际',
      description: '十年老台',
      iconUrl: 'https://th.bing.com/th/id/R.3ff55b6d5ae91f929259d3f5fe8ee346?rik=KMsNN8o%2bXu04JQ&riu=http%3a%2f%2fimg.xz7.com%2fup%2fico%2f2024%2f0911%2f1726047132590171.png&ehk=u0ICtB1tC5UuQseS9l1DHMjKl1x8crEE3pggKWNac1Y%3d&risl=&pid=ImgRaw&r=0',
      appUrl: 'https://onkrcy.hefaship.com/app/register.php?site_id=1020&topId=21543657'
    },

         {
      id: 12,
      name: '旺财28',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68b3af7e58cb8da5c8655b00.png',
      appUrl: 'https://wlkyiy.paradisemall.net/app/register.php?site_id=1012&topId=3926701'
    },
    {
      id: 13,
      name: '巅峰国际',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68692e6658cb8da5c89176f8.jpg',
      appUrl: 'https://gfvgx.jgqvji.com/app/register.php?site_id=1030&topId=1744632'
    },
    {
      id: 14,
      name: '征途国际',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fc.jpg',
      appUrl: 'https://pkajim.hfjcl.com/app/register.php?site_id=1031&topId=1890399'
    },
     {
      id: 15,
      name: '多多28',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/686f644658cb8da5c899de0b.png',
      appUrl: 'https://wlkyiy.paradisemall.net/app/register.php?site_id=1021&topId=5519693'
    },
                {
      id: 16,
      name: '大满贯',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/6911f7f73203f7be00ed9d46.jpg',
      appUrl: 'https://tz.wx-gujdtq3.com/app/register.php?site_id=2228&topId=1661558'
    },
      {
      id: 18,
      name: '28圈',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/68692e6658cb8da5c89176f9.jpg',
      appUrl: 'https://156.234.70.2:61106/#/link?allwin=9437468'
    },
                {
      id: 19,
      name: 'NG28',
      description: '首存100+100',
      iconUrl: 'https://pic1.imgdb.cn/item/689dd5ec58cb8da5c8251893.jpg',
      appUrl: 'https://38.181.23.18:60004/#/link?allwin=22198286'
    },
                   {
      id: 20,
      name: '星耀国际',
      description: '优先注册领取百万红包雨（12月8号正式上线）',
      iconUrl: 'https://pic1.imgdb.cn/item/69327e9bd1e741a32bf19523.jpg',
      appUrl: 'https://gedxs.hcjwj.com/app/register.php?site_id=1057&topId=22066'
    },
  ]);

  const [imageBoxes] = useState<ImageBoxItem[]>([
    {
      id: 1,
      imageUrl:  'https://pic1.imgdb.cn/item/69202ede3203f7be001d1dd5.webp',
      linkUrl: 'https://t.me/hhkk8899'
    },
    {
      id: 2,
      imageUrl: 'https://pic1.imgdb.cn/item/69202de83203f7be001d1d9d.webp',
      linkUrl: 'http://safew.org'
    },
    {
      id: 3,
      imageUrl: 'https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fb.png',
      linkUrl: 'https://www.91ajs.com'
    }
  ]);

  const handleAppClick = (appUrl: string, e: React.MouseEvent) => {
    if (appUrl && appUrl !== '#') {
      e.preventDefault();
      window.open(appUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageBoxClick = (linkUrl: string, e: React.MouseEvent) => {
    if (linkUrl && linkUrl !== '#') {
      e.preventDefault();
      window.open(linkUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative min-h-48 max-h-96 overflow-hidden">
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-auto min-h-48 max-h-96 object-contain transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Hero Content */}
            {(heroTitle || heroDescription) && (
              <div className="p-4 sm:p-8 md:p-12">
                {heroTitle && (
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                    {heroTitle}
                  </h1>
                )}
                {heroDescription && (
                  <p className="text-sm sm:text-lg text-gray-600">
                    {heroDescription}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Apps Grid Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Mobile-optimized grid layout */}
          <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {apps.map((app) => (
              <div key={app.id} className="flex flex-col items-center">
                {/* Clickable Square App Icon */}
                <div className="relative mb-3 sm:mb-4">
                  <a
                    href={app.appUrl}
                    onClick={(e) => handleAppClick(app.appUrl, e)}
                    className="block w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
                  >
                    <img
                      src={app.iconUrl}
                      alt={app.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </div>

                {/* App Name */}
                <h3 className="w-full text-center text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                  {app.name}
                </h3>

                {/* App Description */}
                <p className="w-full text-center text-xs sm:text-sm text-gray-600 leading-tight">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Image Boxes Section */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {imageBoxes.map((box) => (
              <div key={box.id} className="relative">
                <a
                  href={box.linkUrl}
                  onClick={(e) => handleImageBoxClick(box.linkUrl, e)}
                  className="block w-full h-32 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.99]"
                >
                  <img
                    src={box.imageUrl}
                    alt={`Image Box ${box.id}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-gray-500">
              © 2025 Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
