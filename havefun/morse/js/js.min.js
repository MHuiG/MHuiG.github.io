var utils = utils || {};
utils.isArray = function(value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
};
utils.trim = function(value) {
    return value.trim ? value.trim() : value.replace(/^\s+|\s+$|/g,'');
};
var console = console || {};
console.log = console.log || function(){};
console.error = console.error || function(){};
function Dictionary() {
    this.datasource = {};
    this.rdatasource = {};
};
Dictionary.prototype.add = function(keys, values) {
    if(typeof keys === 'undefined' || typeof values === 'undefined') {
        console.error('Illegal arguments');
        return ;
    };
    if(utils.isArray(keys) && utils.isArray(values)) {
        if(keys.length != values.length) {
            console.error('keys length not equals values length');
            return ;
        };
        for(var i = 0; i < keys.length; i++) {
            this.datasource[keys[i]] = values[i];
        };
        return ;
    };
    this.datasource[keys] = values;
};
Dictionary.prototype.reversal = function(){
    var tempData = this.datasource;
    for(var i in tempData) {
        if(tempData.hasOwnProperty(i)) {
            this.rdatasource[tempData[i]] = i;
        }
    }
}
Dictionary.prototype.showAll = function(values) {
    var count = 0;
    console.log('-----------morse code mapping-----------');
    for(var i in values) {
        if(values.hasOwnProperty(i)) {
            count++;
            console.log(i + '\t > ' + values[i]);
        }
    }
    console.log('total count: ' + count);
}

var morse = (function(global){
    var mcode = {},
        r_special = /\<\w+\>/g;
        r_find = /^\<(\w+)\>$/;
    mcode.mdatas = (function(){
        var dictionaryDS = new Dictionary();
        dictionaryDS.add(
            [
                'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                '1','2','3','4','5','6','7','8','9','0',
                'AA','AR','AS','BK','BT','CT','SK','SOS',
                '.',':',',',';','?','=',"'",'/','!','-','_','"','(',')','$','&','@','+'
            ],
            [
                // letter
                '.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..',
                // number
                '.----','..---','...--','....-','.....','-....','--...','---..','----.','-----',
                // special charactor
                '.-.-','.-.-.','.-...','-...-.-','-...-','-.-.-','...-.-','...---...',
                // punctuation
                '.-.-.-','---...','--..--','-.-.-.','..--..','-...-','.----.','-..-.','-.-.--','-....-','..--.-','.-..-.','-.--.','-.--.-','...-..-','.-...','.--.-.','.-.-.'
            ]
        );
        return dictionaryDS;
    }());
    mcode.error_flag = false;
    mcode.parse = function(values) {
        this.error_flag = false;
        var _datasource = this.mdatas.datasource,
            item = '',
            a_special = [],
            a_temp = [],
            a_value = [],
            count = 0,
            result = '';
        values = values.toUpperCase();
        a_special = values.match(r_special);
        a_temp = values.split(r_special);
        for(var i=0; i<a_temp.length; i++) {
            item = a_temp[i];
            if(item !== '') {
                if(!item[0]){
                    item = item.split('');
                };
                for(var j=0; j<item.length; j++) {
                    a_value[count++] = item[j];
                }
            };
            if(i !== a_temp.length - 1){
                a_value[count++] = a_special[i].match(r_find)[1];
            }
        };
        for(var i=0; i<a_value.length; i++) {
            item = a_value[i];
            if(item === ' ') {
                result += '/ ';
            } else if(typeof _datasource[item] === 'undefined') {
                this.error_flag = true;
                result += '? ';
            }else {
                result += _datasource[item] + ' ';
            }
        };
        return utils.trim(result);
    };
    mcode.decode = function(values) {
        this.error_flag = false;
        this.mdatas.reversal();
        var _rdatasource = this.mdatas.rdatasource,
            a_input = values.split(' '),
            result = '',
            item = '',
            c_result = '';
        for(var i=0; i<a_input.length; i++) {
            item = a_input[i];
            if(item === '/') {
                result += ' ';
            }else {
                c_result = _rdatasource[item];
                if(typeof c_result === 'undefined') {
                    this.error_flag = true;
                    result += '?';
                } else {
                    if(c_result.length > 1){
                        result += '<' + c_result + '>';
                    } else {
                        result += c_result;
                    }
                }
            }
        };
        return result;
    };
    return mcode;
}(this));
var str=morse.parse("There is a lone whale in the ocean of Alone, and it did not give up the ocean. It finally found a partner of the same frequency in the end.");
var i=0;
setInterval(function(){
	if(i<str.length-1){
		makeRipple(i);
		i++
	}else{
		i=0;
	};
},500);
function makeRipple(i){
	try{
		if(str.substring(i,i+1)==" "){
			var ripple3=document.createElement("div");
			ripple3.className="rip-ripple3";
			document.getElementById("rip-waterBorder").appendChild(ripple3);
		}else if(str.substring(i,i+1)=="-"){
			var ripple2=document.createElement("div");
			ripple2.className="rip-ripple2";
			document.getElementById("rip-waterBorder").appendChild(ripple2);
		}else if(str.substring(i,i+1)=="."){
			var ripple=document.createElement("div");
			ripple.className="rip-ripple";
			document.getElementById("rip-waterBorder").appendChild(ripple);
		}
	}catch(e){}
}
