/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","845f8372481daaf7af3952544c773348"],["/about/index_en.html","723e3c8eb76d10eeac82bed1d184c820"],["/archives/2018/11/index.html","d3e02a89119d7e5106f3c29cc9fa2953"],["/archives/2018/12/index.html","12a5a8e2ec530a9bc11981438ff9cc15"],["/archives/2018/12/page/2/index.html","88f40fcc78bc09aec70deddeaa9e7c0f"],["/archives/2018/index.html","d53f13618b255dd73768422e8ccf9f3f"],["/archives/2018/page/2/index.html","712ec3eca1fc2cf2bc58ef98c3940d12"],["/archives/2019/09/index.html","2d5ced734f89b79e55c7d7feca374b07"],["/archives/2019/09/page/10/index.html","c92867afcc113bcfbd4624a43fc25e18"],["/archives/2019/09/page/2/index.html","68b8ae65bf4018414f380a2f0e749ce2"],["/archives/2019/09/page/3/index.html","bc39fad26dce6e3c586501ca8104135c"],["/archives/2019/09/page/4/index.html","34783588719eb844879e683bf97adfd5"],["/archives/2019/09/page/5/index.html","506a53cb8f5b862354009b000a94354b"],["/archives/2019/09/page/6/index.html","7ef0d9c4bac42d62eb2f4d251263a32b"],["/archives/2019/09/page/7/index.html","138cf8796b864c8b2af041629d8f07f3"],["/archives/2019/09/page/8/index.html","c2f6be1e71e711b067077d05bf0ae9da"],["/archives/2019/09/page/9/index.html","6b9357848a7d7238fc5658422a2aaab2"],["/archives/2019/10/index.html","e52d778a2dc425f049876d70e30f2b3c"],["/archives/2019/11/index.html","5b0690ac9d1ec7b7f9457b68547e2249"],["/archives/2019/12/index.html","4ff2c60d2f8b063cb2172acbb70ffa50"],["/archives/2019/index.html","53215c348b5cc691bb8089e960fcd154"],["/archives/2019/page/10/index.html","543831b2dda6896bf551310ced79cd6f"],["/archives/2019/page/11/index.html","5f6cbc97a8288bf239d15bab8c01412b"],["/archives/2019/page/2/index.html","f731587ec129538fd95e5f828e9eb3db"],["/archives/2019/page/3/index.html","29b07a1926ae58bff582a264d57407b5"],["/archives/2019/page/4/index.html","48332856e15adb6b5872fc8942d8f882"],["/archives/2019/page/5/index.html","798bee0ce5558e0f1785d70cc253d4ea"],["/archives/2019/page/6/index.html","7c922d1a80a9fdb75b0ce4117f571438"],["/archives/2019/page/7/index.html","5ca50cc9042db2a5576acb7729b8a85a"],["/archives/2019/page/8/index.html","28af972b91db89565c7a17f35a9b6f52"],["/archives/2019/page/9/index.html","0318c0fbc75217e6e03b1a94323fbe9a"],["/archives/2020/01/index.html","29e559cd70e80423e1ecca36bca33d06"],["/archives/2020/02/index.html","484b047895443383197c60aa0316cdb6"],["/archives/2020/index.html","3619c15055b03bd12bc2e4c943b49209"],["/archives/2020/page/2/index.html","94d8c15944945423da9f57821a4ad0eb"],["/archives/index.html","3612dc4418bca934953e13ed8e6b54c0"],["/archives/page/10/index.html","79ad77de83ed97d6a769a401bf1e497d"],["/archives/page/11/index.html","3690bb3be669e614e692c25110b429a8"],["/archives/page/12/index.html","a549c37c4e29f21b851de2450317913b"],["/archives/page/13/index.html","1d5e8a760b5b58403bc6788b4b8d906b"],["/archives/page/14/index.html","285fc5b554ac50901d1e267fa0946082"],["/archives/page/2/index.html","4e48e683657e8eb690492ec012abc3a3"],["/archives/page/3/index.html","af30e40cc860978a3ea215fe4cdecea9"],["/archives/page/4/index.html","c6c6c36f4cc99240b2a09c6801973d35"],["/archives/page/5/index.html","eb32a48c4e03879ab2cee602ce62b26a"],["/archives/page/6/index.html","1795fb66e9104e9bfa14f4fa30470236"],["/archives/page/7/index.html","45615d3f57bc5967b9595fa61f4f0f20"],["/archives/page/8/index.html","4ad97f6f69efee51275de0dd3e5b3a87"],["/archives/page/9/index.html","e6ccbe4d38ce5b486a94c06ef763bc45"],["/categories/51/index.html","1785fcd9aad7605c3ca2588dfd3df04c"],["/categories/Linux/CentOS7/Python/index.html","ad7a9f2d371fdaf98caec77b958822af"],["/categories/Linux/CentOS7/index.html","b7c70a6cb56ab78224e535259bc3dff5"],["/categories/Linux/index.html","ed74d95a12413f8b218b625cc2e4d5db"],["/categories/Linux/kali/index.html","0e5f5a915ebbdab5bb722855c8abb44e"],["/categories/Linux/page/2/index.html","39348ef1dc87afc247ce2c51a91a062b"],["/categories/Linux/shell/index.html","1d1a9bba4b1f4157fbe598c91a29e656"],["/categories/Math/LaTeX/index.html","77fc81214156062acbc23b6f331fdba5"],["/categories/Math/index.html","d079ae601009307e328a1e79a3933c77"],["/categories/Math/数学建模/index.html","73fc2c6541911cd40a78e058ad1ae3f4"],["/categories/Math/线性代数/index.html","158b1e4a06f0c8070110c8d7738a09e9"],["/categories/Python/index.html","e00a57932446ae4f2f1ebd8f4e3b0b24"],["/categories/Python/page/2/index.html","a8b5f803fe7a4d161960dcf330edb2a4"],["/categories/Python/反编译/index.html","07bb06c51793a744d2e2835bbbe4e401"],["/categories/Python/密码学/index.html","6ef16d3be96a747ec18a5831042c7572"],["/categories/Python/密码学/page/2/index.html","aa68caf5196fe4bd0bed3ff4c8600422"],["/categories/Web/Django/index.html","6c3394ece473fd96f1bd742ba09fd9a8"],["/categories/Web/Nginx/index.html","8154a20c7622b2ddfe2d3f832df6ad7b"],["/categories/Web/hexo/index.html","13e0037625e6bca223c5687ad9619e42"],["/categories/Web/index.html","98bfe9b7055bad07ad834ef11284234d"],["/categories/Web/page/2/index.html","4396bf6c799757588c43a25c07c92988"],["/categories/Web/内网穿透/index.html","95442c7375560af9a0885b9e9653ce30"],["/categories/index.html","21683ca246df8a97c6b7deb98cdb6a16"],["/categories/windows/gcc/index.html","f136c4cc06906843e73ee69b623c4674"],["/categories/windows/index.html","7902e6541a45e2432749169276f3eb85"],["/categories/windows/netcat/index.html","293f36df3712937e8fe8eab0b8113491"],["/categories/会议报告/index.html","b393acc28244f12c622f027517f6d840"],["/categories/大数据/Flink/index.html","d15b1239eedb185f6bfc596380520881"],["/categories/大数据/Hadoop/index.html","ed16b70bf1e09d9d40e220a3ca110ad1"],["/categories/大数据/NoSQL/index.html","5a786f53a7b76c687d2ffd431fe3e9c3"],["/categories/大数据/index.html","ad336f10b80e0bde2647ac51ec2a652e"],["/categories/大数据/page/2/index.html","7c9a656954a19c169707f7ee8db387ed"],["/categories/大数据/page/3/index.html","3ef6f33abe763bebc9029a3e8dbac85c"],["/categories/大数据/page/4/index.html","0abb87ad113a12303458a93fd379ed88"],["/categories/大数据/page/5/index.html","be4c094ec5532a49d8de3008cd2369d6"],["/categories/大数据/page/6/index.html","ca9a6b472603b65add6a5441fab668b6"],["/categories/大数据/page/7/index.html","78ffe4e4ddc8851d117d30533730b05f"],["/categories/大数据/page/8/index.html","8b43d55bb1243ef7d38af08965b7c0a3"],["/categories/大数据/大数据处理技术/Azkaban/index.html","32e83cef3a3d6b10c1fc93c1d5c4e726"],["/categories/大数据/大数据处理技术/Echarts/index.html","738c289d5182ea36607de6cae166c242"],["/categories/大数据/大数据处理技术/Flume/index.html","26d1ee7cb0ee9bdf839f5911f1ff16dc"],["/categories/大数据/大数据处理技术/HDFS/index.html","83548eb023fb03dfd164ebd2cc461c25"],["/categories/大数据/大数据处理技术/Hadoop/index.html","807a922fd511695a0d07ab55dc376325"],["/categories/大数据/大数据处理技术/Hive/index.html","5b158de8d025bb04c52394eb30db1e2b"],["/categories/大数据/大数据处理技术/Kafka/index.html","1079c3439af76084c27f3909efce7e67"],["/categories/大数据/大数据处理技术/MapReduce/index.html","b714ecc23157133b4eab4022d493b8f8"],["/categories/大数据/大数据处理技术/MapReduce/page/2/index.html","f7a8125e2d27ebf5a716365fc4ca0066"],["/categories/大数据/大数据处理技术/Sqoop/index.html","64247fe6ce8fc7bc81984ce88dda776b"],["/categories/大数据/大数据处理技术/Yarn/index.html","37fef51c37eebddf562dff9462be53a5"],["/categories/大数据/大数据处理技术/Zookeeper/index.html","9f1ccedc25434d9d29b4b030379cb33b"],["/categories/大数据/大数据处理技术/index.html","5951aa57df37f8889c253d30a1ee16fe"],["/categories/大数据/大数据处理技术/page/2/index.html","3b60056f786351ab1bd72b40fdd07d1b"],["/categories/大数据/大数据处理技术/page/3/index.html","5e7dbd8e9f7634fc08a5edd06779b5d1"],["/categories/大数据/大数据处理技术/page/4/index.html","22d9a173cec193d754693b15b58338e6"],["/categories/大数据/大数据处理技术/page/5/index.html","c7c9a5bd2530c58ad4161cca13265834"],["/categories/大数据/大数据处理技术/page/6/index.html","75ad112717bdcd79d80772d89cadfa1a"],["/categories/大数据/大数据处理技术/大数据集群环境准备/index.html","f6d853a5223b3637318b9e4438421e2a"],["/categories/大数据/数据可视化/index.html","f2cb15e37d44d7678eb5e0e2dac50bfd"],["/categories/大数据/数据挖掘/index.html","1a6d667b71aa6ee1a6d98a608fb50aea"],["/categories/操作系统/index.html","385b931ef97e209f6c14bb4325c074d6"],["/categories/机器学习/index.html","a54ddf6d1e3d9ddfc68a2585368e3f01"],["/categories/机器学习/机器视觉/index.html","33d69ca6fa94247043704955ba5b3cac"],["/categories/模板/index.html","97c183bfdaff774e822777db27cb1c8e"],["/categories/模板/maven/index.html","c45be2f3c315a805bd0b3604e63d71cc"],["/categories/错误集锦/CentOS7/index.html","742c7c323206674a7bb19ca05085baaa"],["/categories/错误集锦/index.html","3ad24fd3371b6414b9a658f182e90672"],["/guestbook/index.html","ba0cec838381cc52a556733df0e00b5b"],["/home/index.html","7eb08243748ecde4b4ed87a791d8388e"],["/index.html","d8d7346ec29d6e1154feda7ae6ba3bc0"],["/page/10/index.html","0e3e7136507f7d33e1a75b921ea7bc0b"],["/page/11/index.html","579ea01b9c0354ce03dd3c2354dfb993"],["/page/12/index.html","309269ab91766584e69853a56f524d4f"],["/page/13/index.html","5c628f846f2a0cbfbcf8b89fddf831c1"],["/page/14/index.html","cec2d5c5b25113b8f7771f489a6fc682"],["/page/2/index.html","f01795fba9380785e0be9dc669f840a2"],["/page/3/index.html","a4c5ef8325c4c6f62a1159247a5d07c0"],["/page/4/index.html","da62cf96e8b673acb109e692e104fb35"],["/page/5/index.html","733b6d6c1a20c4a73334a83b1184de7a"],["/page/6/index.html","9d2b7fec6b872b4015dbe1db2da0f337"],["/page/7/index.html","1b6494aa5d49feebe9e826b37673ff47"],["/page/8/index.html","a834005a764bf6eb919d9eadad1a6bc2"],["/page/9/index.html","954d5549ca561d330df3249397206751"],["/posts/1009d3f6.html","64984e7aa51303074795eeea2c05af52"],["/posts/10cabcd3.html","e8357b88086073778a8d24995e1cac68"],["/posts/129a9db5.html","d5ec9660cf325f327d59d3aed56ef51a"],["/posts/14fa5bba.html","a3c9bde76a9efc0b2dce4602910a6c2f"],["/posts/1601d925.html","ed3fb81133b19f3203c4501a56ee65d0"],["/posts/1e1e5118.html","f27378abae87299109ace256f509ecd6"],["/posts/1f519fd3.html","18cdaa05230831772bc1643e667d086b"],["/posts/253269c2.html","285109b1c6bbf92e9b08887636fa8feb"],["/posts/2ffb45fa.html","fee348c8b636f16470f6d5dc48ee2798"],["/posts/2ffcda9a.html","7881f38e3741b925d7174b1acfee015a"],["/posts/3098d714.html","8b8093dcaaf09875bff1553d067477e1"],["/posts/30b27542.html","ecd509392705b791482bd8fae3f1136a"],["/posts/32c5d0d9.html","dc3d540ae08edca011b96b28d6e0ea1f"],["/posts/32ffa341.html","d0520b1a401a34513b1fbfcd0327ae9b"],["/posts/357dc334.html","ca4b987e38a12073f5f515ff75f4599e"],["/posts/38a07d35.html","1aae8ba8df7dcb913e89dbc59bc9a6b1"],["/posts/3bfd1783.html","1bffce3898cf93cd2d2fb5a97a7c7c53"],["/posts/3d7d3997.html","12d7b9fb02403bf453cae1ccb2a691c3"],["/posts/429246c5.html","fcd449b59dafc0055cd5489518a30b7e"],["/posts/42ecd398.html","faec1497fee5845d32011c54c2a04735"],["/posts/46b39789.html","d6aa009a91fcb51c1ca7c5f5700c4c43"],["/posts/483290b5.html","c925ef38b36a276cf5d28fbee13cc12c"],["/posts/48a224d1.html","50a69e6124c4f1c224c3f6d1eaf07e33"],["/posts/48a2d97d.html","6c8fea216b8602368dbd1aa5c58c4ccb"],["/posts/4920f048.html","47e72a951f343adbfec61e6c76f7cb71"],["/posts/4a71123b.html","02556bb1e1633a249c5d8359eca51939"],["/posts/4a71133b.html","ade6ea4d71d8ae4e7c5bc4ce19d2e982"],["/posts/4c2deb5e.html","2e644946c8270862cbdce14c3fb0d06d"],["/posts/4dd55455.html","4c32169ba51bfba26369f9951d6ae4e7"],["/posts/4e6873c5.html","611d0de0bc6b7432f6a5496fb77c7905"],["/posts/4edeccca.html","276a5768274d5a4b1aec532cf7928bee"],["/posts/53ab8d74.html","120377583ecac07246a96866379b8879"],["/posts/53d0a404.html","eb27feff6f261f927e2ab141604bb014"],["/posts/55b264de.html","36e7ba9324ce660a2945a4da49a9ad3b"],["/posts/594433a.html","4e80be81de59b292a12168fe72558133"],["/posts/5bb73de.html","eb44905e75f2f0a21f9f251599a058d5"],["/posts/5bfe6261.html","039dbc1b107694a119a6eabf96e7b780"],["/posts/5cc46d49.html","5240e799aa08fdc39093642e913e6b23"],["/posts/5efb0a25.html","a9dfae02f293f97eff6640b2a74b3ac9"],["/posts/6009a9d8.html","2c58ac9ba3b2e282d0d1a1c7e262b870"],["/posts/606a512e.html","363dc3286d99001c2fafb1e54250b298"],["/posts/610da529.html","a380fd8a64eed874a439c5c9ea727666"],["/posts/63637a24.html","1f640aa79a34345402afc46319748c11"],["/posts/695a6c4b.html","55cdfc3c1f7d9c67e6f0c35767a0a6fd"],["/posts/6980c27e.html","3e4ffa5dc3d11f0578260f4b94796f43"],["/posts/6acc7206.html","ea4fa9c22a2cdf4ab88f4de29cdb0e0e"],["/posts/6bf2f994.html","7ee2c760bd66f9369d0f6c85fc8e966d"],["/posts/6cfc95e.html","7dc2a3a1604b80d2f3b038e4b75943b5"],["/posts/6e430c9c.html","a0abf942699353a13c354bb90f6e95ea"],["/posts/714668f9.html","f4f4ff9b5c391602590458948a8fbfb9"],["/posts/72b49ca2.html","dd5dfcb143a1d7d913e6f6be603702ca"],["/posts/72cd4c87.html","cd401f8e9dad0cc3184ee0de2cba1dd2"],["/posts/75ee5fa.html","6d0624a6e30461f5d1ae0545016423c9"],["/posts/780b9de2.html","d85db1a983241d8fcb41acaf1e14309c"],["/posts/7827182c.html","571e6f275ba8c132161148396fbfd9b7"],["/posts/787a8307.html","2d4c05919a2c5516ee522dfeb30f259f"],["/posts/7cb85200.html","93560eb0c2945aaf3165be3cf3257ad9"],["/posts/7d6b1f3c.html","5b6a23db0cc31db51e44961ff869d646"],["/posts/7def3950.html","c51179d58bbc9614497c2b99ac84b02c"],["/posts/801b51ef.html","ccfbbdaef80154c45486f1086f4e0594"],["/posts/8485750c.html","66c53d3304cb3fc3a3b2abeedda9cbba"],["/posts/87e9dc75.html","12ae5ecefbddea245aa1f31d52b78fce"],["/posts/897831fa.html","69798c978c76c06804ec74d8cc258b9d"],["/posts/8ce758a7.html","13efbb6cf0ba17aa476d8d73a10324aa"],["/posts/91223731.html","469f484655c307603ac70161b0c35e7f"],["/posts/96f894a7.html","8cb732170baba0fa19c1c21e34c2adc4"],["/posts/980d646e.html","13a77afb935e1d6c5c39cc94018e6f5f"],["/posts/98579906.html","88a88867dbf1235446c2f541a9464564"],["/posts/9b624d43.html","0117a76b1c10dcc335a2ac03e30e2844"],["/posts/9bc3b11e.html","0ad603dd464c2e2fd1f8b97e69e962a5"],["/posts/9ef6ff16.html","c91cee2b430d4206181606584434d35e"],["/posts/a105df5c.html","a8a9273b34eb5703cc4c892ba3b495ec"],["/posts/a2af0ea3.html","bd76a214af25a7f4d715c1d68dd547a3"],["/posts/a3ed1548.html","cae8b60c31f561b831f65a9d954a85d0"],["/posts/a4a39746.html","2d04f6d0ef970b65aea90b8d2d2f0d71"],["/posts/a5d678be.html","7369f84547c566f213a4ebbc1c49d1b4"],["/posts/a5eec80c.html","494c8ae444395352d65feebee9fc44ae"],["/posts/a79b4f5b.html","1dbc175f4d087ba36c793923d55bdc52"],["/posts/a81e94e9.html","f77f5ae895a91778c607679081b19e65"],["/posts/aa02a436.html","4f0aba790823216ec3cab9abb5614581"],["/posts/ad720447.html","205e751fa1fdccc7d4e6eed04b4f62d8"],["/posts/b0ef01f5.html","977d6f4ca01decd0f1ce7353f003f547"],["/posts/b190dcb.html","5d92b2106f13dc0cbb12c84ffb422982"],["/posts/b387b8d5.html","7aa243900c53256dfdae04acd8d9bb49"],["/posts/b4a5318a.html","f8cf8cd865bc8929c8727d89b8c22664"],["/posts/b4fa1b4e.html","3e13c2e5f43a9f7e5c6db46a3128aa96"],["/posts/b59b6a41.html","adb2ee40eb1f3ecd35859bfb4eedae0b"],["/posts/b6ffaac2.html","ee1f41992da870af83771b4da23d49bb"],["/posts/b9b7baa7.html","d428056702234fc138903abfac1a24e2"],["/posts/bb7c60d.html","a6661d652cda0de27923aafe716006ff"],["/posts/bbe38b68.html","b1ea36e284d7e82c3700012aaa9591a7"],["/posts/be57c430.html","b07bdbd864a5cb5dceb9112a0bc712e7"],["/posts/bfb9db00.html","1987259faf5d73f8c42835e4251cdb4f"],["/posts/bfbc2e0b.html","0df6db758dd00a97366d5e645f302f44"],["/posts/c16b9d82.html","dacdbaf563746226fd8a7ffc6bf3dbd4"],["/posts/c270974.html","565bdc91439a61637966937ef4f37941"],["/posts/c2c98f74.html","696aa100cbb57c0306d3977ffcb0c587"],["/posts/c5520104.html","0ed679e1d6b616c5364ec7990b3e5c4e"],["/posts/c81f7fcf.html","c988c6606dc6145e60b078f0d6f59147"],["/posts/c89a329f.html","ffb19047f6c8ace2ae5117f71be1c338"],["/posts/c8fc3430.html","6043c14d72a216922314d4e6d651e2b6"],["/posts/c91f449a.html","c658c4a7b1dfc6b17930397c9a2b183b"],["/posts/ca7a6c92.html","fa5eae89a64c5ce3d4e6c53f4424a0b6"],["/posts/cc03340e.html","baf13c7b1a711c6826d4ca489696bd50"],["/posts/cdec63d.html","70db983618ad325b20e98a0256485215"],["/posts/d07ffe1c.html","20e5a79a03fd5e86bc66887f9a9b9087"],["/posts/d178b062.html","7c66f0e8dc6e92411b201e88165424b9"],["/posts/d53724bc.html","c1f4fad0823c362278ac7c5d68e42f24"],["/posts/d70eaced.html","d383d3abd0753c8ceaab852e0a85d87d"],["/posts/d7edfddd.html","e9809e40313f1108aadc3e22452bd9ec"],["/posts/d8795dab.html","f781b45ecb628da0027365802464dcbe"],["/posts/e00c1bc.html","42db3aaad3967310caa889934e4f7ec4"],["/posts/e3dcc811.html","1a902e051bbd7dcbaa846ea51fa3d1f3"],["/posts/e6f6b883.html","a3e9f416a853f6d5dd9136aefe5054aa"],["/posts/e821aeca.html","9609de8d564acf8202fee7e2e6f73ef6"],["/posts/e981c79e.html","f92021609d1db9ed89301be5f3b7149e"],["/posts/ea7b2ec0.html","7199491b73d8bb4bc71076537054135d"],["/posts/eb168c8b.html","5b4860a0f400d8f6eebcb3adb0bf75d3"],["/posts/ec477027.html","d32baef41eb6aae9dfd186bd06b567a8"],["/posts/eeb47c66.html","b33c731301c5e861d7413ad17f874d25"],["/posts/f0765214.html","0050e657db1c65a84eedae9c5415ed61"],["/posts/f0940727.html","70f700b6abfda9801f060f18a0bdf336"],["/posts/f1ab62f1.html","f0374212086cddbe9197b8d2d54b10bf"],["/posts/f3b50546.html","31eee127d1cc2d8ab2058cdbb4de5f75"],["/posts/f4524359.html","494da3f235bf090158e41be8ffb35973"],["/posts/f4e10e30.html","33aaa994d6cccd088e7b5f71464a7a6a"],["/posts/f70539ce.html","98c87d0b913ff442bfe63de254bbea77"],["/posts/f77eee2d.html","9363c42cc0267a9002479d80b6045be4"],["/posts/f8d2d5ec.html","fe0e6424617a8817b9f797db4f8ca762"],["/posts/f9a25cd7.html","61e8af310eb36b12d89919805f95ed8f"],["/posts/fb97a8a5.html","f0911e84afc7c341eb2c5980ba854ba9"],["/posts/fc610c2d.html","449fb184f0c3bf10d2ccf6699399af83"],["/posts/fec1c989.html","181cf01bfc8b3fb3b0092f9984b762b5"],["/posts/fecd7f2.html","e647cbbbcde591fa9373bf829ec058dd"],["/tags/51/index.html","9326134d68120801f7df750dfa0c9329"],["/tags/AES/index.html","cc218e703a8324dcd8baab8515ac559c"],["/tags/Anaconda/index.html","66b7ed311b0fc4cbf42d340c03f2ca40"],["/tags/Azkaban/index.html","7497cc93b89542744e69d1f83ae0f707"],["/tags/Cassandra/index.html","91beb5a427a57cec956850314618de43"],["/tags/CentOS7/index.html","643c79135c26323937e8a9912b2693cd"],["/tags/Django/index.html","4d983f4d9fbc817b11e8e2228684f966"],["/tags/Echarts/index.html","9ea68d121609fb89431d975fd9586bab"],["/tags/Flink/index.html","c13d426cc06caf65c85d44667783a673"],["/tags/Flume/index.html","938dae273f1c1f12f425980bc469d5c3"],["/tags/Frp/index.html","440526c762d478d79097341ac745a392"],["/tags/Github/index.html","ee655082b44773309166b0753ab07243"],["/tags/HBase/index.html","a8d26d659227f225bc16a4e037d461bd"],["/tags/HDFS/index.html","d6e4fa7b6ebba34ef3c71988f3bb5022"],["/tags/Hadoop/index.html","454c32ff1e1d50555a0fdee6c053b337"],["/tags/Hadoop/page/2/index.html","f34049667f9d6387ece4af40b3217d85"],["/tags/Hive/index.html","2a81ea3bd9f95f2f9ecd90954fb04510"],["/tags/JavaAPI/index.html","1f24725ced5cee2928a510b53f92a6b3"],["/tags/Jupyter/index.html","7c56a29abf649402eeb9fca0cbc926b2"],["/tags/Kafka/index.html","4c3155ab71aa35f03440dc6c9754a372"],["/tags/LaTeX/index.html","066a57e4aa6b5f3ae016dc46ebfa411d"],["/tags/Linux/index.html","fd5948ca7e04544dedf4eb390c520dcd"],["/tags/Linux/page/2/index.html","4d3328955f0a512c5bb3012804be3870"],["/tags/MapReduce/index.html","c90cf33c6c954d39d4e358f982f7f964"],["/tags/MapReduce/page/2/index.html","4d66043248dc7a1e014ee8464d7a8002"],["/tags/Markdown/index.html","2633bf73be8f7a807f45a3210d323707"],["/tags/Math/index.html","4030ad781b8a92d16cc5de9ae2f0ec3b"],["/tags/MongoDB/index.html","54a15376e6e1298dea574c9f60bd1d61"],["/tags/Neo4j/index.html","d4606eb63f06fec377bb8da77252d000"],["/tags/Nginx/index.html","8b0c2047d6a75a15067e067d54de0981"],["/tags/NoSQL/index.html","7f8cd1340ac2e4417a6465aee4c3094c"],["/tags/PDF/index.html","ae08c3cfa50d55cde77e07c36a1d7dc0"],["/tags/PDF/page/2/index.html","7cc190deba57aa0fd25c47b64b1bea20"],["/tags/PDF/page/3/index.html","db59b4e39fc57a62273a0915c3050159"],["/tags/PDF/page/4/index.html","a4dc0a01cda171e8fab4d1b26dc0b179"],["/tags/PDF/page/5/index.html","f43867f21c9d1339b2d8d9aaee8fa02d"],["/tags/PDF/page/6/index.html","81073f50c8a59ef72cc7ea124d48cf7d"],["/tags/PDF/page/7/index.html","e3ac81a14309d76b8c90a90330b28f13"],["/tags/Python/index.html","b707de7045a891782965eb7e3180e917"],["/tags/Python/page/2/index.html","f37f072e601346bc8f42fe4a0fec25ae"],["/tags/Python/page/3/index.html","5741a27a6210cb4689a925af4e1fce77"],["/tags/SSM/index.html","ca501a8a53b5460e00705c9b48d680e8"],["/tags/Sqoop/index.html","6986e70ed98b2217c4846cb2776a7875"],["/tags/Web/index.html","a4a86d6df77218e779ab62579f03b0d2"],["/tags/WebSocket/index.html","51e1d72dbf1dfb1cac07258d76a62a86"],["/tags/Web安全/index.html","47174fb66528fe97fc2e6b1fe9cfdd01"],["/tags/Yarn/index.html","2e91ffde5bc60ea20a9e7e49dbe22b2d"],["/tags/Zookeeper/index.html","6fa5e637fae5eaf3b283d2cacb1eae23"],["/tags/cloud/index.html","e502583420605cc0e88cbe0a0e80eeb7"],["/tags/gcc/index.html","cce0c0669f44481a9cafc29b987de232"],["/tags/glob表达式/index.html","6156949e90405932a45449a9db25a114"],["/tags/hexo/index.html","0088099cda3683544bd1388525b76d39"],["/tags/https/index.html","f7b307dd6e3fad3398b0f818369f51cd"],["/tags/index.html","5e3e83ac89051264ef3e24a3e9dfaaf7"],["/tags/kali/index.html","aab4017746fcde6605215e0e0e80014a"],["/tags/maven/index.html","9b21c72f3ae8b2fb3ffa0a1d9f822d8a"],["/tags/mysql/index.html","20b75f5fbaee87ef5ae03f5f7c24702a"],["/tags/netcat/index.html","95516700e90c01f9c73a43bbc9ad2dbf"],["/tags/network/index.html","d787d8386d856baf720e1bdca16aa081"],["/tags/php/index.html","fab04d73b96626ae6e80a17bdf137440"],["/tags/shell/index.html","610b5fe086d360e27b86faeebf98cf35"],["/tags/windows/index.html","51be72cb9e65b661657e11077b40b038"],["/tags/xrdp/index.html","836d7b7b9546ed39eacfae263e0060fc"],["/tags/人工智能/index.html","c022b654a1137bc248f48df52527a0b6"],["/tags/内网穿透/index.html","b348137e67747d89668fb37decdc5a91"],["/tags/分类器/index.html","417995d7c7f44de6693e5b053afb03e6"],["/tags/删除注释/index.html","ab3ee2dbcd9e0c755253f9437ca7a065"],["/tags/前驱图/index.html","10fdaa7e96cd64a0a5b57d798caff182"],["/tags/加解密/index.html","62e62a49e935ca72e3473533c22a2d05"],["/tags/加解密/page/2/index.html","0415d33a0d227792ce0aa2d8521f512e"],["/tags/历史/index.html","8356425c92508fb052383be9a9ad1b6d"],["/tags/反编译/index.html","3a65d3e668568a013cb7a895899dcb88"],["/tags/图像/index.html","19a9142093910e65a3b55592e0a49e02"],["/tags/大数据/index.html","08ce5fe9fd29a868a0ccb14d7d2f31b0"],["/tags/大数据/page/2/index.html","d86ffcdb1b3b7e88df37551904102cd5"],["/tags/大数据/page/3/index.html","2b947322ee1e6b22919ce1e7449c5151"],["/tags/大数据/page/4/index.html","10a45e08b1eebe8bbe8f2f648492036d"],["/tags/大数据/page/5/index.html","9047db4dbf057d45a675d276f44bb57d"],["/tags/大数据/page/6/index.html","ee079f14dcdfd9d20242f2140a32f1b2"],["/tags/大数据/page/7/index.html","a8590151e9eab356090d85299bed3fc0"],["/tags/大数据处理技术/index.html","d454cac018a700b281e742d9ebb8e4a1"],["/tags/大数据处理技术/page/2/index.html","ab36aeba068ba733d905ed7e68fe1554"],["/tags/大数据处理技术/page/3/index.html","04abe3b502c6da512638ead4184fa4d5"],["/tags/大数据处理技术/page/4/index.html","ea4f7fdd9f96160351650a66e077239d"],["/tags/大数据处理技术/page/5/index.html","488889ad913e036521f7f6af11bc3c38"],["/tags/大数据处理技术/page/6/index.html","07b5212cc32e41566ea8e310f9f54152"],["/tags/大数据集群环境准备/index.html","68f4951bf59f1a471819a0a1cbb6d283"],["/tags/密码学/index.html","467ec0adcbe4b8065d45a87cee3b2223"],["/tags/密码学/page/2/index.html","4b1bad342e3349b0ca9b6ac4e2551527"],["/tags/按键时钟/index.html","1224115c78a28308e64d8d4fbffba2c1"],["/tags/操作系统/index.html","6bc5896d1a3eccf79cd294066de4d2db"],["/tags/数学建模/index.html","c6dfc36630c9fdde0ad26c14cce08688"],["/tags/数学模型/index.html","6e674d3b7d72366d0b4a5fd790cee7b4"],["/tags/数据可视化/index.html","2e8c7c982543b0c227fb1eece2bcd983"],["/tags/数据挖掘/index.html","926ebc8b8ebb8d05e99d344587e4958f"],["/tags/机器学习/index.html","8e18017ed09c02b4fb36e04fdb98e487"],["/tags/机器视觉/index.html","d8105312df81155331eac8ff00f79359"],["/tags/模板/index.html","6e8faa6feacb3409b15be48e525d1a39"],["/tags/死锁/index.html","d685a38d4204cde5745c3baaf484ba0d"],["/tags/温湿度/index.html","0bb35ba19ddf1669acc14086910b9d1e"],["/tags/特征/index.html","891f31b19939cdbf9a5eb51b697c0d1b"],["/tags/特征向量/index.html","79cb82d3007546c63175c053a2fa7ec6"],["/tags/秒表/index.html","179ee2e73f0c47ceba4203999782a0e4"],["/tags/线性代数/index.html","314187e96eb9312ddc7a064ed3e72d3b"],["/tags/脑科学/index.html","69413734f6d9bcd4b46b57029457fca9"],["/tags/虚拟内存/index.html","031556d060bb5c1725f9471c8269e081"],["/tags/视知觉/index.html","ceeaa9ebda367c80cfefdd48b58fc165"],["/tags/超声波/index.html","50c8209ece1673804319dcbfe0edffe5"],["/tags/进程/index.html","c83958563a99688612ab59b48badb0b8"],["/tags/进程同步/index.html","bbb30b13662ee6de551e9894d3205a03"],["/tags/进程调度/index.html","193b7de5756b162e0a69e25e00d54af2"],["/tags/通配符/index.html","043a8f437394ca58498c0221a6336d66"]];
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
