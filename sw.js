/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1b9e91f587c7a00af55113995063c679"],["/about/index_en.html","a86a4d66c18811e3b0d7012d2d50f617"],["/archives/2018/11/index.html","fb518121d43dc809570db4c2f5a17fbe"],["/archives/2018/12/index.html","1d18553384f099c3afa2da7a96056eb1"],["/archives/2018/12/page/2/index.html","09efc4e38dc845177e7529d094799637"],["/archives/2018/index.html","5c553b6a80e29891e6a25eec31c8ac27"],["/archives/2018/page/2/index.html","b0eeb8afcc3817be9084adbabfd8dedb"],["/archives/2019/09/index.html","2e2ef47979375806d2dbc0ca9af2778d"],["/archives/2019/09/page/10/index.html","70e4a71ddb27e5c0459319fc213faff3"],["/archives/2019/09/page/2/index.html","8608379147ab2594d19eed6d8aa7b46f"],["/archives/2019/09/page/3/index.html","e73492d3fd5df8095487ff411fd715f6"],["/archives/2019/09/page/4/index.html","4dc0a3f49cd979a76c4ba2aded99cab0"],["/archives/2019/09/page/5/index.html","b9a35264a7dbbc6bc973e62168dfade4"],["/archives/2019/09/page/6/index.html","cfb122aa2e9a499d04bab2a850d0463b"],["/archives/2019/09/page/7/index.html","f4b1fde8b344f9c825c45e58467b1b4b"],["/archives/2019/09/page/8/index.html","e0ef57647176f4a7e11f61e075dc7c70"],["/archives/2019/09/page/9/index.html","a484a4427c8196c9f0a3a3640aaf44de"],["/archives/2019/10/index.html","98b32803921134821fc6b07b37b058a6"],["/archives/2019/11/index.html","1cb670c3b7ffc90f5f4157962fa11936"],["/archives/2019/12/index.html","ad0fbbf17113a20f1677e1de57fdf6a5"],["/archives/2019/index.html","0ee302eb23bf1863d893563699fad1fe"],["/archives/2019/page/10/index.html","d538b85e3b4929c9e3266667689cce0e"],["/archives/2019/page/11/index.html","2ed50eee120ed92335fe4401d7d387f2"],["/archives/2019/page/2/index.html","2b9a9bc37ffcd0da62628a72e5abf5c9"],["/archives/2019/page/3/index.html","f297f672fd15351609b773afce572842"],["/archives/2019/page/4/index.html","1cb1c11957e36323a9989ec8abd9c550"],["/archives/2019/page/5/index.html","5b2f2e5cfa964b65702475925cad770b"],["/archives/2019/page/6/index.html","d9d6ea1985356e2862a4858d3fc8d4ae"],["/archives/2019/page/7/index.html","81af7ab4a1efcefe06c05bd51356536d"],["/archives/2019/page/8/index.html","a37b207c9286f1e1646dfc07d66509cb"],["/archives/2019/page/9/index.html","e8164e863e74a5a5d72c32a8fd1d7fa5"],["/archives/2020/01/index.html","31e20855148d1a04400179dc19902817"],["/archives/2020/02/index.html","519970d88dcc8194839752108a4f775d"],["/archives/2020/index.html","166ae6481f59620875c0be818a5dc88e"],["/archives/2020/page/2/index.html","5e55007df2b09ceb6aedabb46236d3d3"],["/archives/index.html","305240219e57ee5db4dc9320eddb0d1f"],["/archives/page/10/index.html","9068b5499612eb445ad8f34ab09d64da"],["/archives/page/11/index.html","4eaad51d7a5ee969d3465a1e73c74ca7"],["/archives/page/12/index.html","41629dbc5256381afec69efc66eb65c2"],["/archives/page/13/index.html","9a17e7b129981cb8594a2f874d9fdb8a"],["/archives/page/14/index.html","24550d29c84b60f6739c0d8a3ff03b43"],["/archives/page/2/index.html","aaaf998c0436a0b2b1a29385656aba99"],["/archives/page/3/index.html","9bee0306dde07c2bfef135384bb28962"],["/archives/page/4/index.html","6456c88e9849158fcbe4c90c73dc30b1"],["/archives/page/5/index.html","ef9bdf08dd523c10ee081447f170c39d"],["/archives/page/6/index.html","ab2364a3f4af161f276db39641380e41"],["/archives/page/7/index.html","5617bb708ac39755a64fa3f47a732ac4"],["/archives/page/8/index.html","da54253d732b7717dfbdca3d3f6c3156"],["/archives/page/9/index.html","574ba5415ecca33b233d87334e30df3b"],["/categories/51/index.html","8a3924c77da0e50d0d4724e7af460f86"],["/categories/Linux/CentOS7/Python/index.html","dcb4c41215fa632fdf069f57b9d0c0ef"],["/categories/Linux/CentOS7/index.html","721cc5505c43fdc8d14dd9d97d2b05ab"],["/categories/Linux/index.html","d0d8b02b5971d31880dd134271303d6f"],["/categories/Linux/kali/index.html","caf567de26852379ab0798f4299627f2"],["/categories/Linux/page/2/index.html","756f5470d5a28cc669e5aeb70bfca697"],["/categories/Linux/shell/index.html","4caf084ad3eb05931b3bf2364f6ff8e8"],["/categories/Math/LaTeX/index.html","4920de9add26e4ae05dc84789009a4d0"],["/categories/Math/index.html","ab7ec61fc2492bc41af02eb57ba18c17"],["/categories/Math/数学建模/index.html","93dfd481688a08b06878a68804818dfa"],["/categories/Math/线性代数/index.html","fa01e4fa5841f6fd901285db8a1ecd22"],["/categories/Python/index.html","0c7ee877a50f5a88482ded6003ce6604"],["/categories/Python/page/2/index.html","8d697e35dc4a1ce317636f74697b1bbf"],["/categories/Python/反编译/index.html","dd54b4b2df10e29075efe6a5f6bebe28"],["/categories/Python/密码学/index.html","95e0f9fc08c21282b70b7e56d451e753"],["/categories/Python/密码学/page/2/index.html","feafc1ad8e49f82bdf04f2b3052daab5"],["/categories/Web/Django/index.html","bad77723b1bb12fae33b023be324f0dc"],["/categories/Web/Nginx/index.html","9a1ddc6964ede099f1cad975d6435c03"],["/categories/Web/hexo/index.html","9cf0307be8947633485193c771a00da7"],["/categories/Web/index.html","a1df35aa445a20e5233d4834b177a481"],["/categories/Web/page/2/index.html","46907ecaaa60e2c462ff97db160c4eb4"],["/categories/Web/内网穿透/index.html","e8ddb98456571e41145642c6a7d2e4a0"],["/categories/index.html","2c1bf2f198347af0598412ea1727b68c"],["/categories/windows/gcc/index.html","5203d3f5423aa3c421c88643fde3c390"],["/categories/windows/index.html","6a61d9ca90646872a25ba19b152ab7f8"],["/categories/windows/netcat/index.html","aa430ba7d37b5419829108b671972c44"],["/categories/会议报告/index.html","111b086ecf7a56ef30426bec8f6cf846"],["/categories/大数据/Flink/index.html","4daecf2949b426746b45ad895306dd69"],["/categories/大数据/Hadoop/index.html","17ff07939d42369e8f72f8c5a1c0d4ce"],["/categories/大数据/NoSQL/index.html","2a7d28d4e36cf6301c5a282a23e07cba"],["/categories/大数据/index.html","cd19ba3fe3a57b6b903105fcab240297"],["/categories/大数据/page/2/index.html","6c16cd55d72fde36507f933b82e3375a"],["/categories/大数据/page/3/index.html","7fbdaab4ce143c15e5086414d5a97f5e"],["/categories/大数据/page/4/index.html","048f5e80775be2314b15e2fd3a47fb52"],["/categories/大数据/page/5/index.html","0889dbd284354c82d83018cd99313f82"],["/categories/大数据/page/6/index.html","56c3d298b7995f58c90f86ac88802b73"],["/categories/大数据/page/7/index.html","ac8115dc64214b8ebdefa93b5faf3c30"],["/categories/大数据/page/8/index.html","8c4e8a57d7e7422ccf1748f9524360c7"],["/categories/大数据/大数据处理技术/Azkaban/index.html","f572aec6014be662723d5003e1140260"],["/categories/大数据/大数据处理技术/Echarts/index.html","0b8804d3c9dcb20d12d800193a835999"],["/categories/大数据/大数据处理技术/Flume/index.html","7d12a87aeb699e473d62933a4fb2a156"],["/categories/大数据/大数据处理技术/HDFS/index.html","220eb3b997017e313d27372ea56c89d4"],["/categories/大数据/大数据处理技术/Hadoop/index.html","b58c905c30cf2fc5cda842923fb58b75"],["/categories/大数据/大数据处理技术/Hive/index.html","03bafdb62c448e1bfb68d57e535eebbd"],["/categories/大数据/大数据处理技术/Kafka/index.html","9f1204673c596649356fedf0561b8c11"],["/categories/大数据/大数据处理技术/MapReduce/index.html","a7a479c0e7725d892d393af7af5f3ee8"],["/categories/大数据/大数据处理技术/MapReduce/page/2/index.html","5be030b81550a767c8cf618ebfb37e73"],["/categories/大数据/大数据处理技术/Sqoop/index.html","6e09ce61df2ba4588145a0e24c4ef6f7"],["/categories/大数据/大数据处理技术/Yarn/index.html","ff73af1c03b38561fde6879279b9f4f1"],["/categories/大数据/大数据处理技术/Zookeeper/index.html","803878d60c5eed03224b33baca26bf14"],["/categories/大数据/大数据处理技术/index.html","def605ae6babf436e706c9ee6130eb59"],["/categories/大数据/大数据处理技术/page/2/index.html","6c30f26d0f0fdafa618ace6dabf0e232"],["/categories/大数据/大数据处理技术/page/3/index.html","ac0fafc0f1b791d98ddba0db523ff8d1"],["/categories/大数据/大数据处理技术/page/4/index.html","a5e0a0b79bc76306ee8c343d25a89e1c"],["/categories/大数据/大数据处理技术/page/5/index.html","b4495ef46c50f90aed3a66585e0f6c03"],["/categories/大数据/大数据处理技术/page/6/index.html","165ce3f8a90a7dd2e53d676c2ee10c6a"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","09b626131257fdb2860178f76bc8209a"],["/categories/大数据/数据可视化/index.html","a0febd0b13733208066248bf241c1974"],["/categories/大数据/数据挖掘/index.html","5cf295c868dfabd89715d57460d57745"],["/categories/操作系统/index.html","7d5dee4e357315664027b2b4238f9637"],["/categories/机器学习/index.html","d14e4a005ba6b6381d34754c1423dbe4"],["/categories/机器学习/机器视觉/index.html","4c15266a400a777feaa7d95a80870d1a"],["/categories/模板/index.html","3e09d76c42b9202ae25d233c5cd2628c"],["/categories/模板/maven/index.html","7ba5e93dde8d97ee33e43950e571c5c6"],["/categories/错误集锦/CentOS7/index.html","d6eb4fd6caa7b3605eed3a633f97c1c7"],["/categories/错误集锦/index.html","80a691bef656973a51b01e80a1bcff39"],["/guestbook/index.html","8620df2ccab443f652cbcbe57ebc3303"],["/home/index.html","065694cef205ba3fd29232374d7e18e8"],["/index.html","b7b2fe10d3ff0cfd84e8c538641c398b"],["/page/10/index.html","5792a18c69dadca6d768b18683afdb05"],["/page/11/index.html","136ee663557c4fbc6232d267a9860732"],["/page/12/index.html","02332812e66d6bae7e32d6d241d6e25d"],["/page/13/index.html","5d574a610aaa87b6abc013f0db34ad9c"],["/page/14/index.html","53fb1291b2386900eb3242f424177e7a"],["/page/2/index.html","2089e957d2e4769e394934df63f4f7fc"],["/page/3/index.html","6960f5b3a7a9a5060391ed43f487c1ed"],["/page/4/index.html","e8dbc60868f2f8789b2e465e5f891337"],["/page/5/index.html","c65281e28e246d034316d48124167af9"],["/page/6/index.html","7eedec74098845ec36e8676b5065e29f"],["/page/7/index.html","8f5c7abf01d77fc78dc0b2fb3ea69655"],["/page/8/index.html","9fcd27d9aea6834140339cb3a7473f31"],["/page/9/index.html","f97d54f39d1b1e347b6a8fb7e2d1bfa8"],["/posts/1009d3f6.html","32394ee6297714c8626e903f361ddf01"],["/posts/10cabcd3.html","0f595ab00d2f39214e2033b88d89aa47"],["/posts/129a9db5.html","cc6955efaf578bffdd7390eafb8d0ce7"],["/posts/14fa5bba.html","80a5a4a9e47314c8c28f8d8236e10818"],["/posts/1601d925.html","abffd6e9776176b4d9816187216da94f"],["/posts/1e1e5118.html","f8b18469f989a93a73230d62227b34d7"],["/posts/1f519fd3.html","4de0b290dc7874aca54462ea4ef5ffd8"],["/posts/253269c2.html","ffef17cc172320c493646af580835f29"],["/posts/2ffb45fa.html","0b838dbcb8bffee4ec3d68c667c72b97"],["/posts/2ffcda9a.html","ea4173dbf4b05c847855a83120127909"],["/posts/3098d714.html","b2d23bcca7134d64e5f5540a86da7c74"],["/posts/30b27542.html","10f3fc821b4c6e4bc0019064b9bf7d45"],["/posts/32c5d0d9.html","6e70e852042f4769fa53b2f943ac8fe0"],["/posts/32ffa341.html","4932a41d413442c269738f554a08d459"],["/posts/357dc334.html","6f0c02c6430fade556ffd6f2ace8ee7b"],["/posts/38a07d35.html","999f47fe0ad3ceec78bf937349323bac"],["/posts/3bfd1783.html","d3dc3ddac5831b614f1ec6e947fbb9ac"],["/posts/3d7d3997.html","f253fb03b18a127ddd6ad96994e64d7a"],["/posts/429246c5.html","34c94748fafcb432da48e52752851c92"],["/posts/42ecd398.html","7dcfcc0982b75cda17c688fc7b3f9fea"],["/posts/46b39789.html","679fa40375573aad0b03916dd8a8125c"],["/posts/483290b5.html","a08b3d3ff96ebb8db4d60303b595de27"],["/posts/48a224d1.html","70836b03571365c2c147cf2bfd4d3bc0"],["/posts/48a2d97d.html","0e2be9064d9bf94b59e8483870932eac"],["/posts/4920f048.html","00f2b8f20cb40bb5aa5fd2e3ce4ab2c5"],["/posts/4a71123b.html","0bfb1019cbd9a8e6c0f91b1425d1e00a"],["/posts/4a71133b.html","b0c4d34818ece65f54161384538ac628"],["/posts/4c2deb5e.html","78460b5f7aa7d11883a198cb6dfb95ec"],["/posts/4dd55455.html","f466cf0e8ecc79d10c2a88ed50a720a8"],["/posts/4e6873c5.html","d4ddc151a296b282a23855c6c08fcbc5"],["/posts/4edeccca.html","341e7ed26e4fb127af1dddf0cd3b52ab"],["/posts/53ab8d74.html","ec3b808d887d6649ca92e902fbe69125"],["/posts/53d0a404.html","953d868f3d121be3736699d7cb6ddef0"],["/posts/55b264de.html","aea540e9dea423db4978843e6394b348"],["/posts/594433a.html","d36f28f486632de881b697fca0742f23"],["/posts/5bb73de.html","3a2c950d1e103155600c6a0c61f87f9b"],["/posts/5bfe6261.html","7e646b24c35c7f93d5d7aad1a11a8f5e"],["/posts/5cc46d49.html","60d032d138bbb490e094c14b4ca5e4fe"],["/posts/5efb0a25.html","0d7ea0863e052372548e5de4fdac55db"],["/posts/6009a9d8.html","0942a9ab63405b20cc5aff81f248a209"],["/posts/606a512e.html","853fbdb4670bc83d3a2dfc2802652967"],["/posts/610da529.html","55691a23abdaa1f3e6d39806e768179a"],["/posts/63637a24.html","d8c98ad2b67609ae006157215350f868"],["/posts/695a6c4b.html","f6cf0037ea724a5055623b8bfe51d000"],["/posts/6980c27e.html","a670cd23f96c30002c8446fcc380131c"],["/posts/6acc7206.html","4ad5df3ca136f6764ad0c5fdffca34f3"],["/posts/6bf2f994.html","38aa2fba3fd34f50794ac8762bf3dcb5"],["/posts/6cfc95e.html","108c0d88d59d7cd03e8b759dc6557db9"],["/posts/6e430c9c.html","270fbabc266f3e72531976bd64d8fdf5"],["/posts/714668f9.html","6fad2db61024ab199e62ddf11f2a3cad"],["/posts/72b49ca2.html","c1b051ce8ae7e7367e6278bc98924bd9"],["/posts/72cd4c87.html","ff84990bab03734ca5de5ce13368c6a1"],["/posts/75ee5fa.html","a9cd4b92b69bf1fa642af9e5eae9af45"],["/posts/780b9de2.html","b47eb19d92bab6ac73f01036d5fc9a7c"],["/posts/7827182c.html","df8a081f9fff7f0747498c3aa4783699"],["/posts/787a8307.html","5e0abaaddb73af63b9de84cae712d00e"],["/posts/7cb85200.html","145e7692735183b9c7cd0482a4ec2941"],["/posts/7d6b1f3c.html","31e7d3f9b3e5e48065bf1cbf11122362"],["/posts/7def3950.html","044ad62c15f1242bd27e2ddd05337321"],["/posts/801b51ef.html","dce1839374872bc613433c69cc698642"],["/posts/8485750c.html","da3d3fef9bd0264a6e894e75203384c3"],["/posts/87e9dc75.html","19805c9cacf648e11395331ae1b129a2"],["/posts/897831fa.html","b95fd578955b98e165df36c665b349be"],["/posts/8ce758a7.html","e695b0792fea6c76c1efdab6fb4342e3"],["/posts/91223731.html","cc429655752e4404185dc50c706251a0"],["/posts/96f894a7.html","b8c15e2c07f956f3c8ed41544a6eef5d"],["/posts/980d646e.html","a7d550c01bba9b2951074c0c6011d260"],["/posts/98579906.html","d93849062378eeeeef862ec96af8d084"],["/posts/9b624d43.html","c7cc44ac362d1a49c9152b328c85a95e"],["/posts/9bc3b11e.html","ac82688c982ccdbc154e77c9bf866470"],["/posts/9ef6ff16.html","31f0005cb001edb2831b1a43b3a01cf1"],["/posts/a105df5c.html","08f2fae4a8d7c9d45d7b20b86dafde45"],["/posts/a2af0ea3.html","30ad7ae914f5a8817aa7987ef6c39c0d"],["/posts/a3ed1548.html","2fbe813d128e2700b055e3b2982239c4"],["/posts/a4a39746.html","ed0cb15e160dfaaa27a00720a8c44f14"],["/posts/a5d678be.html","08e7abce1bf27b2de967a9152331a89c"],["/posts/a5eec80c.html","120a195c98f419acf643dcf79024d363"],["/posts/a79b4f5b.html","2ecd45f43415916440292ee691e425c6"],["/posts/a81e94e9.html","13d3d35e7bf4ff2d03481ed5c04fb4ba"],["/posts/aa02a436.html","3db307ae503e03915d83977d9d7c767f"],["/posts/ad720447.html","dea87c0c5fadd224f3901dac44024d80"],["/posts/b0ef01f5.html","9de39a0b77fa21a090aea4e3e51fe651"],["/posts/b190dcb.html","ba48c460955cacebd29920db98d9603d"],["/posts/b387b8d5.html","32caebed9270f9054fd0362301bf0520"],["/posts/b4a5318a.html","186808f70c58022e1bac687451e25c66"],["/posts/b4fa1b4e.html","f060ef8372884cd5f0fb1fb186a7b7d7"],["/posts/b59b6a41.html","056f7a18ff02569eaae004ec2627ddf7"],["/posts/b6ffaac2.html","f8d93891921848bddadd8ad29e07278e"],["/posts/b9b7baa7.html","9a75b0b62d9b8b8a6348b829feaff00e"],["/posts/bb7c60d.html","fa2e4bbebca4214756c5765df7b53ed4"],["/posts/bbe38b68.html","72071e393bc9d0fd5f896e04a86c24f1"],["/posts/be57c430.html","7617c01d1d5d1463df50be2bed1ff5dd"],["/posts/bfb9db00.html","0d5f79aa279e288931b30a8b69da2ef6"],["/posts/bfbc2e0b.html","050320bec1443ef2505872c24ff87a05"],["/posts/c16b9d82.html","13889bfddc7bd6db7b1c7811d510d4d0"],["/posts/c270974.html","60bd1b7c462d422eedffb41982460643"],["/posts/c2c98f74.html","dfa40eaf5ed421ef01dbea092e2b4a9a"],["/posts/c5520104.html","d85a03070be8c810b87ee0a829f1624d"],["/posts/c81f7fcf.html","57d814511c9a6c40adb825cfbec69cc7"],["/posts/c89a329f.html","627099502f4c2edaee2f8b55fd3f491a"],["/posts/c8fc3430.html","b6163c1c121fc9f75583e11f70f9e4d6"],["/posts/c91f449a.html","f064095cd20f48c073f884e2283afa65"],["/posts/ca7a6c92.html","a2810dede3ed0755296e17bbfc9d6595"],["/posts/cc03340e.html","1ed93209dc0cc8069834dc37443c595b"],["/posts/cdec63d.html","da6431320e8bb48560085a62c9e85655"],["/posts/d07ffe1c.html","144f271e7deac8a7958db5457205a537"],["/posts/d178b062.html","6346bce4414bd2a540d15c1e12809210"],["/posts/d53724bc.html","cf994f20ac0c20e4a35390acbf3ed413"],["/posts/d70eaced.html","50174948f86e0125013b783161c915eb"],["/posts/d7edfddd.html","45e53155c7fb5af898d2ada157cb7918"],["/posts/d8795dab.html","7582445a9bb13ec43c0a564f3075cd33"],["/posts/e00c1bc.html","057be5752ede05f00c62fb903a1003a9"],["/posts/e3dcc811.html","75bb5f8649418d25fc21a7f8333c8137"],["/posts/e6f6b883.html","ffa8e10b3251311e95d7c296ba2c9978"],["/posts/e821aeca.html","cb84dab906fc81460d261b7169b1213c"],["/posts/e981c79e.html","c06423f0dcca73753778ac629fd95363"],["/posts/ea7b2ec0.html","acfe296587513c9c3ab26a40ef74ea9b"],["/posts/eb168c8b.html","536350cad1f366a5073d474e705d57e3"],["/posts/ec477027.html","2fbc912b9bdde5958dff41d0dff68acd"],["/posts/eeb47c66.html","06ddb54d7a0b82298e5415f55534599f"],["/posts/f0765214.html","3adc2583bf292e8944acf93ba7f9de1a"],["/posts/f0940727.html","c6871be1cfb1e7618702824ff99b67db"],["/posts/f1ab62f1.html","a25af18b3d6fc3baa305f4f66dc2ce5d"],["/posts/f3b50546.html","5485c65471977afa309bfa1bf362871e"],["/posts/f4524359.html","1686cd5e34f0db73ab0eea851823cae5"],["/posts/f4e10e30.html","c8ddeba8ccc54496d68e4b8b47e054f7"],["/posts/f70539ce.html","a1631bc459e2f3397c601017fec436c4"],["/posts/f77eee2d.html","7b8e88896e850fc5c37ec4326c8b37dd"],["/posts/f8d2d5ec.html","92cfc5c06ff51af86f967845053e1d76"],["/posts/f9a25cd7.html","45edc57721f8db0f4e83bbafe7979468"],["/posts/fb97a8a5.html","4233e7acfe9740271fe557df82e6399d"],["/posts/fc610c2d.html","33680b8b9cf8dbb9289e6a230a76ca2e"],["/posts/fec1c989.html","2d96aa7f70dbbe3c1d5657bb85e6d667"],["/posts/fecd7f2.html","d6b09fa4db0208f34c32522f49708491"],["/tags/51/index.html","8e69876a5334da7fa058acb4f3fcfd8b"],["/tags/AES/index.html","8ce516438e8009b38b6d538cf8ab73aa"],["/tags/Anaconda/index.html","ee45b1558673c489fe399a3dccce546a"],["/tags/Azkaban/index.html","bce75ef6459fc4005a04b1bf34d1f027"],["/tags/Cassandra/index.html","68c1f57e97d5ec6b7ef4c0ca424c1915"],["/tags/CentOS7/index.html","b8e6e05839ffbdd4e1d7afb7084efd1d"],["/tags/Django/index.html","4c034fd2e41b884e830ce64a3b9bd74e"],["/tags/Echarts/index.html","825686dc9ce1059b83582e8bcedb0ccd"],["/tags/Flink/index.html","fd42750d740f1b447672f1d8815d119c"],["/tags/Flume/index.html","8ebfc57e490a31254dd3f0eb4eac5624"],["/tags/Frp/index.html","8a997a6c202f5449350901e9caf1f207"],["/tags/Github/index.html","99e848ae80d7a5310980230a9805cdc3"],["/tags/HBase/index.html","bcc5d56fe5c3feaabdf2fdeb2b59ac38"],["/tags/HDFS/index.html","3a7b8822c8b0ec635f5e0694ee62a68f"],["/tags/Hadoop/index.html","bb92faa018b88a24408ee463cb5a4a2b"],["/tags/Hadoop/page/2/index.html","b2ad379f648e5ef30f0fdae51bf15091"],["/tags/Hive/index.html","a116c42010385bc9861729e0d6d88472"],["/tags/JavaAPI/index.html","6c8499472c8e84002962a155dbaedf11"],["/tags/Jupyter/index.html","fc3ba0ba57aa43399e58c2055c5913c3"],["/tags/Kafka/index.html","67670aa37ab72dfba17ec40c9f624ba8"],["/tags/LaTeX/index.html","77052a6deca0f957140db629530ef235"],["/tags/Linux/index.html","408e48237a2a20b18c626fc17e593dfb"],["/tags/Linux/page/2/index.html","b53a46c1c3651ed080da2a52c3fe568f"],["/tags/MapReduce/index.html","08a30fb491cbb96495b0fe9211180e39"],["/tags/MapReduce/page/2/index.html","702e685c140bd609a93c27e51dae710f"],["/tags/Markdown/index.html","93cd3e38c0ba7fa48d6882fc8d5471bb"],["/tags/Math/index.html","a8736d44c1732ae9bba249ac1e92fe0e"],["/tags/MongoDB/index.html","4d8fd157d1c180e86c7c7870eddfdce7"],["/tags/Neo4j/index.html","a29157ddf29afeed62cce5f44890f141"],["/tags/Nginx/index.html","aa5ede5666d416be1a0cbb4f4b705055"],["/tags/NoSQL/index.html","b03c1727a25d84fa22f5e790264fbdd6"],["/tags/PDF/index.html","ba351841a7c1c52c1533b4cfa4fcebb4"],["/tags/PDF/page/2/index.html","5e82167a5a205b60d134525049b713ce"],["/tags/PDF/page/3/index.html","2c2e4df401c2f89cf6d6f29c1dc5c454"],["/tags/PDF/page/4/index.html","53a84dda73fdb76d9171f30861f8c38f"],["/tags/PDF/page/5/index.html","ed9bd1d02fc49032229dd347c2b19764"],["/tags/PDF/page/6/index.html","9014a20cb295de8277fb290d2180ab0f"],["/tags/PDF/page/7/index.html","105d69e763f102348d300188a5830e85"],["/tags/Python/index.html","404e38914fe21f75d86824595251adfc"],["/tags/Python/page/2/index.html","547aec9863cc78a397d48326c823f2ee"],["/tags/Python/page/3/index.html","1bd8210d7840ec8f1b3773b83ba47b2a"],["/tags/SSM/index.html","a16bbefd651ec7f2f616ce1d767927eb"],["/tags/Sqoop/index.html","1290f087c30702068b07ebcff7d3f85a"],["/tags/Web/index.html","8949526829148b027de2019e5a30cc9c"],["/tags/WebSocket/index.html","6ddcf0705ed7a86c2f1daf56d4d16903"],["/tags/Web安全/index.html","a80ae1cb0d746eddc41cd62ab1d6cf04"],["/tags/Yarn/index.html","ae122dad305bc05230fd74b53988edf1"],["/tags/Zookeeper/index.html","7a6af8b09c0b6b677e02d7fd23c88158"],["/tags/cloud/index.html","b1270e1d05287a7a53534dfdfcd0b6eb"],["/tags/gcc/index.html","3a0a8102d102726bc60838311b902dcf"],["/tags/glob表达式/index.html","91ce5bb72d85d84f6c92c964755a650e"],["/tags/hexo/index.html","c15a81a85e17eeefe4e1f33850eaad12"],["/tags/https/index.html","7cf7f8b9b1e26a8995dc9221eb194abb"],["/tags/index.html","b9228110f6968efd504c7ecd12ae09ce"],["/tags/kali/index.html","1229a1db2b6068f4ccd193174aa0913e"],["/tags/maven/index.html","c70572be77fe5ae6d7a39df054185eed"],["/tags/mysql/index.html","8b768542ea62241fa590310c0033e2f9"],["/tags/netcat/index.html","cd6570b8a4f3225496670f3c9c77125e"],["/tags/network/index.html","b672367ffc56c0bef564ad659882aff7"],["/tags/php/index.html","3ba83c67ca026178a382925e578c3885"],["/tags/shell/index.html","84f8b511bab8574278113bb0b12ce9f8"],["/tags/windows/index.html","3634438ed19351a3333755216f645985"],["/tags/xrdp/index.html","db2ae73e055d69f2ede9b59d3ac2ef91"],["/tags/人工智能/index.html","63ae07808b4b1b4a293672767407f2f0"],["/tags/内网穿透/index.html","ecfc173efc54da133d9ca2bcc0359875"],["/tags/分类器/index.html","3dfe6538c759796f2afac1e8f57bdbcb"],["/tags/删除注释/index.html","bbd196af673513cff4be7223747821d4"],["/tags/前驱图/index.html","29b89ac3cf3a741552b39ee41b279ddd"],["/tags/加解密/index.html","b0a207825ffa9cc18251657d127c516b"],["/tags/加解密/page/2/index.html","bf7b741e983d47aa0595040c90e50be0"],["/tags/历史/index.html","ff857c1719338dedda62fc71f6d9cded"],["/tags/反编译/index.html","33080b09c53a297917e4fe387da7a111"],["/tags/图像/index.html","892d951434071d8cbbddaf5ee975af03"],["/tags/大数据/index.html","9c1384fa2afa2269b8fa58100a72a6bb"],["/tags/大数据/page/2/index.html","4867621a67ae20eae89f670cfdde7bcc"],["/tags/大数据/page/3/index.html","f21b9e58ea1b57f6c56533050978790a"],["/tags/大数据/page/4/index.html","a168fa27c2860a9f808ccb325cbe0863"],["/tags/大数据/page/5/index.html","ae653f1b31b14166a077b9c4b44131a2"],["/tags/大数据/page/6/index.html","8d6c91db33c30b96a5f8ad3963c3f9b9"],["/tags/大数据/page/7/index.html","b835c7a3968d8a8ce5a1258f35dc312d"],["/tags/大数据处理技术/index.html","94ee8bf73b8ec4300abf8df47f83f470"],["/tags/大数据处理技术/page/2/index.html","de60dfa6a2d1a9d2200c72a204282500"],["/tags/大数据处理技术/page/3/index.html","06139add196efeb4df20a7da5ce585d4"],["/tags/大数据处理技术/page/4/index.html","d00b922d285f440fcd13351427304072"],["/tags/大数据处理技术/page/5/index.html","0f04db178a55dc43875a600f978ad604"],["/tags/大数据处理技术/page/6/index.html","ea7b53a6df5ecad5e45fe3860dca2c6e"],["/tags/大数据集群环境准备/index.html","7bba750cc7cdfcf397b60c80cb16b6f9"],["/tags/密码学/index.html","887fc462024b1585f75f74795d747c71"],["/tags/密码学/page/2/index.html","c5ceb61e6b1bbc84efeb56479f07a7f2"],["/tags/按键时钟/index.html","a267271f156b9bddd2ca0fc935303ca8"],["/tags/操作系统/index.html","69867b1b3c6789fd689ff1add71b07c9"],["/tags/数学建模/index.html","4e883165fc57aed62ab01dc14a7e3b71"],["/tags/数学模型/index.html","b5cd28398f4d28d736fb87b8d5eccea9"],["/tags/数据可视化/index.html","02f084d55ff725b0fd968225eb14823e"],["/tags/数据挖掘/index.html","426fd8a7f5a2828728d85905bf1e4389"],["/tags/机器学习/index.html","5f9336e8b7b9922c0270083166614211"],["/tags/机器视觉/index.html","0eedb583ff76e659d85492175704ac55"],["/tags/模板/index.html","c3434c31d17e70bc4e72ed2b0111a46b"],["/tags/死锁/index.html","c6d20791c2d1254517c8d900fa982c4f"],["/tags/温湿度/index.html","b7687abbffa96edd524033ced541e8b2"],["/tags/特征/index.html","184733b345a88c188bffa3378e839641"],["/tags/特征向量/index.html","24c71b48dcfa77e891b4f2774c4ef81c"],["/tags/秒表/index.html","7e1d7c8110fda485b1b3895c98b0c749"],["/tags/线性代数/index.html","96f7de01d0975e7b3f2989186689e099"],["/tags/脑科学/index.html","a27b6c92e59b662902e176f925989f20"],["/tags/虚拟内存/index.html","e0b1ededc955e3494cd6f862c5b0521a"],["/tags/视知觉/index.html","0db91d98b78e1a56b93bec0898b1fa4a"],["/tags/超声波/index.html","ac21badd3cda88756cc9124577bccd3a"],["/tags/进程/index.html","30855ee1901869a753e75adc17b2fd31"],["/tags/进程同步/index.html","485521d284fe92755a81a5c95955077a"],["/tags/进程调度/index.html","558b4e4fdc88c492543ff7d55581f8a2"],["/tags/通配符/index.html","5b596c499d2390ec10131770bbd67902"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
	if(originalResponse.url.substr(originalResponse.url.lastIndexOf(".")+1).substr(0,4)=="html"){
		var headers = {};
		for (var entry of originalResponse.headers.entries()) {
			headers[entry[0]] = entry[1];
		}
		console.log(headers)
		headers["Content-Type"] = "text/html;charset=utf-8";
		console.log(headers)
		var req = new Response(originalResponse.body, {
		  headers: headers,
		  status: originalResponse.status,
		  statusText: originalResponse.statusText
		})
	}
    // 如果没有重定向响应，不需干啥
    if (!req.redirected) {
        return Promise.resolve(req);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in req ?
        Promise.resolve(req.body) :
        req.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: req.headers,
            status: req.status,
            statusText: req.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
						    var CDNcacheKey=cacheKey.replace('//mhuig.github.io','//cdn.jsdelivr.net/gh/mhuig/mhuig.github.io@master')
							var request = new Request(CDNcacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + CDNcacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
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



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/**/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
