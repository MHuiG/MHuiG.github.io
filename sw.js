/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b173e361d246487106a14e0987482245"],["/about/index_en.html","66e9feb73157655ba498cf59bd99e157"],["/archives/2018/11/index.html","2f488ff507589d0102b88714ae5ddbed"],["/archives/2018/12/index.html","531ddc42f5e5c5685b97a65762386366"],["/archives/2018/12/page/2/index.html","35def1514116c6725272ea2a4d67d481"],["/archives/2018/index.html","fa7f56ef3ca708a35b0dd967dc4d8ed4"],["/archives/2018/page/2/index.html","de8bc54b457a4d8710297d96ca5c6762"],["/archives/2019/09/index.html","4ba7919cef68cf207beab7c807d2e180"],["/archives/2019/09/page/10/index.html","fa9c3d7cde31055e735b385e90ca4989"],["/archives/2019/09/page/2/index.html","f31cc974599f6844ffef2e40e3e00beb"],["/archives/2019/09/page/3/index.html","f0a29039cf48c5823fc85417150cebf3"],["/archives/2019/09/page/4/index.html","bb21bbf9a25c23e2595303de5d0beb51"],["/archives/2019/09/page/5/index.html","4788e171ede0514841228ab0f6411dfd"],["/archives/2019/09/page/6/index.html","fcb9fa94f0caa32af2ec589c897a0301"],["/archives/2019/09/page/7/index.html","6ae9988668c5c025fcdf36626c0187b6"],["/archives/2019/09/page/8/index.html","42de599329790229a648cee23ed1b19b"],["/archives/2019/09/page/9/index.html","2af4cfb3121905149f5a2557cdc4b2f0"],["/archives/2019/10/index.html","d2bbd090b7bbd5d262ffa386ea007fd4"],["/archives/2019/11/index.html","88c5628ee6c20e099d774ca37e304ced"],["/archives/2019/12/index.html","b9db1bd6b0fb5788086f1b0002adcca1"],["/archives/2019/index.html","dabd2a263dc1136ba1604328d9f407b2"],["/archives/2019/page/10/index.html","6d50ba1fed9b43007554a375098d4fdc"],["/archives/2019/page/11/index.html","ebb721c15fc7960ef976954b29ad1c4c"],["/archives/2019/page/2/index.html","ed4f253a93f88badee11ec7c0ee5f252"],["/archives/2019/page/3/index.html","3c33c310709e0beb99e37cc9249cfe01"],["/archives/2019/page/4/index.html","ff5b510a4f4238b790b97af19e887ac7"],["/archives/2019/page/5/index.html","ab0f92a2c94ac33151cd4b7bc4948b12"],["/archives/2019/page/6/index.html","2be4dc3ead4dc457c5c259cc3ce2b514"],["/archives/2019/page/7/index.html","be8e65c0a17970699580a3c99618f504"],["/archives/2019/page/8/index.html","6eac0ee16ad2b10a963bcf24c8579fc0"],["/archives/2019/page/9/index.html","6ea71687df0bde6fb94b08e31eb364ca"],["/archives/2020/01/index.html","b96d59c45abeb3f4f8fd6decaab5fbbb"],["/archives/2020/02/index.html","ffaa1a5dadaa56beb1dcb85473948f83"],["/archives/2020/index.html","0db74a8780ab276d853d67fd12bd0736"],["/archives/2020/page/2/index.html","5c6ee6beb0e353fab23d1854034e3089"],["/archives/index.html","4014165fbddca05608b7fbbfabfe0aa0"],["/archives/page/10/index.html","0e214b9c2ddd45e1ad4f06db297e6855"],["/archives/page/11/index.html","669432cb0f6a1204d5ffa486a03bc7d3"],["/archives/page/12/index.html","e4225b80af6ebd2c5fa26eda8cbcfd8b"],["/archives/page/13/index.html","581781cf7ab95dfe30da0027aaee2cf9"],["/archives/page/14/index.html","bb517a14f98d432f0ce4279b0f086d53"],["/archives/page/2/index.html","7d0ed95f6ec3ac0944efa0564663022b"],["/archives/page/3/index.html","39aae7388f3039332a91782cb9a8fd6e"],["/archives/page/4/index.html","aefe6819f1c0adc13f983ec85afafd87"],["/archives/page/5/index.html","99c42a36f588800e83ac9f7af08f0328"],["/archives/page/6/index.html","6347681e99c8d5c29d5ab1bdba6e4cd7"],["/archives/page/7/index.html","ffe499f65624657229fa7fea8d85a8ee"],["/archives/page/8/index.html","a5943b0ced004f39b6fdf5c794501fa5"],["/archives/page/9/index.html","b2b4c705fb45e9cd975c23822d1f7247"],["/categories/51/index.html","7904f9b682011bd22e405ff90396ced4"],["/categories/Linux/CentOS7/Python/index.html","4980942eb25348b2ab618fe0c8635dfe"],["/categories/Linux/CentOS7/index.html","0d29389ae145478317dbe5392656a9cf"],["/categories/Linux/index.html","6eb59f028ec09d41055cf07cbe005322"],["/categories/Linux/kali/index.html","92bd8ba7b6ac91e2966ca1c584fd5be9"],["/categories/Linux/page/2/index.html","9a9b161448bf548ac732d6d25dcffdfa"],["/categories/Linux/shell/index.html","3da6ddaa0d6f51453258f8674772f6bf"],["/categories/Math/LaTeX/index.html","5c01ede7b1b80279aa111ec3152598a7"],["/categories/Math/index.html","b38d837419dd982f11345c76cdd005c8"],["/categories/Math/数学建模/index.html","6ae3514cf445ccb5f2c119afb501f811"],["/categories/Math/线性代数/index.html","37e9812c0480c227e8b9b3b74312b211"],["/categories/Python/index.html","a7592e36605fb4d4671d70386ae66448"],["/categories/Python/page/2/index.html","9b0dd26f70cce30cbe31c9f7db2b8d16"],["/categories/Python/反编译/index.html","da555d32c579d74dfec44e1e2150459b"],["/categories/Python/密码学/index.html","4b50d8faa42a868eb33e6c78ee91cac7"],["/categories/Python/密码学/page/2/index.html","2e2b1acd2ec9ab0e210207dc719cf2b7"],["/categories/Web/Django/index.html","f5a13177b70fdc81103402413c5a028a"],["/categories/Web/Nginx/index.html","16cd05153ab7ff7eab3391f893f883d1"],["/categories/Web/hexo/index.html","a4a3d47aad175092b099153c6ab31af2"],["/categories/Web/index.html","e1e7e8c33a38f65a932d8391c9739b60"],["/categories/Web/page/2/index.html","82822a53f38249584f1c9d390cacacfb"],["/categories/Web/内网穿透/index.html","5c94d141aa453836e2bb8054bd2f90db"],["/categories/index.html","87fab8683af262c314bb1b325f90ef12"],["/categories/windows/gcc/index.html","fa676f1ab422fbb780643d658de31ddb"],["/categories/windows/index.html","3f64e2fb1df058236de4d61c7b454a9b"],["/categories/windows/netcat/index.html","7201cec4116e476a3b86d7cf17d11c43"],["/categories/会议报告/index.html","dd32e7710627d91ec62e73bf9e9acb82"],["/categories/大数据/Flink/index.html","1829421044866f70981c4bcc130554d6"],["/categories/大数据/Hadoop/index.html","bab402cfe543e5820c15e23332f44ae3"],["/categories/大数据/NoSQL/index.html","28d57434a13cbbace8a8941183bce8f8"],["/categories/大数据/index.html","90dce9705df2d00336b576cd0819e8c5"],["/categories/大数据/page/2/index.html","4f1717e3bb720df7661e908c97383a92"],["/categories/大数据/page/3/index.html","9a741504b1a864a52751d30b2fbbb421"],["/categories/大数据/page/4/index.html","76a6d1549c43a3fec9e058bb62ab4862"],["/categories/大数据/page/5/index.html","80100245251773de10e13d374666b11f"],["/categories/大数据/page/6/index.html","b8b0e3a6277fe99f530c08aa9fb02ea8"],["/categories/大数据/page/7/index.html","f812911df8a2bd2607cb3fbebd59b20e"],["/categories/大数据/page/8/index.html","ca32e6c26643d79f24842fec9d5db201"],["/categories/大数据/大数据处理技术/Azkaban/index.html","dbeb055507527de90b96739e24fb9aa7"],["/categories/大数据/大数据处理技术/Echarts/index.html","1c4f6de6329a66b87718602d40ee4467"],["/categories/大数据/大数据处理技术/Flume/index.html","20738d75a74dde16560725beb2541be0"],["/categories/大数据/大数据处理技术/HDFS/index.html","b731ecb5bae7273dcb60fcb1509c03de"],["/categories/大数据/大数据处理技术/Hadoop/index.html","c8cb5a69c7c1bdb199229fdb59888ca1"],["/categories/大数据/大数据处理技术/Hive/index.html","9d0acb708edeabd857764b82f60f4043"],["/categories/大数据/大数据处理技术/Kafka/index.html","0cd4fa62aebedde2599c2e149c613e3b"],["/categories/大数据/大数据处理技术/MapReduce/index.html","326f455be2394c52c1b19769dd356782"],["/categories/大数据/大数据处理技术/MapReduce/page/2/index.html","5f19695272692515397f1f619b9a0afc"],["/categories/大数据/大数据处理技术/Sqoop/index.html","fbc5965b36efdb9f9850c3464ff407f0"],["/categories/大数据/大数据处理技术/Yarn/index.html","9b2a8bc780b999f568d11d06c160d008"],["/categories/大数据/大数据处理技术/Zookeeper/index.html","1760c28369f3114214a611c8073f471d"],["/categories/大数据/大数据处理技术/index.html","49fadefecdf34ac6f2b53eb0a2426bb4"],["/categories/大数据/大数据处理技术/page/2/index.html","2904d1828bbfab64f9e0deabf11e2466"],["/categories/大数据/大数据处理技术/page/3/index.html","d792fa582ea46502b6c7c07ada7516d7"],["/categories/大数据/大数据处理技术/page/4/index.html","9bdf1c3d423637c33561167c6ab3980a"],["/categories/大数据/大数据处理技术/page/5/index.html","0caf89abac57c46734b8e7af4ab72e30"],["/categories/大数据/大数据处理技术/page/6/index.html","c6b8be4d65f127ee62ea179d67b1d0d1"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","31e351679539f0325bd8cdd72c9b2269"],["/categories/大数据/数据可视化/index.html","0d018fda6de7678222df84164cece52f"],["/categories/大数据/数据挖掘/index.html","0e68f647add2e0be2fcb5f712949dadc"],["/categories/操作系统/index.html","b1eccf7a189f44cc0c44f51948aad2b6"],["/categories/机器学习/index.html","ac7c664da4f230bfb8dca4f927074fe4"],["/categories/机器学习/机器视觉/index.html","33ab5993b03d3ba6e43bd0998c5afc90"],["/categories/模板/index.html","616a34d4a13ae85352ebeb661056db4f"],["/categories/模板/maven/index.html","0652c6676eb0163c37036447794224b5"],["/categories/错误集锦/CentOS7/index.html","c01edb47b900d58f551bbd5a1dc058c7"],["/categories/错误集锦/index.html","fa6e0df935d4a4f12be05334f5abba78"],["/guestbook/index.html","1d50ad46bbce7ccbe60f50bb015d1716"],["/home/index.html","065694cef205ba3fd29232374d7e18e8"],["/index.html","f14916894119b61a623ad315c2471d07"],["/page/10/index.html","bb90ae2a9f77175ad85ac9a6b9c97dbc"],["/page/11/index.html","ba7f0ee227de5169e669b5e2319626ad"],["/page/12/index.html","1365dbfa1cc46bd815a7f2bd80ad1757"],["/page/13/index.html","10739926165dba77b9306f4cb8a47aae"],["/page/14/index.html","481308eba45bb8e4b981c188086580ca"],["/page/2/index.html","185090f18be82d4cee2d745119bbb7c8"],["/page/3/index.html","65896e119ef9dc4bff553c051c57c560"],["/page/4/index.html","cdba450747a626d8d7b34d835afcc2d1"],["/page/5/index.html","915059ebc9a4417651cbf279e561207d"],["/page/6/index.html","6829e44969cfefa28c6ac928e685eed8"],["/page/7/index.html","3db811e4de9da308c3567166c1788d4e"],["/page/8/index.html","1773be2739b3fd4fa638582b3b8a2fc6"],["/page/9/index.html","d6a34cf08777d4cf53b6c5a0fa57029f"],["/posts/1009d3f6.html","67ffccb078a1f75d09c6b9648c33b7e0"],["/posts/10cabcd3.html","63ae0da27e7d4a21692a26d05ae3a22a"],["/posts/129a9db5.html","61ac394568a959374a03e5c20bb51798"],["/posts/14fa5bba.html","84a21e9db36fad8b936e405853fb8a96"],["/posts/1601d925.html","c3be68c43177e7c298c500aef640e63e"],["/posts/1e1e5118.html","748e7607d7c0b0abee9cf68865e91b29"],["/posts/1f519fd3.html","4bfb4d67b39e21ea412779103e946bf9"],["/posts/253269c2.html","11547183e03e6745b69c45c466b8e00e"],["/posts/2ffb45fa.html","a8fada823149e847ceceaf435c04a2c8"],["/posts/2ffcda9a.html","ddabef055e322cdae7ad19e94662367d"],["/posts/3098d714.html","3d303267a17bf3eabbd21affc443ce91"],["/posts/30b27542.html","27d75a589fb1066545762e59e0bf0239"],["/posts/32c5d0d9.html","b5c4d6c8feaa962051b92e25cfe3ca18"],["/posts/32ffa341.html","8ec44f20ac532241d23ae4ee99838270"],["/posts/357dc334.html","852fb6b888e80859fb98ee6347873165"],["/posts/38a07d35.html","64a55ca88d3b1a981b76693bb9e45e60"],["/posts/3bfd1783.html","dcf2ff997ff5d277708e5c148abd4100"],["/posts/3d7d3997.html","ac01a51c391f7aaed1274a317313d957"],["/posts/429246c5.html","e520bc743d3835c80a926ffceeed122d"],["/posts/42ecd398.html","2d689a04085a2559b0a90b3f14f7cce6"],["/posts/46b39789.html","9f07d43bc4ead154df319b0f0d6b7711"],["/posts/483290b5.html","003d2e6c2d7234444aacf160b7ead48a"],["/posts/48a224d1.html","684d45db68856842158b6e567a91f960"],["/posts/48a2d97d.html","838cd724b1a3eda07c4837d9e7db0f2d"],["/posts/4920f048.html","fc0e881bf8c71457f3fdb223d107dcab"],["/posts/4a71123b.html","88839d8660dc39690bf842b8b9b43ea4"],["/posts/4a71133b.html","f76bbff7395f48e3aa667af8bab52fb3"],["/posts/4c2deb5e.html","fa6e34d9646cca678840e285daf14807"],["/posts/4dd55455.html","51ce339bf1417fea5cd42269602e298c"],["/posts/4e6873c5.html","b4ffffd2c97feba6b63548b00e99fa68"],["/posts/4edeccca.html","23e4a5a8a1875406afaca3b70ce62524"],["/posts/53ab8d74.html","82c78c6f5e5cfe3b7687d1e782e4876d"],["/posts/53d0a404.html","610526993289d08853e91330751891fe"],["/posts/55b264de.html","47f620fcb8c1a634e4d617ba7445a479"],["/posts/594433a.html","e6915f4bd13d43b293416a0416517a24"],["/posts/5bb73de.html","52513689e92d8358bd1fc0bffedbdfb4"],["/posts/5bfe6261.html","ddcd71fae5b9c64a651957697cd9bf9b"],["/posts/5cc46d49.html","be37fc586dc322026164aca899125c42"],["/posts/5efb0a25.html","1986323783e645d0d785e09ef5157af5"],["/posts/6009a9d8.html","0ae5ed9bb9bc6cc6df2aa276f961aba1"],["/posts/606a512e.html","dca22a55fda7babb3ddb311408e4c2c3"],["/posts/610da529.html","c5704e8f7e879a50ab8fc26714b37e48"],["/posts/63637a24.html","8a9e25d238ee3800522af53be254668a"],["/posts/695a6c4b.html","d8c8bc3c76d52e11ae0cbaaadb36b723"],["/posts/6980c27e.html","f410581d0ece7fac22de9244d89d04d7"],["/posts/6acc7206.html","93a4e9ba5b6ebb15498ffba43b2aae79"],["/posts/6bf2f994.html","ea83591fd16ac40000446478c0c70789"],["/posts/6cfc95e.html","74390c66c93721308cca4511390c73a9"],["/posts/6e430c9c.html","9ecc139f39b34248c177e243b49f7f2c"],["/posts/714668f9.html","0f09456d23fdb2da476ddf7d71a5d1b3"],["/posts/72b49ca2.html","790bfbce87d57b57564c590f7f27b46b"],["/posts/72cd4c87.html","c4a05218d54fe25413da7ef7cee787d1"],["/posts/75ee5fa.html","3339ecd842864e8705b826b270b98e5a"],["/posts/780b9de2.html","20d8be262af54994b650ca9dc2a5b0bd"],["/posts/7827182c.html","4e6879f061140cfbcee7e66020b1ed9b"],["/posts/787a8307.html","6363a1225ff05a64c6464e86bcf17d0d"],["/posts/7cb85200.html","80edcccb6139c48c7800531ca6117a4f"],["/posts/7d6b1f3c.html","7c3bc5bf259b1ee0acfb1e8f6d2af5a6"],["/posts/7def3950.html","ed029bd1a05e4feec8e876c7084905f8"],["/posts/801b51ef.html","27f1847133da752d589ba61d7f662664"],["/posts/8485750c.html","cd9c078c78f921847d49f7a4c09a0313"],["/posts/87e9dc75.html","d8f3b44af8bbdf505b81154d4b2454f5"],["/posts/897831fa.html","69840bac75fd9bf17501199f976b4664"],["/posts/8ce758a7.html","8aa03cd32624fa753de3635aa799b0af"],["/posts/91223731.html","53714d19898e17cbdbcbddbef5143734"],["/posts/96f894a7.html","0ad40930c7c320562d6eb453414c9bb9"],["/posts/980d646e.html","95734aad969b237be5770476db12ccde"],["/posts/98579906.html","563fc4acf242b63014f81bb2feba5136"],["/posts/9b624d43.html","9d53ccb52e6452a2d9251c591b8ed2df"],["/posts/9bc3b11e.html","fc7bb05c93ff902f782395ffa93a7b60"],["/posts/9ef6ff16.html","ea2bdff86af3283af08dc982ba61a765"],["/posts/a105df5c.html","535097b131973784b36c88464a0baa58"],["/posts/a2af0ea3.html","f36ae1cc656fc641bd980063e9ecc9f3"],["/posts/a3ed1548.html","bbefeedf4345f15573f0a4ecc7a54c7a"],["/posts/a4a39746.html","67e34754556b14a7f1ee22a05d20de9a"],["/posts/a5d678be.html","a516abbb581c86a10021d45cba851308"],["/posts/a5eec80c.html","88c8e1f3b465b627add803dd17eb5acf"],["/posts/a79b4f5b.html","3ae0ea612018c83f5cdfd7a665e9f0d0"],["/posts/a81e94e9.html","f65f1676b742d75e76bf415f49f7c544"],["/posts/aa02a436.html","27b07634c06213ea51edf815df2afeef"],["/posts/ad720447.html","7184b740d83070803f230de374a5bf46"],["/posts/b0ef01f5.html","15fac4e8186bd35656f3ad65920dc11d"],["/posts/b190dcb.html","54a46b6236f15e061344e9fe575509a0"],["/posts/b387b8d5.html","11a02c1748b9bad4662792c0c2d7c53b"],["/posts/b4a5318a.html","d5c64494c87d5c20c7cb76f7ee6217e1"],["/posts/b4fa1b4e.html","bc3db019b35a4ffb1964bcd862429b0b"],["/posts/b59b6a41.html","ff324d7f6703b0af279d9caa7dd1a525"],["/posts/b6ffaac2.html","93a3f4d6f551e568348127cce0ef91b7"],["/posts/b9b7baa7.html","eac5c5db9719ecc5da1893b127176f05"],["/posts/bb7c60d.html","a7827fcb44f48b6e628c1aeda76daae3"],["/posts/bbe38b68.html","122eaea11cfd32e5bd81c6dda5c40fe5"],["/posts/be57c430.html","1205badb5e65b85a03a0b9c7473565ef"],["/posts/bfb9db00.html","f3ff2b8c067178648392ae8e2541104a"],["/posts/bfbc2e0b.html","daf20d9db9f80cc3fe7a02d4658ad527"],["/posts/c16b9d82.html","56eac0d18323239ee69679e76d035eb7"],["/posts/c270974.html","ff54f007aad53f132807fb795548618d"],["/posts/c2c98f74.html","3dd8f9b43436cc6fd7c2a341e6e1555f"],["/posts/c5520104.html","64d02443beb67d86d18560467f78ac54"],["/posts/c81f7fcf.html","49af2b9b5098f27048cb5c878e68afa5"],["/posts/c89a329f.html","ee327d32770d65d02e51c904d968d0aa"],["/posts/c8fc3430.html","fb303c764dbcd0dd3a6541b0aab9286c"],["/posts/c91f449a.html","b9e2843991c709126d27ccadf32a6ab0"],["/posts/ca7a6c92.html","c18e475e82ffe4b5068061182b50e1ec"],["/posts/cc03340e.html","7fd7a5d2fc516e4e307fd4e8fd7455b3"],["/posts/cdec63d.html","ec9d72b89855892d0739560a3821fe7a"],["/posts/d07ffe1c.html","9bb44273fd8f2b1d23702e72a47f5d0a"],["/posts/d178b062.html","099cdc37013a5c4a8960508f27614847"],["/posts/d53724bc.html","f129e1e6fec9367d25e2024a9eac2a22"],["/posts/d70eaced.html","59aa33acfe9da210512548d47b0d603c"],["/posts/d7edfddd.html","f8e895ede579c0515e10a16571ca0ac2"],["/posts/d8795dab.html","78cc02bdf78a95300f37dd3deedae41f"],["/posts/e00c1bc.html","f54887d48b4b152357b0774b9067321c"],["/posts/e3dcc811.html","0b5cf7b7dcd0c106e9082a863b89e497"],["/posts/e6f6b883.html","26b4b1ff243a4709b718a3a59d91b0e9"],["/posts/e821aeca.html","acff514dd17df9f42aaa67478bbf33e4"],["/posts/e981c79e.html","b03b46db8594e1e510a20de9abe32e8c"],["/posts/ea7b2ec0.html","2363f7fb353a84125cf0a06d85c6c3cf"],["/posts/eb168c8b.html","a3144b2943f96f5c5a08b66f2ef6d112"],["/posts/ec477027.html","f4e1e3758ab58f98546c9c66c529a4fe"],["/posts/eeb47c66.html","26acd3d3b3a9966f8ba4443590de7b56"],["/posts/f0765214.html","a454cfbee48bc38972c506647a8f2d03"],["/posts/f0940727.html","e81caa9c47a65b8eca6e5844d1618d0f"],["/posts/f1ab62f1.html","be792ffe708af4a2ed028dbcebf958f7"],["/posts/f3b50546.html","d757ccbb825bff76666db8127911cc05"],["/posts/f4524359.html","d6841320f851f322334cbdcab434c5eb"],["/posts/f4e10e30.html","a876e6117fc636ec24b6b49c70404be1"],["/posts/f70539ce.html","c9147c852861feeab1d5e4ebf39da713"],["/posts/f77eee2d.html","135b87e75ab55902d511099e5a29416c"],["/posts/f8d2d5ec.html","5361a12a7bcba03836d514b27055487a"],["/posts/f9a25cd7.html","9ceb0174642e0d5cb723401ef180db6b"],["/posts/fb97a8a5.html","2f99b509365ca4c3ab5e2e1011d7bdba"],["/posts/fc610c2d.html","32497463f11290c2e98d788b6f74926a"],["/posts/fec1c989.html","f7965063d0060e3e92f32208eb382c84"],["/posts/fecd7f2.html","b4931f8cb644c651415d62f2d6fbdd1b"],["/tags/51/index.html","1e170f5f634e12e5ba4ad223dc978ed3"],["/tags/AES/index.html","85fecb93068e58baa7268f4e423d2a42"],["/tags/Anaconda/index.html","d16555760577ad8ff25c21150de789f9"],["/tags/Azkaban/index.html","87ed36eaee5d0cff3e40d2b665a7f5d7"],["/tags/Cassandra/index.html","bb901ad4a4906580a79d215d0b28233c"],["/tags/CentOS7/index.html","143e774b911f2c92a7cc742008369fbe"],["/tags/Django/index.html","a05224645cbdf936c4ae02abeeec8780"],["/tags/Echarts/index.html","c77460930a40a97517e88678ecfb0dc8"],["/tags/Flink/index.html","595db4b6d3b9faaa5d8c170230d41d26"],["/tags/Flume/index.html","f4e14bb689c06e2e4b43bc6a076bc0d0"],["/tags/Frp/index.html","57c1da92c973cf2cfd14f965a44546f3"],["/tags/Github/index.html","b40b1d18df1fd491bc6f7e290c6960b7"],["/tags/HBase/index.html","6f725a89a7d29f71dc25d3518c50e1b0"],["/tags/HDFS/index.html","c1893291c39a26a99f9294849aaa3666"],["/tags/Hadoop/index.html","1569ead08957e4b902c63a9881fd333b"],["/tags/Hadoop/page/2/index.html","b0c65457dfe86d72303f504377c0c755"],["/tags/Hive/index.html","17d66e562808dde93cf21243df9819e5"],["/tags/JavaAPI/index.html","2052dac486bac24787134ed7bb09cb1c"],["/tags/Jupyter/index.html","fa84c195bab2b30216d666a13f2271a8"],["/tags/Kafka/index.html","a8d5796914f96d189412bdb5a1e5dc6b"],["/tags/LaTeX/index.html","cfcceb1a28b5b66a179ec91cf70f66b9"],["/tags/Linux/index.html","049cada762e610c757a5633d39e9a421"],["/tags/Linux/page/2/index.html","bd474aee851b9635f961d832d0f158cc"],["/tags/MapReduce/index.html","774794351aa6b2ef3bf35e5e87b1bede"],["/tags/MapReduce/page/2/index.html","166dfb5ed2e79e75501160f6b67c9834"],["/tags/Markdown/index.html","f8b91671addc646e6e0c01c0986f8eff"],["/tags/Math/index.html","f2493bedecbc642cd69900c0eec69845"],["/tags/MongoDB/index.html","ff12f7dcecc287c1d487e96631bffb14"],["/tags/Neo4j/index.html","7816223de469c48eebd9f80229c87fbc"],["/tags/Nginx/index.html","07d1b524135fb272236fda6369de3e10"],["/tags/NoSQL/index.html","18c129332197db0e8039930a72f68d23"],["/tags/PDF/index.html","2c0c7601901683a7b07145dda8cd4e0a"],["/tags/PDF/page/2/index.html","0551b77e5a078c596a1cb9291477ea76"],["/tags/PDF/page/3/index.html","a2b90f0a9af41fb07aa21f38e962d13e"],["/tags/PDF/page/4/index.html","fa943cce72d10342bf16ffe9b0c180e7"],["/tags/PDF/page/5/index.html","0c102d8de5c52091db44ed4c18ea34e8"],["/tags/PDF/page/6/index.html","4e943f2b3716e10041f966dbb400fdcb"],["/tags/PDF/page/7/index.html","866a78cd0cf79c012218b8403eb3fea0"],["/tags/Python/index.html","f4e440fcb8736017236c9cfb66556451"],["/tags/Python/page/2/index.html","6345eab0c20236b0a065c6c338875a18"],["/tags/Python/page/3/index.html","c8f3d7af7b16117cc5a165d58d3f25eb"],["/tags/SSM/index.html","47d776a8c0db62f8fa19cbefb0262fc2"],["/tags/Sqoop/index.html","df55491b88eff9044565bbb500e54d95"],["/tags/Web/index.html","a851c94769e02b65a19bb2f932f37f69"],["/tags/WebSocket/index.html","f928de783f3666ff19a7e9256680868d"],["/tags/Web安全/index.html","42bb7908b9faee767cb1d3cbc2cddc80"],["/tags/Yarn/index.html","8fbc81fd3e5cc774eddbb9758d00f979"],["/tags/Zookeeper/index.html","c6467102cbc8840c45b56330a562f887"],["/tags/cloud/index.html","95638a94e10bc55c4d91c5e1a436a034"],["/tags/gcc/index.html","ee72d45fc30f4df463cfc95ac7f9938a"],["/tags/glob表达式/index.html","538a491fd188e85117bec12d7d2c10c1"],["/tags/hexo/index.html","783bf5bc3fd5122a06679e29d2bbbaec"],["/tags/https/index.html","c326237d630f46fc332ad9c890e23c66"],["/tags/index.html","19d33f3513f93c0670c752859f0dbc26"],["/tags/kali/index.html","ec8c6db8a3328b19fad5f2d8e837c972"],["/tags/maven/index.html","c635d15a36ce95dc35aea6e6e5322fba"],["/tags/mysql/index.html","8ef596ceff08c84a29f272860adbc862"],["/tags/netcat/index.html","5e997148ea05fb09da735768e14d3613"],["/tags/network/index.html","42f0749d862c380a31e2e1252014b99f"],["/tags/php/index.html","595c4288655be17f653b852831229fad"],["/tags/shell/index.html","389089dbc28a5e7d984c4849323de6b2"],["/tags/windows/index.html","b6659709240710b944b96d8df33e7aca"],["/tags/xrdp/index.html","3c6ae5bb57ba1bdef00d0e047c5acb71"],["/tags/人工智能/index.html","0971f061b9a1f2aa5a8e82c74e8cd4ed"],["/tags/内网穿透/index.html","61be1390a1f9c7d258709afdc5e9aaa4"],["/tags/分类器/index.html","766b1fd7e563481532cd7c7a91393839"],["/tags/删除注释/index.html","0105a3021c0ce90c8d03df7b76d4da17"],["/tags/前驱图/index.html","e710b0b8febabcc0ac3c1a1acbc854ce"],["/tags/加解密/index.html","7b77a02ca719a5761f0633aa64821c9f"],["/tags/加解密/page/2/index.html","5db2457d9a1f1fc2e08a0845dcb73703"],["/tags/历史/index.html","009dc6d42bdc02d99d21427459e577df"],["/tags/反编译/index.html","88eb58f26f17c06b773a525a21d7cb02"],["/tags/图像/index.html","f1c0a47854981f86bce1cec0251b59a0"],["/tags/大数据/index.html","ae1fb2088de138c577190880d9b77ab5"],["/tags/大数据/page/2/index.html","4219c3e534693cac857ec62427d9f815"],["/tags/大数据/page/3/index.html","956cdf7de15ca44ee06aa5592d155b87"],["/tags/大数据/page/4/index.html","e432a21f85ab66a330e97d8af8f52634"],["/tags/大数据/page/5/index.html","869abf20fac0f1ac8c22d788d38f7b2c"],["/tags/大数据/page/6/index.html","dfa4be1fb799f8288c27e0041ab0ec29"],["/tags/大数据/page/7/index.html","c9e774183707c1eb10b29c7358672c04"],["/tags/大数据处理技术/index.html","8ca249201f8803d8b1aa40fead4c1344"],["/tags/大数据处理技术/page/2/index.html","39c08816f750fc7f3035cf287bf2a71c"],["/tags/大数据处理技术/page/3/index.html","2bda9ef4d6fd75f56863e2e2a0af070a"],["/tags/大数据处理技术/page/4/index.html","05cf9f1ba70f2542f706f7f4ef889391"],["/tags/大数据处理技术/page/5/index.html","6f7b8e8fc7f38fa4545cf32c8daaeffc"],["/tags/大数据处理技术/page/6/index.html","2e063a8a1c43b41c053c9399fce9a752"],["/tags/大数据集群环境准备/index.html","50cb90e5e189f1716d886ca9c32adc88"],["/tags/密码学/index.html","c15d512e64ef77d54979b889995bb427"],["/tags/密码学/page/2/index.html","f744bcbbeb059da7cc04761f59c20b6a"],["/tags/按键时钟/index.html","cf61811ddb3472b12a5dfe14b8c96a76"],["/tags/操作系统/index.html","04b1c1de377371fa82133b8fbae68ccd"],["/tags/数学建模/index.html","3b98d208403a6006428fe0d98266c28d"],["/tags/数学模型/index.html","be748d1c8899f59ba82f41561332696a"],["/tags/数据可视化/index.html","065dd14716e60239c823c69a7a8cede8"],["/tags/数据挖掘/index.html","17c9af5c851d5b1eb02a764729a43d94"],["/tags/机器学习/index.html","1912043e353b1dfe3787ca1b9dfb519c"],["/tags/机器视觉/index.html","4e2ff3a6e93163a7bd14ab63bb0b4727"],["/tags/模板/index.html","ae319c5fd619ec1e7ddac3e2af4a7933"],["/tags/死锁/index.html","27b17c4ff52f5ccda97212c0d8d019ec"],["/tags/温湿度/index.html","e3a147be9d29513c81544d4577f8303b"],["/tags/特征/index.html","b1d3800ebf5b7e321fc69d06482c78f9"],["/tags/特征向量/index.html","14b972f452349e61f88dd140551c404b"],["/tags/秒表/index.html","9614b5c53e1708faa86b31955454a9b1"],["/tags/线性代数/index.html","4b754e3b6bb56a40c251a92fc89e3770"],["/tags/脑科学/index.html","bb99f360eb2f8c205a901bd81e2598fc"],["/tags/虚拟内存/index.html","a508b546bf7ac1a8c424c2118f0b1d3a"],["/tags/视知觉/index.html","e48890cc8a57c60ddefbbb464c1d2a94"],["/tags/超声波/index.html","4a7f3daac616c7dae7cbdba013b4c823"],["/tags/进程/index.html","9141a9c8fa9ff5f0eb1de6ad10714c49"],["/tags/进程同步/index.html","7dfe7656cc7b1e05e6ac37e283044179"],["/tags/进程调度/index.html","b7872c7f29d2eeca64568513df9e9a55"],["/tags/通配符/index.html","c18793e6c1c8358f0dc14a189c8d700c"]];
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
						    CDNcacheKey=cacheKey.replace('//mhuig.github.io','//cdn.jsdelivr.net/gh/mhuig/mhuig.github.io@master')
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
