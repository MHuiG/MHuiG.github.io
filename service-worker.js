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

var precacheConfig = [["/404.html","b3639d3f29420be8b6911545f498d3a1"],["/about/index.html","4be45f57e4dc3feba60547b73d63476d"],["/archives/2018/11/index.html","6e3987e5f3c2dade68306f65c984c130"],["/archives/2018/12/index.html","39d9d6422d0826165b9a5c71900d5f32"],["/archives/2018/12/page/2/index.html","043f4e710aed3bedd4902825f1c3a711"],["/archives/2018/index.html","f5c2683e51d9fa0300a162fc53cafdca"],["/archives/2018/page/2/index.html","572b5c6bdd2b250199df60a9784a40ca"],["/archives/2019/09/index.html","0798ba49ea17ce746e38ed0eb0e4884b"],["/archives/2019/09/page/10/index.html","bad031cab27c0a4d781e665ccd46ff4f"],["/archives/2019/09/page/2/index.html","19e6e6f42cf49e2ae8d3468f07d89b5d"],["/archives/2019/09/page/3/index.html","632242da4561f6b347e155e28cc6caba"],["/archives/2019/09/page/4/index.html","81b9fbd1a21042f0bfdbad49322c2baf"],["/archives/2019/09/page/5/index.html","178af743aea1f624bfa8abf862cc6716"],["/archives/2019/09/page/6/index.html","c41de13a36adca14a7c6cfdfbb2a3dd6"],["/archives/2019/09/page/7/index.html","68b1eac14af668fb6c62bd1fbae78db5"],["/archives/2019/09/page/8/index.html","b71065d743a361dd6b1407c838044051"],["/archives/2019/09/page/9/index.html","1ea6e151be639e5cc7689fffe065fff8"],["/archives/2019/10/index.html","1c37eeadb00b910d4aa603f8f3528cfe"],["/archives/2019/11/index.html","027cd53b38be603e6556b063f351c3de"],["/archives/2019/12/index.html","a939a3e8a4e6704c02707a4609036477"],["/archives/2019/index.html","f66eb4ace27c2d97df372c26f788dea1"],["/archives/2019/page/10/index.html","5fd5a964457998316f4ec9675dc7d35f"],["/archives/2019/page/2/index.html","8b68c6d07a5bb9505738acdfbc80054b"],["/archives/2019/page/3/index.html","2190fa1efc3cc7ba19a37d7f1effd5c4"],["/archives/2019/page/4/index.html","e014207f85c04d5bb8bffdfaa2c13973"],["/archives/2019/page/5/index.html","6681862dd6021bbff897817efd3f9eef"],["/archives/2019/page/6/index.html","c704391cc27d4b1c80e361c1a414f827"],["/archives/2019/page/7/index.html","d2148e52836c798dae315bdd01890a95"],["/archives/2019/page/8/index.html","5aca5597fc7cb72fb5458d0762a77cd5"],["/archives/2019/page/9/index.html","a2fc2e384d303324e1e6239d62f9855d"],["/archives/2020/01/index.html","79d1592d6aa13aa18de98bdf5ea31276"],["/archives/2020/02/index.html","e53a69427faf82bcdacd5f88f6e93b1f"],["/archives/2020/02/page/2/index.html","bf82940f277556c2698643f603c97da0"],["/archives/2020/03/index.html","d35cf87a70e419894a985a235800fdaf"],["/archives/2020/04/index.html","d184f74888883ddfb2f72c4ba2575830"],["/archives/2020/05/index.html","23c608a6d0bedbd9da2b6ba7851f3436"],["/archives/2020/index.html","9526ff316e076927ca8de22a6a148a83"],["/archives/2020/page/2/index.html","9527de4df232294425a7d3cdccdbc477"],["/archives/2020/page/3/index.html","4bbe89ce0a972ed88f9b925e49b9852f"],["/archives/index.html","49538c79902bd7231fd570cb99a85bf9"],["/archives/page/10/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/11/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/12/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/13/index.html","49538c79902bd7231fd570cb99a85bf9"],["/archives/page/14/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/15/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/2/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/3/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/4/index.html","49538c79902bd7231fd570cb99a85bf9"],["/archives/page/5/index.html","49538c79902bd7231fd570cb99a85bf9"],["/archives/page/6/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/7/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/8/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/archives/page/9/index.html","54ca9bdafd2dc7e3d1bb1995a9c32b1c"],["/assets/favicon/favicon_128.png","c0f20ecec783191bd144eafa31bdb91e"],["/assets/favicon/favicon_144.png","bdf741f0ed8d9fd582b126ee938ac840"],["/assets/favicon/favicon_180.png","5f122d0d3cd72e90fdc1b8926f9a9cba"],["/assets/favicon/favicon_192.png","e49c872333fcad9390ee02cfffc11006"],["/assets/favicon/favicon_256.png","48cb3a595a985ababbe3028bdc4c5097"],["/baidu_verify_DZhcJiT1Cb.html","79cc0825bf40872e21a39fea7a86c9fa"],["/categories/51/index.html","52949b924279028706cfa9de7a23827f"],["/categories/bigdata/index.html","ae7ce6d6b0882fa2ce24a8a8e326e5dc"],["/categories/hello/index.html","2658c036e2d3c65fdc0003d96690c92f"],["/categories/index.html","952d29743198975683c515b9792d3068"],["/categories/javascript/index.html","62090361764c31b6456c9d7f38c338e0"],["/categories/linux/centos7/index.html","67f56c55154412bf7ab573d800097f2a"],["/categories/linux/centos7/python/index.html","0c5192d88a56beff325591e99f65b3dd"],["/categories/linux/index.html","67f48dfec58d266b6b299f9f57c68bac"],["/categories/linux/kali/index.html","bbee71dfefe18ea5634c9438b8a06f3d"],["/categories/linux/page/2/index.html","213b327f5566e91c8a71114f3708e934"],["/categories/linux/shell/index.html","6b0d65e7567c7f2cce2f67b5637e137b"],["/categories/math/index.html","a678bc5e042164c0c4e2b28177f419eb"],["/categories/math/latex/index.html","a501227c6418fb953583b6be28702a6f"],["/categories/math/数学建模/index.html","abc3be6b1506d72c8d302ee08359adcf"],["/categories/math/概率/index.html","6f1d6b3013bbb640498b8de948094317"],["/categories/math/线性代数/index.html","84b93662855de19629491ebf7b21e230"],["/categories/npm/index.html","046939fcf0bbfdb2ce32d249afb64982"],["/categories/python/index.html","03a497cd96739aff3c20ea51e038c8dc"],["/categories/python/page/2/index.html","3e46a487218684e9f2b6aab04212ab53"],["/categories/python/反编译/index.html","147fa51e1a691e7c3a2ce508c74054ab"],["/categories/python/密码学/index.html","90a158fa2a6ffff97e0db537b8da5e17"],["/categories/python/密码学/page/2/index.html","1feeb34c664d6b801738a4b0f642c19e"],["/categories/python/解释器/index.html","9ca47b58f401baae347ae403d265f3ad"],["/categories/time/index.html","287e78b7e3523f85305786f5114199fe"],["/categories/web/django/index.html","6266d4e258a75c8ce1dbac43b5dbed94"],["/categories/web/hexo/index.html","e547f5d01d4aef4dbdf2d6d34961c0be"],["/categories/web/index.html","7fc903f69921893e7ec960bb7bcf7a07"],["/categories/web/nginx/index.html","2149ef6d053993838343c1dc701df0d0"],["/categories/web/page/2/index.html","35f5ad78ea43bd413809417f68be1d77"],["/categories/web/内网穿透/index.html","3a535a81d4c332f8d513bab642818563"],["/categories/windows/gcc/index.html","f9304f81278f9b2428242a4be9cdb1b0"],["/categories/windows/index.html","45ab318f0d4060c5128e3d382d90bbe0"],["/categories/windows/netcat/index.html","2e871ca16574fe32a7ed0b71687b40b4"],["/categories/会议报告/index.html","cf4667ad738968ad41b72576b6ffb485"],["/categories/大数据/flink/index.html","a5740a3219c5c48a081a333843f6c6be"],["/categories/大数据/hadoop/index.html","59c572f7427ca69ec5da6fd46fa3ee0a"],["/categories/大数据/index.html","e4ddfc1e02a813e60bc304ec26d62521"],["/categories/大数据/nosql/index.html","237660bc74efeb8bda84165d159802b9"],["/categories/大数据/page/2/index.html","91cda7de95d730a6f505048480f050b1"],["/categories/大数据/page/3/index.html","be2d85f830e9017c67040299c96f9736"],["/categories/大数据/page/4/index.html","4a2124c4f51354604c424d1043c7378c"],["/categories/大数据/page/5/index.html","18bca5f6c7ab6575854a6f8a0703edbb"],["/categories/大数据/page/6/index.html","9f98db40ee08b634e672bb3acb07ef63"],["/categories/大数据/page/7/index.html","7fb27906b4a698bc8bc2b50c24a780a4"],["/categories/大数据/page/8/index.html","db000d09cb516fedbdf3f7fe68fe2e5d"],["/categories/大数据/大数据处理技术/azkaban/index.html","ee4e002e97aa7b4759ce6cd000f94785"],["/categories/大数据/大数据处理技术/echarts/index.html","664cc6a48e46eb2ede28f167e1a4daba"],["/categories/大数据/大数据处理技术/flume/index.html","5c6955c7a7f53b8db3b3307dfc9826eb"],["/categories/大数据/大数据处理技术/hadoop/index.html","4413d91e5f2c9fd9dd0a0f6643790515"],["/categories/大数据/大数据处理技术/hdfs/index.html","cd0cfee47a52183b69683759da24b949"],["/categories/大数据/大数据处理技术/hive/index.html","039600d968dbf8e72bc32d323a7771ed"],["/categories/大数据/大数据处理技术/index.html","11b492f03d9be3b119cbf2f6c8b84e43"],["/categories/大数据/大数据处理技术/kafka/index.html","8a9638b820babc3c3c280995bb992eac"],["/categories/大数据/大数据处理技术/mapreduce/index.html","a2901c05da5c0a43da59eca33972b9eb"],["/categories/大数据/大数据处理技术/mapreduce/page/2/index.html","5c1b0a79b02979c6012c52cfad92551f"],["/categories/大数据/大数据处理技术/page/2/index.html","81f578d6c5814d2ada78e345b0351e7e"],["/categories/大数据/大数据处理技术/page/3/index.html","5a76fee84e257e94fa545fd4536060b4"],["/categories/大数据/大数据处理技术/page/4/index.html","4286ffc793f4bc74e45f43f97aaa6acf"],["/categories/大数据/大数据处理技术/page/5/index.html","807242b5976d4c00ef260b52ff996560"],["/categories/大数据/大数据处理技术/page/6/index.html","d19a7a57a552c20509243e92b77c4362"],["/categories/大数据/大数据处理技术/sqoop/index.html","9f5957388500ac9090b7574cdab00d5c"],["/categories/大数据/大数据处理技术/yarn/index.html","fd083600ef07f0a06ca7ce5d6e7aa5d6"],["/categories/大数据/大数据处理技术/zookeeper/index.html","08b1550a7787591625ca88c3f4c2761a"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","973e1d1ea451aa57bb8838c5b06e0f7d"],["/categories/大数据/数据可视化/index.html","b31f9485787cba77b90027b4783fd603"],["/categories/大数据/数据挖掘/index.html","47c4aa7f68c509f40f473d56483ba1d4"],["/categories/实验性/index.html","78d100bce816a3d7f0790fd8eae53f49"],["/categories/操作系统/index.html","fedd261e86c575ec4fa534538091d6d6"],["/categories/机器学习/index.html","157ad24db48e7c3e808d88af292e9d1b"],["/categories/机器学习/机器视觉/index.html","8c9ec7e6d3e4a1103a3b1ae183ad81de"],["/categories/模板/index.html","0c2e2286b2efc3c44bd6ac469e7ec294"],["/categories/模板/maven/index.html","99e3ab2d1a234a3aa6cf2afdf7c10193"],["/categories/错误集锦/centos7/index.html","7d151fc1f360fb9d01a18da1ac32e1d5"],["/categories/错误集锦/index.html","c1cfe53bbe0737499d1cb03a227e5787"],["/css/style.css","e57532883e0065d31280a1cc7a35eede"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","40ece05db251ed7e6bad8931fdbb8637"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","ea9d520a9817bded1d34ae590890d107"],["/js/app.js","9ad125c34bf91c8dcf75fed1cdd3e0bc"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","e91c7b09d8ba514f0f27f9553e2e653d"],["/page/10/index.html","b32859fd84ae0b3064c62d0e31de1416"],["/page/11/index.html","aa435c5385712ae26edbdaba2b7fbf9e"],["/page/12/index.html","d80c52f44808cb5abebef2a2353811c4"],["/page/13/index.html","990a577a5e7fec582666b9a84f375f3a"],["/page/14/index.html","c9a1127435c486accfa3240ade23606a"],["/page/15/index.html","7af3782756e1550e55b3e735a7a73834"],["/page/2/index.html","ff04883648ed671dc73410e7c5e1295a"],["/page/3/index.html","36f039de1685e0520b64569b0d25e2c0"],["/page/4/index.html","e8e31008e3833feabe099bdd8d23c8b0"],["/page/5/index.html","5b09d09ca6863fb1b6148f23ce8823e2"],["/page/6/index.html","abed56dad541b5dbd75e3ebed10b3142"],["/page/7/index.html","db172f4155e3faabb2ea6d05ce398cd7"],["/page/8/index.html","0ff43712a4b10c0eef057b907012ed65"],["/page/9/index.html","89a3f4416bbc8f32c41f5bcc243b259e"],["/posts/1009d3f6.html","165f10832d86fc3a83d6efac9d012423"],["/posts/10cabcd3.html","beee31d494e428b8add4bb8813db640e"],["/posts/129a9db5.html","8386a335d4a370b1d5400ef059d540c4"],["/posts/14fa5bba.html","a041c1df70f83cd9cbba18393f1cf7ea"],["/posts/1601d925.html","447e7424c3e490e2e4afc6e2507fbe70"],["/posts/1e1e5118.html","34d0a41c796b1e40d5778a3466c0e3a3"],["/posts/1f519fd3.html","a1716ebd41e4b28ad347bb7ae544ba4a"],["/posts/253269c2.html","ef89cf786b88f551d588d4b66e47cb3e"],["/posts/2ffb45fa.html","cf1dfe5e6f6fe01f46e82974ce98602c"],["/posts/2ffcda9a.html","2541f410cab5a2334e6470dfc7d1a9af"],["/posts/3098d714.html","4561459107f9c1eb11edf0bde6083561"],["/posts/30b27542.html","197903cf4bdae4c238f85a3c35b0f18c"],["/posts/323ed1b8.html","f852f6e4d363de600b5bf34648536665"],["/posts/32c5d0d9.html","380ef1c81e74a46bca857082e3b70715"],["/posts/32ffa341.html","a51d5bb5123387c16cd1cdb040707baf"],["/posts/357dc334.html","bbe788a8cb8a85900b07574f6cba646c"],["/posts/376025fe.html","8b25fc94f0614d3f90f6f2f2c28a1c14"],["/posts/38a07d35.html","fb7f371caa33e5b1e8d52463491a36ba"],["/posts/3bfd1783.html","682d304ff31d154555765153411f7edb"],["/posts/3d7d3997.html","53d334db169c70846a21b8ecf3fc3cb4"],["/posts/429246c5.html","05e1e4197e898379b503d25bc32118c7"],["/posts/42ecd398.html","64ae388c4e1ac1a0413d2718b960de32"],["/posts/46b39789.html","30b1e0af4c4b1d597dab23d5796ca562"],["/posts/483290b5.html","a4413780a3f5731eaf8d979896c3c31a"],["/posts/48a224d1.html","5787f59c33253dad270b5b0e54c25a99"],["/posts/48a2d97d.html","b762e999b19560ac013fa1b2a4543522"],["/posts/4920f048.html","b86298fb5ffc2f509be33691dfc32390"],["/posts/4a17b156.html","6e1330c37f66bbc52826223f5e999dc6"],["/posts/4a71123b.html","ec270fcc228908d0148ec588c5d7e2a0"],["/posts/4a71133b.html","e5c6c25c2c2658824b6644f7ee9c0c88"],["/posts/4c2deb5e.html","7913b4bae5c56a05a9c7ef11e75aadd1"],["/posts/4dd55455.html","bfab5be6b1497cea3ae53021a3b02f01"],["/posts/4e6873c5.html","b1581187a3c26c1955f39d10ba687f86"],["/posts/4edeccca.html","6eb1e3954504d81d34fecbdde7012b0e"],["/posts/53ab8d74.html","02855767db2cbdb13215204b423f3805"],["/posts/53d0a404.html","6286a969a9d21fc4790b001f9fb61ed1"],["/posts/55b264de.html","b597d62fd14f984b002ebffd67b1d816"],["/posts/564714f9.html","fb008e85a7ed5819e801338a84e055af"],["/posts/594433a.html","81055a95472a122b48d5f8fac6faa9bf"],["/posts/5bb73de.html","5d1f5420e4de9ab473baeec57af5ef46"],["/posts/5bfe6261.html","8c5057b8eefd34a7887dca7cafcb295e"],["/posts/5cc46d49.html","47da935a0e8750a55db37cdaed08277e"],["/posts/5e7ad437.html","4cd7601a9256e35c49d052a5698ba595"],["/posts/5efb0a25.html","6272b3a8cfd66411b8e53e32864debd4"],["/posts/6009a9d8.html","a495a421a98d863b563143ddfd902ef3"],["/posts/606a512e.html","3e72fc858516db73b304218ea55e46c6"],["/posts/610da529.html","94d6f5ca0007844567614deded4b4789"],["/posts/63637a24.html","36f493130bf8f3abc2cb3905bb2546c1"],["/posts/695a6c4b.html","a8312c10a7245e91fc54cb6a294006e1"],["/posts/6980c27e.html","e154dd14fe739a04ef816493757830ea"],["/posts/6acc7206.html","8b340c09e23b0ea72d6dc2985f25fdaf"],["/posts/6cfc95e.html","46495fd6347fbc42d849116a8b970100"],["/posts/6e430c9c.html","600f5e7c5b3034cc64ccae198d04831d"],["/posts/714668f9.html","bcebad1410079e29459a007c36b040ae"],["/posts/72b49ca2.html","dc73e3aff3c0963bff0e31dbd59cfb88"],["/posts/72cd4c87.html","724856fc6260460d0802f36be3325ff8"],["/posts/75ee5fa.html","ddd4db7bcb1f407c1065825cbb532789"],["/posts/780b9de2.html","d20e0f7fcd541584430f525afd988f44"],["/posts/7827182c.html","e06c73506ea598eef07b7f8f1820d753"],["/posts/787a8307.html","938c7cfed94d1a7372cad1b54c9c7806"],["/posts/7cb85200.html","1ddc8ad40310ffbb56be9831c3795538"],["/posts/7d6b1f3c.html","c54c880427193d803fcb1c1b1766bad8"],["/posts/7def3950.html","e34ea1f8f77744f26e1eb7267f0401a4"],["/posts/801b51ef.html","2acd932b4aa2f0e1009ace16d320ca5e"],["/posts/8485750c.html","9e38ddcc65d85b4393fac0e107797e11"],["/posts/87e9dc75.html","232ffa843528ac8080e4a8738b24b7bb"],["/posts/897831fa.html","f597b3b7349320cca66e6de34a1c24b6"],["/posts/8ce758a7.html","eb2a46aa8af1c00237c7d7989853e27a"],["/posts/91223731.html","4db37517241dee46e60623a2488a5202"],["/posts/91953e39.html","4b8347c5d6d14321f51976639a5df9f7"],["/posts/96f894a7.html","b9abb99b2eda9561ddc66d25d748d33d"],["/posts/980d646e.html","2776a62fced4ad86a0ffcab9e7606e82"],["/posts/98579906.html","b332add3546f78ac925dbd977c487768"],["/posts/9b624d43.html","581ef6f2d38d1fdea2c7c25306916020"],["/posts/9bc3b11e.html","4e5617e74279d35ba8d83e94edb9930d"],["/posts/9ef6ff16.html","5e6671b7015e1868984b0b0e9ffd5e31"],["/posts/a105df5c.html","d212b8f00ebaddfd2ee19ef53eb527c1"],["/posts/a2af0ea3.html","f04ecef44c0250ef589a878b1968809f"],["/posts/a3ed1548.html","fe34017c1e7bcf7874a9ebb26c4c7f68"],["/posts/a4a39746.html","a4d60c360187e58061ada4ce142b6941"],["/posts/a5d678be.html","6cd3d8bd9e72e77c8049c29421d66edd"],["/posts/a5eec80c.html","a5610e18711b4b53ab9205ca12a7b5db"],["/posts/a79b4f5b.html","3164d83a30092adae6852edd4936cdfb"],["/posts/a81e94e9.html","dbb3a7a096087998cd2ac662f37ce95d"],["/posts/aa02a436.html","095eb2cdaa4e4bc4ef5f4155f8585f1c"],["/posts/ad720447.html","360f096f896ad66fa6a96c36134a1d78"],["/posts/b0ef01f5.html","59d0ebf2bb930b99fdeef24737adb0dd"],["/posts/b190dcb.html","754bae31b80586b86d061a47839b7256"],["/posts/b387b8d5.html","8cd3b939f906863c2c57eb4734e11016"],["/posts/b4a5318a.html","3134a8e1d767f9d464eee48c379e0487"],["/posts/b4fa1b4e.html","dd691f9d4beb045ef22169ad5425cc18"],["/posts/b59b6a41.html","3fa0bf91263601217d83d5ed6082a917"],["/posts/b6ffaac2.html","e0e60ae19422ce76fa57f0ff598a0bb3"],["/posts/b9b7baa7.html","e0b642befac111608e7876df06f235c3"],["/posts/ba036091.html","a75413e0f4e616b014417909e18486d2"],["/posts/bb7c60d.html","520c88c54bf05389bc6eac3dc24e6cde"],["/posts/bbe38b68.html","80b3ce33aaf323e2b5c64ac32c46acb9"],["/posts/be57c430.html","d594dbd88b579b2a77c320108ef68a66"],["/posts/bfb9db00.html","097593be6cafc8eaa4f8ef5954c61459"],["/posts/bfbc2e0b.html","a7dbb4c63d8c8584a4d4b49a5a7697de"],["/posts/bfe2ff2a.html","2abba9ce594421bba25acd72cad7bf58"],["/posts/c16b9d82.html","b4729e1aa47a01409eaf08edc63c8c75"],["/posts/c270974.html","347e59a58ead9035f06801c246ad16e6"],["/posts/c2c98f74.html","3cd579da9c2fbb5c28cd0ee4ca8817d6"],["/posts/c5520104.html","817098dc4a57c76331677eeaf1b5b39e"],["/posts/c81f7fcf.html","03ad854d4142a91f0afff0d8bcd1f4fa"],["/posts/c89a329f.html","10c0ebcdd54fe7f59662a128edd50335"],["/posts/c8fc3430.html","39bfe205d2654358b331dea2ae1b2aad"],["/posts/c91f449a.html","d3d57491c18cad304f65a69c16192dfd"],["/posts/ca7a6c92.html","9b938b886040d5d84c6b8b3e9cbfa8e3"],["/posts/cc03340e.html","cd4618c9c6a2c8849f66900758028f19"],["/posts/cdec63d.html","1b3782eefd528f5db37e1c923f111c0d"],["/posts/d07ffe1c.html","b729efcc4c4aaa4ca9ac85f9a849c828"],["/posts/d178b062.html","79c9599304ba8818fbfff50e891c38d9"],["/posts/d53724bc.html","0e0528c9fae04174e34e62bf9d9419de"],["/posts/d70eaced.html","3bf93d8ce4647e975f4816ebeeda4f92"],["/posts/d7edfddd.html","fba7969aac2ac3a0ad875a6f5e47cb74"],["/posts/d8795dab.html","d6e604b04ac3e13891f201b3c745f2d4"],["/posts/e00c1bc.html","98845a4f867564a61591bc33080be37c"],["/posts/e3dcc811.html","b851ff1ebe80a7e65c6aa3d9c884ab98"],["/posts/e6f6b883.html","bc2300f204c13b5bd5d6562acbc06e76"],["/posts/e821aeca.html","8e08a318701697a486baf40169480c47"],["/posts/e981c79e.html","e1d7d018cb69eac7d9baeefcc88e57b6"],["/posts/e9fadccb.html","51d8bcf2a14efc16365f965cf2fece65"],["/posts/ea7b2ec0.html","055877888a7a45b88f2bc363ba1d4008"],["/posts/eb168c8b.html","2096204710151e3515f123e6eca62df3"],["/posts/ec477027.html","3fdbba9a8f8de69d56f15e4a43828306"],["/posts/eeb47c66.html","0a5c1835fe6a3f04a7a647697549dce7"],["/posts/f0765214.html","d8617b04e618afa6b9b1a322ee0a5b11"],["/posts/f0940727.html","197f7e3491394448413e20eafb1219f5"],["/posts/f1ab62f1.html","71a36abf2fe7ded9096dfd3c23f62e5a"],["/posts/f3b50546.html","ec865e62fdc3897ed04102b899798932"],["/posts/f4524359.html","9899493a97b7a86e9f9274bed0cac9c0"],["/posts/f4e10e30.html","9d9d4ae1f88cc45edeae63fadb43f794"],["/posts/f70539ce.html","4419e282b20d4899457c0a89b8d946e1"],["/posts/f77eee2d.html","9aeb1b065d2e74b9f3602688b90eaa3b"],["/posts/f8d2d5ec.html","49cd96c48558f33b0616f67d6dffae9b"],["/posts/f9a25cd7.html","818a40982f0c48e85033fabeb23eea3e"],["/posts/fb97a8a5.html","16f7382b87e8459ab3646477abcb1bbc"],["/posts/fc610c2d.html","6df0937f37f61ebeaaa81b130f4f0964"],["/posts/fec1c989.html","e952b9b6fd676905df3af4a2a6750b1a"],["/posts/fecd7f2.html","5494ee7a53487e63c76c951393dd177c"],["/posts/xa6297acc.html","1aefc598a426548c7d68f4b7db703f51"],["/tags/51/index.html","17b40b7d95bb5fdd27ba6f1f3bce23ec"],["/tags/aes/index.html","fc626d9699425a71510fd829ef6a8801"],["/tags/anaconda/index.html","2aa58a8d5eb48a2c5e8a49b5183bb9b7"],["/tags/azkaban/index.html","8c1dcf41260b37fb9b0bde1eb1668a46"],["/tags/bigdata/index.html","9e47ae0dc8c5cfc46830c8dbf4874fbd"],["/tags/cassandra/index.html","6129eb4e1f062ccba5163db61f34b7d6"],["/tags/centos7/index.html","72d2dd0e7f5ff6e0565b645920dff12a"],["/tags/cloud/index.html","41a65774e785341f99919a081a797e30"],["/tags/django/index.html","9f97abc4faf6508c76e76c0bd34300b5"],["/tags/echarts/index.html","821fccb14b0083b0ae66c297a705a17f"],["/tags/flink/index.html","016146b68a455fb69dcbc8524e8cfb29"],["/tags/flume/index.html","64e99cf733a540056607d064b6236c0e"],["/tags/frp/index.html","bcc61ad557cc5d2cf2ab93fe0505d515"],["/tags/gcc/index.html","be9ff2e67327c891be0fb979199ef02a"],["/tags/github/index.html","24126e892bd26eac394f357e3ba4e125"],["/tags/glob表达式/index.html","c179a18a9c6c921fffe5127af3520020"],["/tags/hadoop/index.html","f1d58121fe9d844d97f50ec7f61f083a"],["/tags/hadoop/page/2/index.html","2ee030753fed7ba667e69d849d7cd107"],["/tags/hbase/index.html","3043220e4e9c866c4729c82f2982462c"],["/tags/hdfs/index.html","640bfe68444a105f299278d0e8bba9ab"],["/tags/hello/index.html","0aae8d15308d3456943f9c2a92771714"],["/tags/hexo/index.html","eb552b5c29d4d29a9e8d3927c3305a7d"],["/tags/hive/index.html","558161dd259fa73d20c0da26424e87a7"],["/tags/https/index.html","66d69798d13e1435d42c14030e60ed6d"],["/tags/index.html","f475d7128e09a5b8a4b03a9541a8fbee"],["/tags/javaapi/index.html","44007509a9fc4c6df46a7909f8f8f1b4"],["/tags/javascript/index.html","bb2bdb5d9d9874bc18ca50cc365793dc"],["/tags/jupyter/index.html","ab2dd4b0b1201e36d5e392039d452cd9"],["/tags/kafka/index.html","a90e91b6b97fd9299fb8a5e8acf6fbab"],["/tags/kali/index.html","933b0deaa7f7f6c35effe76423895fab"],["/tags/latex/index.html","51555873b9367c2fabd47a8a87bb509e"],["/tags/linux/index.html","1817fa3bca310e18f01a85e0b52537a2"],["/tags/linux/page/2/index.html","8d8cd82c18078bff72ebf566c506265f"],["/tags/mapreduce/index.html","f5a43629953de8bd89765140067b2ade"],["/tags/mapreduce/page/2/index.html","db33148aac0892e545200779c7efee0b"],["/tags/markdown/index.html","ea34b2504779f43f333e04af3cd241b5"],["/tags/math/index.html","3eb0fb03fb5345e6dc8ab2a63b64367d"],["/tags/maven/index.html","e579a91ec729ad29bda103ebe5004591"],["/tags/mongodb/index.html","f104039a277b3d2228c1be83ad496680"],["/tags/mysql/index.html","535cf3a84befac37ac71ecd82c281e57"],["/tags/neo4j/index.html","a63065871cb5b400ddd21ef1db897909"],["/tags/netcat/index.html","4671780cd1be4a98505536af97c6c602"],["/tags/network/index.html","32000b8d8137082d48dac39dd9789670"],["/tags/nginx/index.html","8cb87f16a4109fc595785a822846fecb"],["/tags/nosql/index.html","c3e79878752cee43c30425e9e7889fef"],["/tags/npm/index.html","d430c72f7ec85daed7b7ca338d00cb95"],["/tags/pdf/index.html","ec2c281fdbaf2e4b17de8f7d34cafc9e"],["/tags/pdf/page/2/index.html","5a79837399535e8bfabd994dd2074361"],["/tags/pdf/page/3/index.html","b9abc8d3f77e362652834899951c78db"],["/tags/pdf/page/4/index.html","f4566aa6071187c53aedaf3d469c2e5a"],["/tags/pdf/page/5/index.html","d83fe89b5c93430ea3c21442c40e2bd2"],["/tags/pdf/page/6/index.html","f2df8dbbf06095cd214ee34788ace372"],["/tags/pdf/page/7/index.html","1d1bad3b53c1468fd5cf2938336487f7"],["/tags/php/index.html","b9051a1acad1689baeb5f49de37cd8f7"],["/tags/python/index.html","2c3f923361c4496ea75c488e8bb43bb1"],["/tags/python/page/2/index.html","7f8b1a7bea296016b94767ac0ce236d1"],["/tags/python/page/3/index.html","c0f0e28f61fdd419c7012c6a8705b7c7"],["/tags/shell/index.html","05ffeb2087feb8760d9ca3c2f261f261"],["/tags/sqoop/index.html","156d30f4cc1ab39750ec21fca4af2aa3"],["/tags/ssm/index.html","3ab18cdd01e2f48ba22a0ab42182cf40"],["/tags/time/index.html","154f3377bc97013ac2774933ce1d41a6"],["/tags/web/index.html","e54541ae3251eb346717ea4d53ee0db3"],["/tags/websocket/index.html","d8bad3cd3680510fcbc67d3678756001"],["/tags/web安全/index.html","ab709c575c74b45bd1d52811c409c1b1"],["/tags/windows/index.html","0c708ce258878f753da2e7802b42f1b2"],["/tags/xrdp/index.html","0fdaaef5205403bc29617caedcd18d8b"],["/tags/yarn/index.html","d3cb505f8bbc92ce4b14e70a42ac66db"],["/tags/zookeeper/index.html","f6a2baedb406cb02215789d8744592d0"],["/tags/人工智能/index.html","11d8b9f5a993b576b582eccda76b9865"],["/tags/内网穿透/index.html","64d0d4b686ae5fd5b1574cedd68c2ab0"],["/tags/分类器/index.html","5450b7eb752658daa3f82dd62c1c8b8b"],["/tags/删除注释/index.html","2c1e0f628ee1921da3c5ba1f35c43d43"],["/tags/前驱图/index.html","b6b7a5fabb1d17b44aeef04288cfe68b"],["/tags/加解密/index.html","3265f36c837eaeecafc311cc665846b2"],["/tags/加解密/page/2/index.html","79c183e96263782db1cc695447bfef46"],["/tags/历史/index.html","55ceace6fd7683cc255d506be9d3961d"],["/tags/反编译/index.html","17a6d9480a400421f442d678132039c3"],["/tags/反调试/index.html","6c244bc9f2ed014b8bc47e69d9370523"],["/tags/图像/index.html","6f67ef5a4eea6f2d7362c38737f320c0"],["/tags/大数据/index.html","e20f5c6e405d3e4d1018c9fdf15117bd"],["/tags/大数据/page/2/index.html","979de02b186b2b827c63125b991014a5"],["/tags/大数据/page/3/index.html","7281b59ed52fd30d4739210f823fde41"],["/tags/大数据/page/4/index.html","7abc3851e7777a02d2ff8f73853e64ad"],["/tags/大数据/page/5/index.html","d3403d034d4a3a2a2dcbafe6aff98d23"],["/tags/大数据/page/6/index.html","cf1f9daa29a7680a7e0f99bfa92a8942"],["/tags/大数据/page/7/index.html","1565fa5cd8d80161add1d9db695593af"],["/tags/大数据处理技术/index.html","391673a7de6fe834adb2837a27815624"],["/tags/大数据处理技术/page/2/index.html","22835782649bc2badc4c6c88350c189d"],["/tags/大数据处理技术/page/3/index.html","2c01c9046cbcf918b30791442cf1c122"],["/tags/大数据处理技术/page/4/index.html","171bdc3ee48bb521ddb3b0a6a12794c5"],["/tags/大数据处理技术/page/5/index.html","30ddf83ef42c2b9f3f3be3f1211e3d94"],["/tags/大数据处理技术/page/6/index.html","4ebbc3b68f9a75c7a62a74a242eee45b"],["/tags/大数据集群环境准备/index.html","b7427bf4993565deb50935ca0c52a697"],["/tags/实验性/index.html","1de408cd3668c4811ef75efc8eb13919"],["/tags/密码学/index.html","0c542a6a8f73c5a96e5f8ffb1d70e187"],["/tags/密码学/page/2/index.html","e7f24af88b6ee67141e6d2b216611a37"],["/tags/按键时钟/index.html","45ea3d7e66770e35bed87347c4b23f90"],["/tags/操作系统/index.html","6e38bbf2673b46b5cff734ec45557a90"],["/tags/数学建模/index.html","afb3ad219ccdf38c30cc242420a7b0d5"],["/tags/数学模型/index.html","937eb50b724384e8a74e04d618bf1f6b"],["/tags/数据可视化/index.html","e3830e1c87084eadabe6c2d1f4148faf"],["/tags/数据挖掘/index.html","e18b09f7f7859170ee297a0a4ef0010e"],["/tags/机器学习/index.html","109d56fbfa15b6b4fcce47ed4431d4d5"],["/tags/机器视觉/index.html","12d548a97acff7a34ca51fdc7521696c"],["/tags/概率/index.html","e7473928c49c6d0730356001bddc54f4"],["/tags/模板/index.html","09dc245ac7125aba971e2ee2928cfe42"],["/tags/死锁/index.html","6e4fb23fe50975150f6d5ff356fa5919"],["/tags/温湿度/index.html","8bdc2f433be89d03f159324311cd8d45"],["/tags/源码保护/index.html","9463c70a027e97018c712bc03114b821"],["/tags/特征/index.html","069a408158af63eee5d20532c66e3e47"],["/tags/特征向量/index.html","ef8f05c04a234cea1a8a5bd03ca40ac1"],["/tags/神经网络/index.html","c78c91f255776a7293a8493c86294715"],["/tags/秒表/index.html","38c71ff9fde0202442f7a7440a35193d"],["/tags/线性代数/index.html","41a7c47ca1fab1267443fb4b1bea1735"],["/tags/脑科学/index.html","89be995c59a6fb8025abd39c132168fa"],["/tags/虚拟内存/index.html","a5447787b8d4f87b7599428c1883b000"],["/tags/视知觉/index.html","a4ae75afdb8b1a20e24a1bc3ba11c30c"],["/tags/解释器/index.html","c4806f351864d12d351d9d6b0f46515e"],["/tags/超声波/index.html","85c6ef2918e60329d926b1437f9b4ef5"],["/tags/距离/index.html","4c2a680a1ea532687216bff6aa01e166"],["/tags/进程/index.html","a07a9ceb801cfcbf8531e2ff5bf06c74"],["/tags/进程同步/index.html","991615bf7f0d5b0c3ae4f671f8c53ed8"],["/tags/进程调度/index.html","bcf0065c588179cd02b1304b882c7e64"],["/tags/通配符/index.html","c577fe962c316c236a3850753ad63fcf"]];
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




