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

test("validator - Number.prototype.isBasicLatin", function(assert) {
	for (var i = 0; i <= 0x7F; i++) {
		equal(i.isBasicLatin(), true, i.toString(16) + " true");
	}
	equal((-1).isBasicLatin(), false, "-1 false");
	equal(0x0080.isBasicLatin(), false, "0x0080 false");
});

test("validator - Number.prototype.isNumeric", function(assert) {
	var text = "0123456789";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isNumeric(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x002F.isNumeric(), false, "0x002F false");
	equal(0x003A.isNumeric(), false, "0x003A false");
});

test("validator - Number.prototype.isUpper", function(assert) {
	var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isUpper(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x0040.isUpper(), false, "0x0040 false");
	equal(0x005B.isUpper(), false, "0x005B false");
});

test("validator - Number.prototype.isLower", function(assert) {
	var text = "abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isLower(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x0060.isLower(), false, "0x0060 false");
	equal(0x007B.isLower(), false, "0x007B false");
});

test("validator - Number.prototype.isAlpha", function(assert) {
	var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isAlpha(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x0040.isAlpha(), false, "0x0040 false");
	equal(0x005B.isAlpha(), false, "0x005B false");
	equal(0x0060.isAlpha(), false, "0x0060 false");
	equal(0x007B.isAlpha(), false, "0x007B false");
});

test("validator - Number.prototype.isHalfKatakana", function(assert) {
	var text = "｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isHalfKatakana(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF60.isHalfKatakana(), false, "0xFF60 false");
	equal(0xFFA0.isHalfKatakana(), false, "0xFFA0 false");
});

test("validator - Number.prototype.isFullNumeric", function(assert) {
	var text = "０１２３４５６７８９";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullNumeric(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF0F.isFullNumeric(), false, "0xFF0F false");
	equal(0xFF1A.isFullNumeric(), false, "0xFF1A false");
});

test("validator - Number.prototype.isFullUpper", function(assert) {
	var text = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullUpper(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF20.isFullUpper(), false, "0xFF20 false");
	equal(0xFF3B.isFullUpper(), false, "0xFF3B false");
});

test("validator - Number.prototype.isFullLower", function(assert) {
	var text = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullLower(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF40.isFullLower(), false, "0xFF40 false");
	equal(0xFF5B.isFullLower(), false, "0xFF5B false");
});

test("validator - Number.prototype.isFullAlpha", function(assert) {
	var text = "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullAlpha(), true, text.substring(i, i + 1) + " true");
	}
	equal(0xFF20.isFullAlpha(), false, "0xFF20 false");
	equal(0xFF3B.isFullAlpha(), false, "0xFF3B false");
	equal(0xFF40.isFullLower(), false, "0xFF40 false");
	equal(0xFF5B.isFullLower(), false, "0xFF5B false");
});

test("validator - Number.prototype.isFullHiragana", function(assert) {
	var text = "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚ゝゞゟ" + "・ー";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullHiragana(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x303F.isFullHiragana(), false, "0x303F false");
	equal(0x3100.isFullHiragana(), false, "0x3100 false");
});

test("validator - Number.prototype.isFullKatakana", function(assert) {
	var text = "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ヽヾヿ" + "゛゜";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullKatakana(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x303F.isFullKatakana(), false, "0x303F false");
	equal(0x3100.isFullKatakana(), false, "0x3100 false");
});

test("validator - Number.prototype.isLeapYear", function(assert) {
	for (var i = 1900; i <= 2100; i++) {
		var expected = (i % 400 == 0 ? true : (i % 100 == 0 ? false : (i % 4 == 0 ? true : false)));
		equal(i.isLeapYear(), expected, i);
	}
});

test("validator - Number.prototype.getNumberOfDays", function(assert) {
	equal((1).getNumberOfDays(), 31, "1");
	equal((2).getNumberOfDays(), 28, "2");
	equal((2).getNumberOfDays(2015), 28, "2015/2");
	equal((2).getNumberOfDays(2016), 29, "2016/2");
	equal((3).getNumberOfDays(), 31, "3");
	equal((4).getNumberOfDays(), 30, "4");
	equal((5).getNumberOfDays(), 31, "5");
	equal((6).getNumberOfDays(), 30, "6");
	equal((7).getNumberOfDays(), 31, "7");
	equal((8).getNumberOfDays(), 31, "8");
	equal((9).getNumberOfDays(), 30, "9");
	equal((10).getNumberOfDays(), 31, "10");
	equal((11).getNumberOfDays(), 30, "11");
	equal((12).getNumberOfDays(), 31, "12");
	assert.throws(function() {
		(13).getNumberOfDays();
	}, "13");
});
