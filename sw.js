/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","383656b823cebfe1a80be076ed41f175"],["/about/index_en.html","5ea97c3030124183579ccb1e6f72e878"],["/archives/2018/11/index.html","95e01ee7da6a778377c6bd640ad8d80c"],["/archives/2018/12/index.html","3063e2b52eb46fbceab246379831c1b2"],["/archives/2018/12/page/2/index.html","772a1ca3454d8820ed39c09b7d7bc988"],["/archives/2018/index.html","cc9638c1d6fc87755734629ba3f4f4a0"],["/archives/2018/page/2/index.html","1240e7123078bc4c4417f4cda711f83a"],["/archives/2019/09/index.html","27d84e549de019e9d84bc2b899a898b9"],["/archives/2019/09/page/10/index.html","732ab07b5df7160b4437b394fb298bae"],["/archives/2019/09/page/2/index.html","ea34ea853056804087a86301f1924178"],["/archives/2019/09/page/3/index.html","973628f3f45164b279bb26bfcae9d8e9"],["/archives/2019/09/page/4/index.html","67c21f005a47987fdc5544b919bcd08f"],["/archives/2019/09/page/5/index.html","a20502604bd89113ca809e2df77ecbf1"],["/archives/2019/09/page/6/index.html","728a20969a40cb66e2e9989aa23c6a2b"],["/archives/2019/09/page/7/index.html","ad533269272c6b947619bf55e2938eeb"],["/archives/2019/09/page/8/index.html","d2df19030c5dc892c3c95a586c00a067"],["/archives/2019/09/page/9/index.html","bbbd9add324cdd820443952a0b9ca214"],["/archives/2019/10/index.html","21370f08bfe773c767a667a627754c64"],["/archives/2019/11/index.html","ee7a66722d08ef96079413e2d1abc8dd"],["/archives/2019/12/index.html","dabaad18da05d5fea49d481a7e8827e0"],["/archives/2019/index.html","97c69a9e14c37ece4d79ff3e8c9db94d"],["/archives/2019/page/10/index.html","7cac427b9e6a8df1c21e0e5fb375f838"],["/archives/2019/page/11/index.html","546ba1c19d5283b785f1d14d48f39b5a"],["/archives/2019/page/2/index.html","4df9a6e0e24311a4aa413fe35662456f"],["/archives/2019/page/3/index.html","e6f17c47876aa05a2d685d55d74e542c"],["/archives/2019/page/4/index.html","41a2a2e2f50b58b73b930dfd96982362"],["/archives/2019/page/5/index.html","f5b4a99e44f92e6ba72b048627eebff2"],["/archives/2019/page/6/index.html","961f218542dfab7f0577641c3d4385cb"],["/archives/2019/page/7/index.html","32751ed692968a0b9aa49b1e250e1944"],["/archives/2019/page/8/index.html","d80d984d2cf19aaaca39749d940a40de"],["/archives/2019/page/9/index.html","126425e8a1f1273ba741b7a605533d9a"],["/archives/2020/01/index.html","e7f0647bc384ef23df533738ebccfc9f"],["/archives/2020/02/index.html","d7b7713b34987f6060b800633e7ace95"],["/archives/2020/index.html","94337c25df2c423b5678b15c75aa44c7"],["/archives/2020/page/2/index.html","ad8b617610aa8af12dda684fa76334f1"],["/archives/index.html","fa26b6ef6ba6e54a6374ef6c602455a1"],["/archives/page/10/index.html","354f757e24951d72a221900d65c1ee41"],["/archives/page/11/index.html","e5b315330e38d0e71760001dd4d1e93b"],["/archives/page/12/index.html","f680d70b36309af808e74699f3df10e1"],["/archives/page/13/index.html","de31ddfb4f708ec48c77b900fc0ebf59"],["/archives/page/14/index.html","ad12e42644ad1c833356660c8be3c2f8"],["/archives/page/2/index.html","de26a4c6a46a1745c3c7d139017e433d"],["/archives/page/3/index.html","86c8062233cc515bbdd39ca6544c6907"],["/archives/page/4/index.html","cf70e96c371e76e8c05c0daf19d71ea6"],["/archives/page/5/index.html","365c4a39de18fee43729c01897b6f9ad"],["/archives/page/6/index.html","846d9b40c82c799617a3265d617fc466"],["/archives/page/7/index.html","3fe3dfdb3d03c21490fbf50acaa57f2c"],["/archives/page/8/index.html","296c4dbf687b304c047a7451f5d9d0e0"],["/archives/page/9/index.html","9706535a9a20411aaf10d23588d06321"],["/categories/51/index.html","8b4f67e8274ab53f8633999e631ab093"],["/categories/Linux/CentOS7/Python/index.html","cb7fa35ccc5697d3bf623781d2707d7c"],["/categories/Linux/CentOS7/index.html","c307ac0e3d78c2e36d88b47c4ff32b19"],["/categories/Linux/index.html","e2a28de99921f34c1a0ccbbfd75d575f"],["/categories/Linux/kali/index.html","4cbd6c5a4d08ab5c78a93ac49c33e6a1"],["/categories/Linux/page/2/index.html","a795c4361c2b60133d28603278f6f59c"],["/categories/Linux/shell/index.html","1b50abf46f6005946f9369d243d629c6"],["/categories/Math/LaTeX/index.html","aef99e814c6469e28c35019f9e009554"],["/categories/Math/index.html","8f142bd01fa6cf9691e1f45eb329236b"],["/categories/Math/数学建模/index.html","0d8380400ee6a1a5b959c3fde21f9443"],["/categories/Math/线性代数/index.html","9ad739181fb1106c1a307413c5708554"],["/categories/Python/index.html","28ade6f915c686296829fc519d929eff"],["/categories/Python/page/2/index.html","f4895412763d50025ece97fa28205d07"],["/categories/Python/反编译/index.html","71bfb168b0766e8618e3bad9f1d04379"],["/categories/Python/密码学/index.html","acc7ff7aab7289cc7e611232de52c27f"],["/categories/Python/密码学/page/2/index.html","f81b1f61a8863f5fde5bb72aa0c54548"],["/categories/Web/Django/index.html","ad9791a1b2596fc449db36d7cafd8af6"],["/categories/Web/Nginx/index.html","c362467b1787a88ff6e06eea81cc112e"],["/categories/Web/hexo/index.html","7171daca12e33e3bbe6ad1b4f6b2ba44"],["/categories/Web/index.html","19ea3f9f8e033a1457f85f31a8e8bd02"],["/categories/Web/page/2/index.html","819f594eda6fe986f31293712b512c91"],["/categories/Web/内网穿透/index.html","43d372d5142cc2afd60e4781d204f1b6"],["/categories/index.html","83e265afd7a946a5b1cd0f2700c57800"],["/categories/windows/gcc/index.html","7d1ac344377415020126330e69a25808"],["/categories/windows/index.html","65ada67867886c8840ac5b440da69210"],["/categories/windows/netcat/index.html","c1e87321089c5665b14ef63907837bc3"],["/categories/会议报告/index.html","679455147d69650f9f1e638246c0d577"],["/categories/大数据/Flink/index.html","0814aa72df634b76cbc8b4804d2d2373"],["/categories/大数据/Hadoop/index.html","82b25a91b30ebe5225b4f59b474ddd3c"],["/categories/大数据/NoSQL/index.html","9904de4901eab462eff49fea056d9059"],["/categories/大数据/index.html","592c90b52aff5e3ee1e250b1290d1405"],["/categories/大数据/page/2/index.html","f67338e5f54b12a7ce681d6161e83a43"],["/categories/大数据/page/3/index.html","b585368d6375657a396bb417329cd371"],["/categories/大数据/page/4/index.html","38d66168a60fe394296b32f545db7677"],["/categories/大数据/page/5/index.html","36f9fa16802b9326ac053e4bbe348a9a"],["/categories/大数据/page/6/index.html","306ff08c00589f068863bffa440bea29"],["/categories/大数据/page/7/index.html","daac70953e10fe92d6a69fe5b0523b54"],["/categories/大数据/page/8/index.html","7ff735d93f3ffe8f2b77e1c1b01eb25e"],["/categories/大数据/大数据处理技术/Azkaban/index.html","cafb78718fa2c29147d450f3bc7b7fe7"],["/categories/大数据/大数据处理技术/Echarts/index.html","b5bbfbb670452ded302018a825476305"],["/categories/大数据/大数据处理技术/Flume/index.html","da42df78e817290d08ce1b88a251ef13"],["/categories/大数据/大数据处理技术/HDFS/index.html","a4e8e745daf26ce3dba4e8df6b40966c"],["/categories/大数据/大数据处理技术/Hadoop/index.html","08dcc570040b6882d3a6aaf50b49fcbe"],["/categories/大数据/大数据处理技术/Hive/index.html","b7b6154257cb4781f18cb58e060ed8aa"],["/categories/大数据/大数据处理技术/Kafka/index.html","5ec12e06f202ca77e1873599b9a0c888"],["/categories/大数据/大数据处理技术/MapReduce/index.html","205341247b7915e00d560f9d44a805c0"],["/categories/大数据/大数据处理技术/MapReduce/page/2/index.html","f69b186ecdd574b25a61ffd788296efd"],["/categories/大数据/大数据处理技术/Sqoop/index.html","496f844bc0fe9514affccb7f7d4d9f2d"],["/categories/大数据/大数据处理技术/Yarn/index.html","b09d876a0c75b9ebe060ca9378af0cb9"],["/categories/大数据/大数据处理技术/Zookeeper/index.html","ac7e6a28f19ca49edeac6b1b1fb366a7"],["/categories/大数据/大数据处理技术/index.html","99551cbf50d4efe64e935e45a1408fde"],["/categories/大数据/大数据处理技术/page/2/index.html","d33c4860b6b78fdf998cf01a760f7f4b"],["/categories/大数据/大数据处理技术/page/3/index.html","5872168833558f491c034cdf569a6222"],["/categories/大数据/大数据处理技术/page/4/index.html","1eb247d1d2a5527ea084c723f8254eee"],["/categories/大数据/大数据处理技术/page/5/index.html","f8fc4ae2ac9a331ed375a93c21e79bcc"],["/categories/大数据/大数据处理技术/page/6/index.html","df3b954272e024270f6283027306561d"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","77f9b64c22f142adc0f242b028ce58c0"],["/categories/大数据/数据可视化/index.html","84d071025335dbb47ffea1a2e436245c"],["/categories/大数据/数据挖掘/index.html","d1e89b4e29a5c25cb44b9e2379ef769e"],["/categories/操作系统/index.html","f302c7517fd40d7ba334cb3d774bf3b3"],["/categories/机器学习/index.html","4d741e53106fca8543b509b9a180a2c4"],["/categories/机器学习/机器视觉/index.html","f6280d8e08ad2f100b578f28fd8e070d"],["/categories/模板/index.html","d1f491184c52096d08b03c73373df334"],["/categories/模板/maven/index.html","f8c75c8545bd9f9aeaf721b848b8c05e"],["/categories/错误集锦/CentOS7/index.html","255b3620f8715cfe3538c61d8b4ed778"],["/categories/错误集锦/index.html","5a048fa64bbfd7e67c0fe503cdfb6d58"],["/guestbook/index.html","b74405d1df7ab9ff2c74ea7badf6340f"],["/home/index.html","7eb08243748ecde4b4ed87a791d8388e"],["/index.html","f6807b88e234b6b12db1f1d18d3fde9e"],["/page/10/index.html","e333aeac34edcea25a8b239c304ee549"],["/page/11/index.html","7b98714bde85e242f6a9e910930b90ed"],["/page/12/index.html","d9b6deeeb10f0ceeb8e49bef4dd3d914"],["/page/13/index.html","43a6a6bd98371c0137488d2e47d21077"],["/page/14/index.html","9fc0d4454559f04ec2ea9141daa5b2f6"],["/page/2/index.html","9d17226e8a2a1537f7c4915bc764841f"],["/page/3/index.html","0eada81b2d0bd8470c0cd8b742dd1965"],["/page/4/index.html","1bcab2c4c5cdcd0bb27f85302fdab39c"],["/page/5/index.html","f2aa761ee4ca01598bd4c472bc391793"],["/page/6/index.html","1acff64d4adf172766025b28fe8ac2f5"],["/page/7/index.html","ef645c789b1add08990b04efe838660a"],["/page/8/index.html","59dea365dbfef893c2609ff307d620db"],["/page/9/index.html","03a680d14a168e17fa2cf680482d9d32"],["/posts/1009d3f6.html","4b50eb700997e23be55b6be6cd503ac6"],["/posts/10cabcd3.html","8f41870315faeaab2b1d4c0cdfe20501"],["/posts/129a9db5.html","244e99663740c73b9f4dbcb1b99e7577"],["/posts/14fa5bba.html","08d8ed4079aee318a3fe6f649b0764e6"],["/posts/1601d925.html","27299bc5b12a9ec98b736a4c20c44422"],["/posts/1e1e5118.html","b01a9ce561aefd06febaff50e6787d62"],["/posts/1f519fd3.html","2f8e2add555cd97ce86e1356092b44e8"],["/posts/253269c2.html","b64aa57e840713a35b402497d7fe20c4"],["/posts/2ffb45fa.html","27fc3ad993fbc116ac6327d371d53f69"],["/posts/2ffcda9a.html","3b74da08f5b48fcf9b1bafbb0c5d1362"],["/posts/3098d714.html","4d0a7e592555bb17b53fe25fec1af47c"],["/posts/30b27542.html","337b1bf16612cb8bceabe7b89fa20dce"],["/posts/32c5d0d9.html","8cb0f3edd4ec044b435f7dc0f3c56959"],["/posts/32ffa341.html","bf5f9c0be99109c64d525813f9b38cf2"],["/posts/357dc334.html","05c0670995a9dc3dc9f326f12c2ca861"],["/posts/38a07d35.html","3fe03733d8f9f892c941977f67d6338d"],["/posts/3bfd1783.html","6102b647c13cec3e64938811cd6a7b62"],["/posts/3d7d3997.html","e444f276a5b76a8466e8e5b91e696390"],["/posts/429246c5.html","215abe3f3051e20f077cdc8777f121c1"],["/posts/42ecd398.html","b49c47e51bb88ba3758693153f951fcc"],["/posts/46b39789.html","12d81ef30126989a3d857a9f6080afe3"],["/posts/483290b5.html","909c5d4109a7ab3620dfc752c317f3c5"],["/posts/48a224d1.html","0ff438fe5b5f6003ca615f39441f8704"],["/posts/48a2d97d.html","34aa940e73f437be34927ad7ac3d3ad7"],["/posts/4920f048.html","15a4c582d134d714d03969885325a9de"],["/posts/4a71123b.html","6d12dcd1448d0f8062e9b5ad7d0cbcf3"],["/posts/4a71133b.html","57fcd48b80a3c709a8b389c6772ef6c0"],["/posts/4c2deb5e.html","6463052e73862c3ae1f9ddbf837c234d"],["/posts/4dd55455.html","9f6931cbd165ceb063e77f249b1e9cc3"],["/posts/4e6873c5.html","e72bf99a0cddd5e9c8d8c7df1cefc54f"],["/posts/4edeccca.html","c8bae8ca7aca1faffc239f90af6f1773"],["/posts/53ab8d74.html","05d9f3f64aea3d685dca37716586433b"],["/posts/53d0a404.html","2d5bb91e894cae60e860b70da1937cd9"],["/posts/55b264de.html","10611ae5e750f315824161d524f9088b"],["/posts/594433a.html","edfe98496a0b36f1e3ff721dc14b096a"],["/posts/5bb73de.html","db5aaaeadcdae2590d9662843253aa49"],["/posts/5bfe6261.html","4603a33df161ad54691c7eca5478cc59"],["/posts/5cc46d49.html","c01113afbe8468fe7cf100741dab270e"],["/posts/5efb0a25.html","0be17010a400e545849bbab3531a97da"],["/posts/6009a9d8.html","248236d867eabaac0a259f1cd2bdc330"],["/posts/606a512e.html","8ed6e8f6c85fef733322a8bfe2ea6be2"],["/posts/610da529.html","8c011d599831e3566af703977e30e404"],["/posts/63637a24.html","3b391b1da8eb56fdbc7fb298965226fb"],["/posts/695a6c4b.html","9ef516da30208993d263539c49b85330"],["/posts/6980c27e.html","9419e3bd3e822747489582944e96cc59"],["/posts/6acc7206.html","5d55a6cff89f191dc251c7cb2cd746b5"],["/posts/6bf2f994.html","4f5b5a01a55bffe7717b3a64c84b4a8c"],["/posts/6cfc95e.html","6549d8d7253cf00f73dc940eea7aa738"],["/posts/6e430c9c.html","b2f041ddce59b1bf19869f51cc1cd2a7"],["/posts/714668f9.html","34401ba80b0d1878155b5a6146d42053"],["/posts/72b49ca2.html","94eca9faf66e06a29a559fe5dc724bfb"],["/posts/72cd4c87.html","67cf235d3f0af782181f752da45003fc"],["/posts/75ee5fa.html","fe080a13213b20b94dc7b5859f7f0db0"],["/posts/780b9de2.html","9f0958f26269f939c13005e47e108ca2"],["/posts/7827182c.html","d9a10768ef66aff11c5809e8e8f3be1c"],["/posts/787a8307.html","76a2371f5fd09ff5297a3837154db779"],["/posts/7cb85200.html","6624fded9c567478da980f1eb3720967"],["/posts/7d6b1f3c.html","11c854498d1b1640ae6849ac00460dcc"],["/posts/7def3950.html","9b9c3b2c35cd90cf22711be4576ee018"],["/posts/801b51ef.html","bfd244bbd7b06eff28c28d9c9d2c561f"],["/posts/8485750c.html","aacc1958b8ded97cf2770704facbd207"],["/posts/87e9dc75.html","139f922204e4865f0c5ebd337c74a833"],["/posts/897831fa.html","2c9aa8c199c8a6b1cc4bd1ff9c46f4d8"],["/posts/8ce758a7.html","5eaefb36f1331154663dbba4723b9ace"],["/posts/91223731.html","d5ffa3804ebb0b78a4720a7ac0b7ec64"],["/posts/96f894a7.html","2a5eae46ff4d73b9d0123c803d874d39"],["/posts/980d646e.html","b09d2253b0ad54b066c6e8d818de3ab0"],["/posts/98579906.html","8c6884060c0f14754658ecc3e7a712a8"],["/posts/9b624d43.html","26ff5459b81bf04189b987861b29dc2d"],["/posts/9bc3b11e.html","e08b51d643d5b6f078ea7a4d8dd9c584"],["/posts/9ef6ff16.html","db01c56884a3ceba21989101aae6e834"],["/posts/a105df5c.html","a4a77205c297ee33091f5f5d41b2ca0b"],["/posts/a2af0ea3.html","1a5ba2dda00ee800fabdfcbc232feae6"],["/posts/a3ed1548.html","313419feb94407cabb89a8f8ff7088a7"],["/posts/a4a39746.html","0f4ed8c1939c736e3c7334b67a974c13"],["/posts/a5d678be.html","b549eca60279cf169d1cf42de14997f2"],["/posts/a5eec80c.html","c4ecb2db9e4b7a2319339cbb0b022576"],["/posts/a79b4f5b.html","84c23c85a3f0d00e0a01348d5c505018"],["/posts/a81e94e9.html","80843bd0a243cca18eb3943ac8b942ea"],["/posts/aa02a436.html","a77dc79d48869e2a1ecb62528168f851"],["/posts/ad720447.html","3dc9834109f6f0f9aa42adbaffe239a0"],["/posts/b0ef01f5.html","9dd6a703d6c935cb1f49c5fa7ed192d7"],["/posts/b190dcb.html","8d20ebdd2c0eed6ab9d3facc15eb1e14"],["/posts/b387b8d5.html","3df1ca75b5bf4ba91224eedb90c30c59"],["/posts/b4a5318a.html","43b3b76c8435fde62be9b1027678973d"],["/posts/b4fa1b4e.html","cf81665e005dadcb7162f68cf2b944df"],["/posts/b59b6a41.html","d52188fb96799bb715a6071a6f745252"],["/posts/b6ffaac2.html","f9594ac7108a4d2a2c30a0725f0e4df7"],["/posts/b9b7baa7.html","a0ab2e84252ef5cabaaee2e50d013c41"],["/posts/bb7c60d.html","eab8135758457c87ab35a1acbdc9d2e9"],["/posts/bbe38b68.html","390e2fb8561c2cbaa9b4e1d91650a5a2"],["/posts/be57c430.html","db07fbc0f4d71996056dbd5bc754b2ba"],["/posts/bfb9db00.html","38a50fbf9c12c42b7a4927883aaadc2e"],["/posts/bfbc2e0b.html","3126bb6195bf42edba1348901d0945cd"],["/posts/c16b9d82.html","13aac963e5b76947b80f920246c5827b"],["/posts/c270974.html","592c455bab9a34930604d9efa5a20849"],["/posts/c2c98f74.html","256fe6438e839e544e082022e4e8df2f"],["/posts/c5520104.html","a4662d1fc3db1f9f7c953a7e53f696c0"],["/posts/c81f7fcf.html","d83f09cb642b046b791f6129c98bba99"],["/posts/c89a329f.html","e68c39389759ef5e347db818f21d2c7d"],["/posts/c8fc3430.html","c420aace2839fe72b7572b94be49e99d"],["/posts/c91f449a.html","3a5c49c1eb3e6e789457537f16a357ed"],["/posts/ca7a6c92.html","42a76506ad3c4652222fd32a82ce9180"],["/posts/cc03340e.html","225e2fe9df04e996f76c169d23e79710"],["/posts/cdec63d.html","5149dd4ebd8bbcd749bb175ae420a2be"],["/posts/d07ffe1c.html","f201d9f0bb6569f2a847ba224056f83a"],["/posts/d178b062.html","a334454317af3dfe3449630ba6ce95de"],["/posts/d53724bc.html","444219eefa9a52626f8719eb252d15e0"],["/posts/d70eaced.html","7f75c09dfd6cf11bfa53c17acaefcbd0"],["/posts/d7edfddd.html","49a560b756496a7a66c9995bf1b5c204"],["/posts/d8795dab.html","3f1a1c7b1359a44b94eda009df353e37"],["/posts/e00c1bc.html","ee86c63e3d76e69ed726916aa76fafe3"],["/posts/e3dcc811.html","b0f7d5294204964d05a3e6a45e8400bb"],["/posts/e6f6b883.html","12e3d973ef39e2f11865b7c5042a6374"],["/posts/e821aeca.html","105bf5513cb454538f66bc38f982ef13"],["/posts/e981c79e.html","d4d1071cf1004bc0f6b7d008dfcaa92b"],["/posts/ea7b2ec0.html","f50e00f66037c4839d1c0d56ff4ffed3"],["/posts/eb168c8b.html","333c21c37731a0f2790e5fd674f141ee"],["/posts/ec477027.html","a91ee6a2b77c91b032b1e45438723776"],["/posts/eeb47c66.html","837b7b4446820642fa1ec5211227eea7"],["/posts/f0765214.html","248f4fea2e0ed5793626091d8750b2b9"],["/posts/f0940727.html","a58d9fe7015551665e1a16b64ac0d998"],["/posts/f1ab62f1.html","ee6c70ff3a324e5949d08ec213b6d636"],["/posts/f3b50546.html","d2688af7f165839d6708ca4b21be7a38"],["/posts/f4524359.html","0eec2aaf334c5a271526398ed0a29711"],["/posts/f4e10e30.html","c27e36284724e69bb7a60999c0f1a78f"],["/posts/f70539ce.html","95cfa3961ae4a5e57a0f0ec814d23441"],["/posts/f77eee2d.html","a18bcdf9227ceb91d0b8f5a62fbcfc1a"],["/posts/f8d2d5ec.html","3f36ce4d8794bc9df2ffe46e376ad052"],["/posts/f9a25cd7.html","a184651ecf0dfc9603da7535bcc5eb4f"],["/posts/fb97a8a5.html","9abac5caf617b2cb82e35c4473a1fa0b"],["/posts/fc610c2d.html","c9272213651102c10052f258028b9787"],["/posts/fec1c989.html","cbd390c5142c30ded76745388d1ff861"],["/posts/fecd7f2.html","d8f333133df0a6474eea7cb3d7683f46"],["/tags/51/index.html","ed7d841c9f6ba9daec234ad60d95efac"],["/tags/AES/index.html","62f7309512b26e7a48690980acaec382"],["/tags/Anaconda/index.html","b535f60bebba3d5d8892c215136c3194"],["/tags/Azkaban/index.html","f808b2d9d82d9d631d862e98b41da4fd"],["/tags/Cassandra/index.html","e1525351f4574d5776d0c3958419238f"],["/tags/CentOS7/index.html","ab6af6295c5cd692101e2242524ab295"],["/tags/Django/index.html","e8bb57da6b1178b83c4f437fa281a160"],["/tags/Echarts/index.html","a483e77432431c88278d628c6d38fb68"],["/tags/Flink/index.html","10d5b1218ff4e54cab954961b4e769a4"],["/tags/Flume/index.html","9804259bb6022a1b3ec10174c8157090"],["/tags/Frp/index.html","51fdee53196d1d64001deb9af0bd3ced"],["/tags/Github/index.html","7445e902cd1e10cc3e8e68731bd3546d"],["/tags/HBase/index.html","b105ff32a76e54f72d4cc81d64760b22"],["/tags/HDFS/index.html","d6dda1edea8c7767c4b5d5e03d6bb76e"],["/tags/Hadoop/index.html","f5e7397167fe0a840a161aac9e4dad47"],["/tags/Hadoop/page/2/index.html","bd2f5e8dcd8f0bb2da6fa73fe2b0e2fb"],["/tags/Hive/index.html","681aa20a88d35175d2d259ca4a5c791a"],["/tags/JavaAPI/index.html","cadb29830780d784abe21c6240f04ca2"],["/tags/Jupyter/index.html","961285c25c58e90633f451558a04c6f3"],["/tags/Kafka/index.html","743ed966bb2d23c448eca52b6f93c582"],["/tags/LaTeX/index.html","ff9b257703f6a550f7feef3dd1900a33"],["/tags/Linux/index.html","9cb129932c8d03049f7d909a51b7fc37"],["/tags/Linux/page/2/index.html","0daa5429965e2567245105a9197a5071"],["/tags/MapReduce/index.html","477259502e3cb80c0932c8d827579049"],["/tags/MapReduce/page/2/index.html","7e2f4af75ba0933523f1eb5a723703d5"],["/tags/Markdown/index.html","267136d0ae85142243fce9a675bde2ae"],["/tags/Math/index.html","7a6b59b3779bcfeb95f2e87038b6daa5"],["/tags/MongoDB/index.html","7207ce5e0797dbb61e056dfe1f90ab4e"],["/tags/Neo4j/index.html","339f43b77acfebe9f7590b21265559da"],["/tags/Nginx/index.html","7879c97fe11cb6a197b9147634166ec9"],["/tags/NoSQL/index.html","f1b2a71cb25e18c5ba4d587bd5684742"],["/tags/PDF/index.html","a666e0fb31036e5b5969e88446d01015"],["/tags/PDF/page/2/index.html","9e4dcbfeb7bfb4af578cfcabf108fdaf"],["/tags/PDF/page/3/index.html","c9620ea91b9c88fb55374c33d2959065"],["/tags/PDF/page/4/index.html","bdb317279bbab150655f4570eeaecc64"],["/tags/PDF/page/5/index.html","09514b3bde79d16c7226afb1ce61c55f"],["/tags/PDF/page/6/index.html","3281e754240126b4a95008eac07464aa"],["/tags/PDF/page/7/index.html","b850fe3e2ec1cdbd183f5b59580764f0"],["/tags/Python/index.html","9e1269fb765f33c7d5d96c4472edd2b5"],["/tags/Python/page/2/index.html","270b96bc78c98b9a92f69dc1a5b30e02"],["/tags/Python/page/3/index.html","549c7343254bc1c1d4c173c41447446d"],["/tags/SSM/index.html","b4f64a20fe98f9b404c6ebe7518865e6"],["/tags/Sqoop/index.html","4dbc444b7de54e8532882b077d98a7d2"],["/tags/Web/index.html","9aa231d15b1b95ab6a94e9b190082e73"],["/tags/WebSocket/index.html","2f2084b9a94f3c45203f9e31fb87ed2f"],["/tags/Web安全/index.html","2ca3418d11ff5e0b3b4902a0dded36df"],["/tags/Yarn/index.html","b72d4b622c58b7c2d8daebd05283cd52"],["/tags/Zookeeper/index.html","1cc2c577eccf81bbd55b92dfc27bf59e"],["/tags/cloud/index.html","d7afc298675c743991c9b00ffe49fd55"],["/tags/gcc/index.html","8d08ec10534d364b029f1c3b03607ece"],["/tags/glob表达式/index.html","a980e742c6f378afca0744d1e60c3473"],["/tags/hexo/index.html","089f2b34059dcb2612280959b1a2bc1b"],["/tags/https/index.html","0dc1333ef37ecde4b0194ed091733038"],["/tags/index.html","b231db41bc364865b3a3c1aebfc1d191"],["/tags/kali/index.html","81b7e1cb5a44391025fbecd21c1bd2fc"],["/tags/maven/index.html","b5e5c9dfefbfd60b04b40369c9077da7"],["/tags/mysql/index.html","8889f0515490850394c289f1a44427b0"],["/tags/netcat/index.html","108df8ed35b9bedb0b0de12be75c897f"],["/tags/network/index.html","29872e9b0a762429e3faa674e197b1e6"],["/tags/php/index.html","cd0634777483dc23714e1b8a74ddc455"],["/tags/shell/index.html","3d74553a070ebd0c8b3c1c51482ca0b4"],["/tags/windows/index.html","46a6305d0d8d186af3209afd7115ab5f"],["/tags/xrdp/index.html","075b448b0537327f5c406dda8d5f2619"],["/tags/人工智能/index.html","c5457f556467a8d6ef38e55cf3feb09e"],["/tags/内网穿透/index.html","897d49785e17cce64c30359648add8fd"],["/tags/分类器/index.html","6957125e2951f7a4b94d83fa2bf07569"],["/tags/删除注释/index.html","cb7af128a9bd8425671189c642971150"],["/tags/前驱图/index.html","408ea304de54adb365503f9506d6becf"],["/tags/加解密/index.html","6cccfc27431dbe449900fa70337e466d"],["/tags/加解密/page/2/index.html","8cdfd8c2594ee5f99629b7db2f294674"],["/tags/历史/index.html","fcbb305ea32bfe37ee2f3d6f6a184522"],["/tags/反编译/index.html","6344ae9040d1f441d79f6c52bb53cc86"],["/tags/图像/index.html","441b02afe00c87e8bc02625946fc30ee"],["/tags/大数据/index.html","8c263dfc2fcbcbaa520aaf31b31ef18a"],["/tags/大数据/page/2/index.html","9262ed76424233f50568eb996247a6d7"],["/tags/大数据/page/3/index.html","73f76444df682e9d5e6867484af4ba3e"],["/tags/大数据/page/4/index.html","e329dcc4fd9dac9c499eab662e736495"],["/tags/大数据/page/5/index.html","08bfd431497be19ce7bf1030095a67f8"],["/tags/大数据/page/6/index.html","c3539240054255a5285c62d856b60878"],["/tags/大数据/page/7/index.html","9e3db46c2bf93ecdd730b874fa0dec8d"],["/tags/大数据处理技术/index.html","a9e00b5c5cf093b39adcef56a1ea56c3"],["/tags/大数据处理技术/page/2/index.html","f0300d79439eb9f353306d791f4f0cd4"],["/tags/大数据处理技术/page/3/index.html","f3e4adf75a39dd5492a57cd66c2d8c1c"],["/tags/大数据处理技术/page/4/index.html","589f99123ba643f0bd283e7131be0592"],["/tags/大数据处理技术/page/5/index.html","c65a5ee67103c2a6214ab97f11daa9e9"],["/tags/大数据处理技术/page/6/index.html","770ff738ff345b85750e6f298f33465b"],["/tags/大数据集群环境准备/index.html","b9d7412497d9a5e894d9813dfb11484c"],["/tags/密码学/index.html","51bbe1383e0ba9a7b4febaff688e362f"],["/tags/密码学/page/2/index.html","b6f3dbb05152bbc50d17f99585e2eb96"],["/tags/按键时钟/index.html","69b60f678b4c1e75e7cfde7f81caf515"],["/tags/操作系统/index.html","d8c8bf6823201a1dba1773a9a981e957"],["/tags/数学建模/index.html","15d8be148c2c46c3ce9f923947b4df20"],["/tags/数学模型/index.html","7bbc4621faef399b53815c0c817c51dd"],["/tags/数据可视化/index.html","3cc07cc444330eb073bcc835d230c1b8"],["/tags/数据挖掘/index.html","6569ab21de0a4bb0d366fc934e617bd7"],["/tags/机器学习/index.html","f986b9b78b672c189c338426505ba650"],["/tags/机器视觉/index.html","065dbff766afdc643b769a1df0177a0a"],["/tags/模板/index.html","284aefb4f2169e809777bf55fc19c237"],["/tags/死锁/index.html","e50fc15c05ab0981fb4c92e34e044a77"],["/tags/温湿度/index.html","9a3017012ffb97ff3afa2d0fe81267b8"],["/tags/特征/index.html","e595f1bfa2baceb2f49a961c0f575ec0"],["/tags/特征向量/index.html","b7ee0272e3c6b8e8ae00ff00d544768e"],["/tags/秒表/index.html","e497a4020f17794aa20c2745a807b04c"],["/tags/线性代数/index.html","6e95d58061cd67e64b10517b18eaca62"],["/tags/脑科学/index.html","77491f6e95d1a5de6754449bf9ffc7a3"],["/tags/虚拟内存/index.html","7763d7856af983512899dfd1e98ea06e"],["/tags/视知觉/index.html","37d410a1a410e6c6e3e2e7ff0369596a"],["/tags/超声波/index.html","e5231ba45fbdea8f7c66a31bbe30cf91"],["/tags/进程/index.html","659af2fe6ff47f52431c51ce65a16f2c"],["/tags/进程同步/index.html","b3c4449b88468e0b2e82a5aad0133dd0"],["/tags/进程调度/index.html","b9f477ac1a9abd071b4d7ee78227371f"],["/tags/通配符/index.html","e0543d2a970ee57157389a49fe2d6d95"]];
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
		headers["content-type"] = "text/html;charset=utf-8";
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
