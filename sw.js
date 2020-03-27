/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a96ba245908ba84f93d11be380d706e0"],["/about/index_en.html","47aebb23956f65ccde6ca32ecbf00011"],["/archives/2018/11/index.html","b0c30f1750cc90b7cfb6926f3fad2bc3"],["/archives/2018/12/index.html","1c4460379fd6a046e49ff352dfd0f893"],["/archives/2018/12/page/2/index.html","e919520ae998bad5593061596c1de757"],["/archives/2018/index.html","ec43704632fb55c0ebec7ef981a5cb01"],["/archives/2018/page/2/index.html","d77f39d9d3b51acb88f435681e4e032a"],["/archives/2019/09/index.html","0b447510c8ed6b8399318e02e4884e90"],["/archives/2019/09/page/10/index.html","b1953f4319f7b3fe1805887125c00e02"],["/archives/2019/09/page/2/index.html","7bc4562feb5ee090fd7d5cf2d30da92b"],["/archives/2019/09/page/3/index.html","8cfcb5c81fe48e455cbcd10a8c7731a4"],["/archives/2019/09/page/4/index.html","2072f773ff2836bedc122c0810cb1e90"],["/archives/2019/09/page/5/index.html","f02b34f4fd46ae0751ada3cec33edc04"],["/archives/2019/09/page/6/index.html","a9f0c5f12b13b07103ecd2ec97369887"],["/archives/2019/09/page/7/index.html","273e432c8a29789d5d66a53fde0da0e0"],["/archives/2019/09/page/8/index.html","7e03d496e31178d835431443c4b13314"],["/archives/2019/09/page/9/index.html","1944b8fd463c811fab37d388e93c4a63"],["/archives/2019/10/index.html","a751cf569b80711a0c10be6dc93cf684"],["/archives/2019/11/index.html","9199fd666c332aba3278cd3d4f17c98c"],["/archives/2019/12/index.html","6920f35f72bf895d146ce8e7f38f3d5d"],["/archives/2019/index.html","eed2e50dbda0b2b2836427c1d841dd27"],["/archives/2019/page/10/index.html","908c518e2799ac59ff0763e73a141598"],["/archives/2019/page/11/index.html","212ee1a951ad7832b6eb06b8aebfc2fc"],["/archives/2019/page/2/index.html","ab86bda27daf054f6d230ea62e5cbb12"],["/archives/2019/page/3/index.html","dec0d134b7c536a72f4d6f5282675933"],["/archives/2019/page/4/index.html","2019c78a6d4b1f6954f5001a719886d5"],["/archives/2019/page/5/index.html","8dba5c131af4f5d8c5b5b77f37bff9c9"],["/archives/2019/page/6/index.html","b1583cafb62ba0cdb7950da8de8f4ea9"],["/archives/2019/page/7/index.html","5072588a5e8ebeb788a098a40d68cf96"],["/archives/2019/page/8/index.html","17959ab25ab07ec1a4dd8d297a3026b3"],["/archives/2019/page/9/index.html","2433ff8a206d492256bddf8c43ef8450"],["/archives/2020/01/index.html","63d7957bbacc2c47fea3ee4d237fe22b"],["/archives/2020/02/index.html","2a9f4d62db3f2093616bb993c29d7100"],["/archives/2020/index.html","ef72929ff454cd266437b6527a215c6a"],["/archives/2020/page/2/index.html","823ba08e50f52332340906655c20621c"],["/archives/index.html","d10d75e357628678c77ba7c7ec22a901"],["/archives/page/10/index.html","d41082cd7d8323553366eeddd3ad401e"],["/archives/page/11/index.html","f9b043a7170236c04b74b5f53cf6e5c3"],["/archives/page/12/index.html","a496f87ae32a2fcb923d7910116180ff"],["/archives/page/13/index.html","faaaacda1b171f7e02bbbbc2519a9672"],["/archives/page/14/index.html","78a04dd19419a92adc2923db7e07a160"],["/archives/page/2/index.html","92cc3b436f0e4409e14892f19aa3d36f"],["/archives/page/3/index.html","596072be9f619f0af0aef93f3a61acfa"],["/archives/page/4/index.html","db2b21717ef7cfc8a6ba5410a509fbf9"],["/archives/page/5/index.html","b225ca94d0ec731dca292fd0b0f4283a"],["/archives/page/6/index.html","be54399fd219c5c42736189fc80e0086"],["/archives/page/7/index.html","b74a977d0f2589f6825a5d68c829bd95"],["/archives/page/8/index.html","88d5dbb9c4d29a2b6c28b3b299e9cef8"],["/archives/page/9/index.html","2817f995b6c0e0527f0c487319415239"],["/categories/51/index.html","53b02e0cec608ef4b461aca173d6a53e"],["/categories/Linux/CentOS7/Python/index.html","3804993f89a9d58d856da9bc70eea2db"],["/categories/Linux/CentOS7/index.html","79f49e988f5739d08e8a1693b0105b65"],["/categories/Linux/index.html","957253e0999e1f5900ef63a044ea3514"],["/categories/Linux/kali/index.html","41e6893b21f8f0c2657c2afb2a8686f6"],["/categories/Linux/page/2/index.html","a063188f476b2253b961a5ae08d81008"],["/categories/Linux/shell/index.html","9cf4edf574ed689f9f619bfcb30cad5c"],["/categories/Math/LaTeX/index.html","4ca1de54530d9a02a1c7925d4907ce36"],["/categories/Math/index.html","873d2d15618ee979a2d0a8f454ba4cd8"],["/categories/Math/数学建模/index.html","fc8bef7376a8efc0ffe150a967405254"],["/categories/Math/线性代数/index.html","9981304c1ddcda99ab9ebc0b6dd46032"],["/categories/Python/index.html","7fba741499db4a53637a787bbb58a556"],["/categories/Python/page/2/index.html","e6ec79c277a3ad6775f103506489b3a2"],["/categories/Python/反编译/index.html","9494d894837790fe9646383c088b2890"],["/categories/Python/密码学/index.html","a10cd788b6b3934d092dab2d6afe2d0c"],["/categories/Python/密码学/page/2/index.html","c868e29a61da16f23a094e4b6d7c54e6"],["/categories/Web/Django/index.html","b8d29989e016ee4ff8eefa1f8beb6f09"],["/categories/Web/Nginx/index.html","46a52037075828b35a4c3fda0db5ab63"],["/categories/Web/hexo/index.html","d15baa3dc8655436197791a9d1e73037"],["/categories/Web/index.html","d0483d4fc137911e4ad60754ce11d5f2"],["/categories/Web/page/2/index.html","af04ed6a514e80031888c8ceded226d2"],["/categories/Web/内网穿透/index.html","f5d9cd54100d53978337ee83dee26a0b"],["/categories/index.html","88040f88454dc65fc763ce24f340399e"],["/categories/windows/gcc/index.html","60848e4aa68aeaa809ded8532383330d"],["/categories/windows/index.html","f4082f14b84b357e25a8e4c46dd6da2b"],["/categories/windows/netcat/index.html","82e6d7de431bac92714e439ddd4d54f1"],["/categories/会议报告/index.html","e390347ebdb60ce7d1f12b1df7861746"],["/categories/大数据/Flink/index.html","e90a77bb5374345d7aeec9e2d541c27e"],["/categories/大数据/Hadoop/index.html","6011639a97885fd4e0e6c9f44b09c023"],["/categories/大数据/NoSQL/index.html","18c2c0b55e13cfe924f69f07eaa1b770"],["/categories/大数据/index.html","29758e8479cee6426ba0b355a4010059"],["/categories/大数据/page/2/index.html","44eea3e9f76b9a27804e79ec9758a772"],["/categories/大数据/page/3/index.html","3925a8bcab59fe587ac652b656356721"],["/categories/大数据/page/4/index.html","ea6d4f2c59c86d2372efaa464371f977"],["/categories/大数据/page/5/index.html","ce91f0b4f5a94e4671445e811a4331f8"],["/categories/大数据/page/6/index.html","ca94cb8feeda986fbe7311849f6b41eb"],["/categories/大数据/page/7/index.html","220ce6c4587a4c93789f447ecf5ac5cc"],["/categories/大数据/page/8/index.html","e8979af8097056e901c82eaf9fdc90dd"],["/categories/大数据/大数据处理技术/Azkaban/index.html","62f6957bcb66045f8e2e9caf366138d2"],["/categories/大数据/大数据处理技术/Echarts/index.html","830d03cf588296c7c1ba3bbbcbd5a532"],["/categories/大数据/大数据处理技术/Flume/index.html","0328f337e234040713536f3adbc22660"],["/categories/大数据/大数据处理技术/HDFS/index.html","ace5a4d99dc8d22fa5aa29b9ae487517"],["/categories/大数据/大数据处理技术/Hadoop/index.html","f43f996f667798b1a35ba6d78b9ce4a8"],["/categories/大数据/大数据处理技术/Hive/index.html","e25e2db2688b311c54937a32c434077b"],["/categories/大数据/大数据处理技术/Kafka/index.html","f84b52d771c08443fe9d25249acdc1aa"],["/categories/大数据/大数据处理技术/MapReduce/index.html","9804f393550397b903d277380c5f6cf3"],["/categories/大数据/大数据处理技术/MapReduce/page/2/index.html","0fcd6304a9f6b393f4b5b191d0eeea0c"],["/categories/大数据/大数据处理技术/Sqoop/index.html","10954e3f277bffe3af8e1391bd9de446"],["/categories/大数据/大数据处理技术/Yarn/index.html","e2983362aaf30b57f8b69cc3fb941261"],["/categories/大数据/大数据处理技术/Zookeeper/index.html","341f21208b4d75679f83fea632a8460f"],["/categories/大数据/大数据处理技术/index.html","f8577ffd2ff719292b129a84734322ea"],["/categories/大数据/大数据处理技术/page/2/index.html","e9008aced0269f3d31af838df60ca0f1"],["/categories/大数据/大数据处理技术/page/3/index.html","6738e80ee89d2752cf23f01878a5bd1a"],["/categories/大数据/大数据处理技术/page/4/index.html","637852ffa473f1a844e220d4ef57ccac"],["/categories/大数据/大数据处理技术/page/5/index.html","f78d5d8dd4564c3a5f5e5ea29047dab9"],["/categories/大数据/大数据处理技术/page/6/index.html","4fe28e8513f96df19b022a5c30b7e8ad"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","ea36fd65ffd3cbfc81ba27e884de4cf4"],["/categories/大数据/数据可视化/index.html","b1650583d0190d8153fd64c1f68b971c"],["/categories/大数据/数据挖掘/index.html","661ab669c816f5c2c2070dcdd277cabf"],["/categories/操作系统/index.html","940e9a1bfe57677aafede55302a946de"],["/categories/机器学习/index.html","d5abb5f26e762bfa0d88677c3bdcef60"],["/categories/机器学习/机器视觉/index.html","9e2001ecf573d743e64ad36d5dfea197"],["/categories/模板/index.html","58605c4a3226a2695516f9e6d0e21c85"],["/categories/模板/maven/index.html","3fdcb447c04911a03951c458a4688e4c"],["/categories/错误集锦/CentOS7/index.html","30257495b0a174d8bc28823bb3dddd58"],["/categories/错误集锦/index.html","abab4766e1b5559057b3ab3a16eb7d74"],["/guestbook/index.html","09a31b8b51702324708b54d785ec3ba4"],["/home/index.html","7eb08243748ecde4b4ed87a791d8388e"],["/index.html","59772cf35618e0da8788f183afc46927"],["/page/10/index.html","f17a1121a3d5c43dbe722a1635668223"],["/page/11/index.html","b20679c8e685450978bd7b003842755a"],["/page/12/index.html","2fb39d2fb670668e8b956674f18b3030"],["/page/13/index.html","808d15fa273f6692150e52d8529753a5"],["/page/14/index.html","71c6136bfe95c6f749ddf5fdbab17ef8"],["/page/2/index.html","25a514009249b52435c3df01fd4bfcfb"],["/page/3/index.html","a410d3564514efc28a25308476a58b96"],["/page/4/index.html","cea868970ee8d8ca3dfc13b20c03ca44"],["/page/5/index.html","be2842e597db1a2690768fe0d48b54f1"],["/page/6/index.html","948e913f2392ec7621a5815b9e1636d6"],["/page/7/index.html","4033a82f9667780f7db7a88dfba37f5c"],["/page/8/index.html","e6faf23a293c420c3daf4d9d022df32c"],["/page/9/index.html","da3af927d44722ff9a32051f08c686a1"],["/posts/1009d3f6.html","d962cfc6955fa58fd4aedb4a71ae5978"],["/posts/10cabcd3.html","3028bf65dad6b009180a10a13ab9f990"],["/posts/129a9db5.html","ee0a099ab5c5299f18b032a27db0f74c"],["/posts/14fa5bba.html","2edf3ec25cb30c36fc42d2163076a628"],["/posts/1601d925.html","40593e72a6289f4b1d63c7a09e16dc8d"],["/posts/1e1e5118.html","666923c74c70d7d60d18e3c9a90b18c5"],["/posts/1f519fd3.html","8fc72b50d3c8b73b90adbe998741866a"],["/posts/253269c2.html","73d2fa8fda652853579a04f3da93c4b9"],["/posts/2ffb45fa.html","6cd34a632822cb49dd71556dc9aa0dff"],["/posts/2ffcda9a.html","006be953e26ef38c57bf9871c1417293"],["/posts/3098d714.html","4e0c940058af9490da5abbb01dcc8307"],["/posts/30b27542.html","6a229523474ba0efe805b2130d7ec504"],["/posts/32c5d0d9.html","14ef70722533c20e4f3fcd85000da46d"],["/posts/32ffa341.html","ca586fa6b9c07ec362cbd8ea59b3c39b"],["/posts/357dc334.html","be194f9e590289e7aa4ddbe7759f57c5"],["/posts/38a07d35.html","369b176e16aabd636f330ec363eaaa37"],["/posts/3bfd1783.html","409f805ffe6cd5195a8aa8601622f0e0"],["/posts/3d7d3997.html","0c7b85105f5291bea44831a0d39ea548"],["/posts/429246c5.html","82d8fe8d9231986c030ac59393c580e1"],["/posts/42ecd398.html","08dbe2520346c2daae58c029be90d477"],["/posts/46b39789.html","5ea9448237264929cac9c2b61eba5799"],["/posts/483290b5.html","83cd0bc702c947f03082b7e1b8a6ae17"],["/posts/48a224d1.html","d718fb72bcb5e70048bb873cc0fa5838"],["/posts/48a2d97d.html","3e91d755e8ceedac05e420aee73836a8"],["/posts/4920f048.html","ccc90fdf70f5e20e347c2441bcba8219"],["/posts/4a71123b.html","ece61a34f624699107c1d89acf01482f"],["/posts/4a71133b.html","c1fff829e3f510f1623c0dca5facf7cd"],["/posts/4c2deb5e.html","ca3dee490cec0d36ebb6f5cd2137b8b2"],["/posts/4dd55455.html","01e0755ed816acbd758db8c479cfa509"],["/posts/4e6873c5.html","51b55029cfe7d381591db4b2013ed799"],["/posts/4edeccca.html","4ee50332e60625c0bc4dd3e8e07c814b"],["/posts/53ab8d74.html","2fc9d46a5bd37c398fcd807e0b1d0297"],["/posts/53d0a404.html","aeec4f6b1c9745ae4f3e221b1750d592"],["/posts/55b264de.html","7161569123a15f5313f1600d65e1b5f5"],["/posts/594433a.html","8c641cbf7d28c299d2e78c608eef0c02"],["/posts/5bb73de.html","29d432f0172e2232466390e034e8d9fc"],["/posts/5bfe6261.html","44cff7fe1fe36a88f33b1ef518c9358c"],["/posts/5cc46d49.html","1db4b306afb2be88ca747b0ee3a91ff1"],["/posts/5efb0a25.html","56cc746ca68ac3aec376b3154133a94d"],["/posts/6009a9d8.html","ee5b76dc7c591ef04fd7b2e0b1cf8d79"],["/posts/606a512e.html","bd18369fa6d9791776a77ccd09c61f0e"],["/posts/610da529.html","5b98dfc2460ff4694ff6673f0f2a4831"],["/posts/63637a24.html","f8b24dbeef4488a1127cd45dab2cb07f"],["/posts/695a6c4b.html","a2099d0c863a4521fdaad1e64ebf291d"],["/posts/6980c27e.html","d1299211b2789e4cb303436434ffd3d4"],["/posts/6acc7206.html","2caa75323b1550dd4cb96350bd06160d"],["/posts/6bf2f994.html","1dcd41f14baacf1560dcbbbef11e576d"],["/posts/6cfc95e.html","7f097caf7d00d5a0f8714640c649ebe0"],["/posts/6e430c9c.html","f4761c3d8c0623f9d11e1b9424af6267"],["/posts/714668f9.html","29eed440e78f1891906e894625b5f554"],["/posts/72b49ca2.html","1222d345fe2fa176ca72ecbf9955f5ce"],["/posts/72cd4c87.html","a85532b6cd7f5ce8ede17e934c02ff99"],["/posts/75ee5fa.html","c1cdf7c9ce7e34f2898af294436b8334"],["/posts/780b9de2.html","8bb089378aba12e26b92ae2cebe9fef0"],["/posts/7827182c.html","29bc459e2b2bf97a144fa202c5654ac5"],["/posts/787a8307.html","03b024215cab0f794319a44fe5f56ba2"],["/posts/7cb85200.html","0becb7c5359cb3b513a01d9e8f44c518"],["/posts/7d6b1f3c.html","b99039b9ca7e4c2226552088932b22fb"],["/posts/7def3950.html","5135b864795490a780e6de00e58eef52"],["/posts/801b51ef.html","6b5476bf09a272a4ce2a6b61d8390bd1"],["/posts/8485750c.html","38bafbbd98fc4e2aca5f1eb417d3103f"],["/posts/87e9dc75.html","9a870405fbbb1fbb2a56471b6fe79ca0"],["/posts/897831fa.html","b6b683677c0974c0439ae2b4347a53c1"],["/posts/8ce758a7.html","72b235971cd3a73dd4cbf5f4a08ac593"],["/posts/91223731.html","a622496a8671fb44da4c80b4df6e565a"],["/posts/96f894a7.html","9da45234e30d0ebe6a6b6b5fda0b5cc3"],["/posts/980d646e.html","243be73bd83d21fd4634842865a50042"],["/posts/98579906.html","5908ac0278649cc5beb100d94a648afc"],["/posts/9b624d43.html","463c32b299b860a791e4d481923a6243"],["/posts/9bc3b11e.html","2b345bb819bd3127144982ffb9eee529"],["/posts/9ef6ff16.html","9ad811107656abf32b0591bf4171221b"],["/posts/a105df5c.html","692b641cd959adcc9c896ef8a971f101"],["/posts/a2af0ea3.html","49b2f4c3f7a187131fcb2135051fb14a"],["/posts/a3ed1548.html","2d0f727161415d264dd3a10ddf2301fc"],["/posts/a4a39746.html","0f7e087fdc9b73dc42507e49e3732436"],["/posts/a5d678be.html","b1fb2d78595742c4423b24f1c8ae2508"],["/posts/a5eec80c.html","11424a439d537aee293e6bfb9a25e50e"],["/posts/a79b4f5b.html","178e8e9f85d5d9fa781c8fd356415a02"],["/posts/a81e94e9.html","bda068aaff044d0f48ac197c4e662702"],["/posts/aa02a436.html","f721bddc2c718a7f12374c2c8507170f"],["/posts/ad720447.html","87f96f050cc8ae8ea1cf1a0d7a8d0391"],["/posts/b0ef01f5.html","e5a954a1ea66f34a9c78767aeb8e1117"],["/posts/b190dcb.html","53b663c408758248a80c45ee87ee1b7e"],["/posts/b387b8d5.html","582626719e6a8d71c13f2e6e9549cfe6"],["/posts/b4a5318a.html","78052d92a1c2fdd0d0ce864a4a3cc0f9"],["/posts/b4fa1b4e.html","3e7af7a6e89fd5fbbb98738923ff5ad6"],["/posts/b59b6a41.html","7ef0aacc736526bab502c175a3626b7f"],["/posts/b6ffaac2.html","cf31ecc20443864cbe846c80754e9b40"],["/posts/b9b7baa7.html","aa71ee2c52b418bbe6fd0d84de6140b0"],["/posts/bb7c60d.html","a6d4331475b7836b72276dea04344e8f"],["/posts/bbe38b68.html","ed0026bc14d0f0b52423b5f9893d6b4c"],["/posts/be57c430.html","18a507aab2613cb55f197e87760461fa"],["/posts/bfb9db00.html","e19422976b0a6c1bf2fde95307c196e8"],["/posts/bfbc2e0b.html","01694faa2946655072701a7112a3923e"],["/posts/c16b9d82.html","b6f914a373c4b8ffb68528d7be60e7a5"],["/posts/c270974.html","bd77c57f0b2566d193e87180f62d0427"],["/posts/c2c98f74.html","f5ed36d5657bf0ef554c9d8de73f115d"],["/posts/c5520104.html","bba8d0c97e071ae9b2e23c5e21f117c9"],["/posts/c81f7fcf.html","baef7dc11bf7970dd20f23078c6d4b3b"],["/posts/c89a329f.html","f761b0b40ef5894b9700acc30b6adc2f"],["/posts/c8fc3430.html","e6ba49dc608d639ef19716f152551aa9"],["/posts/c91f449a.html","0d0743df295a5f6f468f21ed101e943a"],["/posts/ca7a6c92.html","0b971e1a5810f4c4574a8482a7bae375"],["/posts/cc03340e.html","50c827720ca739a3726c485cdc201259"],["/posts/cdec63d.html","56be9b9e3b91a5e8654f0c850b782481"],["/posts/d07ffe1c.html","46a7f41322427af546285d1a8a5874d1"],["/posts/d178b062.html","e472ecaf819bf52736c6e64a7a8111b3"],["/posts/d53724bc.html","94ebb0870c7420114cd42a9681f3562f"],["/posts/d70eaced.html","a160c1530152dc49eb17b6ddbab91414"],["/posts/d7edfddd.html","76c8b10e4144caaee2bb3ce25d6cfe21"],["/posts/d8795dab.html","53396abae28d4060f2ddea7463135247"],["/posts/e00c1bc.html","424fdf4bd19a8dbf1fdced1895a100b4"],["/posts/e3dcc811.html","5628724717c883fb359e6ab3a13dbf05"],["/posts/e6f6b883.html","45597e8e4b1fe4a74eeec44cd8161db6"],["/posts/e821aeca.html","331eb40ec7db61d15e6bc1b271c0fc10"],["/posts/e981c79e.html","3047e479bc2fc53a20a2a632abc552c7"],["/posts/ea7b2ec0.html","fd16e225c23af67b636a76f9b4fcc7b1"],["/posts/eb168c8b.html","d4965b4fe4cb4fa674acdac40f8af437"],["/posts/ec477027.html","d6b14022f9023126bcef851f7328c6cb"],["/posts/eeb47c66.html","fda2931599cf6999d0736112827a943f"],["/posts/f0765214.html","560536ada92e45c3e2a9ea8aee6b9c35"],["/posts/f0940727.html","400485d2e0c6784898e566f554bb1d4e"],["/posts/f1ab62f1.html","60fd3df3dd8fcc93be63362281136973"],["/posts/f3b50546.html","7edad6b3201f8657d70089872ee6c186"],["/posts/f4524359.html","c5c155e0e3ee444f615270a2ce7a7f4a"],["/posts/f4e10e30.html","f2f46f60b4699fe70ec1e0ca5496e8d7"],["/posts/f70539ce.html","fe5dbc2e6a6a1f1b54144cef58a4dadc"],["/posts/f77eee2d.html","30d15bfa20362a6d8738bf4ba15518ea"],["/posts/f8d2d5ec.html","1adc09a3b1509e5f13c1669ede364224"],["/posts/f9a25cd7.html","38771fcff4365dd09062f3e50de9078d"],["/posts/fb97a8a5.html","e9c84b1e2e4954b3c8039a6119f32e20"],["/posts/fc610c2d.html","27c66a887de0d6073f1dd13652bc8f0d"],["/posts/fec1c989.html","a574d65c6ac550b2f16ef1a8452f95d7"],["/posts/fecd7f2.html","789ede225201bb8d8300aeb69583e636"],["/tags/51/index.html","85f364e91d673314f9ab94a6644f364a"],["/tags/AES/index.html","87744646fe6f6ec34b8abd7a06f21870"],["/tags/Anaconda/index.html","6ab28040276d5b191eca4ab736dd3a8c"],["/tags/Azkaban/index.html","460741d94cbca93d1eb36b5ebcd36def"],["/tags/Cassandra/index.html","7f1ff6233527a3bd2db588185f3fc659"],["/tags/CentOS7/index.html","df5057e8aa42988e3965bc7d576309bf"],["/tags/Django/index.html","b5b36e9115469a4675b49640586d146d"],["/tags/Echarts/index.html","5f139a35c72c019fc8f3f7ad9f3972e5"],["/tags/Flink/index.html","e63968de3477ae85b2c06a8258119cd1"],["/tags/Flume/index.html","edd05346c633a8b9961b00f0ec6a9772"],["/tags/Frp/index.html","5ea81a35f8325f4751464ca2e0da226c"],["/tags/Github/index.html","27c9e5951f7c501f0f0c8c5be080fff2"],["/tags/HBase/index.html","64be50b092d7f0cdcd9d300640049d19"],["/tags/HDFS/index.html","937e46799b197ce8a8149b0447c63821"],["/tags/Hadoop/index.html","fdb61ef90993f205fcd79ef6aa57f849"],["/tags/Hadoop/page/2/index.html","dd9782bf324d6b1678f4c16e878a79d7"],["/tags/Hive/index.html","f9b5aa131ba3db973466793b4a099a5f"],["/tags/JavaAPI/index.html","a1377798292fa296e7bf592d413164f8"],["/tags/Jupyter/index.html","9ed1ecc7ae04af74da2e26e20c046d58"],["/tags/Kafka/index.html","ed45a83af2d799ab115015c1fbe78daa"],["/tags/LaTeX/index.html","647c3779db490d4dfb9dadd7bbf1306d"],["/tags/Linux/index.html","b97b9a667e99922e730c18291e6cfa0a"],["/tags/Linux/page/2/index.html","0f1cf41729a154cd51cab0c976e2573c"],["/tags/MapReduce/index.html","af0df4639d5c6450b988b5bd2d203658"],["/tags/MapReduce/page/2/index.html","bd8e6519edc6f0c983662064746f97be"],["/tags/Markdown/index.html","0b07d7f2735b51f39f1cbb39ef5cfdb3"],["/tags/Math/index.html","f2d3bfca13378f634fa5211a3596cd96"],["/tags/MongoDB/index.html","d7519c5a23ce0cf9d87843ce52a3a9c8"],["/tags/Neo4j/index.html","cc0f6778d9f60948dbdbb2867bc3cb59"],["/tags/Nginx/index.html","0874985a19812406aae4496d3dd52a80"],["/tags/NoSQL/index.html","05b0db9073b101ad7a8b2f49daa1bb97"],["/tags/PDF/index.html","22b1c7fbe3faa849e3c0ed9795086c3b"],["/tags/PDF/page/2/index.html","0557e613cb1a4dbe59d4249fe39733a4"],["/tags/PDF/page/3/index.html","30fb710ab298b11690ec328bce728b1d"],["/tags/PDF/page/4/index.html","ee8f66a4fbd393d116fde37b67c153ab"],["/tags/PDF/page/5/index.html","24d7ab59fd4e0c1dfc6036ac962a82e1"],["/tags/PDF/page/6/index.html","09ce0e538ce002032c0d67e9fadac096"],["/tags/PDF/page/7/index.html","5b0748819fa0e4a3b4c5c8967ae49e58"],["/tags/Python/index.html","56f763546c9bc3cdc7a3ce36586e596c"],["/tags/Python/page/2/index.html","18c03229119202303323cd366be4ad78"],["/tags/Python/page/3/index.html","8efc146f8b55f0e64a96f446ea136477"],["/tags/SSM/index.html","16125c2d5fe6351a70947ccd81333a3b"],["/tags/Sqoop/index.html","4ca7716625932ecc04b126b61799edf3"],["/tags/Web/index.html","2585240f6aab8af8e04c2ff4e4c2bc93"],["/tags/WebSocket/index.html","8736ad839fa86f499a0ca401c1304492"],["/tags/Web安全/index.html","c631aa6c16b6d61c469af48bdf00a5a7"],["/tags/Yarn/index.html","99d48b4a5e837406a88811c95b7572ab"],["/tags/Zookeeper/index.html","08fa3c24cacf262de0e8772fbf6cf54f"],["/tags/cloud/index.html","292143f3a1cdd0d375fa4009dc6bd5f8"],["/tags/gcc/index.html","66522644f05206465ff34fab9c80bbc5"],["/tags/glob表达式/index.html","2d426cb06c66410159f218ee0bdcb996"],["/tags/hexo/index.html","cd6407e36c736121aa7949ca1ffe0bf7"],["/tags/https/index.html","ab33fecf0787d935765612d8bba65b89"],["/tags/index.html","c3da58e266b9501ebca132125730edac"],["/tags/kali/index.html","5edbc24c3ac53c1eacb1a85c41032f42"],["/tags/maven/index.html","ad9c1e6d395c43106780a48f020831f5"],["/tags/mysql/index.html","9836add94a6f5285e759c584a3294856"],["/tags/netcat/index.html","7b2cea3e195cbf7f3fbb4c4b2436798c"],["/tags/network/index.html","8ecf2f34f3d8e9623219adf4885e3780"],["/tags/php/index.html","03f47824cc4cb1c018858d4aa04e0216"],["/tags/shell/index.html","2c890624f3cd224f4129c9285166ebbc"],["/tags/windows/index.html","b014980d7b3d64c55a3c9d88f505c119"],["/tags/xrdp/index.html","658efcdae47f4ffec804c6dc34a5b8fb"],["/tags/人工智能/index.html","a57b4cf4eba0df24b9c5e0f7296a1914"],["/tags/内网穿透/index.html","4d4e121aa6ee8b0c13a1b5e0995cf932"],["/tags/分类器/index.html","9ba2ba74709d2981cf455a9fef88070a"],["/tags/删除注释/index.html","908676e3a85defa71f23b0854f94f672"],["/tags/前驱图/index.html","634536b8a9fbdf3eed351ea5ac897489"],["/tags/加解密/index.html","4a53ba1d1af6418181cb54157ba01685"],["/tags/加解密/page/2/index.html","eb535569b8736b3abdd2b00df7632857"],["/tags/历史/index.html","77bd0a8447dde76bcf7905c12cf2ef24"],["/tags/反编译/index.html","940b12223f81fbfe61e5fbccf9e34fda"],["/tags/图像/index.html","c5b72256eba84a7b7312834855740596"],["/tags/大数据/index.html","44ad928a378c0ea473632eed7c5e08de"],["/tags/大数据/page/2/index.html","13bdbe085a894f9d11f317a59ffa168c"],["/tags/大数据/page/3/index.html","db3d86c26c597c1103becc24cdefd7d6"],["/tags/大数据/page/4/index.html","37791bf676d38d9983570e9ddf0e06b9"],["/tags/大数据/page/5/index.html","ed916af643016e30c6643300445802e2"],["/tags/大数据/page/6/index.html","6be4530ef46e0167fbfa851576b731b2"],["/tags/大数据/page/7/index.html","937bdbb78bfa0abfbfbd92da53290dc1"],["/tags/大数据处理技术/index.html","faa8d7194af9b72c0b006ccdf73f4e3e"],["/tags/大数据处理技术/page/2/index.html","7ff1016f30c9b6e323f8f75592b9a0b2"],["/tags/大数据处理技术/page/3/index.html","672e18024df8bbcc3f33df0965a2bb72"],["/tags/大数据处理技术/page/4/index.html","c250109dc476b613e14c1b3be1e7c609"],["/tags/大数据处理技术/page/5/index.html","2b88a8687330e30c96fe9a15f3edc801"],["/tags/大数据处理技术/page/6/index.html","ed2d372c868cd463c5fdec572d7fb323"],["/tags/大数据集群环境准备/index.html","c7c0700c2000c4d257962071a86a1ef7"],["/tags/密码学/index.html","930ff3ad43fb64ac2e5dc6e6704424a4"],["/tags/密码学/page/2/index.html","2193afc5aaa046a428145219a95eea98"],["/tags/按键时钟/index.html","ba016162797d879c46e7dff736c412cb"],["/tags/操作系统/index.html","5e5cd672d643c33779d553ece80351ac"],["/tags/数学建模/index.html","df77648cfb9103151b361cf1a91af296"],["/tags/数学模型/index.html","dbea7fb3c150bd80652f581daca476b8"],["/tags/数据可视化/index.html","4338215f1c7646232042e3c004786121"],["/tags/数据挖掘/index.html","1ab7e0db2151852c1fec8977f4935a30"],["/tags/机器学习/index.html","c4f16a5e26a47fb42466109740210c46"],["/tags/机器视觉/index.html","2096366c6fea339df5581cce79c3d9a7"],["/tags/模板/index.html","556957cdb6953ade1957832f6a944458"],["/tags/死锁/index.html","3d30acb145fabbf01c3f31d89f522314"],["/tags/温湿度/index.html","ae5b030e0c17b2b6b0640a0eb3289fce"],["/tags/特征/index.html","eabb11501c6a33383dfc39da1f46d7a7"],["/tags/特征向量/index.html","bc49bbaabbaf03e89c7b3876e795952e"],["/tags/秒表/index.html","708dae04667ceecf99c5f3b93c2e9449"],["/tags/线性代数/index.html","be97fef3363b7ffa39559250e060c843"],["/tags/脑科学/index.html","42cacda3ca7515b3c398276235bab368"],["/tags/虚拟内存/index.html","88ff5acf5476f6b3133f46854ab54c59"],["/tags/视知觉/index.html","b070ae7ffa91b0d70831038de59b9b8a"],["/tags/超声波/index.html","a9fe8a2a46cbb6c75c30b5922f5282b5"],["/tags/进程/index.html","cc86323045e775cad291c1d97fb108b4"],["/tags/进程同步/index.html","51ac2892c2cd1abda28eb0a6aaa3e60c"],["/tags/进程调度/index.html","e6b83858a0af2c5b2fd5a0bf0cbdd6e0"],["/tags/通配符/index.html","ab5fa2cbe23e912dfe531668d419a961"]];
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
