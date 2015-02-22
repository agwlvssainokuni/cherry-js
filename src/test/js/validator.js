/*
 * Copyright 2014,2015 agwlvssainokuni
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

test("validator - Number.prototype.isBasicLatin", function() {
	for (var i = 0; i <= 0x7F; i++) {
		equal(i.isBasicLatin(), true, i.toString(16) + " true");
	}
	equal((-1).isBasicLatin(), false, "-1 false");
	equal(0x0080.isBasicLatin(), false, "0x0080 false");
});

test("validator - Number.prototype.isNumeric", function() {
	var text = "0123456789";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isNumeric(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x002F.isNumeric(), false, "0x002F false");
	equal(0x003A.isNumeric(), false, "0x003A false");
});

test("validator - Number.prototype.isUpper", function() {
	var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isUpper(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x0040.isUpper(), false, "0x0040 false");
	equal(0x005B.isUpper(), false, "0x005B false");
});

test("validator - Number.prototype.isLower", function() {
	var text = "abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isLower(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x0060.isLower(), false, "0x0060 false");
	equal(0x007B.isLower(), false, "0x007B false");
});

test("validator - Number.prototype.isAlpha", function() {
	var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isAlpha(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x0040.isAlpha(), false, "0x0040 false");
	equal(0x005B.isAlpha(), false, "0x005B false");
	equal(0x0060.isAlpha(), false, "0x0060 false");
	equal(0x007B.isAlpha(), false, "0x007B false");
});

test("validator - Number.prototype.isHalfKatakana", function() {
	var text = "｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isHalfKatakana(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF60.isHalfKatakana(), false, "0xFF60 false");
	equal(0xFFA0.isHalfKatakana(), false, "0xFFA0 false");
});

test("validator - Number.prototype.isFullNumeric", function() {
	var text = "０１２３４５６７８９";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullNumeric(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF0F.isFullNumeric(), false, "0xFF0F false");
	equal(0xFF1A.isFullNumeric(), false, "0xFF1A false");
});

test("validator - Number.prototype.isFullUpper", function() {
	var text = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullUpper(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF20.isFullUpper(), false, "0xFF20 false");
	equal(0xFF3B.isFullUpper(), false, "0xFF3B false");
});

test("validator - Number.prototype.isFullLower", function() {
	var text = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullLower(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF40.isFullLower(), false, "0xFF40 false");
	equal(0xFF5B.isFullLower(), false, "0xFF5B false");
});

test("validator - Number.prototype.isFullAlpha", function() {
	var text = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullAlpha(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF20.isFullAlpha(), false, "0xFF20 false");
	equal(0xFF3B.isFullAlpha(), false, "0xFF3B false");
	equal(0xFF40.isFullLower(), false, "0xFF40 false");
	equal(0xFF5B.isFullLower(), false, "0xFF5B false");
});
