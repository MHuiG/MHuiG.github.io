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

var precacheConfig = [["/404.html","87c9d46da63bd6cd98196318a61c7f92"],["/about/index.html","4f5549a1cb9e93cdd5ce5c0f815a0483"],["/archives/2018/11/index.html","e17b30f20ac3f1420ac3b52c8328cd04"],["/archives/2018/12/index.html","69682caf456f809e0dfd3ca29e4b3d48"],["/archives/2018/12/page/2/index.html","8242c9b0d47501610e6ded79cc0f4d17"],["/archives/2018/index.html","ab8dfd2716d22df690f749b73a03ba1b"],["/archives/2018/page/2/index.html","ed95e742e505fbd53582e8ef4bbaa64e"],["/archives/2019/09/index.html","401a9a1bbdabd07924efab98bd4e9962"],["/archives/2019/09/page/10/index.html","2974861d19a06033055c5ffee18494ee"],["/archives/2019/09/page/2/index.html","8ae62dfb40a8ff7376041984f6ee2eb3"],["/archives/2019/09/page/3/index.html","339e5b23d7bf4a95b5f032a2215a5e80"],["/archives/2019/09/page/4/index.html","c72db43e3a485283e66371e783f3bd13"],["/archives/2019/09/page/5/index.html","f84893ca93856f2d5b42bcbf4930978c"],["/archives/2019/09/page/6/index.html","772380841f92efbf46fe8392a9c8f2fe"],["/archives/2019/09/page/7/index.html","67318b5a29a999ed07c7421c463a59b4"],["/archives/2019/09/page/8/index.html","b09774ef96a900f38557da10785ef9b7"],["/archives/2019/09/page/9/index.html","781be4b048f50d414aaf70fe14794040"],["/archives/2019/10/index.html","42413a0d6834773efd4f0904d4174b03"],["/archives/2019/11/index.html","80d2bfbc0dfcd8b25af776529a083161"],["/archives/2019/12/index.html","68ac8cd0a7d843ddc1c6009b9c5829f2"],["/archives/2019/index.html","fa4bb3bfa816d749961151d221899342"],["/archives/2019/page/10/index.html","4e2ec265c7afe680458b09d9eee48457"],["/archives/2019/page/2/index.html","5802e1f10e02b3a9b1fa250efe5dc634"],["/archives/2019/page/3/index.html","f0b3d16ca32e8c7281d173f3e5af5e07"],["/archives/2019/page/4/index.html","fa08a9aea3f42cef3082846da7da8801"],["/archives/2019/page/5/index.html","97ae3f6fc10b16959dc28be8a68eb539"],["/archives/2019/page/6/index.html","812d60a733922e641c44aa58b97c532b"],["/archives/2019/page/7/index.html","49616c893c017cb80f375cdd12c87e3d"],["/archives/2019/page/8/index.html","f94bb02d122620f9516a2b9ffcd73a11"],["/archives/2019/page/9/index.html","0829a23fb6a1db28deec4cce949e2543"],["/archives/2020/01/index.html","ea06c7e8a3c01a577bc8de61f900df95"],["/archives/2020/02/index.html","621c075052a483c408d102c670081a09"],["/archives/2020/02/page/2/index.html","64c82fbd75cfdaa14a40d68fa7dc5806"],["/archives/2020/03/index.html","919ed235f83e677d7348ee092b21b89f"],["/archives/2020/04/index.html","90b2c74a043239282114f6cc4f35fd8d"],["/archives/2020/05/index.html","fd7869e892019617fb31d7852586cf49"],["/archives/2020/index.html","2d4e91e3408e3742af38bc4cb4a5c042"],["/archives/2020/page/2/index.html","9b14b5df4c8df9f35ca30fbde390c807"],["/archives/2020/page/3/index.html","c948a3c8ed48b6ec08ac39a745a48b06"],["/archives/index.html","408ae4aff7fd10c1f2313acbcbfaba55"],["/archives/page/10/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/11/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/12/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/13/index.html","408ae4aff7fd10c1f2313acbcbfaba55"],["/archives/page/14/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/15/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/2/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/3/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/4/index.html","408ae4aff7fd10c1f2313acbcbfaba55"],["/archives/page/5/index.html","408ae4aff7fd10c1f2313acbcbfaba55"],["/archives/page/6/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/7/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/8/index.html","02919ce14a50728a520e6531df4554bd"],["/archives/page/9/index.html","02919ce14a50728a520e6531df4554bd"],["/assets/favicon/favicon_128.png","c0f20ecec783191bd144eafa31bdb91e"],["/assets/favicon/favicon_144.png","bdf741f0ed8d9fd582b126ee938ac840"],["/assets/favicon/favicon_180.png","5f122d0d3cd72e90fdc1b8926f9a9cba"],["/assets/favicon/favicon_192.png","e49c872333fcad9390ee02cfffc11006"],["/assets/favicon/favicon_256.png","48cb3a595a985ababbe3028bdc4c5097"],["/baidu_verify_DZhcJiT1Cb.html","192c9a19e8da644b17ce0d8ae5810497"],["/categories/51/index.html","1a13be0cb6b43c6ef158895f214ed0c9"],["/categories/bigdata/index.html","2cfcae1b5b536075a057ff1c9cda1f46"],["/categories/hello/index.html","d960ab3be78445cff2798fb338875bec"],["/categories/index.html","a6f973310008143d99b88130f77477ed"],["/categories/javascript/index.html","726ae41fd30b73b6a7676f8a9aa8ee97"],["/categories/linux/centos7/index.html","3af29a4978f69d299b665b168b143746"],["/categories/linux/centos7/python/index.html","0ccbd832c0c5f80158b30efd460bd98f"],["/categories/linux/index.html","5a50c914639322356cf64ddf5d58abda"],["/categories/linux/kali/index.html","e4c6c688a71853c2c832d3c15e09d96a"],["/categories/linux/page/2/index.html","4e97f275ebbd7ffa2e19cf51dc332dd7"],["/categories/linux/shell/index.html","9a8a5b5c66368100b1c1b96a30a33602"],["/categories/math/index.html","6f08cecf5421386131b2b5d5a0d08b86"],["/categories/math/latex/index.html","1bf3cf364624e79e4f404bb9997edb86"],["/categories/math/数学建模/index.html","12005ac82039ebbde06483e55748c5b4"],["/categories/math/概率/index.html","3486cc42a8ba6dbdfe57ce473900ef33"],["/categories/math/线性代数/index.html","b6137b274777de7d13412877f3f5d8c9"],["/categories/npm/index.html","a7aab3bb6aec924820ee0638bbcedf3b"],["/categories/python/index.html","4611296566d2134b013d6f6c06d0411c"],["/categories/python/page/2/index.html","67abdd0e19039a2655e99048715da292"],["/categories/python/反编译/index.html","a7d3d6e232c3e595b7f6b63e4468b076"],["/categories/python/密码学/index.html","4ac5e1430eca61374e2dac6a06457f64"],["/categories/python/密码学/page/2/index.html","74b810a6bbc1cc146b2c4a46211bc465"],["/categories/python/解释器/index.html","213c21a14680aca7f5a5c9248db204f6"],["/categories/time/index.html","9fce742d4f954dddf3213fa3533cc782"],["/categories/web/django/index.html","cacc1a2dc7ae217221da8bcfee0f2857"],["/categories/web/hexo/index.html","f0f08e5426d6ad43ba033a9f2723ed38"],["/categories/web/index.html","8b83cd0c6a9bae68ce983dc255d3054d"],["/categories/web/nginx/index.html","4501bc870f4ffe989875fae2c818e293"],["/categories/web/page/2/index.html","9cbcd8d689d71ec6cb1a904f8396930e"],["/categories/web/内网穿透/index.html","07d181945b0affb1bb41eccd9916a3e2"],["/categories/windows/gcc/index.html","0fa0adfa323fc2f323ba82c33565c2ba"],["/categories/windows/index.html","8a55d7dc8ae0d36ec3d3398466a43587"],["/categories/windows/netcat/index.html","7c0ea73a44e1e3f582942d9b290bb6d6"],["/categories/会议报告/index.html","6c0fc5e7bd47ffad6df981f7e744a68d"],["/categories/大数据/flink/index.html","6f004dcfc8c7f00f9a93279e78778cb3"],["/categories/大数据/hadoop/index.html","65952211f27a9a5fe3075b1e4cc506c9"],["/categories/大数据/index.html","efee2b17c711609d456434f2fbd26a25"],["/categories/大数据/nosql/index.html","e4d71433c9adeed3c5b93af2888989f3"],["/categories/大数据/page/2/index.html","4476c27cb9fc48fc6a34c61c6f1e57c4"],["/categories/大数据/page/3/index.html","7db4ed039e498db2dec646f0bf4a9296"],["/categories/大数据/page/4/index.html","967ce67c0231d47e8a1e97ff373407d5"],["/categories/大数据/page/5/index.html","d2bb226ca224d42c23080c5d696ec398"],["/categories/大数据/page/6/index.html","299905bad32f16b2d036e7f9043afc26"],["/categories/大数据/page/7/index.html","1bf48abd6a9f3e9196414d82d17044e9"],["/categories/大数据/page/8/index.html","87814b58882696b8d251591086b50f85"],["/categories/大数据/大数据处理技术/azkaban/index.html","9efed64baf1589b6cdb9994580b71888"],["/categories/大数据/大数据处理技术/echarts/index.html","0f53ce12543463bd1547a643d522b96b"],["/categories/大数据/大数据处理技术/flume/index.html","17256638d9db9eaa971b7000ef3551c5"],["/categories/大数据/大数据处理技术/hadoop/index.html","d0ad6fe13e8bca357fdf359ed672a423"],["/categories/大数据/大数据处理技术/hdfs/index.html","34d2b374164852b692a61b5332c8349a"],["/categories/大数据/大数据处理技术/hive/index.html","3fcaeaa6c2d082ae424a816c998337e3"],["/categories/大数据/大数据处理技术/index.html","e5feca97a6991ab9fa611d0a2271719d"],["/categories/大数据/大数据处理技术/kafka/index.html","7445f2bcc87114ae291fa0965c6b0cd7"],["/categories/大数据/大数据处理技术/mapreduce/index.html","5f4571ff28a41b90a693ce7a6271e037"],["/categories/大数据/大数据处理技术/mapreduce/page/2/index.html","f961ec6164ea900dc8f8fe81f0a063c9"],["/categories/大数据/大数据处理技术/page/2/index.html","a95f7c3db5bdec1f657368c13ec8dbbd"],["/categories/大数据/大数据处理技术/page/3/index.html","620adf06fae413ae9d6578854001f1dc"],["/categories/大数据/大数据处理技术/page/4/index.html","9b35eb9ced25dff66acd31c031536334"],["/categories/大数据/大数据处理技术/page/5/index.html","57795f096044bf2730a5d35ed336ed3a"],["/categories/大数据/大数据处理技术/page/6/index.html","81b156c6bff3d4fc1b4cedea72d9f5b8"],["/categories/大数据/大数据处理技术/sqoop/index.html","9c87f9968af5280ac03d5c0727c52388"],["/categories/大数据/大数据处理技术/yarn/index.html","b7965f6d347d214fd00d6cee767a1b1b"],["/categories/大数据/大数据处理技术/zookeeper/index.html","077b57f4649c0ae2bfa44973134050c5"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","4683aceb9e5865df1b46b6a2ce9f8b33"],["/categories/大数据/数据可视化/index.html","7ecfebddf93e2d2abbb72eab9dbfbde4"],["/categories/大数据/数据挖掘/index.html","0eec2708644722fcd350b72d91d322c6"],["/categories/实验性/index.html","2e988695eba8463ddde118fc918321ea"],["/categories/操作系统/index.html","552f1d4bb2e9d646e2572eb73e36a640"],["/categories/机器学习/index.html","c203d463fd1be16ba168ddfdd8ab225d"],["/categories/机器学习/机器视觉/index.html","6023516622e9b82484f66a629b138472"],["/categories/模板/index.html","76aefea5dda9c8d969a586885034f78c"],["/categories/模板/maven/index.html","9bae46a9503652664a05005a17bf78ce"],["/categories/错误集锦/centos7/index.html","d9501eec36561d7bd5e15359a9d2c3d5"],["/categories/错误集锦/index.html","8e9e593d498d7f5ade0985476fe4ea6d"],["/css/style.css","e57532883e0065d31280a1cc7a35eede"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","bd2e6d28e7d6c289c6ab8205f5e300fd"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","2cba25eb31a85ae1eb8a0233e500e1ed"],["/js/app.js","19a01cc2a62d05dce68a572cb607dae7"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","430596db58e60567246c52c474816ee6"],["/mylist/index.html","8db4a0c28553b3e33852fc19b6777892"],["/page/10/index.html","cf67c411c167a7b5552779ff765000a9"],["/page/11/index.html","d0354edaf307f1f887b8708aa88dff0e"],["/page/12/index.html","8f2c1597192ca55e28822ecbd6b1361f"],["/page/13/index.html","31f8ec8597b164cea45baac04e3d5060"],["/page/14/index.html","58842a0e8b50587236929a256944155e"],["/page/15/index.html","ba90aa01435a6a24add2f2071765d549"],["/page/2/index.html","2173d47d6e0d2b8c6589edcd76d3db5b"],["/page/3/index.html","ba03641bf7799ea8cfe4535723e6ea62"],["/page/4/index.html","6efdee70534e2662ecc8516e69d0da76"],["/page/5/index.html","94fea3cf203b99ae70599d8c9fcff171"],["/page/6/index.html","6a17d7b9616fecea7df2e8d04a737753"],["/page/7/index.html","c22eb9157e60e2fbfeb4ece4ec31b8ac"],["/page/8/index.html","584aee1b8e75fb26ebeaebd13e78048a"],["/page/9/index.html","7499c39af3be36545df35e4abd85eeb3"],["/posts/1009d3f6.html","a3ee1db48659d4e33e67af32ad4a6326"],["/posts/10cabcd3.html","d370eb34677fdb0a4b0ed1922e120b64"],["/posts/129a9db5.html","957d3225614441918cb9ec073abef884"],["/posts/14fa5bba.html","5c68045991faa2799f768e31d7efe553"],["/posts/1601d925.html","5c65e6aeb54392a422c357abb3410deb"],["/posts/1e1e5118.html","feb8b733fe138965c6674fc5de8a5c86"],["/posts/1f519fd3.html","820e2ed4a7c5a15e709c5b217ff9f552"],["/posts/253269c2.html","b189b5bcd9ddf04b547b56b88105a9c5"],["/posts/2ffb45fa.html","1384527f32bbfaf4a00028101c600d95"],["/posts/2ffcda9a.html","a2342dabe797a735c8c512b5f045ad62"],["/posts/3098d714.html","c416ddbaecb4fd504ca63ca499a0a775"],["/posts/30b27542.html","566b2a055044b619641fb585bf49e3c5"],["/posts/323ed1b8.html","8b18ddb9512fbdc009d98a635a6cbf52"],["/posts/32c5d0d9.html","293d7bd0c6f910907ce76be8111d3872"],["/posts/32ffa341.html","c428a843d3ef87b9fb9e6b473cc84ec4"],["/posts/357dc334.html","8f131fda6d7be23ca4921acc568402b8"],["/posts/376025fe.html","40780c2d81700ab9de1e1640b5712075"],["/posts/38a07d35.html","70a86c4a3c09f43bca0c8e87b14e704e"],["/posts/3bfd1783.html","8bbac85b6690f16039a1cdc7975481b5"],["/posts/3d7d3997.html","287b2a64abb8d4d594cd771ec2cbf475"],["/posts/429246c5.html","561eeddcfe5708c707fcaf9d8e49e01c"],["/posts/42ecd398.html","180ffe4af92dc4d4d9a2594cff7dadd8"],["/posts/46b39789.html","12bdf2e40c956a49cd5d99ee550e325d"],["/posts/483290b5.html","b4f24809a288372908f8f36efeed09b8"],["/posts/48a224d1.html","6f437417193a93065eed3ab4703138f9"],["/posts/48a2d97d.html","74d482cdccecd9f8d9a7bf34f006c9e8"],["/posts/4920f048.html","5f82057b677ff68168357069a4039b3c"],["/posts/4a17b156.html","8a68966407c12b52f744b868347009ae"],["/posts/4a71123b.html","a267888709db33ef590a7bcdde68c9fb"],["/posts/4a71133b.html","5f35c5861ee327006f8edf6a1348ac81"],["/posts/4c2deb5e.html","d0025eb0b0df842878e33b041a751607"],["/posts/4dd55455.html","c098c7e21415c735a4473502cfe1a1d5"],["/posts/4e6873c5.html","e03abc94a638df0bf14cccae03d52a04"],["/posts/4edeccca.html","abb3fc4ca055b32cb5999ebe671679c5"],["/posts/53ab8d74.html","7eaf130538bf31883b75966095cb6b4c"],["/posts/53d0a404.html","b6765473f845c21edb6a023a4f2f74c3"],["/posts/55b264de.html","1a1dadc0520eba5e4cb0e5c7a28f3ee1"],["/posts/564714f9.html","074ab52f86d369a5f7290491bdcb1665"],["/posts/594433a.html","322be764722c3ce48dc23d6a7cdfd2bd"],["/posts/5bb73de.html","1192933970fba62e69d37c33d23ee3d6"],["/posts/5bfe6261.html","0c463c99abf1ac34ad22f2ab47075afd"],["/posts/5cc46d49.html","e5edb049e972ccfeaef4717b601ad492"],["/posts/5e7ad437.html","401e6b359e747cef516d40d4bda7dc6c"],["/posts/5efb0a25.html","1917a8f3564dbfdd2b8a115a50585358"],["/posts/6009a9d8.html","346477f8e8db3f8fbd5e1bb4796e8797"],["/posts/606a512e.html","068125633f690b134a0dc134507bc49a"],["/posts/610da529.html","b9f889c72d1bc607567d079d52a28e4e"],["/posts/63637a24.html","e40b3b01c11ecd556199752a7161601d"],["/posts/695a6c4b.html","a084124dd5b48562ae82c7f75a599fe8"],["/posts/6980c27e.html","bf045f58338fda3f7fbe06028c9c2ea7"],["/posts/6acc7206.html","68d4d0a0803798199eb975f3771a8c00"],["/posts/6cfc95e.html","1432bff1d1b129c6bbe8d2b0ddc4dc58"],["/posts/6e430c9c.html","de72cc1ff9da1a38453839d2f4d959a0"],["/posts/714668f9.html","359d602a88b68d8d5e75ec41ca83da2e"],["/posts/72b49ca2.html","aa5734fbabd8d9cf8c041739e1f54745"],["/posts/72cd4c87.html","f16e41fb05e0352a8a8db379534caab2"],["/posts/75ee5fa.html","3c99f31ec655ca8c88470d879295a10c"],["/posts/780b9de2.html","a01fd02681968965db7330fe74188429"],["/posts/7827182c.html","194d17baf5e07165fcea7176f6ac59f3"],["/posts/787a8307.html","9833900f50836ec6e23370a39581d2a1"],["/posts/7cb85200.html","d0c0208a70cb8bb650cfa69951d7762b"],["/posts/7d6b1f3c.html","7c1ddbcac8925f1cc2240b20831b4c47"],["/posts/7def3950.html","1c5fbbadc04ec399229470e3e0a7b81b"],["/posts/801b51ef.html","63f84fe47090007a6d8b856d5501bb7a"],["/posts/8485750c.html","70d2ac5ff327ba699bf1ab922d18bc8f"],["/posts/87e9dc75.html","75dd8d8120b40cc23c285fc31b9fffd4"],["/posts/897831fa.html","aca337bde9bf4cb0e96d3f5c3c689590"],["/posts/8ce758a7.html","0e5f794a4f1a9d62130d5d2332ad88f2"],["/posts/91223731.html","0a67dbb0d3caac6c5009def66b6934ff"],["/posts/91953e39.html","351d55eb40bf6a62d0572168557dd48a"],["/posts/96f894a7.html","1102e739f90cb51e6ba61268f8afcadc"],["/posts/980d646e.html","44f10ce076d6325afe2c4bf7e1750e8c"],["/posts/98579906.html","467af268dc35996bbca6f9ba24cd16a8"],["/posts/9b624d43.html","dbb392f3febb9c3329eaf6cfb5993673"],["/posts/9bc3b11e.html","6d5944a240275cea8bf3bb0a9b94d494"],["/posts/9ef6ff16.html","08a207afd50c55bbcc6754620b1944d9"],["/posts/a105df5c.html","7519aee55ec65f774cb3790a03cdd182"],["/posts/a2af0ea3.html","f25df330ff3f42effd44b12cd7f81bd4"],["/posts/a3ed1548.html","e8708200ef1de44a53bddb9f33810bd1"],["/posts/a4a39746.html","69fb809849d18207e0d7848012b35c7e"],["/posts/a5d678be.html","8ae366d19a0ab7d05770019c932502d9"],["/posts/a5eec80c.html","86e2c34471d3e1568255fb52257498c0"],["/posts/a79b4f5b.html","7b274db6395f2fa0bef7266015e04154"],["/posts/a81e94e9.html","8bd898fc58342fe7005b4f93f06de5e7"],["/posts/aa02a436.html","e98bfb3fd30a6a35557e63b5098d8171"],["/posts/ad720447.html","178918e23cac1e9394a05d4df571add7"],["/posts/b0ef01f5.html","9163d902ad828b4f88fbd8a04fc6a30a"],["/posts/b190dcb.html","24561980d57c01e064d2fdaaeb486ecf"],["/posts/b387b8d5.html","5a6c222005540ff790938a98f2a28f93"],["/posts/b4a5318a.html","ffbff5116f8e864b93028864f1c51c58"],["/posts/b4fa1b4e.html","dd9a97611cc1bd2bd9797d8ff0cce11d"],["/posts/b59b6a41.html","be3b8f69361ac4fa9abbe7f2d6c3cb86"],["/posts/b6ffaac2.html","78b3cccb92041aae41e0e72cc9ef66c7"],["/posts/b9b7baa7.html","5b95ef21872cf3ea5201a9cc2aa8a5a7"],["/posts/ba036091.html","f42c5670474221755869f3ccc4cce520"],["/posts/bb7c60d.html","f72d20a266ec62535e7f112d5df4c1ea"],["/posts/bbe38b68.html","5c840e62c5df071208941d60bf3cea61"],["/posts/be57c430.html","aea66c1e847d0526b91f60d46059ff76"],["/posts/bfb9db00.html","f95a1ebeb7f5059dee9c5fbba5022f76"],["/posts/bfbc2e0b.html","a97896c8f8af2710691f186f2f5c6dd3"],["/posts/bfe2ff2a.html","622caf31a14423bfa002450e29dd658c"],["/posts/c16b9d82.html","8fd49c8a639763e2b06a50dee160a385"],["/posts/c270974.html","bf42df15b93846369c6113f2f09b6d25"],["/posts/c2c98f74.html","698750373480e4c050d1789000aad27d"],["/posts/c5520104.html","f44c6eb3f07a6b091bd78265f20c1dae"],["/posts/c81f7fcf.html","409371c9c7018e1323e562e6eb982ca0"],["/posts/c89a329f.html","8f535adde826c344001161798ce32d84"],["/posts/c8fc3430.html","242d9fa83353466ce96117b6e774d9d3"],["/posts/c91f449a.html","d4e82547b45bf347479cf2a63d6d52e9"],["/posts/ca7a6c92.html","da0f9de126f636a45082ff420240bf21"],["/posts/cc03340e.html","2c5d77d95239a6e0f88cdba86616a204"],["/posts/cdec63d.html","3f359d1b50d3fe98b2d386e14dab3bac"],["/posts/d07ffe1c.html","b0510663f4f9190093166473ddd0f92c"],["/posts/d178b062.html","ec085d094a55326ea764bf4aeff3189f"],["/posts/d53724bc.html","bbc8856a4de56e3626fb6cf0968a0a76"],["/posts/d70eaced.html","fddd25206cfde90737456d08b5561b40"],["/posts/d7edfddd.html","36451a6bd34e3573b78abb3d737ed1a5"],["/posts/d8795dab.html","56cfb2d832b7d5c3b53135d955ea9eac"],["/posts/e00c1bc.html","87215606d133777285989823f67d9202"],["/posts/e3dcc811.html","f89182190e62e0f0f8cc8df11d51393e"],["/posts/e6f6b883.html","6dc59ebbf6df84784e1178a88bf60c9e"],["/posts/e821aeca.html","6060f677be7d9734e90babf3c101fa48"],["/posts/e981c79e.html","99dec2672035fdc24742ff530f5e6a6f"],["/posts/e9fadccb.html","d5e7af8a9c4179b8ab5639c363d97120"],["/posts/ea7b2ec0.html","96e706a4862eb6d2d03b4a4b01132e6e"],["/posts/eb168c8b.html","0b988a327d1227cb39b7689acf95b888"],["/posts/ec477027.html","33ad179edb29cec62ccd61a25b7f5b24"],["/posts/eeb47c66.html","50543abe986c333913a35a7ec899ba0a"],["/posts/f0765214.html","b4c602e4ceed8d89cabbc6f328d57e24"],["/posts/f0940727.html","a70337921669c2771cd8b426549670f1"],["/posts/f1ab62f1.html","8ad62eaf9447a3d01a58000bd9a82257"],["/posts/f3b50546.html","13892b9717de2096030e954cf49a6400"],["/posts/f4524359.html","a0953a9ac642a8b15661471b8528dbf8"],["/posts/f4e10e30.html","5e0a198cc68c9d70370795ec1945643d"],["/posts/f70539ce.html","6be64250c6d998c78504fbb4cc0d5384"],["/posts/f77eee2d.html","1284a5c798e20d5677388a285bf96631"],["/posts/f8d2d5ec.html","a004c94a0e8fd98911db5a1badbc1230"],["/posts/f9a25cd7.html","88ebe9d7980fb0fecab3bbcc5b269620"],["/posts/fb97a8a5.html","3da6399a2c4a4fdfb7b8499048ea424b"],["/posts/fc610c2d.html","ebea1256741b38c0901b38897a69599e"],["/posts/fec1c989.html","19ade2733bd9fee25d9b35f2b13805af"],["/posts/fecd7f2.html","9c9308e1dde60149f8ec7c939179fcb2"],["/posts/xa6297acc.html","0dd688ed8189cc15aa04fe3bef0ad495"],["/tags/51/index.html","69d2a083a65486cd4fe657764da1a2bb"],["/tags/aes/index.html","31772a178a1e5ad672e4f7a9c266fb0e"],["/tags/anaconda/index.html","d2ed15437986ba28d816e4c8ceac0c56"],["/tags/azkaban/index.html","46df94ee2a89e5147e5ae9965d495e93"],["/tags/bigdata/index.html","af87f66a3d9c991001d5a2db9615d6d5"],["/tags/cassandra/index.html","ee927d47f7e8bae261d0ffb5f3a08428"],["/tags/centos7/index.html","15644ad16f9d03f46a2e2292eb8fbb11"],["/tags/cloud/index.html","ec4d6423c62e4c1ef2c831acbb63168a"],["/tags/django/index.html","1231d525fbb96471f455b1689868dfda"],["/tags/echarts/index.html","ec48aadd0608b738dad12fa6e35c7f5c"],["/tags/flink/index.html","cc8d8fed3a5d1bc64112606d7fb124be"],["/tags/flume/index.html","ec3303d257f72f29132c9b1403fb7604"],["/tags/frp/index.html","fd835802415a11001add06faa1c437fc"],["/tags/gcc/index.html","ae38bc04eadda67ca7ae210c41a986ed"],["/tags/github/index.html","66f6c965043e529a1f17a89754feb791"],["/tags/glob表达式/index.html","13e65abeb5a61026c4940a392d3ce4d9"],["/tags/hadoop/index.html","f0badd99356591ae8e3938e414e7f7e3"],["/tags/hadoop/page/2/index.html","4bb6eb0e44a5dd2a30f78dff91eaa4ab"],["/tags/hbase/index.html","c83e2ad67f3345e8a502c60dbb04792f"],["/tags/hdfs/index.html","120215da3efabbaa34dd71c0946c8435"],["/tags/hello/index.html","2990b3bd79113e9ec346dfa1b5cc4bee"],["/tags/hexo/index.html","132d49c00f63e021505b8cafeae6cce8"],["/tags/hive/index.html","490793585e2b73c205248305658b40c7"],["/tags/https/index.html","8d07c1098bc440b889bd19120b37f6ec"],["/tags/index.html","06861a2e9ab858e52a33194fd50effbf"],["/tags/javaapi/index.html","1143780e1e59fcb3faea56e32e4f7c67"],["/tags/javascript/index.html","974a03308754fe276b28375fb3e2e9cf"],["/tags/jupyter/index.html","c5845b69a9716c494539e9e0a3538f44"],["/tags/kafka/index.html","bbc0422347d7293cde38de086e0c04b2"],["/tags/kali/index.html","593ff77edcd6736cd7af3ac640693dc0"],["/tags/latex/index.html","7820a0c6963d75b80d8a84b77e5f5db5"],["/tags/linux/index.html","4a9d1772035c501d6af6173d1e1a29fd"],["/tags/linux/page/2/index.html","0cbde949c6ce91dc488f5d2828639572"],["/tags/mapreduce/index.html","3bd0f763700cda3dff4ba7163b887e72"],["/tags/mapreduce/page/2/index.html","2fe5a8a663423cb3ba5da88a26ae9c8b"],["/tags/markdown/index.html","676b9c6efda8a0197a11828f0620710e"],["/tags/math/index.html","235f034d18c41235ca47a3bd35b6cb27"],["/tags/maven/index.html","eeb7f598bb74150b85f566b802c769e9"],["/tags/mongodb/index.html","bbaaeb60c52a10664b4f2ba450091952"],["/tags/mysql/index.html","890c92b36f250abae459fbce8f0ac317"],["/tags/neo4j/index.html","574dea0edf9e89bba88a9a6439bf9716"],["/tags/netcat/index.html","751c1b2bbcdac58fd3014079970c6fab"],["/tags/network/index.html","b5374739cfd65351bc19068100836989"],["/tags/nginx/index.html","267b93e710481736d01ee4ffe5840557"],["/tags/nosql/index.html","ecbb95dab2b85d0b68e6aed01d0513e5"],["/tags/npm/index.html","81fb96596fc85a71f27b5b7bf0f3e77a"],["/tags/pdf/index.html","04953f0099135aa462c23552b53767ee"],["/tags/pdf/page/2/index.html","d786d1564cf1c19760d867e3f97a5bea"],["/tags/pdf/page/3/index.html","a3c5075b1ae02e2b0dc8c2f612e784c5"],["/tags/pdf/page/4/index.html","0b9be35fa6a22dc1b271aad0fed9dd8e"],["/tags/pdf/page/5/index.html","cd2c92011cfeecda5f22d5965e1c3725"],["/tags/pdf/page/6/index.html","965c609d2e1277f00a22fbad4bbb2c06"],["/tags/pdf/page/7/index.html","1369e4b4979ab6e659c43738f66c8a84"],["/tags/php/index.html","f5a93fdd905b58d3881cc3ea967e794b"],["/tags/python/index.html","d45122bb2ffb933dc782e8b9472f07f4"],["/tags/python/page/2/index.html","cbbd9ae542812df2be4149ddfdb94f02"],["/tags/python/page/3/index.html","d8b04b35ac245fe59d62c06d481a9856"],["/tags/shell/index.html","e319b85b61062793a27f9d1c36df36ca"],["/tags/sqoop/index.html","c7137edce7dce7175b4e214dcc49ddb3"],["/tags/ssm/index.html","9277b9319f88c26eb624dbbe5a98d8c7"],["/tags/time/index.html","2c7e98c3ccb176617a7a59c6ac3ab67c"],["/tags/web/index.html","fb8433ed1068287d2ac613f9bc5a4479"],["/tags/websocket/index.html","48b562bb3e0ccdcd58f8a74c497ea278"],["/tags/web安全/index.html","64a7b25c83aa5c0f3ba8993e2a3628c4"],["/tags/windows/index.html","50d4c97f940ce99c6f6f022f4026abdc"],["/tags/xrdp/index.html","29c0535223bb952c67185ca438f90bb8"],["/tags/yarn/index.html","d6c7f2251ebd1af0a04f3f28ffc457cb"],["/tags/zookeeper/index.html","d2fcc6e5f099c35b025150e66427174d"],["/tags/人工智能/index.html","803083e56447dec054c638b8a9974e11"],["/tags/内网穿透/index.html","62bebe3fa5d390dc1a40b57cd7106b94"],["/tags/分类器/index.html","120b033263652055feebd2bc204e0ad2"],["/tags/删除注释/index.html","09866e33b5cffb3be00541b03bb893a4"],["/tags/前驱图/index.html","ef87c6b4248cc3fc10148a3640496fd1"],["/tags/加解密/index.html","2c343c1c3ba4db6d6437dcf7ffad7858"],["/tags/加解密/page/2/index.html","7c55a3333c4baa150951feba003a9f47"],["/tags/历史/index.html","5f47ef1a7c0a64c6f4174aecb520c60d"],["/tags/反编译/index.html","35c1245a1b268720e3e0e65efa13bc2a"],["/tags/反调试/index.html","f0733a6c28c6106fac1df3d6c16ef775"],["/tags/图像/index.html","b2a477ae075b896506e308c1ea7b6555"],["/tags/大数据/index.html","d5353702937bd005ddf18049d485c17f"],["/tags/大数据/page/2/index.html","31b5d5be9ec0605c0b9dab9a3d70d763"],["/tags/大数据/page/3/index.html","7000dc82f026c0bb61e6d5a1e0f162e5"],["/tags/大数据/page/4/index.html","f004f8b78cb819d6eaae334532154cb9"],["/tags/大数据/page/5/index.html","d915649de237a26e386dd25a52525ec3"],["/tags/大数据/page/6/index.html","e612f6538fefa454502dc9a51cde433c"],["/tags/大数据/page/7/index.html","cdc7c3b6368109ce461a525e00bec874"],["/tags/大数据处理技术/index.html","12feaa4bd56b3930a2bd96045e47dc7f"],["/tags/大数据处理技术/page/2/index.html","17a886f7f183ff6fca8338d6730c5e6a"],["/tags/大数据处理技术/page/3/index.html","23869d6b9943ee9d63f048abb7c0c0ff"],["/tags/大数据处理技术/page/4/index.html","a81dd6a59f8e5826b595ae163376be44"],["/tags/大数据处理技术/page/5/index.html","2529f1e4cfccca1a6b85a4b9dceb78af"],["/tags/大数据处理技术/page/6/index.html","ead8ae650b4b09a3c128bb301b67e7ac"],["/tags/大数据集群环境准备/index.html","816afdfdbe19fc7c0d92eaac62a1ccb0"],["/tags/实验性/index.html","3be35b74187ea6825f78224ed83cec02"],["/tags/密码学/index.html","1a5e88d508161f13ca9ac40790625134"],["/tags/密码学/page/2/index.html","3084a282eedd7a6b7b3b0ad63ddf6cbc"],["/tags/按键时钟/index.html","ad4d2b1359a6d1353827688ea15e5671"],["/tags/操作系统/index.html","c698a8580f7041ed072cef65fc841192"],["/tags/数学建模/index.html","0d7c5eb46b573e1c1d8ee731fc23da78"],["/tags/数学模型/index.html","24977f05d3261c08e5ba20ef9e478395"],["/tags/数据可视化/index.html","f8474986c32afee11ff84e6731ec1795"],["/tags/数据挖掘/index.html","7e4f177a221fefe130df62cf0c280997"],["/tags/机器学习/index.html","7374cb9ba1abd6bf764a71e9deca3d93"],["/tags/机器视觉/index.html","f1e81fcc5f0a257bd473d057fbcfb9f5"],["/tags/概率/index.html","0eb63a41c0cc77cc0755bfaa1bc51412"],["/tags/模板/index.html","5f75be6a9d22d663358cd80453721574"],["/tags/死锁/index.html","fdff066770396895499ee5ab0cf7574a"],["/tags/温湿度/index.html","d1e10c87cea0acf879cf249676ea3e11"],["/tags/源码保护/index.html","1e384017d3e621b9511080e2434551ba"],["/tags/特征/index.html","06b034739155b6a40dcb5f75ffa44636"],["/tags/特征向量/index.html","bdf5ee002a8ab69f9cbcb7406fcefe88"],["/tags/神经网络/index.html","4f2f2fcf090890e7c1e9f6b2b4d1da6e"],["/tags/秒表/index.html","034b716ac6695b9bf074bf48b6501d86"],["/tags/线性代数/index.html","67869b2ad941dc0c296366ab69e6ee0b"],["/tags/脑科学/index.html","34203c7daddf2dd02b5340f986ded2a9"],["/tags/虚拟内存/index.html","44b1ec6188ac6c2335bf9414899437b8"],["/tags/视知觉/index.html","cb6719335d1860083f8428b6b02b1578"],["/tags/解释器/index.html","2b85b8e14513b94a7ebe5e59f73c69b7"],["/tags/超声波/index.html","d5ff4701dca0074ecd8b88cd8289cd5e"],["/tags/距离/index.html","20705010cf68ad52e8e246d74ce259e2"],["/tags/进程/index.html","460eb85878a3f468ca6b32ac2e91df8a"],["/tags/进程同步/index.html","b854f9d65f2174c404cb7459d4a131ec"],["/tags/进程调度/index.html","1f69876f90ca40b8e0e3f3d583cb9b58"],["/tags/通配符/index.html","fc92d9d74af0d23b5e28e59c023e419c"]];
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




