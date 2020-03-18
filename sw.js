/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","308bd7f1dd608543eaddc907cb451e0a"],["/about/index_en.html","021454403b1a0b036615b547cb44f827"],["/archives/2018/11/index.html","eb649ef4829375a1730cbfeb7b48b507"],["/archives/2018/12/index.html","966410bd56e623907ad196e4fd4fa70d"],["/archives/2018/12/page/2/index.html","c27ccafc4425132d88e91a523749a9aa"],["/archives/2018/index.html","1fda10a4c1a0a6c5bab8d9f977c160df"],["/archives/2018/page/2/index.html","bcf20876a67bd35d3f49d4e24e5255a5"],["/archives/2019/09/index.html","471acb6a4e8484886c41601cf32db579"],["/archives/2019/09/page/10/index.html","33460fe063418aedff2f671dc30e31e7"],["/archives/2019/09/page/2/index.html","8f9406f5ab3032d8449b6adc2740cf2e"],["/archives/2019/09/page/3/index.html","ec6770f414c9660649e2bd2ada6c65d5"],["/archives/2019/09/page/4/index.html","804c7d52796e8395bd3061a54947cf48"],["/archives/2019/09/page/5/index.html","2e1069c1b8b9bef12efd16dfa5ab053e"],["/archives/2019/09/page/6/index.html","1a1e682591ff1bf9e068b205a363b862"],["/archives/2019/09/page/7/index.html","bd371436abb66882b052e593ba312db6"],["/archives/2019/09/page/8/index.html","fbfeef9d2270126591a6f90e3800efe1"],["/archives/2019/09/page/9/index.html","524c0ea45be5412f161c9b78a103176a"],["/archives/2019/10/index.html","ddd1e8beeb5055009552530597bebcdb"],["/archives/2019/11/index.html","062a9db30970bd438c36f7de93f7faf9"],["/archives/2019/12/index.html","027a234ade8ff6eccc4a622f0c3bd0d2"],["/archives/2019/index.html","2535f2214ab3e66e96625fd445276b20"],["/archives/2019/page/10/index.html","f27844fa777541af5bc73e18f3b0e6f3"],["/archives/2019/page/11/index.html","d93983d1d5ccc78c1a9c51ac38a6bab7"],["/archives/2019/page/2/index.html","b362cdf90bf3b38c994fb5c6b15ac442"],["/archives/2019/page/3/index.html","72a0345151bc018f0141f80fd11db70a"],["/archives/2019/page/4/index.html","1b3acf1b18fb4389e48b5d7a76d0e022"],["/archives/2019/page/5/index.html","eb4983fa897738d26909e1fb025a0e48"],["/archives/2019/page/6/index.html","57e8298e04c4a7ae825f636b30b7bff6"],["/archives/2019/page/7/index.html","1b4bbdad87b15522de49c8c8845a2cd5"],["/archives/2019/page/8/index.html","9af7e107ae283861ce640d09deb476c5"],["/archives/2019/page/9/index.html","024267456bb4b46695502c6971f85c92"],["/archives/2020/01/index.html","b1bd3c580c3663ab7e7ac5e5fc9bce2a"],["/archives/2020/02/index.html","b76e7b668a1a31a4446d75c66614f5a9"],["/archives/2020/index.html","b4abb6b27974ed2f6498a52105e88db6"],["/archives/2020/page/2/index.html","211368a5e624b8bbaecccf761bf393c8"],["/archives/index.html","402cf23f74d5b010932802619fd0e733"],["/archives/page/10/index.html","f34022385fce9cfc28fd51e97ee34294"],["/archives/page/11/index.html","0c0c8a5419e0fa87979fac7f2452237e"],["/archives/page/12/index.html","49b2f205552329a0cae08c3e84339bf7"],["/archives/page/13/index.html","1578951bf05963a0853f9d87a45a23d2"],["/archives/page/14/index.html","99c30b513e436b49c1310d679e51191e"],["/archives/page/2/index.html","ec2ceab5c3acfe4cd5bda1f0715fbeb2"],["/archives/page/3/index.html","e4ceec09e260c7460702e37178654a4c"],["/archives/page/4/index.html","b8a65519fcea1669c13166196997676d"],["/archives/page/5/index.html","e43e8b1788b45b5ea9ad89f8263952cf"],["/archives/page/6/index.html","fb2b69931bd82b786c510433fe374203"],["/archives/page/7/index.html","c97a877a4d154de052292b4b8bfb3ade"],["/archives/page/8/index.html","8da9d571874ce58f9d8c3cb9c7f50750"],["/archives/page/9/index.html","b212df4353bbe985eb1cf60662496d3e"],["/categories/51/index.html","a962079995b7a6acf9545eb143f53d99"],["/categories/Linux/CentOS7/Python/index.html","c64e7fc7b9af6869ac85cd1112bed9c3"],["/categories/Linux/CentOS7/index.html","62c5f5c0843114b22afcde18ea600a16"],["/categories/Linux/index.html","48e6873b836cfdbea73b54e0a3f17282"],["/categories/Linux/kali/index.html","177b90317caec51a60dda05a36f871a7"],["/categories/Linux/page/2/index.html","c216c68c977210e3a4ca7bdcd6aed5c6"],["/categories/Linux/shell/index.html","f5d86406f65fd6cda01089ad8c790d85"],["/categories/Math/LaTeX/index.html","20f8b319ebef10e812b34140b236b37a"],["/categories/Math/index.html","9cac2dcd0d079ed4de2846373bc3a07c"],["/categories/Math/数学建模/index.html","b2af3e4382aa77e104d857775867ab63"],["/categories/Math/线性代数/index.html","adf993a077b7455188daf64e5e8f5c13"],["/categories/Python/index.html","c34cb742e9f8a1583db1d114fcd84306"],["/categories/Python/page/2/index.html","d318ba61eeb32914be463f619c6a733a"],["/categories/Python/反编译/index.html","ddb7ab67790bf75f1f143cdc7e32360d"],["/categories/Python/密码学/index.html","49bc28e903911ed9f3cb6ed543ba0ce0"],["/categories/Python/密码学/page/2/index.html","6a645f3ca927d3314c7d3d54abe700d8"],["/categories/Web/Django/index.html","3a8631b261fcadb4e9f51a16a118adec"],["/categories/Web/Nginx/index.html","0245c4883219045372a9f1969561bd04"],["/categories/Web/hexo/index.html","6b498c8733179ec8fe1d51472d2aba4e"],["/categories/Web/index.html","d858a284c4c9a2265145bd11137f5485"],["/categories/Web/page/2/index.html","c21397e74a037dafcf0818f5a1f81645"],["/categories/Web/内网穿透/index.html","e16f6f2ccc9c44dd8903362edecfc71d"],["/categories/index.html","b658e46f0cc10c72025ac27b580fd058"],["/categories/windows/gcc/index.html","6ab0369a4fb2d14561b1b6b8f1032b24"],["/categories/windows/index.html","d6253d9d1aa759a2d0ad435aba4a9ec1"],["/categories/windows/netcat/index.html","53884c0d4bfc335b1ad4bbb7c507d06a"],["/categories/会议报告/index.html","2157b236d0a65babc1add1c764ad51e9"],["/categories/大数据/Flink/index.html","646c40aae2e569080396889dcf0b0774"],["/categories/大数据/Hadoop/index.html","46e0825d15f222cfde1cd21953b03f3a"],["/categories/大数据/NoSQL/index.html","bc641b96bc2593ec372c031435e9ba73"],["/categories/大数据/index.html","d5369da3f90a7fd1cd9c29e75a352828"],["/categories/大数据/page/2/index.html","02395daa49e0d96cd3fe8de54b6e83ee"],["/categories/大数据/page/3/index.html","cb07fd59b2201d8e8deefb759c626234"],["/categories/大数据/page/4/index.html","561d2afb75b2538441b822dcee959bd8"],["/categories/大数据/page/5/index.html","e8587f80042e69c5913199f86f701873"],["/categories/大数据/page/6/index.html","9b9dadda09fd68a1f60f7a2cdf244c03"],["/categories/大数据/page/7/index.html","4824596964d3563d375f5d16e8c32316"],["/categories/大数据/page/8/index.html","ac5dbff684475ca9d97688de10184320"],["/categories/大数据/大数据处理技术/Azkaban/index.html","63d3beaef44df9b653c470c04359cfb2"],["/categories/大数据/大数据处理技术/Echarts/index.html","8adf8f36bd11e776e7286250272153d0"],["/categories/大数据/大数据处理技术/Flume/index.html","8ca32935e88ca1e66dbee08028fba023"],["/categories/大数据/大数据处理技术/HDFS/index.html","2f47686266abab1d842d3c97a2ca93b6"],["/categories/大数据/大数据处理技术/Hadoop/index.html","ea184b3d45d6b226c8476be8fc731124"],["/categories/大数据/大数据处理技术/Hive/index.html","bb826001e649f3851ea5b2e6a7444934"],["/categories/大数据/大数据处理技术/Kafka/index.html","d4b8d75961dab8b5862db0dccf11edfd"],["/categories/大数据/大数据处理技术/MapReduce/index.html","e8074fdb7f8a34e9489ad907166096e2"],["/categories/大数据/大数据处理技术/MapReduce/page/2/index.html","0b74dfe9f2aaf1c54ad4dc077800d753"],["/categories/大数据/大数据处理技术/Sqoop/index.html","4259a114c3cdf41bf16d52545dacbdcf"],["/categories/大数据/大数据处理技术/Yarn/index.html","e7f9f25f97bebf78ec8ac310b9f34767"],["/categories/大数据/大数据处理技术/Zookeeper/index.html","e77f8067d6b5215a2c0a15383641772d"],["/categories/大数据/大数据处理技术/index.html","694b645904f25095e7a5e470d82986bd"],["/categories/大数据/大数据处理技术/page/2/index.html","e57f9332cf0e395baa0c183a98c1308e"],["/categories/大数据/大数据处理技术/page/3/index.html","8037d23a739fb66bef160958838b058a"],["/categories/大数据/大数据处理技术/page/4/index.html","9d43627527ba96756e01700282821629"],["/categories/大数据/大数据处理技术/page/5/index.html","35bf323a069080860bde699abd4ab1b8"],["/categories/大数据/大数据处理技术/page/6/index.html","7100e4430ecd29ffbd76569da64bd344"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","03483006f2c08827288502e0073339ed"],["/categories/大数据/数据可视化/index.html","3be7dee5db42c62ff744111ab8269911"],["/categories/大数据/数据挖掘/index.html","77eb62a3265456de8602f02e661d3d3e"],["/categories/操作系统/index.html","c7097d0112e9defa4a93973e5cc5ad1b"],["/categories/机器学习/index.html","9343dc544ccf4b23b2f28941ab285d16"],["/categories/机器学习/机器视觉/index.html","8b20a7df6dc0f712770a02d3037cdf53"],["/categories/模板/index.html","74d8209296c7b3e320f2199e5a2e95f8"],["/categories/模板/maven/index.html","725ec0a7ac154a11ca5f95b394942690"],["/categories/错误集锦/CentOS7/index.html","c45fd1f89c68282f42576e7584e56fbe"],["/categories/错误集锦/index.html","7c74f13c07ce2ead70b7b76568d8a31d"],["/guestbook/index.html","cc78074c1803c4e5f2ed7548d9a7e912"],["/home/index.html","065694cef205ba3fd29232374d7e18e8"],["/index.html","566e905124f9e0f2a28bd79aaf5f53d3"],["/page/10/index.html","6b2ff05327a8a70528065eddfe59481c"],["/page/11/index.html","a6f5d53a735551562cd8da0008f8844a"],["/page/12/index.html","67769969edcd51785d3e99b418fd0598"],["/page/13/index.html","cb3b018127ac46725fda05ec7d70aebd"],["/page/14/index.html","b5e44308a80349ba3f54ad454108d4e5"],["/page/2/index.html","296de1a9757cbd99e41cc282cc806e19"],["/page/3/index.html","51dddac133f967cfc34763e241ac7cfe"],["/page/4/index.html","5e470417830f38c1c12c1a3cdc27b251"],["/page/5/index.html","69140981268bbe7ae265fbcedecc1e5b"],["/page/6/index.html","2abdff42e3116592181878305aa1eaf0"],["/page/7/index.html","deed5527754b5f76a73d6c945dbbfc56"],["/page/8/index.html","0a2351b5911f3eb953100aafcbbbe557"],["/page/9/index.html","7dec696a8cfca13bba1b418e8508b07d"],["/posts/1009d3f6.html","368fd283bede3b296dd867d60d837480"],["/posts/10cabcd3.html","10ecd1040b6cd3db591e5543ad351d34"],["/posts/129a9db5.html","dcb035aebe7c732a35329d4aa528372d"],["/posts/14fa5bba.html","8846897930f6bb9d831a2e37264e534b"],["/posts/1601d925.html","e12d79404ead4d8cee8b1340b387cc40"],["/posts/1e1e5118.html","7c28e16a929edbb102515acce6892f2b"],["/posts/1f519fd3.html","fb7f2b37925fbe4c0bf9f9c6b6f3c839"],["/posts/253269c2.html","79a90c7df8896aa59605dd5599e38b8f"],["/posts/2ffb45fa.html","8ad890bfc392fd3817f4c9eb1995b10f"],["/posts/2ffcda9a.html","585380e2a3f14be7711ddb23a74d438d"],["/posts/3098d714.html","49157d0e010fddf9fdac8d8fdfe68848"],["/posts/30b27542.html","73c3b8636a1daf7ad6c36142a8c14aba"],["/posts/32c5d0d9.html","d70b80629409517b5e6555eb326c0c4e"],["/posts/32ffa341.html","81edc9edba6fde17c2938fc23d2dbcf5"],["/posts/357dc334.html","2a5fdf3f2eb99f62326b68affc4cc159"],["/posts/38a07d35.html","9937edb7544fbd628149f090d34e53a9"],["/posts/3bfd1783.html","d1dfcb33b55afe2d86401f3ad253ae34"],["/posts/3d7d3997.html","4536c03dfa19d0a2d05ab966c15ab9b7"],["/posts/429246c5.html","26a91be09ac00631e498fe712cbe3f97"],["/posts/42ecd398.html","b5484d0d3012d3723ec7b7cb49a71b7a"],["/posts/46b39789.html","d720514918120119bfcf77769b5ab76f"],["/posts/483290b5.html","4b968db2045d92007f230b42ff643190"],["/posts/48a224d1.html","95e82526737e14a3ec2cda5d084f3be9"],["/posts/48a2d97d.html","4db75fb5b6daadfee7688e79b06db984"],["/posts/4920f048.html","b7a3f1250ac1b8b9a99e2445432b84e7"],["/posts/4a71123b.html","3a35a54667c30bc49982995f09c85310"],["/posts/4a71133b.html","7e4b9f9aca4b886778da1a91d5c14527"],["/posts/4c2deb5e.html","526e765f3b7611aa01b91c998a5ab9d5"],["/posts/4dd55455.html","fcfab16591dcd28aa1f136f58584368b"],["/posts/4e6873c5.html","0a6e45214890734ac5dc0b4aa77689f8"],["/posts/4edeccca.html","f831b5cc23ba7562fc053741e54f9c3e"],["/posts/53ab8d74.html","a5bd47b86843b58b791fb8e47eb272db"],["/posts/53d0a404.html","47ed450f21075a10f8b7fbf21edcd5d4"],["/posts/55b264de.html","2badd3b27752e5d9b0fe2337e1c2b9de"],["/posts/594433a.html","941ef9a5ba37627769f789bed99958c8"],["/posts/5bb73de.html","5d2891a1f10284f485c4fe6f76e2e4a9"],["/posts/5bfe6261.html","ea27c3c52df5f5a9eb7c37bdf535155c"],["/posts/5cc46d49.html","4c0ce4205da8a2eb47948ec6fa20c17e"],["/posts/5efb0a25.html","e6bfb4c271aaa9b4e6e209fd37367d8d"],["/posts/6009a9d8.html","69bd510e280b67c76f8171cf7f2a9886"],["/posts/606a512e.html","d9eff6f0cf2b602829115b4d555f7c7f"],["/posts/610da529.html","b25859278f836834f960d4d7db5e18ed"],["/posts/63637a24.html","e4ce46310d08c13d48477e61fe037cb1"],["/posts/695a6c4b.html","691a2018b2bd280ea216af7b0fb26163"],["/posts/6980c27e.html","3e7301601684981629e870225a3cc37a"],["/posts/6acc7206.html","dd60e56e2023a0795290c4fe45bd38ee"],["/posts/6bf2f994.html","bb8c710d08d0250640995bbbc50d7456"],["/posts/6cfc95e.html","0dcf1a40987adfca60aa2453c7cc07f5"],["/posts/6e430c9c.html","c9fa11c4e0b07ecc2f6d7dfeb813c106"],["/posts/714668f9.html","d5c3872f4ffd8e5e93b7bffb1a20ea13"],["/posts/72b49ca2.html","34dbcab68b92a5bf70a51ff971d6d43f"],["/posts/72cd4c87.html","97b7004291b8497b0c9174cd34cb63a7"],["/posts/75ee5fa.html","c61a0bd1d9f28c35c30ba4ab5ec31857"],["/posts/780b9de2.html","680319bb6901dec8db5f8fe1c9705362"],["/posts/7827182c.html","2c44f51381eac97526cb7a301577eca0"],["/posts/787a8307.html","1cf3cf70cf683bcdfd8d773dc4ef319c"],["/posts/7cb85200.html","3cbccd60e3a0eabc077bc3479df00e98"],["/posts/7d6b1f3c.html","936e2bf3a8ac6c50a78e35a220923a35"],["/posts/7def3950.html","ab22b8ef6b1ccf1131759238680d1da0"],["/posts/801b51ef.html","53b00176da945c7b6068b89a78a0b368"],["/posts/8485750c.html","7cea2aae3e05d431c7542bb263ecd992"],["/posts/87e9dc75.html","8d6a2265368e79226848668a2c119bf7"],["/posts/897831fa.html","e4b2d42f6298956a6b8f4d47cd6ab847"],["/posts/8ce758a7.html","1639e6a77f7845e604a1895a831ffc05"],["/posts/91223731.html","c45f5aa7142af5ac1e8c22922afa75cd"],["/posts/96f894a7.html","9e5c0849d9691b1da8f15f4720ad2a60"],["/posts/980d646e.html","ee6161f077987272a9a531933e625900"],["/posts/98579906.html","8baf3e5578a84a80845149c3d67047c6"],["/posts/9b624d43.html","b0c0aca52cd33ecf203c3b49c26e6eb8"],["/posts/9bc3b11e.html","c51ea33034d91c50f6583940de76cb38"],["/posts/9ef6ff16.html","affd0237623ba738c935e4262ece6d2a"],["/posts/a105df5c.html","7934ffd989c5421734a2e7ba5ce05cb6"],["/posts/a2af0ea3.html","2b12e9ca679e9381e29d8791140600a5"],["/posts/a3ed1548.html","227648cea7088ade75a3ce4037f9fe7b"],["/posts/a4a39746.html","93b3f5fbb1dd59a2e27f6f199f6c8a05"],["/posts/a5d678be.html","07c320b34e2636f66cb4d42b43ea0a6f"],["/posts/a5eec80c.html","7b4dfd44c55e6676e5af2ef133fc94c1"],["/posts/a79b4f5b.html","47a1a1b4f01c96f4fe089c71a6e0252b"],["/posts/a81e94e9.html","841b70527a871bb5d402571b0704823c"],["/posts/aa02a436.html","11123d81f96cee57ea44a595dd28ad71"],["/posts/ad720447.html","dad7b810453accca3dca744211b963a9"],["/posts/b0ef01f5.html","d83bbac9aed7482b4a2141b56ca1dec8"],["/posts/b190dcb.html","0568c0f55315aa2cdfdfacb94c1a951e"],["/posts/b387b8d5.html","35ec3d9598f67ca02ceb2eb0abf13fdc"],["/posts/b4a5318a.html","794c69843f688cd8b162086f6d0a311a"],["/posts/b4fa1b4e.html","ad2ba9b9270eb3e08b382d3186985c91"],["/posts/b59b6a41.html","49ffa067f2495bf15cd8b5faf48e2cc5"],["/posts/b6ffaac2.html","57d3f1f3513c5a9d4ab2f3b633b246c0"],["/posts/b9b7baa7.html","a7e3823affc8139f75c0436f7adf786b"],["/posts/bb7c60d.html","2f9a9c4c3f7f37d4d3ee0f4775b402f0"],["/posts/bbe38b68.html","e44037e3b61e3790692c7f65d1311284"],["/posts/be57c430.html","89eea5acb282322ffabf61931151ae17"],["/posts/bfb9db00.html","9cca5319d9dc393a0676ff54944caf6c"],["/posts/bfbc2e0b.html","fd9c0ceea78f98376cefc5b3409b6b66"],["/posts/c16b9d82.html","623c11e580f9bdedc58328dcde974696"],["/posts/c270974.html","fd9fb92e189b0393ebc390a4b469fd08"],["/posts/c2c98f74.html","4c9ad2c2dbf6e0c930843d191969cd48"],["/posts/c5520104.html","9ee2fafdd138a296335d4092e345916c"],["/posts/c81f7fcf.html","fe6d5fc87936bf1666827f2975a4c1fa"],["/posts/c89a329f.html","2516c27dcec0a2ed07271ceeee3741f6"],["/posts/c8fc3430.html","c1650762d6174e9b79484279f3e08581"],["/posts/c91f449a.html","da942b2b3a723e53b1c7dc204c2594e4"],["/posts/ca7a6c92.html","8a5fce761dff9c7e2b3882bfa3c27e8a"],["/posts/cc03340e.html","dad7662037c3390c3428d611fa5856c3"],["/posts/cdec63d.html","392906201ee3fd59eaac3b5b01cbb981"],["/posts/d07ffe1c.html","94152a50e24db9b382b5c32a425c6aec"],["/posts/d178b062.html","c247cae5b1a9eb362e520ca948c6d362"],["/posts/d53724bc.html","15a54c895ed2635bc204935fc29a3dbe"],["/posts/d70eaced.html","4d87d4ac15aba6748e0ced4344fed48e"],["/posts/d7edfddd.html","3d919b85502973767dd873d8db58ad4a"],["/posts/d8795dab.html","97cc9c5e71cc5b86e3b3b1d724533354"],["/posts/e00c1bc.html","0aac7011bd66619292a8a260a3f435ab"],["/posts/e3dcc811.html","27e9e9a362603087e94832afb150d8bf"],["/posts/e6f6b883.html","ac6adf7f55c803ebabca35de1738d772"],["/posts/e821aeca.html","34aaec21529346fdaf092251ff3ffdfb"],["/posts/e981c79e.html","7a5d4fded652c6a71237306870a0310d"],["/posts/ea7b2ec0.html","e798c7f9d51d1b29967045eb01591297"],["/posts/eb168c8b.html","0921b86bbab3ae54414bea7fa3538664"],["/posts/ec477027.html","09250709db687d1ead2bd614012a1341"],["/posts/eeb47c66.html","2059074f19f9979a8e4d3ac6d5ca133f"],["/posts/f0765214.html","1141c5fb1569dc97a0e5d0c0a05d614b"],["/posts/f0940727.html","822d302549f2468ef2fea9eaa79c8356"],["/posts/f1ab62f1.html","f2a9b7fa8b26d5c015a87055322fca71"],["/posts/f3b50546.html","f74ac092fb99e823d4d8ebd14cd0c35f"],["/posts/f4524359.html","d59fed5ff30e3287cd273e1e39a255b5"],["/posts/f4e10e30.html","873413796c0cd5f4c80eed224d1739a6"],["/posts/f70539ce.html","a1a956baa5c33f635318ac6a78c4a8de"],["/posts/f77eee2d.html","51f83d1a7c9b45241d61c9e3e98dec91"],["/posts/f8d2d5ec.html","dfae566d903754a90534121666857d37"],["/posts/f9a25cd7.html","3984d17e3a4c52e3b2e0441794b3b559"],["/posts/fb97a8a5.html","7f7423f14c9a4a9d0b17a586a84ca1c2"],["/posts/fc610c2d.html","da2a5ae765fa8e47d343a127591cab2a"],["/posts/fec1c989.html","4bc05d14e2111b95eea03dc1808914e1"],["/posts/fecd7f2.html","0ea0d4a0aacc90bcbf5d8979f29e97c8"],["/tags/51/index.html","56f73f27dd1fcbec8e9ce47d9b660216"],["/tags/AES/index.html","1ac4fb2833aa4db32c21e3debead7f50"],["/tags/Anaconda/index.html","add2500c3e1d637814bb9644e30c0a49"],["/tags/Azkaban/index.html","5ab6469775383259210ef60ae38de448"],["/tags/Cassandra/index.html","edb9f8ae04476d7adf1645e46c2e024b"],["/tags/CentOS7/index.html","d88e2763e43a39392c2b32aa247d5b58"],["/tags/Django/index.html","49ab5d32d9f05f7030b0cbecb4675a1e"],["/tags/Echarts/index.html","4abc1027eed7fd7106f9a74dbb9914d5"],["/tags/Flink/index.html","b79953272733de6c9f626b5238f8b023"],["/tags/Flume/index.html","9bdc5a87a95b1fa49aea177cd3df890e"],["/tags/Frp/index.html","3d281014fa6fa260de6542b56ed409cd"],["/tags/Github/index.html","3669ff375521c6ab5c7787b33eaf6942"],["/tags/HBase/index.html","4709b75e6f66e2a4ca146ef074d2c3ad"],["/tags/HDFS/index.html","1bc07b764b963224d29296a781e4fe7d"],["/tags/Hadoop/index.html","b918d3b7c0acdd7e95221a96640fbc9f"],["/tags/Hadoop/page/2/index.html","813e45a0f5eeae0f6f8fe37bd049dafe"],["/tags/Hive/index.html","2600354d301ff691dae1293cd29f5c07"],["/tags/JavaAPI/index.html","0e4b951b143ec9ede69a953592162fb6"],["/tags/Jupyter/index.html","2cc057f54eb296bfb44e7255cb4f1a3b"],["/tags/Kafka/index.html","2bf088bf1278f8efb76fd76e782fb5c0"],["/tags/LaTeX/index.html","543117b71a7325685a75e4d0a89e5ce3"],["/tags/Linux/index.html","97243bdcf6c0e70ba3455002f6eb660d"],["/tags/Linux/page/2/index.html","372f90b56173f48fa04c64d8a5dfb976"],["/tags/MapReduce/index.html","c7fe5eba6b993f643085ae5c1dfeb4ad"],["/tags/MapReduce/page/2/index.html","9fe321401bf537bd4b5f1a6cbdc189df"],["/tags/Markdown/index.html","9ecc2ebfea84c81f27033d472e453c33"],["/tags/Math/index.html","cf4daf08dd6557e14762653a2603d11e"],["/tags/MongoDB/index.html","bc23753a9dbaa2324e04fdc80537d042"],["/tags/Neo4j/index.html","dcfed36077badc4298dc8fdc09e9013f"],["/tags/Nginx/index.html","cd5be176833778a8e1103bf5cee8f339"],["/tags/NoSQL/index.html","455e0f63b9adf19dbb87be2108398cfe"],["/tags/PDF/index.html","50b18affdad95ac73f600f962303f55c"],["/tags/PDF/page/2/index.html","a82b751277daf0aeae77490fe54aa631"],["/tags/PDF/page/3/index.html","0836ac5ac6a96149be6955349bf86fc2"],["/tags/PDF/page/4/index.html","0ca35e9e057fc7c2b03c59655cc0dc4d"],["/tags/PDF/page/5/index.html","e01a8fb780503fd95b2d9173631a5269"],["/tags/PDF/page/6/index.html","e0309db836c972f7f68d67b58029a896"],["/tags/PDF/page/7/index.html","35bccd15d76fa64d1c1035bdabca722d"],["/tags/Python/index.html","1fb994de422eeb55acd69a0eeac120b8"],["/tags/Python/page/2/index.html","917059b848900c5420c38cbc81bbb69a"],["/tags/Python/page/3/index.html","a51cf1604291b73d750c3ef3e7d13f2c"],["/tags/SSM/index.html","c2738c17a26f48ba3a7ac56f7ace226a"],["/tags/Sqoop/index.html","543c207f386085c8dd4df9581c0b71f7"],["/tags/Web/index.html","9a5e3c76cafbbaba1920299774a5e123"],["/tags/WebSocket/index.html","9e7eef5da75fb12c3192fdfd09db318e"],["/tags/Web安全/index.html","8ca5b4257525a9e449257acfeec0bc28"],["/tags/Yarn/index.html","3d9a6a5d46c506bec842ed433cba233b"],["/tags/Zookeeper/index.html","f9bbb426fbbee0915c69ed58f3db91b2"],["/tags/cloud/index.html","c9c2890de7a21f85d9a1a4329b9cde9c"],["/tags/gcc/index.html","b4c47f16b3e017cdef40cec2419ee253"],["/tags/glob表达式/index.html","fe11f4644becca9222a485673c741065"],["/tags/hexo/index.html","e8d300e520c5a6857f37776ce42da496"],["/tags/https/index.html","ba939cfc71001ca7c3df97a83d1b7aad"],["/tags/index.html","67b53cb2053d219b7503b4f8a369779c"],["/tags/kali/index.html","9c90a2a6db464460618629e29f14c732"],["/tags/maven/index.html","bcf3f0a176e86597c62d70c24d3ab303"],["/tags/mysql/index.html","55f9a3c8f38fc3b5db7c2e6b03ae7340"],["/tags/netcat/index.html","10e63a91f16167575d1bc34054a5f70a"],["/tags/network/index.html","dd379597e9720f065a02fbe1959ac85c"],["/tags/php/index.html","cf10881c1c54036214701c581f394b48"],["/tags/shell/index.html","f59efb9502f276ccb304c0c51e76be94"],["/tags/windows/index.html","2154efa451cc07b3114d0b9538045b35"],["/tags/xrdp/index.html","1205cacaab83f3525882059d0fba50cc"],["/tags/人工智能/index.html","6b7a341ce2119dbe649c13dc745b576f"],["/tags/内网穿透/index.html","4c3fd903981c547e8ab8ce89f2adf293"],["/tags/分类器/index.html","47c79a8fe8d2fc753f984dea3e116753"],["/tags/删除注释/index.html","392272c7f4369f1251594e5ec6a5e3c8"],["/tags/前驱图/index.html","2863323489d5503b52bfa77acbac2f22"],["/tags/加解密/index.html","571cc716e5d2d7f20abd92bb1561ec43"],["/tags/加解密/page/2/index.html","4b82eed6576704a5a89b50182249ac4b"],["/tags/历史/index.html","3741d1754d10443e6bb6b14e1bc4d2b3"],["/tags/反编译/index.html","56a06b5ebd70905b00b12d60762c83c2"],["/tags/图像/index.html","2164341a2bc100995d6600efd82f4127"],["/tags/大数据/index.html","0ddbee4bfa01b318d09338b06d941eae"],["/tags/大数据/page/2/index.html","46ef5fedba24d7c20e12aa098b2645b1"],["/tags/大数据/page/3/index.html","71790a377b56b4e3f29ff82ed5c9112c"],["/tags/大数据/page/4/index.html","0c5bda8f87884ccc660d5ddeb891d647"],["/tags/大数据/page/5/index.html","3d0c43854e88ee79e4f832dfe8158cc4"],["/tags/大数据/page/6/index.html","f70d07c7ca3115e19ee2cbf8521f5665"],["/tags/大数据/page/7/index.html","31215885867308caaa644b92373d936f"],["/tags/大数据处理技术/index.html","9d6057ffaf0abdc495025990986443e9"],["/tags/大数据处理技术/page/2/index.html","19943cb2430080537ef80e73f6aa94a7"],["/tags/大数据处理技术/page/3/index.html","ee97938205b460ba140d32874954df60"],["/tags/大数据处理技术/page/4/index.html","cffc11928c0f4c1ef02dd92a54e713b5"],["/tags/大数据处理技术/page/5/index.html","f25222d81254658123d1dd33a8893eaa"],["/tags/大数据处理技术/page/6/index.html","8a96a621a77bdcd03cb791d2d40d3428"],["/tags/大数据集群环境准备/index.html","d9936430ece207242e4e9def98e4a85b"],["/tags/密码学/index.html","3345a856e70a62e659babd5423339ce1"],["/tags/密码学/page/2/index.html","f30aae86c32ef26bddcdcf10b41ba967"],["/tags/按键时钟/index.html","ec6a699a5d2745c697c29389c721ab7b"],["/tags/操作系统/index.html","feebba2a575b03e962ba76c883108b20"],["/tags/数学建模/index.html","ff8649dd9a9d9aa35124b6cb567f98bd"],["/tags/数学模型/index.html","30f7b6076499e5e9200dbde710e5ca8a"],["/tags/数据可视化/index.html","c0ddeee8ccbf20274b55fd2b9c44862c"],["/tags/数据挖掘/index.html","a1502517d907a25beadee56db589ab67"],["/tags/机器学习/index.html","e6beca848c1c76e00866e8307563fdd4"],["/tags/机器视觉/index.html","b8895cac959885cf65eab0f6282eab03"],["/tags/模板/index.html","f699e4d66cdd58a70a2ea5b198627e94"],["/tags/死锁/index.html","7ddbd7765e6bffcfd0b6bf7fbd66aaf9"],["/tags/温湿度/index.html","71b4b6e1ae1970873149092aec6815e3"],["/tags/特征/index.html","2119d5a3fda71313aae0fb1ea0b3c1f8"],["/tags/特征向量/index.html","c1cbecc4138938522b6e0a1f98f4e96c"],["/tags/秒表/index.html","9f7c4428b40cbdc1c2597323d64e21a7"],["/tags/线性代数/index.html","b98a239a6602b59a124aedbc4b43af3c"],["/tags/脑科学/index.html","681726d6214748da52967a02e8d8e998"],["/tags/虚拟内存/index.html","6c36fbea9c14abf8199c81a25d67d904"],["/tags/视知觉/index.html","883ac657cc399241995eccd11b6dc74e"],["/tags/超声波/index.html","5213e9c2dacff13938f60b227c3cddb1"],["/tags/进程/index.html","085a80c23d8837d7c3045353e53896a9"],["/tags/进程同步/index.html","db333f88874c4aac1dd925730a7e8921"],["/tags/进程调度/index.html","1715739d2c94ecc07cde764b738143b1"],["/tags/通配符/index.html","8c85750fe784a92e490ceb10be62b068"]];
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
		headers["content-type"] = "text/html;charset=utf-8";
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
