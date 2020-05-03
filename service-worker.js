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

var precacheConfig = [["/404.html","b3639d3f29420be8b6911545f498d3a1"],["/about/index.html","4be45f57e4dc3feba60547b73d63476d"],["/archives/2018/11/index.html","7bffd01c1ac2b5b10640549f6a4c706a"],["/archives/2018/12/index.html","2c86dae7ad1213d103f3fde4b6087a1e"],["/archives/2018/12/page/2/index.html","36fa1ab26b8cd01beb939db3343de510"],["/archives/2018/index.html","b4477875ea28dff947420956b5517061"],["/archives/2018/page/2/index.html","568548205bcc80ca672dbaf539442ccc"],["/archives/2019/09/index.html","7191511b3ccd0f48cce4cc5f58186371"],["/archives/2019/09/page/10/index.html","30c6bd5517409a2c97071be90a8146f2"],["/archives/2019/09/page/2/index.html","95ee39550d21737708f97356305d3faf"],["/archives/2019/09/page/3/index.html","fd79f5a15a4bbc0d040d9e76d08b99a1"],["/archives/2019/09/page/4/index.html","8973a85a5d3aa225466da391078d7de1"],["/archives/2019/09/page/5/index.html","2a6967c6bc209c42fa0bce8472da22a0"],["/archives/2019/09/page/6/index.html","d67617476acc59c5b708a8fdf09332d9"],["/archives/2019/09/page/7/index.html","916c6da67da89faa43e8fe1290106ac1"],["/archives/2019/09/page/8/index.html","9b773749c005c41447bc747d78e0770a"],["/archives/2019/09/page/9/index.html","864f0dc274d80eee9c4f9fdfb40be88e"],["/archives/2019/10/index.html","9110c420719979356cecbd2212e54642"],["/archives/2019/11/index.html","984b70b708e3b8583b24f029167c6820"],["/archives/2019/12/index.html","462f976c32de09e1f817a8d645515860"],["/archives/2019/index.html","3eeb8d17216f31f11a16e2598f2ce894"],["/archives/2019/page/10/index.html","78d8a0c940a30f0a2c2b69a7629c694d"],["/archives/2019/page/2/index.html","8bca2051e53f66dcff3d686c797d1cb4"],["/archives/2019/page/3/index.html","fa5c29f60ecabc6e98f1aca5451d364f"],["/archives/2019/page/4/index.html","44ebcb757813ead33c187cecb40b2b18"],["/archives/2019/page/5/index.html","3547a0ede344a662201f656655179927"],["/archives/2019/page/6/index.html","370b07d9ad74eb5ecee7cc10b85b09f6"],["/archives/2019/page/7/index.html","8b31aa5caecd7b6b5e504c2bf3c5d9d7"],["/archives/2019/page/8/index.html","d08c426034c4034f61b312246fcd59b2"],["/archives/2019/page/9/index.html","05f446568550fcbd308b19d632b04da7"],["/archives/2020/01/index.html","755f2856e3ac824746b6653639331b4b"],["/archives/2020/02/index.html","8f2ae481e35f7d8999e15ae00fbee0bc"],["/archives/2020/04/index.html","514fb8c8b8bad32c34f90c94650579a6"],["/archives/2020/05/index.html","32540e607b0db61868c11c01e349c39c"],["/archives/2020/index.html","7482e8a328cd426d08eacae55015cb01"],["/archives/2020/page/2/index.html","496d9615212d0f727a7ec067c50bdde9"],["/archives/2020/page/3/index.html","25b76be841ae1c89b56052f653f0a796"],["/archives/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/10/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/11/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/12/index.html","d87c141669dfa27270cfeb13838e0e3d"],["/archives/page/13/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/14/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/2/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/3/index.html","d87c141669dfa27270cfeb13838e0e3d"],["/archives/page/4/index.html","d87c141669dfa27270cfeb13838e0e3d"],["/archives/page/5/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/6/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/7/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/8/index.html","29b880a7cd8a46057af1948748c0b7db"],["/archives/page/9/index.html","29b880a7cd8a46057af1948748c0b7db"],["/assets/favicon/favicon_128.png","c0f20ecec783191bd144eafa31bdb91e"],["/assets/favicon/favicon_144.png","bdf741f0ed8d9fd582b126ee938ac840"],["/assets/favicon/favicon_180.png","5f122d0d3cd72e90fdc1b8926f9a9cba"],["/assets/favicon/favicon_192.png","e49c872333fcad9390ee02cfffc11006"],["/assets/favicon/favicon_256.png","48cb3a595a985ababbe3028bdc4c5097"],["/baidu_verify_DZhcJiT1Cb.html","af370c29b23d79f4a7bcf26a1d779615"],["/categories/51/index.html","14b5f5a5811df32fe6f0b2cfd0b025fc"],["/categories/bigdata/index.html","3c18aab87482b0282a8de5759934bebd"],["/categories/hello/index.html","85f359d8db5ff685ccad5533391106c4"],["/categories/index.html","4ae5749ddf43c68a97bfa3b743cb9012"],["/categories/linux/centos7/index.html","61d80e26b2e09f3c11587a3b2f3a1919"],["/categories/linux/centos7/python/index.html","620a4a135a6a4de4b60c9f4d1393731d"],["/categories/linux/index.html","d21d0e51e3a8d954632b9f05d23b4d26"],["/categories/linux/kali/index.html","d36244f6c7c9bad24dd85e7f33c62126"],["/categories/linux/page/2/index.html","fe13fd5d075f2150aa0fc59d54eb638d"],["/categories/linux/shell/index.html","aa17976e4d3a76362dfe6a95d2fbdf11"],["/categories/math/index.html","f3f798ef5731a919a70abf1072732dfd"],["/categories/math/latex/index.html","44137dce53b6477e3f2544d5d77edeff"],["/categories/math/数学建模/index.html","50304b91e06df3e83144aa072b9971d2"],["/categories/math/线性代数/index.html","33753021cd2a2108cb1beec21adb06b0"],["/categories/python/index.html","088473da6caa7c5ca9cf847035fa544c"],["/categories/python/page/2/index.html","11385e17fcb61d4f08229c37531c1e64"],["/categories/python/反编译/index.html","f773c9d2cd301f22d655b80c394d55da"],["/categories/python/密码学/index.html","16132a96e5b808d7efabe98b53a5c03e"],["/categories/python/密码学/page/2/index.html","31c033e9df3f71e83fe73434dcc43bf8"],["/categories/python/解释器/index.html","92e702ce08351a0b74341ee28bcc6ea5"],["/categories/time/index.html","26f20b170cf0bf37b96bee038d23a71a"],["/categories/web/django/index.html","1f28ccf2c3a8c9605e4b271500330a03"],["/categories/web/hexo/index.html","c0941f251cfa8823a9a759eeed5c012f"],["/categories/web/index.html","d455bb24047b1eb2969263f8fc87b2c1"],["/categories/web/nginx/index.html","a067826ee235ab98d9b849dc7b193daf"],["/categories/web/page/2/index.html","6fa027eeccd8fc882e854c9011995ddc"],["/categories/web/内网穿透/index.html","6dc9d4f4d1bc52aedc86fd50589155b4"],["/categories/windows/gcc/index.html","73e6390824f064943838120f1b397321"],["/categories/windows/index.html","686aa80c85f56c0a0b01bd9c5e219238"],["/categories/windows/netcat/index.html","a75c93feda692509e1890efd32c6f73f"],["/categories/会议报告/index.html","841b894f3119331599b9f123c9d1d27f"],["/categories/大数据/flink/index.html","21bd9d2c65af892c6bca23ab11f224ec"],["/categories/大数据/hadoop/index.html","6ffa6bb91554d5b0ee0befb22592030f"],["/categories/大数据/index.html","161538b81afb703178113b640f8f3f65"],["/categories/大数据/nosql/index.html","4d544847940ddb15817152bc760f32ed"],["/categories/大数据/page/2/index.html","b4064b008f56be3dda612031d9985f50"],["/categories/大数据/page/3/index.html","5e936e0166804f3ba08051368735b74e"],["/categories/大数据/page/4/index.html","e3f35437aae3fe5f1bd35645d12585bf"],["/categories/大数据/page/5/index.html","d3966e4ef2b1c6d14f73522a430712f9"],["/categories/大数据/page/6/index.html","9de081580af82d6810589f3ce9a78725"],["/categories/大数据/page/7/index.html","7fcf8b1a90bd0bfdccb5d7b6fc9239c2"],["/categories/大数据/page/8/index.html","ac1c94585a1cba5a1dc27d927d2eb619"],["/categories/大数据/大数据处理技术/azkaban/index.html","084fe5ec92a8bb8ef90ba7a6df7a3815"],["/categories/大数据/大数据处理技术/echarts/index.html","455b15b4e2a4f11938b949d09ecbcaab"],["/categories/大数据/大数据处理技术/flume/index.html","c7934f8c7042cf6129c0b963de9809d5"],["/categories/大数据/大数据处理技术/hadoop/index.html","b046ba1fcb454babab1c233d93fa3758"],["/categories/大数据/大数据处理技术/hdfs/index.html","4a72a3a1f92485b144fe1701d6b80f1f"],["/categories/大数据/大数据处理技术/hive/index.html","4dbe0a96bb5151ac6649506571aa87ae"],["/categories/大数据/大数据处理技术/index.html","88aff3fb827ca8091f302d6ee22d1be4"],["/categories/大数据/大数据处理技术/kafka/index.html","91d272adcfaf52ca5a49864322c9e5c9"],["/categories/大数据/大数据处理技术/mapreduce/index.html","4dc120f5422f9f9bc2e4deecc9331f55"],["/categories/大数据/大数据处理技术/mapreduce/page/2/index.html","c402787f886cf3b8be2cfdf47d337d52"],["/categories/大数据/大数据处理技术/page/2/index.html","2788072af1aa17ae4702d08bf75c12f8"],["/categories/大数据/大数据处理技术/page/3/index.html","15808037418a9d4564593d4b5f91acb0"],["/categories/大数据/大数据处理技术/page/4/index.html","731d0fc8936bf47dc01363f112a77d96"],["/categories/大数据/大数据处理技术/page/5/index.html","1714f56f4277454bc8f4dd0e0088b2c7"],["/categories/大数据/大数据处理技术/page/6/index.html","e17c27552423bf98e18440e8dd52f3c7"],["/categories/大数据/大数据处理技术/sqoop/index.html","3d40d7f83c120fdaf7b07d7b2eaefe53"],["/categories/大数据/大数据处理技术/yarn/index.html","de175e320fc7ed54b4729b8e211c3da8"],["/categories/大数据/大数据处理技术/zookeeper/index.html","4ffbd3c83e7a864e64e06fbdacc98c18"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","41db31b7a614e820dfecc78115fe387b"],["/categories/大数据/数据可视化/index.html","15729c8a2411a6ab2721b9b7806296ee"],["/categories/大数据/数据挖掘/index.html","c31e716566682a685144c03f2bcc1990"],["/categories/实验性/index.html","c71a6ad4a90299d66879d8958bb0cd7f"],["/categories/操作系统/index.html","52ba94f41eec9f626e0c232517854e58"],["/categories/机器学习/index.html","bcee2fd5734bca2617fcfd25dfe14422"],["/categories/机器学习/机器视觉/index.html","cab5155a33734e34de36461419ade7a8"],["/categories/模板/index.html","f33884b467f8c2049c45823e157f2985"],["/categories/模板/maven/index.html","fc4d37d828ed3bcdcb74fe13b058c61f"],["/categories/错误集锦/centos7/index.html","b5c4188b5cf33802fe89d86a53acd346"],["/categories/错误集锦/index.html","ed3e31acc766ee5fedde1eaae8479432"],["/css/style.css","e57532883e0065d31280a1cc7a35eede"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","6dca2a01c961e47301ed8794bdd8c6e3"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","31fc163f1e9e21136eee36c992eb741e"],["/js/app.js","9ad125c34bf91c8dcf75fed1cdd3e0bc"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","4864263f70e03d60d356225af629055b"],["/page/10/index.html","4ae3c2cf3f0c630c9429f6a42e275c86"],["/page/11/index.html","a09ab2458d1fd06f9951cec93e8369e8"],["/page/12/index.html","cb05a6b148900a3fd0828ea50b4e5adf"],["/page/13/index.html","e80de034211a5a5c0c6578d2ef2b583e"],["/page/14/index.html","d308b9b6685e3f5b40430ede74f23b17"],["/page/2/index.html","855e513943e229974aa1e84e11c4679e"],["/page/3/index.html","5f75757aa20ddc8c2954eeaf119994fb"],["/page/4/index.html","4ae113dce487ced8644ce33541b458e8"],["/page/5/index.html","47e3b880a50e427d9d7e4cb2d48cbe96"],["/page/6/index.html","87a0e25b12aecb09c9cedbe91c50f9f9"],["/page/7/index.html","af02fb8f96bd73b440b4becf5c0565a8"],["/page/8/index.html","d226f51e78f147ab2c7235d035daf6cd"],["/page/9/index.html","fedfa9630a7124baf19fe9a2a9830601"],["/posts/1009d3f6.html","7a59d45ed67591e505bb389dd6d92eb5"],["/posts/10cabcd3.html","0164954a94cbd30ce5b52e1bb5046e5c"],["/posts/129a9db5.html","4816b5637402226409f3ebdac705e3f5"],["/posts/14fa5bba.html","92a90c95d5233cf49a769d7802254ad7"],["/posts/1601d925.html","eef7428c36731188f7fa3ccc3ceabc0a"],["/posts/1e1e5118.html","67935ed86d8a5924c6c82beba1f69738"],["/posts/1f519fd3.html","9b23c4ee50f7c9a96184bd6f84b0a9b2"],["/posts/253269c2.html","f4c2d2b7001a35fa401fc0acce4b1f3a"],["/posts/2ffb45fa.html","453d78597b7b273881f2d9e5aac5643b"],["/posts/2ffcda9a.html","7ba4b2831b93b22927b4765c68c4faf7"],["/posts/3098d714.html","aeddad3217185df4dfd887a98481a17e"],["/posts/30b27542.html","d02113b00e489179638b79260d718cf6"],["/posts/323ed1b8.html","7f3c14fd3c51851e1acfa3c1a83bae7b"],["/posts/32c5d0d9.html","97a70a8fedcbf234f7aefb36b6597db0"],["/posts/32ffa341.html","c97f39012b2db5e7c3ad429f2e1aebc4"],["/posts/357dc334.html","7a3ca47d418c453194e95ec534cb9217"],["/posts/376025fe.html","6944610308bd9ac57fe9935292ab567b"],["/posts/38a07d35.html","7b6eed0bf47d500abdda45ceaaccf138"],["/posts/3bfd1783.html","2336228d85e21dd5d1669bfcd87701ee"],["/posts/3d7d3997.html","41dd9a440e71acc3872aecd16fbc6bb1"],["/posts/429246c5.html","421f672d14fabe197cba2bd3c190d62a"],["/posts/42ecd398.html","34ff13cfac06d29cd1b6aa0518223bab"],["/posts/46b39789.html","3a40e54d222eb9d324c1b1758f2e6d4f"],["/posts/483290b5.html","b6cb137bb9ed94c5dc6d245f89f282fe"],["/posts/48a224d1.html","85902f3f9a89baeb04d762cfc6c9a219"],["/posts/48a2d97d.html","607a096f8b692920e18708eea6ab8c90"],["/posts/4920f048.html","b4866ca0e679c43c4366dd27a4f8547c"],["/posts/4a17b156.html","564eefae14d94b368546746438be5919"],["/posts/4a71123b.html","06540c06bcecaba8da12bd689012908f"],["/posts/4a71133b.html","2a787823e587412a1e75d66187f68286"],["/posts/4c2deb5e.html","dc4c9818f9b2bde0af77637495970732"],["/posts/4dd55455.html","e29388fdf757fb731a862791b8709fba"],["/posts/4e6873c5.html","8ece9134a5d0c78931d4bc960171bb27"],["/posts/4edeccca.html","a49678e7702132c0a10e1ff44974241a"],["/posts/53ab8d74.html","a7b2b29b5d6dbf9215c9e844587b5c6a"],["/posts/53d0a404.html","98188db72ad71d1b2e930dbccf055886"],["/posts/55b264de.html","2ec541c82df16836669b397e04bdb09b"],["/posts/564714f9.html","32c53d3e33d5b89c524b6d179ecc82ab"],["/posts/594433a.html","6ef47e5ec579e181dfb77f7549f3fcb8"],["/posts/5bb73de.html","02c46dcd2b56fbbb0cbaf95304c3f70b"],["/posts/5bfe6261.html","a5be2d59a359ec6e5b85f9e7b02b5919"],["/posts/5cc46d49.html","b6c64d6a8b9c470c3b5e3f1910aaf804"],["/posts/5efb0a25.html","23db9485905290107d1d69aebd595432"],["/posts/6009a9d8.html","85c6c14d0608635b319b59182830dee3"],["/posts/606a512e.html","176e133b97c1930fe0093f77e9a45fc0"],["/posts/610da529.html","728dca1fa8169366ee7b9c6114c24126"],["/posts/63637a24.html","7291b5fb29e7048a028bfa688162d926"],["/posts/695a6c4b.html","4caeaf483ab8cf0eaec7ddf17a1e5d75"],["/posts/6980c27e.html","b0995ce686785611e1df3eaa6f1dd824"],["/posts/6acc7206.html","11574a995390af2f3c33b1c04a4e9f3e"],["/posts/6cfc95e.html","4ade96251a46abfeba8ab8f429400b44"],["/posts/6e430c9c.html","c5ed2a5792b35f3b81df222d9277cee4"],["/posts/714668f9.html","3345dca4d21a6f97c2fab92d452d5302"],["/posts/72b49ca2.html","af3f7f9decbf6d3b10850ce71d8537ba"],["/posts/72cd4c87.html","f5e539a64e3c92b07866f80a86ce83c6"],["/posts/75ee5fa.html","0f57dac0de7bfaa628dd559a310d3826"],["/posts/780b9de2.html","c276e34539a1a021d87cd0d721841b02"],["/posts/7827182c.html","fef753ad667e8a3d1abeba21665a8845"],["/posts/787a8307.html","300af239687329bfd43c18d1fe91e23a"],["/posts/7cb85200.html","4b31f3053d47c5e4506cbc561bc9e5b9"],["/posts/7d6b1f3c.html","77a598202622e655c6a171d093302298"],["/posts/7def3950.html","1f149ea41d23fa70f9ff06af5ddfa36e"],["/posts/801b51ef.html","61f5b416f274ca9656fd91d1c1e54849"],["/posts/8485750c.html","87fd37810ece57dc98bfeb123c599f63"],["/posts/87e9dc75.html","eea30ef0ce70d33292401afd8c2be054"],["/posts/897831fa.html","a0f43d5e5dccc318a90e35167dbec0e9"],["/posts/8ce758a7.html","9744b7bfe07ee7ba4fa206b7d9226842"],["/posts/91223731.html","95c4d5261d105535716213882aa2e2fe"],["/posts/91953e39.html","74de96707cd07bcc28b60b61959f7fa4"],["/posts/96f894a7.html","d133f0a3f1f994e7210ebf4a4c975978"],["/posts/980d646e.html","c73eb7fc29e8f211ddec46f9aca31f9b"],["/posts/98579906.html","91cf995d25e63f1fa530627ef94fa2ed"],["/posts/9b624d43.html","351c9b3d92f825fea494a96971568ed9"],["/posts/9bc3b11e.html","1a97e4aab4175561932dff58caf281f3"],["/posts/9ef6ff16.html","e6c5e4177b12bbc4be3bccea7e8e53a5"],["/posts/a105df5c.html","261e02f63c41e294fba7b3c11b06193b"],["/posts/a2af0ea3.html","154fb225a6e2a38c28b5bfc0adebd6b3"],["/posts/a3ed1548.html","aee151e5bd9eb4db7ce44a49fff080ab"],["/posts/a4a39746.html","bdd3bf583c067f72ceddb7c73ce4f33e"],["/posts/a5d678be.html","9de81db5fb3f1ad4b9c7ae66f18edfd9"],["/posts/a5eec80c.html","008e28bf74822841c8f8b4435f3e3b96"],["/posts/a79b4f5b.html","15fbac94a900434e7630ff813b70d4fe"],["/posts/a81e94e9.html","88a7e58b1d521a2656bcb62b827406a2"],["/posts/aa02a436.html","49359d9b5c92fca9057129d4f96a480a"],["/posts/ad720447.html","3832c0d44eef7e6abc3065069c013fbe"],["/posts/b0ef01f5.html","032e65f58f034534af3a2ab2db4b590a"],["/posts/b190dcb.html","876c5587cc4a5d52b3a529f7027ebce7"],["/posts/b387b8d5.html","eb7d0e7cf0c188a29ee888bd51437d93"],["/posts/b4a5318a.html","32d7d03b86539f6569e77db006203669"],["/posts/b4fa1b4e.html","db777754092a08e357bee537b7698661"],["/posts/b59b6a41.html","5e2ed10a6868c84b697b51c800e537e6"],["/posts/b6ffaac2.html","b0c89299251c77e415e448f2b68848ec"],["/posts/b9b7baa7.html","4ae34ba6af0c9679c0ef0e1b9791159d"],["/posts/bb7c60d.html","f26c59fdd0607fc673d7b8f8721a224c"],["/posts/bbe38b68.html","ced643217386f0fd7b599753cfe9e863"],["/posts/be57c430.html","92f64c442417fca413330d8ab9a750ca"],["/posts/bfb9db00.html","59727db3bb0c74eea454343bf44c55c8"],["/posts/bfbc2e0b.html","532770d1dc830c8d3d9065996b5e234f"],["/posts/c16b9d82.html","517f49c92285129b6711e8746a7ca407"],["/posts/c270974.html","6b5e95a81027c9c78efb54a1bf4e0a6d"],["/posts/c2c98f74.html","3cae24222cd7c011efcc9cf3a17c91b9"],["/posts/c5520104.html","e81a9d374f845ebe4bdb562563aec825"],["/posts/c81f7fcf.html","843c557011bf62a35f37cf3bdd3f36f0"],["/posts/c89a329f.html","eccb61f8d8d33ede9a2bb3b5c6268469"],["/posts/c8fc3430.html","4e7bac39bb19047517e20adb58f1174d"],["/posts/c91f449a.html","85cdcad6a9c9f1abbb8661b3e5900a9a"],["/posts/ca7a6c92.html","438aff56bffc20cd2e4e61acbb022309"],["/posts/cc03340e.html","45eb6339b0bdf9e83a04b9fbe0e9c4a0"],["/posts/cdec63d.html","fa67212a0431361c486cf7520614e239"],["/posts/d07ffe1c.html","7c021c61b566b403d76d9b8be4d1f78f"],["/posts/d178b062.html","758ce5bfdd689514dcc1653a8c443bd7"],["/posts/d53724bc.html","70f5a301bcb0f94feb4b6edd20379a93"],["/posts/d70eaced.html","76671f42c1e37b83a7b452d8f60bbc93"],["/posts/d7edfddd.html","81188228239eed0d549471a306aab1e2"],["/posts/d8795dab.html","1f65d6ddcafbf2aed17970eaf3f49966"],["/posts/e00c1bc.html","9a690a4769b593a03cb81fd9d3043259"],["/posts/e3dcc811.html","7f92eebad8dea9218c5ddf400cccc1be"],["/posts/e6f6b883.html","4d524bd0a1e84be69599918a5933bcbf"],["/posts/e821aeca.html","ea56ef0ceb5a937a89e74393d6f21ff7"],["/posts/e981c79e.html","4b6343b2a1cd6997dd80076aa3fb9a57"],["/posts/e9fadccb.html","9320fa9d2784f0a5f413a4645e0ca79c"],["/posts/ea7b2ec0.html","5f818bb1cfd6675f3e4fe680736a22f4"],["/posts/eb168c8b.html","68e2f9276fe88466a7bcb0b0aaa3ff06"],["/posts/ec477027.html","2617dd58b68fe19b9118c6ac22b12e3d"],["/posts/eeb47c66.html","828d82c416ce36fafe20a7373963966d"],["/posts/f0765214.html","40ca9c8fc83a78749c1f44aaf8fd3a8f"],["/posts/f0940727.html","0f2f5cd5c44924ca5d158d5237834766"],["/posts/f1ab62f1.html","b58382fd4538176102119450895f191f"],["/posts/f3b50546.html","0c6f638d17d24c49e8f314f08160bd16"],["/posts/f4524359.html","c07e9ba3c3b7b60c9ea56c59402f63ec"],["/posts/f4e10e30.html","af23e380173161cf36c3c0e9c18d3a2e"],["/posts/f70539ce.html","dce2a898ab8e2a51eca7fc21d1690621"],["/posts/f77eee2d.html","c3a4a9fc03be1bac74b225f642446d96"],["/posts/f8d2d5ec.html","524ab4b26b2c040f85a3150d70db1ce9"],["/posts/f9a25cd7.html","e8889d687fe3d6739db66a99756fc7bc"],["/posts/fb97a8a5.html","b59e05c905e2e864ccf50e2664f42d7f"],["/posts/fc610c2d.html","9cc85768b864e711d9f27b0aa52e43b6"],["/posts/fec1c989.html","805ca99263e69563da5cfb4aa10a2890"],["/posts/fecd7f2.html","2e3d5428ff2d3990c5c3c0c62506ea99"],["/tags/51/index.html","c6597f9ed78242cf9bb8e8107d71b827"],["/tags/aes/index.html","0b102052e017c742ffa29e4f8abbd9fb"],["/tags/anaconda/index.html","c14c44a7bcc9b7af6d3c471cbf650e90"],["/tags/azkaban/index.html","bb741816de5fbc6fc9f1c4cdd3cd4113"],["/tags/bigdata/index.html","8752c15537e172fee9b7096456eeef59"],["/tags/cassandra/index.html","b067461fb9f962bc4bb89d00e2cba86f"],["/tags/centos7/index.html","cfd4455a30afeaf7f34866cb2e7d666c"],["/tags/cloud/index.html","1b54090f11c933b17ce0da362d69ab68"],["/tags/django/index.html","2d3588b172f81d8252a8dd52198862ef"],["/tags/echarts/index.html","77b81516bfeac3c48f0c9ff22294b414"],["/tags/flink/index.html","42257c10cf1586fa50e433dfd76daad7"],["/tags/flume/index.html","21b510f215768f59f9e2cac189263ca0"],["/tags/frp/index.html","414c67525602c636d1d6e2b1235ba309"],["/tags/gcc/index.html","aaa23618532172b98555ffb88062cc11"],["/tags/github/index.html","ee490d3206bed1e84a0c45db81f73f81"],["/tags/glob表达式/index.html","052d3c3d253eaec7ee6873b94cf84fc6"],["/tags/hadoop/index.html","55263da9e8f2408296db1f798651df55"],["/tags/hadoop/page/2/index.html","85e4b5d677fd2460843c67c4ed950977"],["/tags/hbase/index.html","d6ca99f09b939423b006413a8b5c44ab"],["/tags/hdfs/index.html","ab5162949948478236877e51d72bba55"],["/tags/hello/index.html","41866cd94503e7d91ee08220e22c69fb"],["/tags/hexo/index.html","754862006da3d27c8f2748b9bbcbb7c7"],["/tags/hive/index.html","1fab007abe921da8deae63ef10a6dbec"],["/tags/https/index.html","42216082ab3284e2e3831a32611717e9"],["/tags/index.html","d48deb23f902f56da1e78f1d7e4646bf"],["/tags/javaapi/index.html","20d9e4e1ec9ef8f8cd567dc623eadc23"],["/tags/jupyter/index.html","c7d0b8d38c44ce421f677f028a5faef3"],["/tags/kafka/index.html","1e5e38cf98b8df8de025f7c51f8b3687"],["/tags/kali/index.html","ec024a10556617c5b1ea69ec7bd5739d"],["/tags/latex/index.html","03f6341e2538a11d486f8764dae52117"],["/tags/linux/index.html","03c1fc1e3d9ad47d7bf535440668f58f"],["/tags/linux/page/2/index.html","d474b5d1d299d10c15649ad71b9ca08a"],["/tags/mapreduce/index.html","5c1016190c6d453c9f5304e4c6a89166"],["/tags/mapreduce/page/2/index.html","d202819a8430e35775f90e70fb345ad4"],["/tags/markdown/index.html","64c1330239aabad6bae3d7f714fc4374"],["/tags/math/index.html","d7afe725d0124dcc4960ec6ebf791b34"],["/tags/maven/index.html","ebf8325873729a310f725b8254953d55"],["/tags/mongodb/index.html","cc8d7ded29635b007568792f1cf9d1db"],["/tags/mysql/index.html","fb1086a77a010df4575b48d77f0bd295"],["/tags/neo4j/index.html","7e617d1066a517986d508054fd5dbc4a"],["/tags/netcat/index.html","8fff12512347870216bf52338bfc74bc"],["/tags/network/index.html","5ad0050d7e1e163c9be60bc5bbc48c0d"],["/tags/nginx/index.html","31671b2e2c1e323eb6b7286683f526ed"],["/tags/nosql/index.html","44b5cc561d2013c8fa57f4b3ad7f3392"],["/tags/pdf/index.html","529d21a6a4a713a305d8b43bd53d45db"],["/tags/pdf/page/2/index.html","85117d8a1737770900591c2c4820689e"],["/tags/pdf/page/3/index.html","0bfb3d3eea2912c2b0af938c023ac343"],["/tags/pdf/page/4/index.html","16afefbc81ea9a0080069e7883f3e9a2"],["/tags/pdf/page/5/index.html","b266e936c7cdd5f117765937dbe7270d"],["/tags/pdf/page/6/index.html","36517ccb626dc1b620c2bf38aeee291b"],["/tags/pdf/page/7/index.html","1c766f28087455f70269fa20448b2d41"],["/tags/php/index.html","ee981aceb1e02062c5febc259f7fe712"],["/tags/python/index.html","45f3deb92bc7a51dccb87e9c712f1475"],["/tags/python/page/2/index.html","503b77c9c69fe6359ec163d83378333f"],["/tags/python/page/3/index.html","2d970bf84f6eec07903e160379726432"],["/tags/shell/index.html","66141198cbca919ed2f28295852b7693"],["/tags/sqoop/index.html","5285717594027e751719a6bfc03b58cf"],["/tags/ssm/index.html","98029182ef2d09d8e3192d85a77645ee"],["/tags/time/index.html","cc73d853347d7e5678dfcaf64f2dbec0"],["/tags/web/index.html","29f5035fb85c7b5c5c39a8470e8bbb93"],["/tags/websocket/index.html","51bee07874bca7ad866af5509e8c22ac"],["/tags/web安全/index.html","7d69075b11cff1eb8f07fcde1fdfbded"],["/tags/windows/index.html","42576b8333e231376b07e4137a792ead"],["/tags/xrdp/index.html","bd50c59703aa1187bf6c05bf97d2c957"],["/tags/yarn/index.html","67ed22814057513a0b46128194af6641"],["/tags/zookeeper/index.html","72a69fca00c9d3edbf7dd12174e79d87"],["/tags/人工智能/index.html","2f88b66b35d98c1844705e08e8f630ad"],["/tags/内网穿透/index.html","2ad17ae70519306b659c2c28bc93771c"],["/tags/分类器/index.html","512ec861a026a0d02630317f1ce38103"],["/tags/删除注释/index.html","c8018580265c766a3b61ae44f465e571"],["/tags/前驱图/index.html","64a81603632d97f559d0271fd3f3f23a"],["/tags/加解密/index.html","90abc1acb086a782310d33b8ec2970d3"],["/tags/加解密/page/2/index.html","561d631f31e21646efaff66ac1e2b4a3"],["/tags/历史/index.html","7450f6d8424b4aaca7091f88714e0e97"],["/tags/反编译/index.html","39721283e9e0b9c1f10a38a8b7a955bd"],["/tags/图像/index.html","5d1f84a645be3ac7546e0e1ba9495f5c"],["/tags/大数据/index.html","ed199227aad4515fc00d56c7801145f7"],["/tags/大数据/page/2/index.html","b5863d7cf16621ddd869faa3bafe09d3"],["/tags/大数据/page/3/index.html","ff3b40cf385cbe58160657dd571af8fc"],["/tags/大数据/page/4/index.html","b6436da788263464f0b69888e4fb75ab"],["/tags/大数据/page/5/index.html","b4753b3c949a9791647063ea1699d3ce"],["/tags/大数据/page/6/index.html","f5fdd2d1b00c8252b7a6161da02cb654"],["/tags/大数据/page/7/index.html","590ee9ca158b53e579a3cb4c3d0de999"],["/tags/大数据处理技术/index.html","47b7d1c5f923ee523c0ee9e1b4375c94"],["/tags/大数据处理技术/page/2/index.html","91cdbe711b33d9eaaf49b0be241e905e"],["/tags/大数据处理技术/page/3/index.html","ee077e2c2b3a4a0e8e3f65fa5f5c3cf7"],["/tags/大数据处理技术/page/4/index.html","a7ec562000fcae885e6eaa816174d7cb"],["/tags/大数据处理技术/page/5/index.html","b91eb0a78f82fec02644052bca87f99b"],["/tags/大数据处理技术/page/6/index.html","58a319807848c28d32b09669a6595511"],["/tags/大数据集群环境准备/index.html","6dc7170b40842a96707171a947e87753"],["/tags/实验性/index.html","1e18d15141c256e4ed317169f652723c"],["/tags/密码学/index.html","71c0868289765328fd3451129c4d0a9b"],["/tags/密码学/page/2/index.html","0c05b2ab79ea0a759d81f7ca5ef67805"],["/tags/按键时钟/index.html","e4e2663472e3055b64f06c571e5ef1e0"],["/tags/操作系统/index.html","d58650fe6329e348cca1a1b22b9af067"],["/tags/数学建模/index.html","00b6d4103681546f60be4d5ab0a1f233"],["/tags/数学模型/index.html","a34ac7ab186aee1765ac1f669c25a578"],["/tags/数据可视化/index.html","f80ab6339895ba7180eea20b5c4909c9"],["/tags/数据挖掘/index.html","d08dc889c1147f584ef7ca24ebd6b5ab"],["/tags/机器学习/index.html","04f8243d6582bbdfb04653b4d59192d0"],["/tags/机器视觉/index.html","374d241a7d407ca12784ddb45f056ab7"],["/tags/模板/index.html","bebd83a7196660f990d7a850021c9106"],["/tags/死锁/index.html","7a2f2b41d9db67056d5b6946fc801d39"],["/tags/温湿度/index.html","076a85e10b0415d71923a157de198a95"],["/tags/源码保护/index.html","ca113eeb2f686df9d835633a4db7a1d5"],["/tags/特征/index.html","184c4220098918330a9d626fca4273d4"],["/tags/特征向量/index.html","ccfce31f1fd71238491d484f6f437340"],["/tags/秒表/index.html","1df792c0567619eae3797a5d13e74f0f"],["/tags/线性代数/index.html","3d3e02c78e8ff7af868ccb3121669076"],["/tags/脑科学/index.html","3d9099f05bef931264fffca7b7adf7ba"],["/tags/虚拟内存/index.html","3f26f14c1d829ee14ac3bc8980975de7"],["/tags/视知觉/index.html","bdafd9df8b62288fc0218a8c95aca0e8"],["/tags/解释器/index.html","fc3f3137b5df38a4c0ff738926360f8b"],["/tags/超声波/index.html","98aaeb3d969937705c011bbd2e70a090"],["/tags/进程/index.html","e65037856e23647846e8fcf116161d8c"],["/tags/进程同步/index.html","81460cbb35c9a03931181298009d4ced"],["/tags/进程调度/index.html","2fc8f2971bf0e03cb11b7416e1509e27"],["/tags/通配符/index.html","8ad457585e7aeee2acadb9179b998048"]];
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




