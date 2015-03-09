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
	var text = "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ゙゚ゝゞゟ" + "・ー"
			+ "、。「」『』";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullHiragana(), true, text.substring(i, i + 1) + " true");
	}
	equal(0x30A0.isFullHiragana(), true, "0x30A0 true");
	equal(0x30FF.isFullHiragana(), true, "0x30FF true");
	equal(0x303F.isFullHiragana(), false, "0x303F false");
	equal(0x3100.isFullHiragana(), false, "0x3100 false");
});

test("validator - Number.prototype.isFullKatakana", function(assert) {
	var text = "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ヽヾヿ" + "゛゜"
			+ "、。「」『』";
	for (var i = 0; i < text.length; i++) {
		equal(text.charCodeAt(i).isFullKatakana(), true, text.substring(i, i + 1) + " true");
	}
	for (var i = 0x31F0; i <= 0x31FF; i++) {
		equal(i.isFullKatakana(), true, "0x" + i.toString(16).toUpperCase() + " true");
	}
	equal(0x3099.isFullKatakana(), true, "0x3099 true");
	equal(0x309A.isFullKatakana(), true, "0x309A true");
	equal(0x309F.isFullKatakana(), true, "0x309F true");
	equal(0x31EF.isFullKatakana(), false, "0x31EF false");
	equal(0x3200.isFullKatakana(), false, "0x3200 false");
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

test("validator - String.prototype.isAscii", function(assert) {
	equal("".isAscii(), true, "<empty>");
	equal("ABCDE".isAscii(), true, "ABCDE");
	equal("ABCDEあ".isAscii(), false, "ABCDEあ");
});

test("validator - String.prototype.isAlpha", function(assert) {
	equal("".isAlpha(), true, "<empty>");
	equal("ABCDE".isAlpha(), true, "ABCDE");
	equal("ABCDE1".isAlpha(), false, "ABCDE1");
});

test("validator - String.prototype.isNumeric", function(assert) {
	equal("".isNumeric(), true, "<empty>");
	equal("12345".isNumeric(), true, "12345");
	equal("12345A".isNumeric(), false, "12345A");
});

test("validator - String.prototype.isAlphaNumeric", function(assert) {
	equal("".isAlphaNumeric(), true, "<empty>");
	equal("ABC123".isAlphaNumeric(), true, "ABC123");
	equal("ABC123;".isAlphaNumeric(), false, "ABC123;");
});

test("validator - String.prototype.isHalfKatakana", function(assert) {
	equal("".isHalfKatakana(), true, "<empty>");
	equal("ｱｲｳｴｵ".isHalfKatakana(), true, "ｱｲｳｴｵ");
	equal("ｱｲｳｴｵA".isHalfKatakana(), false, "ｱｲｳｴｵA");
});

test("validator - String.prototype.isHalfWidth", function(assert) {
	equal("".isHalfWidth(), true, "<empty>");
	equal("ABC123ｱｲｳ".isHalfWidth(), true, "ABC123ｱｲｳ");
	equal("ABC123ｱｲｳあ".isHalfWidth(), false, "ABC123ｱｲｳあ");
});

test("validator - String.prototype.isFullAlpha", function(assert) {
	equal("".isFullAlpha(), true, "<empty>");
	equal("ＡＢＣＤＥ".isFullAlpha(), true, "ＡＢＣＤＥ");
	equal("ＡＢＣＤＥ１".isFullAlpha(), false, "ＡＢＣＤＥ１");
});

test("validator - String.prototype.isFullNumeric", function(assert) {
	equal("".isFullNumeric(), true, "<empty>");
	equal("１２３４５".isFullNumeric(), true, "１２３４５");
	equal("１２３４５Ａ".isFullNumeric(), false, "１２３４５Ａ");
});

test("validator - String.prototype.isFullAlphaNumeric", function(assert) {
	equal("".isFullAlphaNumeric(), true, "<empty>");
	equal("ＡＢＣ１２３".isFullAlphaNumeric(), true, "ＡＢＣ１２３");
	equal("ＡＢＣ１２３；".isFullAlphaNumeric(), false, "ＡＢＣ１２３；");
});

test("validator - String.prototype.isFullHiragana", function(assert) {
	equal("".isFullHiragana(), true, "<empty>");
	equal("あいうえお".isFullHiragana(), true, "あいうえお");
	equal("あいうえおア".isFullHiragana(), false, "あいうえおア");
});

test("validator - String.prototype.isFullKatakana", function(assert) {
	equal("".isFullKatakana(), true, "<empty>");
	equal("アイウエオ".isFullKatakana(), true, "アイウエオ");
	equal("アイウエオあ".isFullKatakana(), false, "アイウエオあ");
});

test("validator - String.prototype.isFullWidth", function(assert) {
	equal("".isFullWidth(), true, "<empty>");
	equal("ＡＢＣ１２３あいうアイウ".isFullWidth(), true, "ＡＢＣ１２３あいうアイウ");
	equal("ＡＢＣ１２３あいうアイウA".isFullWidth(), false, "ＡＢＣ１２３あいうアイウA");
	equal("ＡＢＣ１２３あいうアイウｱ".isFullWidth(), false, "ＡＢＣ１２３あいうアイウｱ");
});

test("validator - String.prototype.isNumberFormat", function(assert) {
	equal("".isNumberFormat(), true, "<empty>");

	equal("123".isNumberFormat(), true, "123");
	equal("+123".isNumberFormat(), true, "+123");
	equal("-123".isNumberFormat(), true, "-123");
	equal("123.".isNumberFormat(), true, "123.");
	equal("+123.".isNumberFormat(), true, "+123.");
	equal("-123.".isNumberFormat(), true, "-123.");
	equal("123.4".isNumberFormat(), true, "123.4");
	equal("+123.4".isNumberFormat(), true, "+123.4");
	equal("-123.4".isNumberFormat(), true, "-123.4");
	equal(".4".isNumberFormat(), true, ".4");
	equal("+.4".isNumberFormat(), true, "+.4");
	equal("-.4".isNumberFormat(), true, "-.4");

	equal("123A".isNumberFormat(), false, "123A");
	equal("+123A".isNumberFormat(), false, "+123A");
	equal("-123A".isNumberFormat(), false, "-123A");
	equal("123.A".isNumberFormat(), false, "123.A");
	equal("+123.A".isNumberFormat(), false, "+123.A");
	equal("-123.A".isNumberFormat(), false, "-123.A");
	equal("123.4A".isNumberFormat(), false, "123.4A");
	equal("+123.4A".isNumberFormat(), false, "+123.4A");
	equal("-123.4A".isNumberFormat(), false, "-123.4A");
	equal(".".isNumberFormat(), false, ".");
	equal(".A".isNumberFormat(), false, ".A");
	equal("+.A".isNumberFormat(), false, "+.A");
	equal("-.A".isNumberFormat(), false, "-.A");
	equal(".4A".isNumberFormat(), false, ".4A");
	equal("+.4A".isNumberFormat(), false, "+.4A");
	equal("-.4A".isNumberFormat(), false, "-.4A");
});

test("validator - String.prototype.isDateFormat", function(assert) {
	equal("".isDateFormat(), true, "<empty>");

	equal("2015/01/23".isDateFormat(), true, "2015/01/23");

	equal("20150123".isDateFormat(), false, "20150123");
	equal("2015/00/23".isDateFormat(), false, "2015/00/23");
	equal("2015/13/23".isDateFormat(), false, "2015/13/23");
	equal("2015/01/00".isDateFormat(), false, "2015/01/00");
	equal("2015/01/32".isDateFormat(), false, "2015/01/32");
});

test("validator - String.prototype.isTimeFormat", function(assert) {
	equal("".isTimeFormat(), true, "<empty>");

	equal("00:00:00".isTimeFormat(), true, "00:00:00");
	equal("01:01:01".isTimeFormat(), true, "01:01:01");
	equal("02:02:02".isTimeFormat(), true, "02:02:02");
	equal("03:03:03".isTimeFormat(), true, "03:03:03");
	equal("04:04:04".isTimeFormat(), true, "04:04:04");
	equal("05:05:05".isTimeFormat(), true, "05:05:05");
	equal("06:06:06".isTimeFormat(), true, "06:06:06");
	equal("07:07:07".isTimeFormat(), true, "07:07:07");
	equal("08:08:08".isTimeFormat(), true, "08:08:08");
	equal("09:09:09".isTimeFormat(), true, "09:09:09");
	equal("10:10:10".isTimeFormat(), true, "10:10:10");
	equal("11:10:10".isTimeFormat(), true, "11:10:10");
	equal("12:20:20".isTimeFormat(), true, "12:20:20");
	equal("13:30:30".isTimeFormat(), true, "13:30:30");
	equal("14:40:40".isTimeFormat(), true, "14:40:40");
	equal("15:50:50".isTimeFormat(), true, "15:50:50");
	equal("16:19:19".isTimeFormat(), true, "16:19:19");
	equal("17:29:29".isTimeFormat(), true, "17:29:29");
	equal("18:39:39".isTimeFormat(), true, "18:39:39");
	equal("19:49:49".isTimeFormat(), true, "19:49:49");
	equal("20:59:59".isTimeFormat(), true, "20:59:59");
	equal("21:59:59".isTimeFormat(), true, "21:59:59");
	equal("22:59:59".isTimeFormat(), true, "22:59:59");
	equal("23:59:59".isTimeFormat(), true, "23:59:59");

	equal("24:59:59".isTimeFormat(), false, "24:59:59");
	equal("23:60:59".isTimeFormat(), false, "23:60:59");
	equal("23:59:60".isTimeFormat(), false, "23:59:60");
});

test("validator - String.prototype.isDateTimeFormat", function(assert) {
	equal("".isDateTimeFormat(), true, "<empty>");

	equal("2015/01/23 00:00:00".isDateTimeFormat(), true, "2015/01/23 00:00:00");
	equal("2015/01/23 01:01:01".isDateTimeFormat(), true, "2015/01/23 01:01:01");
	equal("2015/01/23 02:02:02".isDateTimeFormat(), true, "2015/01/23 02:02:02");
	equal("2015/01/23 03:03:03".isDateTimeFormat(), true, "2015/01/23 03:03:03");
	equal("2015/01/23 04:04:04".isDateTimeFormat(), true, "2015/01/23 04:04:04");
	equal("2015/01/23 05:05:05".isDateTimeFormat(), true, "2015/01/23 05:05:05");
	equal("2015/01/23 06:06:06".isDateTimeFormat(), true, "2015/01/23 06:06:06");
	equal("2015/01/23 07:07:07".isDateTimeFormat(), true, "2015/01/23 07:07:07");
	equal("2015/01/23 08:08:08".isDateTimeFormat(), true, "2015/01/23 08:08:08");
	equal("2015/01/23 09:09:09".isDateTimeFormat(), true, "2015/01/23 09:09:09");
	equal("2015/01/23 10:10:10".isDateTimeFormat(), true, "2015/01/23 10:10:10");
	equal("2015/01/23 11:10:10".isDateTimeFormat(), true, "2015/01/23 11:10:10");
	equal("2015/01/23 12:20:20".isDateTimeFormat(), true, "2015/01/23 12:20:20");
	equal("2015/01/23 13:30:30".isDateTimeFormat(), true, "2015/01/23 13:30:30");
	equal("2015/01/23 14:40:40".isDateTimeFormat(), true, "2015/01/23 14:40:40");
	equal("2015/01/23 15:50:50".isDateTimeFormat(), true, "2015/01/23 15:50:50");
	equal("2015/01/23 16:19:19".isDateTimeFormat(), true, "2015/01/23 16:19:19");
	equal("2015/01/23 17:29:29".isDateTimeFormat(), true, "2015/01/23 17:29:29");
	equal("2015/01/23 18:39:39".isDateTimeFormat(), true, "2015/01/23 18:39:39");
	equal("2015/01/23 19:49:49".isDateTimeFormat(), true, "2015/01/23 19:49:49");
	equal("2015/01/23 20:59:59".isDateTimeFormat(), true, "2015/01/23 20:59:59");
	equal("2015/01/23 21:59:59".isDateTimeFormat(), true, "2015/01/23 21:59:59");
	equal("2015/01/23 22:59:59".isDateTimeFormat(), true, "2015/01/23 22:59:59");
	equal("2015/01/23 23:59:59".isDateTimeFormat(), true, "2015/01/23 23:59:59");

	equal("20150123 000000".isDateTimeFormat(), false, "20150123 000000");
	equal("2015/00/23 23:59:59".isDateTimeFormat(), false, "2015/00/23 23:59:59");
	equal("2015/13/23 23:59:59".isDateTimeFormat(), false, "2015/13/23 23:59:59");
	equal("2015/01/00 23:59:59".isDateTimeFormat(), false, "2015/01/00 23:59:59");
	equal("2015/01/32 23:59:59".isDateTimeFormat(), false, "2015/01/32 23:59:59");
	equal("2015/01/23 24:59:59".isDateTimeFormat(), false, "2015/01/23 24:59:59");
	equal("2015/01/23 23:60:59".isDateTimeFormat(), false, "2015/01/23 23:60:59");
	equal("2015/01/23 23:59:60".isDateTimeFormat(), false, "2015/01/23 23:59:60");
});
