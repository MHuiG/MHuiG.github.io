/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","abf02b3bafd68e70ed4e155147dc7da9"],["/about/index.html","b583680050ad3206967f2bf71394f932"],["/archives/2018/11/index.html","7a83b3ca508429d856b40d181bdc778b"],["/archives/2018/12/index.html","6046d2a9134ed13997466926d28c329d"],["/archives/2018/12/page/2/index.html","1392df4eeb3d22ba6621352a16321aea"],["/archives/2018/index.html","9e1fa7b82c1482220c036305f0a5e288"],["/archives/2018/page/2/index.html","4e3fc71b53ad0c4a9a81a8772d1b4ce7"],["/archives/2019/09/index.html","2731ce0353b089ed39bff3c96275aef8"],["/archives/2019/09/page/10/index.html","8ea1c16b539f2e54cea059938c8a1e9a"],["/archives/2019/09/page/2/index.html","3bb961903efed4cfe932aabc9ff676e2"],["/archives/2019/09/page/3/index.html","6ff56e44a750c0014a40f458ea519e07"],["/archives/2019/09/page/4/index.html","1bbe4ed630ed3002d30ea76517d9f3f5"],["/archives/2019/09/page/5/index.html","ad7fb97dedf1f425fe7611e470e2e746"],["/archives/2019/09/page/6/index.html","e69cd30ff3ce45e93a00d62a149316ee"],["/archives/2019/09/page/7/index.html","a089051ec0d79660d3860dd8ecd2610e"],["/archives/2019/09/page/8/index.html","0576956ac6abf7fb98e0b32a1932b5ea"],["/archives/2019/09/page/9/index.html","54f1db100c7b0f54e0f636392e10c6f3"],["/archives/2019/10/index.html","00bbcb60766f6dfac2a27fec73638b01"],["/archives/2019/11/index.html","56d159c62b4ce889d5143c3efefad24a"],["/archives/2019/12/index.html","d982df66bdf83d973e0783e91f740232"],["/archives/2019/index.html","e87214944cf6428ceec1d133e9e87019"],["/archives/2019/page/10/index.html","0e04e2a074d6e291f77ef00492f29793"],["/archives/2019/page/2/index.html","b3b848fe49d418db92e7d0151c16490f"],["/archives/2019/page/3/index.html","f58f379af76b519da433b9ee5a399c10"],["/archives/2019/page/4/index.html","df6941c76843926c0f66b8e86b7d13cb"],["/archives/2019/page/5/index.html","f39d6c77e8ded186dc808000f97eb05c"],["/archives/2019/page/6/index.html","eedeea9c0ad0f5d8f7bdb91ab9430d66"],["/archives/2019/page/7/index.html","66e58e32e552f2baee0d4bff2713ebd2"],["/archives/2019/page/8/index.html","e5298ccb02f376b6de3a88767f826b04"],["/archives/2019/page/9/index.html","ba20327935cc71cbc7f209eac0c69600"],["/archives/2020/01/index.html","9f67e3be6c171c3697ed809f4a403d19"],["/archives/2020/02/index.html","4b4c2da17d864469b1f2c24d478e6221"],["/archives/2020/02/page/2/index.html","22511006fce9698ff3cb610d225a3975"],["/archives/2020/03/index.html","8b4988339e933c3bf5d196e898ccaefb"],["/archives/2020/04/index.html","d1dfeaa4deab0c1bd28260eaf41e8faa"],["/archives/2020/05/index.html","4391206e6fe9d18ae3f95e40621e2820"],["/archives/2020/index.html","f8172700b722d473c5602a33dfbd5776"],["/archives/2020/page/2/index.html","09a22838498e363f43a7a115969b0788"],["/archives/2020/page/3/index.html","2cb0740b959464c6de47fe1a6f703348"],["/archives/index.html","71f4caebded68aaad789da9f2ef1c3de"],["/archives/page/10/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/11/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/12/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/13/index.html","71f4caebded68aaad789da9f2ef1c3de"],["/archives/page/14/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/15/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/2/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/3/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/4/index.html","71f4caebded68aaad789da9f2ef1c3de"],["/archives/page/5/index.html","71f4caebded68aaad789da9f2ef1c3de"],["/archives/page/6/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/7/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/8/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/archives/page/9/index.html","02ea2b42533d3838cdf3556035a4cc5b"],["/assets/favicon/favicon_128.png","c0f20ecec783191bd144eafa31bdb91e"],["/assets/favicon/favicon_144.png","bdf741f0ed8d9fd582b126ee938ac840"],["/assets/favicon/favicon_180.png","5f122d0d3cd72e90fdc1b8926f9a9cba"],["/assets/favicon/favicon_192.png","e49c872333fcad9390ee02cfffc11006"],["/assets/favicon/favicon_256.png","48cb3a595a985ababbe3028bdc4c5097"],["/baidu_verify_DZhcJiT1Cb.html","3276b9d894b7878e7f7c8064b8b808a4"],["/categories/51/index.html","7999a136bebcc41cb7fd712d6ff56d50"],["/categories/bigdata/index.html","b169a84137ac0c16cb508e476ed7475f"],["/categories/hello/index.html","10128c88405140578d05d193b7e708f6"],["/categories/index.html","3eb5122d0aa4cee47e18a1615b616c78"],["/categories/javascript/index.html","7fa1a0ab64247ff49ed53f066b6bbdd5"],["/categories/linux/centos7/index.html","1c6c9ba45e01d1e68c23488bef1c45da"],["/categories/linux/centos7/python/index.html","d08cb9d8835c29fdc8989c4c35bccda7"],["/categories/linux/index.html","44c0a017dc3a37aa563c1276bdcd9ffa"],["/categories/linux/kali/index.html","3f1d0887fc5da5890d278e506bb00688"],["/categories/linux/page/2/index.html","21555822e57d5b814839d16a3817db09"],["/categories/linux/shell/index.html","c8ece349dc1b754e3ab67ee18ce30aef"],["/categories/math/index.html","a85e0660abb12c90992a58cb8e81f227"],["/categories/math/latex/index.html","00cc3e8e00df3e426da681e74ea08c92"],["/categories/math/数学建模/index.html","5fde6cb0934d4381dfa4e86704e19105"],["/categories/math/概率/index.html","4cfcc65d50d04b76a55dc600d0cd87d4"],["/categories/math/线性代数/index.html","53ee0d373d2f06e1e8dcb9f877d206d3"],["/categories/npm/index.html","30a695a96572c9e09641b9c8d52fbd2a"],["/categories/python/index.html","62be61ae6c3be590afb3df67b01269af"],["/categories/python/page/2/index.html","739a012f8c608a00fe4cc0a7410b0aab"],["/categories/python/反编译/index.html","b976173f9eab48eeb261432eb246ec95"],["/categories/python/密码学/index.html","ea556fbfe96d73b0c8aa42732774269a"],["/categories/python/密码学/page/2/index.html","2b55b691bd9d22201ee05ecfd8fb7050"],["/categories/python/解释器/index.html","2b48c9721a01ebd0dd2c46d765337c77"],["/categories/time/index.html","c28f3b6d5f7459a958bd41aa63890f35"],["/categories/web/django/index.html","38d28c18d1ba5cc412e60132f303811c"],["/categories/web/hexo/index.html","fa45e27a54ef5e9b840865500f6f44b1"],["/categories/web/index.html","b5bc618dcf6c2caa679ba39e668d6296"],["/categories/web/nginx/index.html","31bd84275a3305aac3236626127f507c"],["/categories/web/page/2/index.html","c10a0668a681b3a36f9edaafe7f15e9a"],["/categories/web/内网穿透/index.html","1f38e75aadbcef7eaf630af1fd9d1b7f"],["/categories/windows/gcc/index.html","e814c1f464cdfe43e15a6537ab92becd"],["/categories/windows/index.html","5fe2ef715d02f52f8d195ab003d3acbf"],["/categories/windows/netcat/index.html","a2fbc424871e114cbf6be404943fad23"],["/categories/会议报告/index.html","41605ba87cc54929eaac5e3c99adb822"],["/categories/大数据/flink/index.html","e679b1ce31b5316de8e0acef00569692"],["/categories/大数据/hadoop/index.html","782987d8165b1ed0420acf6eee099313"],["/categories/大数据/index.html","a4dc0373c0c0d06199ea4dab040b9fe1"],["/categories/大数据/nosql/index.html","9ab98ebd2fb2a22d800fb8b9b150652e"],["/categories/大数据/page/2/index.html","653b8ccfbc6bfb9f3183e101bc634999"],["/categories/大数据/page/3/index.html","78c131dcc92eb61c111a68366c1119e8"],["/categories/大数据/page/4/index.html","38a04830549e285ad6079f21ea381a6b"],["/categories/大数据/page/5/index.html","adac4c7c1cc16e3602ebf35a52a59a59"],["/categories/大数据/page/6/index.html","2acf34689f1baa643f8e9ed5ce7fe265"],["/categories/大数据/page/7/index.html","84835d56ae88a613d585ae4195311fe0"],["/categories/大数据/page/8/index.html","0c9f27b6a82cc4d8bcb314708c659f11"],["/categories/大数据/大数据处理技术/azkaban/index.html","d948b0acc9d60cae629b19eb56d99091"],["/categories/大数据/大数据处理技术/echarts/index.html","2118e54a97cf860dee977de642f1bb93"],["/categories/大数据/大数据处理技术/flume/index.html","1dcbd7091126941c8eef673979ea12d3"],["/categories/大数据/大数据处理技术/hadoop/index.html","660d4fb2df1c2496688fbfd49f729947"],["/categories/大数据/大数据处理技术/hdfs/index.html","b2623f7e35c19ee8c0d2f19e8b2ca4f5"],["/categories/大数据/大数据处理技术/hive/index.html","0494563239f096128897fd9146109ddc"],["/categories/大数据/大数据处理技术/index.html","27367054161160968e2942b94d6699eb"],["/categories/大数据/大数据处理技术/kafka/index.html","1885ca67d642a0e0454d148365ca7a21"],["/categories/大数据/大数据处理技术/mapreduce/index.html","1f1c630bef8ccf0f6334f88affbe34c8"],["/categories/大数据/大数据处理技术/mapreduce/page/2/index.html","a466944ae295c9d83089f01925be3608"],["/categories/大数据/大数据处理技术/page/2/index.html","2722f5cfd352dca5808845164e6a0dde"],["/categories/大数据/大数据处理技术/page/3/index.html","0e20dcdb905ce4fc747dba5afd873c1d"],["/categories/大数据/大数据处理技术/page/4/index.html","01ffd84cb4f41a727a7ce9e420f0ea0b"],["/categories/大数据/大数据处理技术/page/5/index.html","ee50ef034b05036ca26cb037095da55f"],["/categories/大数据/大数据处理技术/page/6/index.html","b4b045fe1fe956f95cb88f184a05cf03"],["/categories/大数据/大数据处理技术/sqoop/index.html","f5532141eff80f81f54e2710d071488d"],["/categories/大数据/大数据处理技术/yarn/index.html","607c6b1c14703457b7bf34a0f1894806"],["/categories/大数据/大数据处理技术/zookeeper/index.html","fa3773d663223c1d4016f9a3f51ce249"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","5c467e708adda9f82ac0d190ad8a9571"],["/categories/大数据/数据可视化/index.html","9b6da678972dc92620acdab23823acf5"],["/categories/大数据/数据挖掘/index.html","47cb60e53061c44d11339bb4fc3a624b"],["/categories/实验性/index.html","086f23048e872daa65ca2f53c25f329e"],["/categories/操作系统/index.html","c8aaae02be6eb0bea9d0d7a72c931487"],["/categories/机器学习/index.html","7d60cd1da8f840796824ddcfd4d60673"],["/categories/机器学习/机器视觉/index.html","8823e801ecae88badad9203e6a31e0d1"],["/categories/模板/index.html","6bda0391bc21ae3f91df7d9cde8cef73"],["/categories/模板/maven/index.html","ef3b92d3b97dbfead41a93a615282f22"],["/categories/错误集锦/centos7/index.html","44b1a6cc4a006b91661d589f1d4144c1"],["/categories/错误集锦/index.html","2ff98a5a848b339af97fcb6c997c5aa5"],["/css/style.css","6ec3da0f1717bc1e6cf9dfbaaeefe2e8"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","67971a386dddd92c4d2813f4c873050f"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","d6c8fd7bc036ecfd9d28d97d8e4def58"],["/js/app.js","590daaae5220c109a3a8917e797ea4ff"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","0802d88492f08a1f5c537866c3eb4f03"],["/page/10/index.html","389335274f7f448194d76a2e5386f0c7"],["/page/11/index.html","387dfc90c096b839aa501c5321c15411"],["/page/12/index.html","62964dc18748f67cbf75689af531255a"],["/page/13/index.html","401920cb67ad8f58f66341e0a44d4e80"],["/page/14/index.html","b8a0ecccaafce184ae5a3967a9d8693a"],["/page/15/index.html","10e07c1e4672cb04a01ffe6fc62f6540"],["/page/2/index.html","ac8a87ffa5be2ad69fc15683948eb74e"],["/page/3/index.html","0bfe323ca79d1b3810805afbcca066ed"],["/page/4/index.html","5c5697cf34efa740ec5076bcf7c6988f"],["/page/5/index.html","d86ca3381c3cecab6b69dcf88e00fa2a"],["/page/6/index.html","c4c167474d36522c49af0a44d80a11b6"],["/page/7/index.html","1bc398e5bbe5093024ee68616caaa0f3"],["/page/8/index.html","14a644ccf953b982f6db591db71ded84"],["/page/9/index.html","6fb0f56f05ded160d89fe691161e41ad"],["/posts/1009d3f6.html","170f1332677d453b6e8065d5942860b5"],["/posts/10cabcd3.html","b522d1c59ec9a8d23ff9fd9f392df182"],["/posts/129a9db5.html","1d84b97858db239c80fadc7a6a5f7dde"],["/posts/14fa5bba.html","826f2ac8bf11183c2f52d74e76eed4f3"],["/posts/1601d925.html","b0f6acce3c5c4217b93cd5edd2b0b069"],["/posts/1e1e5118.html","da67628d18efcffedda74ec616e17e0d"],["/posts/1f519fd3.html","537f957d2f03661022b1d7a54475c552"],["/posts/253269c2.html","8b7ffca86f62956c1773705254459b29"],["/posts/2ffb45fa.html","5851b0e598e8b651a692eb190b6326d2"],["/posts/2ffcda9a.html","16e0506bf8bb1b842e6bebf7498d7caf"],["/posts/3098d714.html","89ab7eb70e846dd51786e1c55f9d2f6b"],["/posts/30b27542.html","e139871bdb9fc7ed8fdd615ca26745c4"],["/posts/323ed1b8.html","e7e2b4859e09ff38ab93c76260d5a2a0"],["/posts/32c5d0d9.html","72d61b307af2e07f5d04efeb5466e988"],["/posts/32ffa341.html","6d8e80e2bd5130f973b6e43d250108ec"],["/posts/357dc334.html","c61c7cb349d5129147e780482f8f44c7"],["/posts/376025fe.html","44896b6bfbf66661e736cdc61d8f1ae6"],["/posts/38a07d35.html","9d93c2a3f343f17ffa539ad9504067be"],["/posts/3bfd1783.html","6048f18d9f40b786bd1c95337a38c8fb"],["/posts/3d7d3997.html","02019037f3a85e541998e7a9285005db"],["/posts/429246c5.html","6dc434acb85451c4f4f04857a34e1372"],["/posts/42ecd398.html","d54ccc74122e7a086ab3d634e42f6a7f"],["/posts/46b39789.html","37eb0a26256916b4574f08b2b79150d0"],["/posts/483290b5.html","576796a96f459a49a7b15ef8edba83e8"],["/posts/48a224d1.html","78a03b8c9a278d9e7297326695b17ab1"],["/posts/48a2d97d.html","948e64653b5769ee7b72df99a380388c"],["/posts/4920f048.html","1a11c92cf8597362d9b9e2292c59e3d9"],["/posts/4a17b156.html","7d0ce7425e77a7d9237c5beaf97dc402"],["/posts/4a71123b.html","4099ba75fd288c92a2e7c4b2cf46268d"],["/posts/4a71133b.html","92dc9de8fb6743cc3026108c2c0331b6"],["/posts/4c2deb5e.html","2ba8b6a0a7b148e1b910ac557d952d37"],["/posts/4dd55455.html","cb829032c2a3257d23ce83ed67263ba4"],["/posts/4e6873c5.html","8e710b809db7e7a372b80347a0f93d95"],["/posts/4edeccca.html","5d208a2527fcbd626cfa19e4228b2aa1"],["/posts/53ab8d74.html","3c76e9d31b094855874ed62320c1d178"],["/posts/53d0a404.html","1cfc7b02507490762c7493ad48b7c102"],["/posts/55b264de.html","09234fbd03cd04778765e549c42fe2df"],["/posts/564714f9.html","23dbb0d4fa36505649e51ac2f08214cf"],["/posts/594433a.html","88e99a55eba257293a72bd8ac94d6651"],["/posts/5bb73de.html","2b2f1852891cb641ccb066baffe6c12c"],["/posts/5bfe6261.html","a6dd462e65057d98b19d69439416821f"],["/posts/5cc46d49.html","e9e36db41a29ec162426da32eae812db"],["/posts/5e7ad437.html","e2255b1316ef2fbbf1229a71a578d73a"],["/posts/5efb0a25.html","f1175034bb89a2bc7e084fb3a07fb8d1"],["/posts/6009a9d8.html","4e9c5b9b98f9df17a8dac9557356b305"],["/posts/606a512e.html","4d0292d8e584e0f0078bc7c74061f00e"],["/posts/610da529.html","8d231a1bb040665d46dea9edf018a00e"],["/posts/63637a24.html","e703c27eaf6969d81c234456a133c86b"],["/posts/695a6c4b.html","4f8801cf7132f3ae38a9934f49cf4beb"],["/posts/6980c27e.html","c38f3ff683aad7e497a710ae142a6092"],["/posts/6acc7206.html","fd2f3aa4905e86848f835d3ef9d3a46f"],["/posts/6cfc95e.html","3f54a24f8e07c1e1f0dedfc0497aa500"],["/posts/6e430c9c.html","7a440a9b36096c72d1ef1bd9af15c70f"],["/posts/714668f9.html","6580e1aabd8392d263b752861fc4fe61"],["/posts/72b49ca2.html","b2e0bcb1cf499bf5983745c0bf29371a"],["/posts/72cd4c87.html","eef61737215e9884b6c982cf084cdf4a"],["/posts/75ee5fa.html","cbb9b1ee3a849403d2abfeb6fcc38ba0"],["/posts/780b9de2.html","acb54145cb4701cc35d8389e24a55781"],["/posts/7827182c.html","e5619cdc1da641696846b1119c581cac"],["/posts/787a8307.html","416c35513c28d13bfbbce562efb31c7b"],["/posts/7cb85200.html","971bbc3dfa0f57c0bf3b4d186f29f2f7"],["/posts/7d6b1f3c.html","589a29d53a152ce354d7f4c17fc3cea2"],["/posts/7def3950.html","8841c269235a9f5dfed297b6f67768d3"],["/posts/801b51ef.html","92f345f5a84f8c0d56ee2eee5bab3106"],["/posts/8485750c.html","f251edd93f587fa84c5d95e5c140aa2f"],["/posts/87e9dc75.html","c91a968b63b5fa787432185912fe9ed6"],["/posts/897831fa.html","bc6b8fca804be1fb67c2dd4a0553b65d"],["/posts/8ce758a7.html","4bb2ad84907272be3f8367a58f5fae56"],["/posts/91223731.html","676a4e9b8c6df2e584d9ac48b549bca7"],["/posts/91953e39.html","7c26c1d2d913082b67c4ce6aba27b586"],["/posts/96f894a7.html","0cb238652f5a9d14130a57f85e506488"],["/posts/980d646e.html","4f6fe8054e835d88998ca3a325cb63f3"],["/posts/98579906.html","f09c454334307165a91b71bc7f1c0add"],["/posts/9b624d43.html","fcb028df46f6328c1bc11036d275258c"],["/posts/9bc3b11e.html","c8271e394e07efd88721e0a34ae88210"],["/posts/9ef6ff16.html","1a38028e94a236a51b5ae4086b943d61"],["/posts/a105df5c.html","62f3b3ec8e519e4cfab31ac13c6bdf71"],["/posts/a2af0ea3.html","e55943d182d33224b57e55431069035c"],["/posts/a3ed1548.html","9f59cf4a1088e08c57e0a1b209fc0c9c"],["/posts/a4a39746.html","f240d54e3c3d85d78d6b5ac56c66afd9"],["/posts/a5d678be.html","6c3b2a31d1df33bc20a6d2742ed09310"],["/posts/a5eec80c.html","8065fee9c2dba861b75d72be38f00db7"],["/posts/a79b4f5b.html","90792666dc58bce7974e175f5eb6e59f"],["/posts/a81e94e9.html","db79721a601bfd7c83c922f751355a15"],["/posts/aa02a436.html","0089ac056b0565d281db895e46cb4125"],["/posts/ad720447.html","f8a0d6ccb9c0001333300266aac16a14"],["/posts/b0ef01f5.html","2bd0dc67724fb6102c88cdb342e1074c"],["/posts/b190dcb.html","21e8c69f14965f7727da3c1bc26ace88"],["/posts/b387b8d5.html","27040e3b926b5143b217a6cc373f7c99"],["/posts/b4a5318a.html","71ad43c8bfd23bfd1b440aabc093d66d"],["/posts/b4fa1b4e.html","c324b2f84b2433115e60c18a6d807bc4"],["/posts/b59b6a41.html","5383a8a5971d425537572dc2b3cdb00d"],["/posts/b6ffaac2.html","b55edac57a7a82b8169e7c53a8e01ad9"],["/posts/b9b7baa7.html","22673ab3e2c306533abf65fd93dc5dd7"],["/posts/ba036091.html","4cd9bd8e482f2c0d5b59a3adb6d6c1c8"],["/posts/bb7c60d.html","270d8b41150592d106bd5aabaf11da81"],["/posts/bbe38b68.html","3ea0a261b68991e833f0a4f5f45f8e7d"],["/posts/be57c430.html","e416e791f6ab8eb4835434db5f9db99a"],["/posts/bfb9db00.html","37e02e7b630ca0315399fb0becc022bb"],["/posts/bfbc2e0b.html","bf5c7a080c3b333b3924f06bdecde374"],["/posts/bfe2ff2a.html","b0974909009cbde05605938bb19e6b80"],["/posts/c16b9d82.html","c9524cc729f997c1fee3372ee03b3155"],["/posts/c270974.html","716305e3dd3477b40951019f8f68ce40"],["/posts/c2c98f74.html","ca2aa1b4e536322bf55ee2b532652a56"],["/posts/c5520104.html","490d31d4ee0eae2611c2b1db52835ceb"],["/posts/c81f7fcf.html","376057bc580439634ea3f4a4b6f66e8a"],["/posts/c89a329f.html","daea39ea678e7e3e1d6dc35737f267d2"],["/posts/c8fc3430.html","c6c834b5e4345c9c5c5fad5df5b9b7ae"],["/posts/c91f449a.html","4fcc35994a43a0a40849ccc087039f45"],["/posts/ca7a6c92.html","ecad25666a0a2afe8007ba30197ba0c1"],["/posts/cc03340e.html","9aef06f267411e7b95a69d9079c22708"],["/posts/cdec63d.html","05385695668c92748becbd095bd7a137"],["/posts/d07ffe1c.html","a60ca28d8f5031781c4e3852b336b9d5"],["/posts/d178b062.html","c52d9f1c33e9651c6e3110bfde73b5db"],["/posts/d53724bc.html","16bc9c83cd472ccb622798746bd16567"],["/posts/d70eaced.html","8dd02b67f9c71e3536478b5ca8f8d5e4"],["/posts/d7edfddd.html","f0718090f762e2457604c8a74a3db90f"],["/posts/d8795dab.html","c55d79b79ff1ddcf0bdd9df270f8ca7f"],["/posts/e00c1bc.html","d0c8b8990cb79234b5dae68cac5c46f4"],["/posts/e3dcc811.html","020c557213468e77d37f1c0d6d19b716"],["/posts/e6f6b883.html","dae9d1be9dc8b8373bafb8343ff246e0"],["/posts/e821aeca.html","b0d2ab19f3fbc9bc1b32a13943a95fe5"],["/posts/e981c79e.html","538ecf9c77af394978dc0e855e64d720"],["/posts/e9fadccb.html","9bcc3b591b837060d4a7c127c5a0d4c7"],["/posts/ea7b2ec0.html","800ee1fe7afc0c30b92b73b88a131fd5"],["/posts/eb168c8b.html","dfa555a2a58f9d35522cbeb505488c81"],["/posts/ec477027.html","bc42f9c9c2812a0aac11e343ef1f87de"],["/posts/eeb47c66.html","a40702e98f8f2af9ca8e4df65c3d727f"],["/posts/f0765214.html","0b9a448c096dd419a1e094b07b505ad8"],["/posts/f0940727.html","d09054b568fe6ed0f983ed4d38fd7b99"],["/posts/f1ab62f1.html","5706b55f13fc55c921a36e4c6ecaf4a3"],["/posts/f3b50546.html","22249392bffe166aba14afa252c26558"],["/posts/f4524359.html","d3df1d847f04931505860eadf482044d"],["/posts/f4e10e30.html","731f57dca06c8f8574cd7c8e7d6a9e02"],["/posts/f70539ce.html","8a71ef627d565d040a9351b88b0ebea4"],["/posts/f77eee2d.html","4925ede684951a741d5bccc8b48772bf"],["/posts/f8d2d5ec.html","96c7e91bfe5e329fffc8a732ebc40e27"],["/posts/f9a25cd7.html","930705eac882f5172e850e6c2dab2f33"],["/posts/fb97a8a5.html","ba66f08ab53e4970be25be431e288f34"],["/posts/fc610c2d.html","5c0c0ae817a01b14287e645cefb92601"],["/posts/fec1c989.html","5a4e2ea6fe6227cba5d2bf4d52822cc3"],["/posts/fecd7f2.html","2ac8c77a97d7e1a23dea88903e337e31"],["/posts/xa6297acc.html","0bc84d8e6b9866b13a65175529e73ee4"],["/tags/51/index.html","4a1e113e56384658badd07ce573f4823"],["/tags/aes/index.html","088546ea01b0d2e5939b0293895fe894"],["/tags/anaconda/index.html","0286c4da7670760391e54186479d4def"],["/tags/azkaban/index.html","a84f7e19511c8b235f9d82bc3868354b"],["/tags/bigdata/index.html","1abc2ff994140dec6e14d4108feb46f0"],["/tags/cassandra/index.html","80e45bc045538ffe05496e1ae80f551c"],["/tags/centos7/index.html","fe830ed0497ac646d34cd97ad4e89799"],["/tags/cloud/index.html","8cda5bd202037abb0d350f5067e6dedb"],["/tags/django/index.html","186a35fa947f335d11cd13eb8cc3ecd7"],["/tags/echarts/index.html","f92442915a7533708dd3f6e703b9b380"],["/tags/flink/index.html","e03c072a1b81cf9ab9a953a190f6fc3d"],["/tags/flume/index.html","8f21d6d18f89cdb00ac7babd336c4fd3"],["/tags/frp/index.html","38d0a53bc16ad0bc2708a6bfc0701b69"],["/tags/gcc/index.html","ef292378afdc40a14b1dda902615efa0"],["/tags/github/index.html","bae3d3a40e27b6a805f5e28af1194f97"],["/tags/glob表达式/index.html","c4073be33b6a961df8afb84eec8d17c4"],["/tags/hadoop/index.html","21289d7c735be827d531c69ed328bac0"],["/tags/hadoop/page/2/index.html","e90bf5c33a6b841232d88c8d8848fea6"],["/tags/hbase/index.html","5c40299655e98b1d97b802b11d6f8060"],["/tags/hdfs/index.html","c42d1ccc1f9fdba664bc21d6114db2e0"],["/tags/hello/index.html","5185f3b0f7d3e77411a3675c729ad1f8"],["/tags/hexo/index.html","c00074132bee90f5a57cdf49669a5622"],["/tags/hive/index.html","0444f2e699c8864b47512c17150ac49f"],["/tags/https/index.html","e0a47b1a7df0fffdfbd77c35fc31535e"],["/tags/index.html","ff343e717348ee8c7be53bea730f2812"],["/tags/javaapi/index.html","ae5441f59e6e0b66c84fa6a8fabddb0d"],["/tags/javascript/index.html","837a5a60ca8650968d2363ce400bca36"],["/tags/jupyter/index.html","abd237ba83b6de60f516956d70c99d4d"],["/tags/kafka/index.html","7185b020b0d30e3c6148d77e86b61c02"],["/tags/kali/index.html","42b5a7d21d2229a6d21879843c6e524e"],["/tags/latex/index.html","137aa20a9c219df04e2ec823ec2917d2"],["/tags/linux/index.html","dc6ff0fddd435a3616d472e69d6f536d"],["/tags/linux/page/2/index.html","569d8b8f6fdf0593cac4f8d597f236f7"],["/tags/mapreduce/index.html","54d14a227aa091483fe4cc49f461ff5d"],["/tags/mapreduce/page/2/index.html","cebb8249f4d8eda75ad3abbb69b5e0a0"],["/tags/markdown/index.html","833bb92f07d4bc9d373a6c320baffc5d"],["/tags/math/index.html","fe89b275afb0eaf0a032ba056935996c"],["/tags/maven/index.html","bd057e9978f30cd18db0bc530dc5d03c"],["/tags/mongodb/index.html","f7157d4a2901b2e73bcf7901be044727"],["/tags/mysql/index.html","1f700329749d637e81385739c8711e92"],["/tags/neo4j/index.html","600b97d404091c699d8bc7012bb08065"],["/tags/netcat/index.html","c67c7d56841db521fdd7895158da93ef"],["/tags/network/index.html","c1e68c42432c214d19b9d3fc4726138b"],["/tags/nginx/index.html","dc946cb67315019ea995d02d72600bc4"],["/tags/nosql/index.html","09590def2876d7bd50e63c3a44097416"],["/tags/npm/index.html","18ce226bd2f2e83072a5930730a4ab95"],["/tags/pdf/index.html","1d49687473ccc447615f30583270e8f0"],["/tags/pdf/page/2/index.html","2169a5eeee8b4da02b17b2c9908888b4"],["/tags/pdf/page/3/index.html","ada0385b1413c0b3dabd51e4e4c3e302"],["/tags/pdf/page/4/index.html","ccd652c46cd524f3ca728c02edbbde47"],["/tags/pdf/page/5/index.html","c6a0c6861df47cb3027cddd9088bf8cd"],["/tags/pdf/page/6/index.html","0c5dbf13bb5a6b5897a75993516faf35"],["/tags/pdf/page/7/index.html","17dbc0feec454b76d684afa98aa10f5e"],["/tags/php/index.html","f5eaf2b2e3ddd3e027732ba3eaf0daf3"],["/tags/python/index.html","0683446a9705efc1a79bc3086bff698f"],["/tags/python/page/2/index.html","8262e58769f17319da77248b1a49555e"],["/tags/python/page/3/index.html","4c9806089a7a93b5dd01f7042e185e39"],["/tags/shell/index.html","e1b2ddfb73080fa0ad274e6697c87a7a"],["/tags/sqoop/index.html","6913c10a2e41f667c1616902c10cee9e"],["/tags/ssm/index.html","319513c75596bd4f2e01832e9b01f5c3"],["/tags/time/index.html","1a7d37d4a930b947d66d4b58bbc6ea95"],["/tags/web/index.html","33ac464253a67f8bc82efd2baddf20c1"],["/tags/websocket/index.html","86a7d94dd2404c8539cd042cfc959335"],["/tags/web安全/index.html","abe4d830377e2e211bd7d1e567e47102"],["/tags/windows/index.html","dcf00d5010b72a8b7c83de76ef9fbe46"],["/tags/xrdp/index.html","bf73d5c501db4edf4549d120d0dd54da"],["/tags/yarn/index.html","ac65053cf555fe1f1f3779edb34b6502"],["/tags/zookeeper/index.html","713263336bdd3a58546ab4ca655e488c"],["/tags/人工智能/index.html","d5ada3237ad15e445dba600962c03edc"],["/tags/内网穿透/index.html","dad9d61afaaeacd7552b2c74c7629374"],["/tags/分类器/index.html","c8f99752aedbb8ccf5c0d835fd354f3c"],["/tags/删除注释/index.html","429368149c99463c63ef654613835455"],["/tags/前驱图/index.html","b6e655475b1b5a3ba2b816cf666810a7"],["/tags/加解密/index.html","30e0f5f60b55c0e8e93ff266854c632b"],["/tags/加解密/page/2/index.html","90c3bd6406ac513b49e95601f16a87ab"],["/tags/历史/index.html","f3403450f0b414b7af19a0a3dc8b1ed2"],["/tags/反编译/index.html","4d7d4bd23e7ddb05a45c772a91b021a3"],["/tags/反调试/index.html","6e4fe4ef482c866d9c2f60b3277baa5e"],["/tags/图像/index.html","5b1629040164810fdf5aba3d38219a95"],["/tags/大数据/index.html","1f0597a3ccbf0365319700cab0051ac0"],["/tags/大数据/page/2/index.html","1d4619de6b276f86dad8a367ac28c60c"],["/tags/大数据/page/3/index.html","4fe1f778a518ed7746a0a5dc4c604bc2"],["/tags/大数据/page/4/index.html","fd8757e8dec75f8c6e9e74dd5401af17"],["/tags/大数据/page/5/index.html","774261493960c7d68f7f5169a8e238af"],["/tags/大数据/page/6/index.html","57333d6eb11a271b20d1b1ab05e367c8"],["/tags/大数据/page/7/index.html","cada07255545b2d3d41e2b25fa4c86fb"],["/tags/大数据处理技术/index.html","e25fdfc202dffb1b53ed8e2caae5468e"],["/tags/大数据处理技术/page/2/index.html","77e9b27643ff5223676db1ae4b803f93"],["/tags/大数据处理技术/page/3/index.html","b6d9f656b6f321831352d29167a7b1a8"],["/tags/大数据处理技术/page/4/index.html","07bc1355a99884fe979250a990c08dd5"],["/tags/大数据处理技术/page/5/index.html","0f131b44333fe6391dc299df68f7c655"],["/tags/大数据处理技术/page/6/index.html","230e787a007620c325e103dd981f8af9"],["/tags/大数据集群环境准备/index.html","bf24f5b1b85588f3c8b2e0391d173779"],["/tags/实验性/index.html","7b6d93928f1273ccb2b68fd7f027f1fe"],["/tags/密码学/index.html","51a7edf91956b9068c8bfeb5ecf1aa70"],["/tags/密码学/page/2/index.html","982db9f2b5f7a48c8ccdbd71be201fc9"],["/tags/按键时钟/index.html","bc9f9d0a2ab2241368e423efc07eef17"],["/tags/操作系统/index.html","bee603837105b9a04a535161fc60214b"],["/tags/数学建模/index.html","c61bdf010d3e2aa828ce047d1c22fe82"],["/tags/数学模型/index.html","52629e4eb7ef44263c1ec34a1fb0318e"],["/tags/数据可视化/index.html","bbde285c063632b992bab81ec6d95912"],["/tags/数据挖掘/index.html","5e83b69c3b9ce8b587f4c4299cb156ae"],["/tags/机器学习/index.html","5c099e27bcc4f62cbae3d84815378239"],["/tags/机器视觉/index.html","116d4750d9a2263d4734ac4117065f0f"],["/tags/概率/index.html","dd986a7c87a6c82aaafaca387ce98a09"],["/tags/模板/index.html","7d7344215dd756345bc9dc31564e1d8c"],["/tags/死锁/index.html","d20ce5877ac221c74e2d64ec0a1fd6a2"],["/tags/温湿度/index.html","378938f37b3d4748c54bc4b1109efa05"],["/tags/源码保护/index.html","42bd201125b4fd0332b25c49c5ccff0c"],["/tags/特征/index.html","bcd903aa93884a52eb6069291fdce2e5"],["/tags/特征向量/index.html","458acd38103be135256dd2abb2c936f2"],["/tags/神经网络/index.html","85980d4f40549ad218ba53d39f3aa1c2"],["/tags/秒表/index.html","dab0301b320a0d71fdace15c3362072e"],["/tags/线性代数/index.html","2f8e3b4ad7728777108306aae377b973"],["/tags/脑科学/index.html","d7feaf6c9ace94e99e1c0058163f099a"],["/tags/虚拟内存/index.html","711f2c62853ca180e78584539dffaf63"],["/tags/视知觉/index.html","ea459a697cfc68f09d7863378255d667"],["/tags/解释器/index.html","e06592b9243809846a3b9a4f4d86fa9c"],["/tags/超声波/index.html","f3d62f5e5d4c08df9035a2bdcb1d5eeb"],["/tags/距离/index.html","e14b2e01505cba9779161c1d6f0273f7"],["/tags/进程/index.html","3fc79a82bdb34a28f2ae4629e978411f"],["/tags/进程同步/index.html","9f14a09f7ddfdc5ff8138d68c7caca78"],["/tags/进程调度/index.html","0ff7985d51ea1314fed22407a76dec02"],["/tags/通配符/index.html","d774ce25e820fcc4168eadcf413216cb"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




