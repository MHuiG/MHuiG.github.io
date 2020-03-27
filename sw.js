/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3cdd432c3c01f891cf9f5226ae3bd82a"],["/about/index_en.html","80ec1a4b0711d8983f941c6d097d5b4f"],["/archives/2018/11/index.html","2ec5bcee73fd111594eaeaf342e83582"],["/archives/2018/12/index.html","975c75651af3b49c3f8212f488f74087"],["/archives/2018/12/page/2/index.html","88f33bbe2deffac63767911e6e1d02a7"],["/archives/2018/index.html","f787e6edd9207c203f4d66b2db0f6282"],["/archives/2018/page/2/index.html","7cd8e6184f6e18c3c31479b4ab71200a"],["/archives/2019/09/index.html","e2cf40fed9c639d52b41a0810befa4dd"],["/archives/2019/09/page/10/index.html","07381c005bf4fecf03f9a04790bb2ccd"],["/archives/2019/09/page/2/index.html","5c81dcbaf0cc1b31ee9d70ffd2e8c933"],["/archives/2019/09/page/3/index.html","ffb65eec73051e405236256dfcb5b633"],["/archives/2019/09/page/4/index.html","148130ebc4816d646990cfa3d0842ded"],["/archives/2019/09/page/5/index.html","9aef5b04fc2ab649eb58cc78f961a67d"],["/archives/2019/09/page/6/index.html","0403b55631efa0e4eb47b3631290e5a1"],["/archives/2019/09/page/7/index.html","552388cee4a929664875b927cfdbdd01"],["/archives/2019/09/page/8/index.html","e97ab11d0ec822ba294dce7cbdaf18e4"],["/archives/2019/09/page/9/index.html","8ba5e8d167d455c8259e67757ec5b588"],["/archives/2019/10/index.html","1637f02d7084de9032d61c1848ca3012"],["/archives/2019/11/index.html","e74ea29bb52dc96e89063c6ccef9bf13"],["/archives/2019/12/index.html","9f0ebc025b3dcbb0f8410c29f92b784b"],["/archives/2019/index.html","e2885805deafec80fe23094ae88e6fdc"],["/archives/2019/page/10/index.html","d4cd390e6e251d81214747288fb09ae3"],["/archives/2019/page/11/index.html","e453fa6170c4155a71e6539a2da00a37"],["/archives/2019/page/2/index.html","d64ffe3cfb7d11bd45f9ee0b8ae45e9f"],["/archives/2019/page/3/index.html","2db6b5fca6856f046a094bd09db66f4d"],["/archives/2019/page/4/index.html","af9b72cbeb49ebc9242a446b2b5eab4f"],["/archives/2019/page/5/index.html","9a2ca1feef0816573af6eb55d4dd41e6"],["/archives/2019/page/6/index.html","c82605a8735a7a26b37bfc1ebf43b1fb"],["/archives/2019/page/7/index.html","bffc3092faf27b47965bf2dbff9e99da"],["/archives/2019/page/8/index.html","347c5c7adb1da665f6a3558c6eaeb6f3"],["/archives/2019/page/9/index.html","cd287744caad762a935dd33b455c83fe"],["/archives/2020/01/index.html","6d203fa80851d3659a57c58319dcf257"],["/archives/2020/02/index.html","8171f34210a70a2b015334ca586ce32b"],["/archives/2020/index.html","09c980a399b6bfb4c9d3f577a73aca21"],["/archives/2020/page/2/index.html","ff925a39440b5dc1716d8b698ab8a6f2"],["/archives/index.html","a62a131bed4bcdae7384f0f28fd9ec56"],["/archives/page/10/index.html","4949d34830c79e4645634ee1c304da51"],["/archives/page/11/index.html","672bebad7ce85046077c1c5b75c8404a"],["/archives/page/12/index.html","a78997adf209079b73baf629aa3f27c5"],["/archives/page/13/index.html","0e61b0cab61f69596f33df7407e3653f"],["/archives/page/14/index.html","112047dec968a1716a6c11772145c4bd"],["/archives/page/2/index.html","e552024fff9f490db4fd62479873964a"],["/archives/page/3/index.html","fc7fad203e59019c677d7cfbe6e34d81"],["/archives/page/4/index.html","be9d59f3ee2d0e9d5baf2e3edb95839c"],["/archives/page/5/index.html","331c8dc88b33e8017faf9a5cd49eb20f"],["/archives/page/6/index.html","5d0226e19ca8c0866aaa230b5c69f9b0"],["/archives/page/7/index.html","3283cf991b571993a237b32f6e0eafd6"],["/archives/page/8/index.html","7e8a5009ef710ad48200d0a44eb85416"],["/archives/page/9/index.html","ad261a994bd897647467bb6f26fb3f0e"],["/categories/51/index.html","fc0e6fe8fecb2abeafe16bc6371589d0"],["/categories/Linux/CentOS7/Python/index.html","16b37737c6448e1d50cf1c98c250cd7c"],["/categories/Linux/CentOS7/index.html","a23a5d2082fa0ff97fc47cbf917c6109"],["/categories/Linux/index.html","fb6d36d2624f84da1651deaf51fdce2a"],["/categories/Linux/kali/index.html","eed222b926bbcc28682b8b0417d217bd"],["/categories/Linux/page/2/index.html","577e94764dd29404bad7047f7a65a4e3"],["/categories/Linux/shell/index.html","13c349c83e812067c79542a3de408050"],["/categories/Math/LaTeX/index.html","5894dd90148ab4ff3d0c63d6794bb795"],["/categories/Math/index.html","67c2acba672a2f79a74035a7325e3f64"],["/categories/Math/数学建模/index.html","ea34231d2a260d6e0641175463ffa02c"],["/categories/Math/线性代数/index.html","1aa0da013fa1cf31d5c00adf4b6eaebe"],["/categories/Python/index.html","38502be69f71d60eb735813e608acf1e"],["/categories/Python/page/2/index.html","7067e80c17502512a0f550ec55b9e741"],["/categories/Python/反编译/index.html","7d8408b010f6ea1bcaedf29b41bfadfc"],["/categories/Python/密码学/index.html","4d2683afeb11045dea6a52a77c74e9b3"],["/categories/Python/密码学/page/2/index.html","dbad8ce7a15c10f3d240b89225743c53"],["/categories/Web/Django/index.html","c055ffb4e3bf8f926504462820321de7"],["/categories/Web/Nginx/index.html","ae8e28c5285eb3b8e73cbd98fd9ba5f4"],["/categories/Web/hexo/index.html","b177ee446e17efb29e587c20caa7cf3a"],["/categories/Web/index.html","ddb0245c61654f3b9120d559d4fe273e"],["/categories/Web/page/2/index.html","cebc78a853c57e90e451eafb335c2789"],["/categories/Web/内网穿透/index.html","b113cd0817f8ee65cd77f77b8083d837"],["/categories/index.html","3f290137c26fabb0a75c94d6f81261ed"],["/categories/windows/gcc/index.html","8c5348a548d6cda4b6a88327eb7717c7"],["/categories/windows/index.html","a59cbde1d38bd01006c277606068c9f2"],["/categories/windows/netcat/index.html","38be9ac3ddc739f47fb0c09fc82e32b0"],["/categories/会议报告/index.html","9b9b41ada2cb59e195632b888affc1a8"],["/categories/大数据/Flink/index.html","0842bff21a3218ede9ba313325d89122"],["/categories/大数据/Hadoop/index.html","4d0ec011d62bcffc320a02673fc76a2c"],["/categories/大数据/NoSQL/index.html","793d9e503a10d31daae6bd12842771f8"],["/categories/大数据/index.html","8d977a58f7430c5448350d163aec7bc8"],["/categories/大数据/page/2/index.html","e215cfb42b4565d6433251bbeb1dd0f5"],["/categories/大数据/page/3/index.html","5b47386bd50d0b876f6bf420811633e9"],["/categories/大数据/page/4/index.html","f0a7c61cfd1910d08a19f800ae4882cd"],["/categories/大数据/page/5/index.html","babb66f4eceff840a8c9c40fa242b4c1"],["/categories/大数据/page/6/index.html","6ef292f72253fe771e195a3ad5a89abc"],["/categories/大数据/page/7/index.html","ffa856bd2dc5c72c5e5bac68a607f824"],["/categories/大数据/page/8/index.html","bc36a9f8387f1d470fea8459db279fa0"],["/categories/大数据/大数据处理技术/Azkaban/index.html","fbf860c04966648ff2626bcae21a3089"],["/categories/大数据/大数据处理技术/Echarts/index.html","306694ff27d064fdd8de4b1d02adb988"],["/categories/大数据/大数据处理技术/Flume/index.html","d3305cabbba6965e0d13aa8653ed09d7"],["/categories/大数据/大数据处理技术/HDFS/index.html","7d458be5249c58ead29e8ad4bff7284a"],["/categories/大数据/大数据处理技术/Hadoop/index.html","e08a948f8479a71eab479fe4a08053c3"],["/categories/大数据/大数据处理技术/Hive/index.html","514c4ea433634ce0a4b648c7578bb22c"],["/categories/大数据/大数据处理技术/Kafka/index.html","31b015357afc7d65051584f997bb65c5"],["/categories/大数据/大数据处理技术/MapReduce/index.html","387e1f705dd507ba4f79aeaa48e4e021"],["/categories/大数据/大数据处理技术/MapReduce/page/2/index.html","4a019a94c9c953a51cbc0a161c4c9186"],["/categories/大数据/大数据处理技术/Sqoop/index.html","751dc16958dde3432f136c79d3bf5669"],["/categories/大数据/大数据处理技术/Yarn/index.html","35dd9d594f00f91ab459ed05f003f5b4"],["/categories/大数据/大数据处理技术/Zookeeper/index.html","cb2c4e17c404b98caa9bfeb4ea88a90d"],["/categories/大数据/大数据处理技术/index.html","ae0176257eb05adf492b78ed694ebccc"],["/categories/大数据/大数据处理技术/page/2/index.html","dc5e665432de2e4980ef82b7bcbc48e7"],["/categories/大数据/大数据处理技术/page/3/index.html","a288a133e0d54b0c083f3372750e3114"],["/categories/大数据/大数据处理技术/page/4/index.html","ca1bd8584fa78522e3277c0455bea6b3"],["/categories/大数据/大数据处理技术/page/5/index.html","5ae70a1a109a7bbc53e092a47096901a"],["/categories/大数据/大数据处理技术/page/6/index.html","94ea375b2fdd342d2981af3c7c361ded"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","f6a67787fb12dfa3257d8a5231bf72cb"],["/categories/大数据/数据可视化/index.html","a50cdf5bea7dedebe774890270e42f7f"],["/categories/大数据/数据挖掘/index.html","2e129bb1d513c9edc9643b24e40ce5a5"],["/categories/操作系统/index.html","a8b16cbf47f7a55def1598c0a46c8128"],["/categories/机器学习/index.html","b42f9e8c5ffdc21a1c5e5e68b1ad2e71"],["/categories/机器学习/机器视觉/index.html","1b114bbf8dc526974a17323ba522459d"],["/categories/模板/index.html","f3ff5c8d13c39f340cd8cd81c2868fed"],["/categories/模板/maven/index.html","466634f9de16b7a92c5c1c215e7d4113"],["/categories/错误集锦/CentOS7/index.html","00749e5396a4cd8249c4459292d302d9"],["/categories/错误集锦/index.html","ae831c6aa4a7db8805bb412e9bec7f8a"],["/guestbook/index.html","6062ec707cdb82175e7a15a0cd058feb"],["/home/index.html","7eb08243748ecde4b4ed87a791d8388e"],["/index.html","50d74975bfad45ef777cb14b953b974e"],["/page/10/index.html","6779b2026b0741b1b342d7224c317825"],["/page/11/index.html","02e78c9a46d4825ea7c056391e68714f"],["/page/12/index.html","8942d81c3c12d9b46ac3a45a23203594"],["/page/13/index.html","70c4ecc45cfcb36b1418e70f4530e1f7"],["/page/14/index.html","81f306ff6a0974f4851f7e12f6862944"],["/page/2/index.html","61c18b10b054347c5513b296103be3bf"],["/page/3/index.html","c8da5ef05fea3176097e247b74b381e6"],["/page/4/index.html","030eadba1ad500cab1fe17beb78e51aa"],["/page/5/index.html","66aea9c78a656fe4d8aa2a5a490f8471"],["/page/6/index.html","050d46501cc4aef0b6f8d7d41f170c5c"],["/page/7/index.html","82e5c68de0e4e187657991403be148c2"],["/page/8/index.html","fbabfc5d51056858c8ef208212e9b054"],["/page/9/index.html","c82caf3115f9a7f76340c131db6c71c8"],["/posts/1009d3f6.html","4034b2fdebe9cb2cc8c51bb117123dd1"],["/posts/10cabcd3.html","5bf026a582c3b8f3a09cffbd636ee7bf"],["/posts/129a9db5.html","2614da3bd441784822c3ed953a8049ef"],["/posts/14fa5bba.html","cd136864e9bfd7aaaf252d4fb1c0fa48"],["/posts/1601d925.html","fe67ed7ccf956145a05defc13f10b4f0"],["/posts/1e1e5118.html","c0fa1cf0195d7760fe4bbb74555e75d2"],["/posts/1f519fd3.html","2018e0ffcb8a4eef1077ee077203475e"],["/posts/253269c2.html","a39a20155009f1194337d0e9b6fb8b75"],["/posts/2ffb45fa.html","9b1d2e65de2f5bbdfe18277a883b26a7"],["/posts/2ffcda9a.html","ed12e23b2139e229cac76b81293bc5ee"],["/posts/3098d714.html","4d015dc6d5e74893816db715d8fa634d"],["/posts/30b27542.html","206e931ea53b6e69712ff572fa17ed1a"],["/posts/32c5d0d9.html","0f93235385a79d40514bb19d4105d3c5"],["/posts/32ffa341.html","f39856c92b71c2e0fe0dee58c164f6fd"],["/posts/357dc334.html","d087221321a122b6119fbe16f3bfe1ac"],["/posts/38a07d35.html","d580a0f7f4cfb8d8306c744aca142aeb"],["/posts/3bfd1783.html","eb92a5d55ae9c290ea3642c155a35f2d"],["/posts/3d7d3997.html","11c4dc3a74feb1dcb8f6f8a7ef31904f"],["/posts/429246c5.html","17389a4e4c062d59225e10dc2da56768"],["/posts/42ecd398.html","1349b8fb0da0a0b6fa1a4004954956db"],["/posts/46b39789.html","ee1bdc58cefdc9a21b9c432ca16bc20e"],["/posts/483290b5.html","1df5afca257b4f53d04a9ab7e5bff028"],["/posts/48a224d1.html","edd810ffdcdf183e812c0d556bdcae41"],["/posts/48a2d97d.html","e3716164fedeff48a26747496eb0572a"],["/posts/4920f048.html","9cfeb3be08040d9790b5a623c6baf976"],["/posts/4a71123b.html","c298ddc80b2abc58599d95df33e9fe85"],["/posts/4a71133b.html","b1803a2b843c91cc5adff654264b9265"],["/posts/4c2deb5e.html","e34d19517e28e6b9556a9136cf110ed6"],["/posts/4dd55455.html","41e6369198345215826ed9b932d807c7"],["/posts/4e6873c5.html","909d58103e7b18957f5643a04a7c42a5"],["/posts/4edeccca.html","68957880a8b42d3e10df946e4177d860"],["/posts/53ab8d74.html","5578fa9fc29fca8b330c58ec5c002fa4"],["/posts/53d0a404.html","dce5ee02af030ce17c9106c4c10271d2"],["/posts/55b264de.html","fc8a3cbe7ba9412b6fa45fa31ef89399"],["/posts/594433a.html","a5ced56b40069719e521f14a0b793970"],["/posts/5bb73de.html","57d76718e4842aeb9550a8a9c26ca402"],["/posts/5bfe6261.html","6f2e83043f4075ae6c5d8d0b4e283c92"],["/posts/5cc46d49.html","329173d5ea7420f95d5e1049408cb714"],["/posts/5efb0a25.html","d39634780ae5df9a57aa7c8476a239e3"],["/posts/6009a9d8.html","176fc0ba6a0c22c8c6965d848b4560dd"],["/posts/606a512e.html","9adfaf0399b9fa05fb6f616159957068"],["/posts/610da529.html","497d3f04876b53dae6e97440e601a2f8"],["/posts/63637a24.html","6a9ee1d667d55249bace77230c514059"],["/posts/695a6c4b.html","9cace04efd36a7925a17a6edc0539a2b"],["/posts/6980c27e.html","a83781d53090d6502a14629c22e2725a"],["/posts/6acc7206.html","e7595f5994adc9a9de264e57cac442df"],["/posts/6bf2f994.html","d603221ff4dfd4c690888c9b8636807a"],["/posts/6cfc95e.html","b2352626baa5ec986415fcf2a0ca6de3"],["/posts/6e430c9c.html","c13ed0bbdfa0195023019d1da9dde5a1"],["/posts/714668f9.html","14c2f464504c1156305409e6444f6d82"],["/posts/72b49ca2.html","b138c58d87a56a4998255072b490ccf0"],["/posts/72cd4c87.html","a89b5aa112a0a6f77203316402da2122"],["/posts/75ee5fa.html","f51e74276106937f31c31b88c7271298"],["/posts/780b9de2.html","bb1f50831ba2c2f07a283efa2e67dd77"],["/posts/7827182c.html","4747f56b7337180d1ad5e922f7c6e72c"],["/posts/787a8307.html","faf899c8ce96176c5e30b34fc5a986b0"],["/posts/7cb85200.html","658a0cbe830d14f7b986d51498fd6393"],["/posts/7d6b1f3c.html","f881780a89722022718a04c831da954a"],["/posts/7def3950.html","b01eec7bfd62f951bc77559558590b52"],["/posts/801b51ef.html","27671c87bf44899ca8f14c695a9559b1"],["/posts/8485750c.html","a2e2ad609188567f2fab0c2626d3d462"],["/posts/87e9dc75.html","b6ba2d8da3f013edb8534ae99c3b50e0"],["/posts/897831fa.html","812ea6cdb7c4f695ee09f92c3598a157"],["/posts/8ce758a7.html","b86c8cbaf6cba055f451754fbd97fbf0"],["/posts/91223731.html","a0c6053c92b9595be170ae91a72a77ae"],["/posts/96f894a7.html","3b344eab44e3297d657fa20c0f3aec8c"],["/posts/980d646e.html","b9d8ecc1db2d30fe8625f4d8fd28e541"],["/posts/98579906.html","d4f69b540c868c977adf6cd9ab5ff848"],["/posts/9b624d43.html","eae07f87b7e870b07e4d86044d2023b5"],["/posts/9bc3b11e.html","7c95fe6e534cd81e093fb3cca9499bb1"],["/posts/9ef6ff16.html","0c6d375fd1b1833f29d08ae505fe9d65"],["/posts/a105df5c.html","c0dbb39dc1faef4c5e2a826109e2b2ac"],["/posts/a2af0ea3.html","058129841b837b4840b9d6e3e93ca878"],["/posts/a3ed1548.html","6bd9b5620eee249fe4c709bd28eba46e"],["/posts/a4a39746.html","9387c09f4fbf2bcb3918254a3407a36d"],["/posts/a5d678be.html","513449a0f25d9d7680ab06d7936581ca"],["/posts/a5eec80c.html","df6e34e3f3b252900a83409464537542"],["/posts/a79b4f5b.html","7bbc3f1c2bda92b67a847f99bd158c28"],["/posts/a81e94e9.html","6d0922e6343585c1210ffeca5cbb84cd"],["/posts/aa02a436.html","25e683cf65c89ec61a0fa3395879dc7e"],["/posts/ad720447.html","1acff21e81e6a4a8813b168cb39094cd"],["/posts/b0ef01f5.html","a3aff1bcfd42e0d2bff5146358cd4875"],["/posts/b190dcb.html","07cef75c0eb449e1428deffb648cbf0b"],["/posts/b387b8d5.html","c0e6ea8bd3ca771dda16933295582bdf"],["/posts/b4a5318a.html","09ce3254936cfd3d324782886f008a26"],["/posts/b4fa1b4e.html","484ea079de0fc3f969c8c524d3d4546d"],["/posts/b59b6a41.html","90fc5e7de2f0446d9d3091243e911f4c"],["/posts/b6ffaac2.html","11c7dd071a0834a3d51275eb72edebf6"],["/posts/b9b7baa7.html","76256c658ba6d937c7375394bfb77ef7"],["/posts/bb7c60d.html","0a341cb2eaf301d1fcaa4be71712befd"],["/posts/bbe38b68.html","d00cb90e05dfaaf72f09988242fac2e0"],["/posts/be57c430.html","fe3fbcab3c0b666efc7f6c315bece2ca"],["/posts/bfb9db00.html","3f40d3e88b2503afcc0364fa1d1ce103"],["/posts/bfbc2e0b.html","84afeac6b190406e421e688ec1eb8d5d"],["/posts/c16b9d82.html","93644a4c9524c1bd00d43dfa8f095251"],["/posts/c270974.html","224aa91c28bcbb75d807430e3099b863"],["/posts/c2c98f74.html","eeb4137eb92cb37977607cd1df154f2c"],["/posts/c5520104.html","d5485df25ec3e70c5401b1d7048ba6bf"],["/posts/c81f7fcf.html","48bed7fa06650d2929224b5ef0f71b44"],["/posts/c89a329f.html","be43316eb813bde9b55c82027078224c"],["/posts/c8fc3430.html","38f5dd36ad6a22f14ac5a6159512aeed"],["/posts/c91f449a.html","c5cc060dde08ba2e8fcd73b88e8271ac"],["/posts/ca7a6c92.html","337b75fc3c96b499e13ed043a8a559e2"],["/posts/cc03340e.html","72901af1f5d73c440e681afbbd15e224"],["/posts/cdec63d.html","e591fac211c81c03e16190d38c27c354"],["/posts/d07ffe1c.html","a2fff70d8117599e8adf3c154451e45e"],["/posts/d178b062.html","490fdb618d5babc2bf64d739a79c298a"],["/posts/d53724bc.html","819129076f3f01f35da2002946a7add8"],["/posts/d70eaced.html","048e0a5aa093d4627144a8f4cd0174f9"],["/posts/d7edfddd.html","ac49c09478a66b98e2dfa9cb7b38842d"],["/posts/d8795dab.html","b87da2338f050ee1284e9d5625f42a42"],["/posts/e00c1bc.html","1c4bec3b9666490dd9b49b0e6dffc4bc"],["/posts/e3dcc811.html","74600947106bef406c86e215d9ec076e"],["/posts/e6f6b883.html","e1dccbf0dd15bd00964c4c4b60005b2d"],["/posts/e821aeca.html","8210dc5a3010f81768b9e52df60adf16"],["/posts/e981c79e.html","bf9e02332e442e0e6ea52ade7a7b4880"],["/posts/ea7b2ec0.html","442477a9efaa3b27995874e4d3112a98"],["/posts/eb168c8b.html","f0d1b47f69fb3d9db7add0cf95f7f104"],["/posts/ec477027.html","4bf80655213c92bb3b7a16564b006a16"],["/posts/eeb47c66.html","d8e452faaf40740c1c3ad7a003552769"],["/posts/f0765214.html","a259d3b06967061a34ebcc9cccc4cabc"],["/posts/f0940727.html","22870a5d57ce9a7d2b954e9fed650847"],["/posts/f1ab62f1.html","bce291d2413b511c0ec87379415a47cc"],["/posts/f3b50546.html","54d53e79a658dac800cacca38745bd24"],["/posts/f4524359.html","0acd728dbe64ec2f41bc4cc13a643835"],["/posts/f4e10e30.html","8ceb600d0a301cac474d5f6040458fed"],["/posts/f70539ce.html","43d84f8dbc360be1f61d39b09da72b09"],["/posts/f77eee2d.html","dff93b60eda53568bbdd846d8906a217"],["/posts/f8d2d5ec.html","e07d9f612aad29d77f22ac2672abd5cf"],["/posts/f9a25cd7.html","e4dc646093b2b8d57824f8b56de1e0cf"],["/posts/fb97a8a5.html","ba1e5bc012f83f7edb617c733c979716"],["/posts/fc610c2d.html","7c8c36908c1e6c2b85f4528a7f7b16af"],["/posts/fec1c989.html","6ef58b54760a2d32a22970485d08025a"],["/posts/fecd7f2.html","8a40d6f8f5cff1eb62ca1c04ae76dd90"],["/tags/51/index.html","14893a042b419ebde331aa179201126d"],["/tags/AES/index.html","7d52fb1bc9ba08f1baa44575a0b7aefa"],["/tags/Anaconda/index.html","e9075ed21c06d0bc0b4d158316a6a90a"],["/tags/Azkaban/index.html","9cba69d5bb0c086cf963b6b0c494dc9e"],["/tags/Cassandra/index.html","772f3ff06d0ad4f12137ee3a3c39b195"],["/tags/CentOS7/index.html","9ab32f2ef9f0241fffa3e0b93078b1fc"],["/tags/Django/index.html","da7204883c3e2b1afd366c35adccdbd5"],["/tags/Echarts/index.html","d8a1132d1a263e72acd96607d442b52f"],["/tags/Flink/index.html","2f92ab353ca23455165665158f5ed928"],["/tags/Flume/index.html","e1b7ad695d58333d92e90c167315f468"],["/tags/Frp/index.html","b719c38bbfd39152695a92fc251e68b8"],["/tags/Github/index.html","0b7139c6b3da385a853225916e251277"],["/tags/HBase/index.html","034e5b73d62c807efea80055e530608b"],["/tags/HDFS/index.html","ce47c5272e1489ac4b1d60b76d3b6cfb"],["/tags/Hadoop/index.html","f8dd5212e0141faead6d05da89e981e5"],["/tags/Hadoop/page/2/index.html","c138421a8827b84552ac8ac323b0fe43"],["/tags/Hive/index.html","b600fe54f49ee70c8401116671f74b1b"],["/tags/JavaAPI/index.html","a7b8b0cd05daba5e0dcce4db6fb990d3"],["/tags/Jupyter/index.html","945e7a42e55888a29a724a5a2daeae1a"],["/tags/Kafka/index.html","63d4a1de856b90f37a9b8c2c6332d8d6"],["/tags/LaTeX/index.html","c39af8031a6a1b5ffd090407527a835c"],["/tags/Linux/index.html","6dcb3957578b3e2635652418eeb56b02"],["/tags/Linux/page/2/index.html","0fbee5fe337ec361b658b0f89c54fe22"],["/tags/MapReduce/index.html","def22c1c2ab6f1b0f7e67d5778d80bfa"],["/tags/MapReduce/page/2/index.html","736c7fbc01b6a1e7758fcdfedcc58470"],["/tags/Markdown/index.html","6d96d170ce20fbcfe4c4c04d233aa4b7"],["/tags/Math/index.html","cc556716aec925e7086437f3c15f768e"],["/tags/MongoDB/index.html","9c26ee86b86015a3be66e928378c5ccb"],["/tags/Neo4j/index.html","9616c7ecd7fd938fafad3b8e7523fe77"],["/tags/Nginx/index.html","3354e42d82f43e874f3d7056941fd772"],["/tags/NoSQL/index.html","0420772a62f59005a19168ad05a162e8"],["/tags/PDF/index.html","9a1d4c43e5cdcb0e6160f8c887a9c948"],["/tags/PDF/page/2/index.html","b1162f5bf103297de9c0614f1679454c"],["/tags/PDF/page/3/index.html","ce82cbc505d5c0f562e6d0c2f6dd74d7"],["/tags/PDF/page/4/index.html","1affb8f58e7d440382768754c9059863"],["/tags/PDF/page/5/index.html","48e4c058b7df23e58fc17a74b97a27d9"],["/tags/PDF/page/6/index.html","1eea4ca6fc0c037a20a592e7cb3bfbf8"],["/tags/PDF/page/7/index.html","53c6f32adbad8939ff3511b64ce87fc0"],["/tags/Python/index.html","0b5bec02dfb127ee78fb4c688f43fbf6"],["/tags/Python/page/2/index.html","a0f56753350aa290604675282465ac79"],["/tags/Python/page/3/index.html","aaeffb2324ed7182ef2c05b2d7d975a9"],["/tags/SSM/index.html","4e23d6a261c7ed7d999f5ee3c6f2f45e"],["/tags/Sqoop/index.html","56262c60d6dd5a58a1bfe31090e9354e"],["/tags/Web/index.html","5d7558229f5ac5b6f8f0405446bf79d4"],["/tags/WebSocket/index.html","3d992ec161e0ee1716032a5e2b1acac7"],["/tags/Web安全/index.html","fba6c59efcadaf309cb9563a868a8cde"],["/tags/Yarn/index.html","258537af1235a743edddc48ad4429866"],["/tags/Zookeeper/index.html","0ecb83dc0d284151916e7d998a7bcf7c"],["/tags/cloud/index.html","5a8aac3dd3058aafce0d7358220f7348"],["/tags/gcc/index.html","d2cc8001311ee951e96e68fb942caa70"],["/tags/glob表达式/index.html","929fd3adc89196d78ac2ffdf2eb7f9c5"],["/tags/hexo/index.html","37474ada5f86d3945be01fb296f9df6c"],["/tags/https/index.html","03b4aec900c8b9c356ae3ffb08fab8c4"],["/tags/index.html","3249b0236371d47e70f6b362bceb3d4a"],["/tags/kali/index.html","fffcb8aff55756cce6a53f031e8bafd2"],["/tags/maven/index.html","8aaa898effad68239bf2a54d90506e10"],["/tags/mysql/index.html","2e14067e797e3a93623f08b4d6bebdfa"],["/tags/netcat/index.html","a7a1d8d53fa78d1dc4130440655faca0"],["/tags/network/index.html","8c5b06f04646face200007e4efdf4feb"],["/tags/php/index.html","377b842027b8c7ca9db5c24edc1cb204"],["/tags/shell/index.html","d8aaf69c60c0df47640e249a1de18316"],["/tags/windows/index.html","28f23be6ff762bd30462b44f94c0283a"],["/tags/xrdp/index.html","3adfc7a3049e57b3da20589e2fd81a6c"],["/tags/人工智能/index.html","12f87978eb59e8f15f783689002d1096"],["/tags/内网穿透/index.html","0e65dfb19aec28d526932ad8b01fd2bc"],["/tags/分类器/index.html","251c5abf2576d4fe0d4bdd5fa6083b64"],["/tags/删除注释/index.html","458a782bdbfc839da0014cf8996969b8"],["/tags/前驱图/index.html","f2f508d2f8ff19c686f6050359e90b2d"],["/tags/加解密/index.html","f0b0ff81c28501ab6d88aa6db1a032a4"],["/tags/加解密/page/2/index.html","dd68d6cfe239b3eba63555925f78e17b"],["/tags/历史/index.html","036bb8dfd9073478570606d53f1f7eb9"],["/tags/反编译/index.html","a84b8554150c1e8f2928ff6db536d883"],["/tags/图像/index.html","54e73adfd7a71512436b5ce81f105183"],["/tags/大数据/index.html","c2732f2c1a9e9aa6b5884e236efa644b"],["/tags/大数据/page/2/index.html","cd904dad465b9324054ea3dc675c76e0"],["/tags/大数据/page/3/index.html","bf769737dfb5cab544a1427a9ba7de01"],["/tags/大数据/page/4/index.html","fc33ab36152362dfbba91c448069267c"],["/tags/大数据/page/5/index.html","e6e10ebd75c599f738c271d4ae04d176"],["/tags/大数据/page/6/index.html","1f61ff85d55754479869d23a6d07c090"],["/tags/大数据/page/7/index.html","6862ef0bb6a80e9c6b56234920135f8c"],["/tags/大数据处理技术/index.html","24bb8d5d7b9274290a513acee96c8705"],["/tags/大数据处理技术/page/2/index.html","c8b2547194f29c036249547f85b178f6"],["/tags/大数据处理技术/page/3/index.html","22e99b92288e1f536798ee16334e7414"],["/tags/大数据处理技术/page/4/index.html","520787768409fbdea2f11dad63925ede"],["/tags/大数据处理技术/page/5/index.html","9c89bf40dfe61bd9efdd3350ab0fd1b9"],["/tags/大数据处理技术/page/6/index.html","77e3090a5e734067ff71399e0182899f"],["/tags/大数据集群环境准备/index.html","dd231a14af9034104a714d5ab7543e1c"],["/tags/密码学/index.html","fb01b79689c74f61b231cf392c975380"],["/tags/密码学/page/2/index.html","37ccd68115d4610c25edfc033dda7d57"],["/tags/按键时钟/index.html","2611ff02a52e476d788507be2b1a4ed6"],["/tags/操作系统/index.html","f6de2796cf73b5d3ef6a0132760f86b1"],["/tags/数学建模/index.html","68f7d8d98c50c026c029532a064596c9"],["/tags/数学模型/index.html","26a3ab7edeab0357df70076a618ae4da"],["/tags/数据可视化/index.html","a1524c8bcfad4cf66769f7b90a575563"],["/tags/数据挖掘/index.html","968e3fa6875f1dfffac8268666cb4371"],["/tags/机器学习/index.html","ae2e66a611179b190f64aecfec92f69c"],["/tags/机器视觉/index.html","d6f42641d10147fa4bdd4c3e8608fd46"],["/tags/模板/index.html","cbfdf9051bdca2616f1400d173d10434"],["/tags/死锁/index.html","82b637ad6e7fcfa63c4aee7c04e79cee"],["/tags/温湿度/index.html","07cced31800a1b5538662f6a4878cdf6"],["/tags/特征/index.html","3fae596001008b7cae1948aa1c8d1d19"],["/tags/特征向量/index.html","f7ae669ea504e8ab8dfe5d7fa5eeaa35"],["/tags/秒表/index.html","9a87003ac0b1e16eb8adaccb31912434"],["/tags/线性代数/index.html","67f927d32bdbaadbb9822811c5b16b85"],["/tags/脑科学/index.html","df889ef9db0737b56e67f4da1be3e129"],["/tags/虚拟内存/index.html","3e4a15040418b31298f87aa2f8cc678b"],["/tags/视知觉/index.html","1ba7a256279a553532bcf76bb5dd0fdf"],["/tags/超声波/index.html","c178e9705ef847255d6f25e5685cefa5"],["/tags/进程/index.html","4494133baca7bff8a148cdb010b38ced"],["/tags/进程同步/index.html","a55408757f5ab77d755be1a864649b45"],["/tags/进程调度/index.html","3d022999dcee7bdd6703f84e3f08ec68"],["/tags/通配符/index.html","6949b454cf338ea11b82bc3f7d7b8c58"]];
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
