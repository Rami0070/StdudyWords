const WORDS_DATA = [
    {
        "num":  1,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "안녕하세요",
                       "meaning":  "친구나 어른을 만났을 때 반갑게 건네는 기본 인사말",
                       "raw":  "안녕하세요 (친구나 어른을 만났을 때 반갑게 건네는 기본 인사말)"
                   },
        "chinese":  {
                        "native":  "你好",
                        "phonetic":  "Nǐ hǎo",
                        "pronunciation":  "니 하오",
                        "raw":  "你好 (Nǐ hǎo) · 니 하오"
                    },
        "vietnamese":  {
                           "native":  "Xin chào",
                           "phonetic":  "",
                           "pronunciation":  "씬 짜오",
                           "raw":  "Xin chào · 씬 짜오"
                       },
        "filipino":  {
                         "native":  "Kumusta",
                         "phonetic":  "",
                         "pronunciation":  "쿠무스타",
                         "raw":  "Kumusta · 쿠무스타"
                     }
    },
    {
        "num":  2,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "좋은 아침",
                       "meaning":  "아침에 등교하여 친구나 선생님을 만났을 때 하는 인사말",
                       "raw":  "좋은 아침 (아침에 등교하여 친구나 선생님을 만났을 때 하는 인사말)"
                   },
        "chinese":  {
                        "native":  "早上好",
                        "phonetic":  "Zǎoshang hǎo",
                        "pronunciation":  "자오상 하오",
                        "raw":  "早上好 (Zǎoshang hǎo) · 자오상 하오"
                    },
        "vietnamese":  {
                           "native":  "Chào buổi sáng",
                           "phonetic":  "",
                           "pronunciation":  "짜오 부어이 쌍",
                           "raw":  "Chào buổi sáng · 짜오 부어이 쌍"
                       },
        "filipino":  {
                         "native":  "Magandang umaga",
                         "phonetic":  "",
                         "pronunciation":  "마간당 우마가",
                         "raw":  "Magandang umaga · 마간당 우마가"
                     }
    },
    {
        "num":  3,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "고마워 / 감사합니다",
                       "meaning":  "도움을 받았거나 친절에 대해 고마운 마음을 전하는 말",
                       "raw":  "고마워 / 감사합니다 (도움을 받았거나 친절에 대해 고마운 마음을 전하는 말)"
                   },
        "chinese":  {
                        "native":  "谢谢",
                        "phonetic":  "Xièxie",
                        "pronunciation":  "씨에씨에",
                        "raw":  "谢谢 (Xièxie) · 씨에씨에"
                    },
        "vietnamese":  {
                           "native":  "Cảm ơn",
                           "phonetic":  "",
                           "pronunciation":  "깜 언",
                           "raw":  "Cảm ơn · 깜 언"
                       },
        "filipino":  {
                         "native":  "Salamat",
                         "phonetic":  "",
                         "pronunciation":  "살라맛",
                         "raw":  "Salamat · 살라맛"
                     }
    },
    {
        "num":  4,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "천만에요",
                       "meaning":  "고맙다는 인사를 들었을 때 예의 바르게 답하는 말",
                       "raw":  "천만에요 (고맙다는 인사를 들었을 때 예의 바르게 답하는 말)"
                   },
        "chinese":  {
                        "native":  "不客气",
                        "phonetic":  "Bú kèqi",
                        "pronunciation":  "부 커치",
                        "raw":  "不客气 (Bú kèqi) · 부 커치"
                    },
        "vietnamese":  {
                           "native":  "Không có gì",
                           "phonetic":  "",
                           "pronunciation":  "콩 꺼 지",
                           "raw":  "Không có gì · 콩 꺼 지"
                       },
        "filipino":  {
                         "native":  "Walang anuman",
                         "phonetic":  "",
                         "pronunciation":  "왈랑 아누만",
                         "raw":  "Walang anuman · 왈랑 아누만"
                     }
    },
    {
        "num":  5,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "미안해 / 죄송합니다",
                       "meaning":  "실수를 했거나 상대방에게 사과할 때 하는 말",
                       "raw":  "미안해 / 죄송합니다 (실수를 했거나 상대방에게 사과할 때 하는 말)"
                   },
        "chinese":  {
                        "native":  "对不起",
                        "phonetic":  "Duìbuqǐ",
                        "pronunciation":  "두이부치",
                        "raw":  "对不起 (Duìbuqǐ) · 두이부치"
                    },
        "vietnamese":  {
                           "native":  "Xin lỗi",
                           "phonetic":  "",
                           "pronunciation":  "씬 로이",
                           "raw":  "Xin lỗi · 씬 로이"
                       },
        "filipino":  {
                         "native":  "Pasensya na",
                         "phonetic":  "",
                         "pronunciation":  "파센샤 나",
                         "raw":  "Pasensya na · 파센샤 나"
                     }
    },
    {
        "num":  6,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "괜찮아",
                       "meaning":  "사과하는 친구를 안심시키거나 문제없다고 답할 때 하는 말",
                       "raw":  "괜찮아 (사과하는 친구를 안심시키거나 문제없다고 답할 때 하는 말)"
                   },
        "chinese":  {
                        "native":  "没关系",
                        "phonetic":  "Méi guānxi",
                        "pronunciation":  "메이 꽌시",
                        "raw":  "没关系 (Méi guānxi) · 메이 꽌시"
                    },
        "vietnamese":  {
                           "native":  "Không sao",
                           "phonetic":  "",
                           "pronunciation":  "콩 싸오",
                           "raw":  "Không sao · 콩 싸오"
                       },
        "filipino":  {
                         "native":  "Ayos lang",
                         "phonetic":  "",
                         "pronunciation":  "아요스 랑",
                         "raw":  "Ayos lang · 아요스 랑"
                     }
    },
    {
        "num":  7,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "잘 가 / 안녕히 계세요",
                       "meaning":  "하교하거나 친구와 헤어질 때 건네는 인사말",
                       "raw":  "잘 가 / 안녕히 계세요 (하교하거나 친구와 헤어질 때 건네는 인사말)"
                   },
        "chinese":  {
                        "native":  "再见",
                        "phonetic":  "Zàijiàn",
                        "pronunciation":  "자이지엔",
                        "raw":  "再见 (Zàijiàn) · 자이지엔"
                    },
        "vietnamese":  {
                           "native":  "Tạm biệt",
                           "phonetic":  "",
                           "pronunciation":  "땀 비엣",
                           "raw":  "Tạm biệt · 땀 비엣"
                       },
        "filipino":  {
                         "native":  "Paalam",
                         "phonetic":  "",
                         "pronunciation":  "파알람",
                         "raw":  "Paalam · 파알람"
                     }
    },
    {
        "num":  8,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "또 만나자",
                       "meaning":  "헤어지면서 다음 만남을 기약할 때 하는 인사말",
                       "raw":  "또 만나자 (헤어지면서 다음 만남을 기약할 때 하는 인사말)"
                   },
        "chinese":  {
                        "native":  "回头见",
                        "phonetic":  "Huítóu jiàn",
                        "pronunciation":  "후이토우 지엔",
                        "raw":  "回头见 (Huítóu jiàn) · 후이토우 지엔"
                    },
        "vietnamese":  {
                           "native":  "Hẹn gặp lại",
                           "phonetic":  "",
                           "pronunciation":  "헨 갑 라이",
                           "raw":  "Hẹn gặp lại · 헨 갑 라이"
                       },
        "filipino":  {
                         "native":  "Hanggang sa muli",
                         "phonetic":  "",
                         "pronunciation":  "항강 사 물리",
                         "raw":  "Hanggang sa muli · 항강 사 물리"
                     }
    },
    {
        "num":  9,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "네 / 응",
                       "meaning":  "질문이나 부름에 긍정적으로 대답할 때 하는 말",
                       "raw":  "네 / 응 (질문이나 부름에 긍정적으로 대답할 때 하는 말)"
                   },
        "chinese":  {
                        "native":  "是 / 对",
                        "phonetic":  "Shì / Duì",
                        "pronunciation":  "스 / 두이",
                        "raw":  "是 / 对 (Shì / Duì) · 스 / 두이"
                    },
        "vietnamese":  {
                           "native":  "Vâng / Dạ",
                           "phonetic":  "",
                           "pronunciation":  "벙 / 자",
                           "raw":  "Vâng / Dạ · 벙 / 자"
                       },
        "filipino":  {
                         "native":  "Oo / Opo",
                         "phonetic":  "",
                         "pronunciation":  "오오 / 오포",
                         "raw":  "Oo / Opo · 오오 / 오포"
                     }
    },
    {
        "num":  10,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "아니요 / 아니",
                       "meaning":  "질문이나 제안에 부정적으로 대답할 때 하는 말",
                       "raw":  "아니요 / 아니 (질문이나 제안에 부정적으로 대답할 때 하는 말)"
                   },
        "chinese":  {
                        "native":  "不是",
                        "phonetic":  "Bú shì",
                        "pronunciation":  "부 스",
                        "raw":  "不是 (Bú shì) · 부 스"
                    },
        "vietnamese":  {
                           "native":  "Không",
                           "phonetic":  "",
                           "pronunciation":  "콩",
                           "raw":  "Không · 콩"
                       },
        "filipino":  {
                         "native":  "Hindi",
                         "phonetic":  "",
                         "pronunciation":  "힌디",
                         "raw":  "Hindi · 힌디"
                     }
    },
    {
        "num":  11,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "부탁해 / 실례합니다",
                       "meaning":  "정중하게 도움을 요청하거나 양해를 구할 때 쓰는 말",
                       "raw":  "부탁해 / 실례합니다 (정중하게 도움을 요청하거나 양해를 구할 때 쓰는 말)"
                   },
        "chinese":  {
                        "native":  "请 / 拜托",
                        "phonetic":  "Qǐng / Bàituō",
                        "pronunciation":  "칭 / 바이투오",
                        "raw":  "请 / 拜托 (Qǐng / Bàituō) · 칭 / 바이투오"
                    },
        "vietnamese":  {
                           "native":  "Làm ơn",
                           "phonetic":  "",
                           "pronunciation":  "람 언",
                           "raw":  "Làm ơn · 람 언"
                       },
        "filipino":  {
                         "native":  "Pakiusap",
                         "phonetic":  "",
                         "pronunciation":  "파키우삽",
                         "raw":  "Pakiusap · 파키우삽"
                     }
    },
    {
        "num":  12,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "잘 자 / 좋은 저녁",
                       "meaning":  "저녁에 헤어지거나 잠자리에 들기 전 건네는 인사말",
                       "raw":  "잘 자 / 좋은 저녁 (저녁에 헤어지거나 잠자리에 들기 전 건네는 인사말)"
                   },
        "chinese":  {
                        "native":  "晚安",
                        "phonetic":  "Wǎn\u0027ān",
                        "pronunciation":  "완안",
                        "raw":  "晚安 (Wǎn\u0027ān) · 완안"
                    },
        "vietnamese":  {
                           "native":  "Chúc ngủ ngon",
                           "phonetic":  "",
                           "pronunciation":  "쭉 응우 응온",
                           "raw":  "Chúc ngủ ngon · 쭉 응우 응온"
                       },
        "filipino":  {
                         "native":  "Magandang gabi",
                         "phonetic":  "",
                         "pronunciation":  "마간당 가비",
                         "raw":  "Magandang gabi · 마간당 가비"
                     }
    },
    {
        "num":  13,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "축하해",
                       "meaning":  "친구의 생일이나 기쁜 일을 함께 기뻐하며 건네는 말",
                       "raw":  "축하해 (친구의 생일이나 기쁜 일을 함께 기뻐하며 건네는 말)"
                   },
        "chinese":  {
                        "native":  "恭喜",
                        "phonetic":  "Gōngxǐ",
                        "pronunciation":  "꽁시",
                        "raw":  "恭喜 (Gōngxǐ) · 꽁시"
                    },
        "vietnamese":  {
                           "native":  "Chúc mừng",
                           "phonetic":  "",
                           "pronunciation":  "쭉 믕",
                           "raw":  "Chúc mừng · 쭉 믕"
                       },
        "filipino":  {
                         "native":  "Binabati kita",
                         "phonetic":  "",
                         "pronunciation":  "비나바티 키타",
                         "raw":  "Binabati kita · 비나바티 키타"
                     }
    },
    {
        "num":  14,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "이름이 뭐니?",
                       "meaning":  "처음 만난 친구의 이름을 물어볼 때 쓰는 표현",
                       "raw":  "이름이 뭐니? (처음 만난 친구의 이름을 물어볼 때 쓰는 표현)"
                   },
        "chinese":  {
                        "native":  "你叫什么名字？",
                        "phonetic":  "Nǐ jiào shénme míngzi?",
                        "pronunciation":  "니 짜오 션머 밍즈?",
                        "raw":  "你叫什么名字？ (Nǐ jiào shénme míngzi?) · 니 짜오 션머 밍즈?"
                    },
        "vietnamese":  {
                           "native":  "Bạn tên là gì?",
                           "phonetic":  "",
                           "pronunciation":  "반 뗀 라 지?",
                           "raw":  "Bạn tên là gì? · 반 뗀 라 지?"
                       },
        "filipino":  {
                         "native":  "Anong pangalan mo?",
                         "phonetic":  "",
                         "pronunciation":  "아농 팡알란 모?",
                         "raw":  "Anong pangalan mo? · 아농 팡알란 모?"
                     }
    },
    {
        "num":  15,
        "domainId":  1,
        "domainName":  "인사 및 예절",
        "korean":  {
                       "word":  "만나서 반가워",
                       "meaning":  "새로운 친구와 처음 인사하며 반가움을 나타내는 말",
                       "raw":  "만나서 반가워 (새로운 친구와 처음 인사하며 반가움을 나타내는 말)"
                   },
        "chinese":  {
                        "native":  "很高兴认识你",
                        "phonetic":  "Hěn gāoxìng rènshi nǐ",
                        "pronunciation":  "헌 까오싱 런스 니",
                        "raw":  "很高兴认识你 (Hěn gāoxìng rènshi nǐ) · 헌 까오싱 런스 니"
                    },
        "vietnamese":  {
                           "native":  "Rất vui được gặp bạn",
                           "phonetic":  "",
                           "pronunciation":  "럿 부이 드억 갑 반",
                           "raw":  "Rất vui được gặp bạn · 럿 부이 드억 갑 반"
                       },
        "filipino":  {
                         "native":  "Masaya akong makilala ka",
                         "phonetic":  "",
                         "pronunciation":  "마사야 아콩 마킬랄라 카",
                         "raw":  "Masaya akong makilala ka · 마사야 아콩 마킬랄라 카"
                     }
    },
    {
        "num":  16,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "학교",
                       "meaning":  "선생님과 친구들을 만나 공부하고 생활하는 배움터",
                       "raw":  "학교 (선생님과 친구들을 만나 공부하고 생활하는 배움터)"
                   },
        "chinese":  {
                        "native":  "学校",
                        "phonetic":  "Xuéxiào",
                        "pronunciation":  "쉬에시아오",
                        "raw":  "学校 (Xuéxiào) · 쉬에시아오"
                    },
        "vietnamese":  {
                           "native":  "Trường học",
                           "phonetic":  "",
                           "pronunciation":  "쯔엉 혹",
                           "raw":  "Trường học · 쯔엉 혹"
                       },
        "filipino":  {
                         "native":  "Paaralan",
                         "phonetic":  "",
                         "pronunciation":  "파아랄란",
                         "raw":  "Paaralan · 파아랄란"
                     }
    },
    {
        "num":  17,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "교실",
                       "meaning":  "학교에서 같은 반 친구들과 함께 수업을 듣는 방",
                       "raw":  "교실 (학교에서 같은 반 친구들과 함께 수업을 듣는 방)"
                   },
        "chinese":  {
                        "native":  "教室",
                        "phonetic":  "Jiàoshì",
                        "pronunciation":  "지아오스",
                        "raw":  "教室 (Jiàoshì) · 지아오스"
                    },
        "vietnamese":  {
                           "native":  "Lớp học",
                           "phonetic":  "",
                           "pronunciation":  "럽 혹",
                           "raw":  "Lớp học · 럽 혹"
                       },
        "filipino":  {
                         "native":  "Silid-aralan",
                         "phonetic":  "",
                         "pronunciation":  "실리드 아랄란",
                         "raw":  "Silid-aralan · 실리드 아랄란"
                     }
    },
    {
        "num":  18,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "선생님",
                       "meaning":  "학교에서 학생들을 가르치고 이끌어 주시는 분",
                       "raw":  "선생님 (학교에서 학생들을 가르치고 이끌어 주시는 분)"
                   },
        "chinese":  {
                        "native":  "老师",
                        "phonetic":  "Lǎoshī",
                        "pronunciation":  "라오스",
                        "raw":  "老师 (Lǎoshī) · 라오스"
                    },
        "vietnamese":  {
                           "native":  "Giáo viên (Thầy/Cô)",
                           "phonetic":  "",
                           "pronunciation":  "자오 비엔 (터이/꼬)",
                           "raw":  "Giáo viên (Thầy/Cô) · 자오 비엔 (터이/꼬)"
                       },
        "filipino":  {
                         "native":  "Guro",
                         "phonetic":  "",
                         "pronunciation":  "구로",
                         "raw":  "Guro · 구로"
                     }
    },
    {
        "num":  19,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "반 친구 (급우)",
                       "meaning":  "같은 학급에서 함께 공부하고 생활하는 친구",
                       "raw":  "반 친구 (급우) (같은 학급에서 함께 공부하고 생활하는 친구)"
                   },
        "chinese":  {
                        "native":  "同学",
                        "phonetic":  "Tóngxué",
                        "pronunciation":  "통쉬에",
                        "raw":  "同学 (Tóngxué) · 통쉬에"
                    },
        "vietnamese":  {
                           "native":  "Bạn cùng lớp",
                           "phonetic":  "",
                           "pronunciation":  "반 꿍 럽",
                           "raw":  "Bạn cùng lớp · 반 꿍 럽"
                       },
        "filipino":  {
                         "native":  "Kaklase",
                         "phonetic":  "",
                         "pronunciation":  "카클라세",
                         "raw":  "Kaklase · 카클라세"
                     }
    },
    {
        "num":  20,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "학생",
                       "meaning":  "학교에 다니면서 지식을 배우고 익히는 사람",
                       "raw":  "학생 (학교에 다니면서 지식을 배우고 익히는 사람)"
                   },
        "chinese":  {
                        "native":  "学生",
                        "phonetic":  "Xuésheng",
                        "pronunciation":  "쉬에셩",
                        "raw":  "学生 (Xuésheng) · 쉬에셩"
                    },
        "vietnamese":  {
                           "native":  "Học sinh",
                           "phonetic":  "",
                           "pronunciation":  "혹 씬",
                           "raw":  "Học sinh · 혹 씬"
                       },
        "filipino":  {
                         "native":  "Estudyante",
                         "phonetic":  "",
                         "pronunciation":  "에스투디안테",
                         "raw":  "Estudyante · 에스투디안테"
                     }
    },
    {
        "num":  21,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "책 (교과서)",
                       "meaning":  "수업 시간에 읽거나 공부할 내용이 적혀 있는 도서",
                       "raw":  "책 (교과서) (수업 시간에 읽거나 공부할 내용이 적혀 있는 도서)"
                   },
        "chinese":  {
                        "native":  "书",
                        "phonetic":  "Shū",
                        "pronunciation":  "슈",
                        "raw":  "书 (Shū) · 슈"
                    },
        "vietnamese":  {
                           "native":  "Sách",
                           "phonetic":  "",
                           "pronunciation":  "싹",
                           "raw":  "Sách · 싹"
                       },
        "filipino":  {
                         "native":  "Aklat / Libro",
                         "phonetic":  "",
                         "pronunciation":  "아클랏 / 리브로",
                         "raw":  "Aklat / Libro · 아클랏 / 리브로"
                     }
    },
    {
        "num":  22,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "공책",
                       "meaning":  "수업 내용이나 알림장 등을 글씨로 적어 두는 노트",
                       "raw":  "공책 (수업 내용이나 알림장 등을 글씨로 적어 두는 노트)"
                   },
        "chinese":  {
                        "native":  "本子",
                        "phonetic":  "Běnzi",
                        "pronunciation":  "번즈",
                        "raw":  "本子 (Běnzi) · 번즈"
                    },
        "vietnamese":  {
                           "native":  "Vở",
                           "phonetic":  "",
                           "pronunciation":  "버",
                           "raw":  "Vở · 버"
                       },
        "filipino":  {
                         "native":  "Kwaderno",
                         "phonetic":  "",
                         "pronunciation":  "콰데르노",
                         "raw":  "Kwaderno · 콰데르노"
                     }
    },
    {
        "num":  23,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "연필",
                       "meaning":  "종이에 글씨를 쓰거나 그림을 그릴 때 사용하는 필기도구",
                       "raw":  "연필 (종이에 글씨를 쓰거나 그림을 그릴 때 사용하는 필기도구)"
                   },
        "chinese":  {
                        "native":  "铅笔",
                        "phonetic":  "Qiānbǐ",
                        "pronunciation":  "치엔비",
                        "raw":  "铅笔 (Qiānbǐ) · 치엔비"
                    },
        "vietnamese":  {
                           "native":  "Bút chì",
                           "phonetic":  "",
                           "pronunciation":  "붓 찌",
                           "raw":  "Bút chì · 붓 찌"
                       },
        "filipino":  {
                         "native":  "Lapis",
                         "phonetic":  "",
                         "pronunciation":  "라피스",
                         "raw":  "Lapis · 라피스"
                     }
    },
    {
        "num":  24,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "지우개",
                       "meaning":  "연필로 잘못 쓴 글씨나 그림을 지우는 학용품",
                       "raw":  "지우개 (연필로 잘못 쓴 글씨나 그림을 지우는 학용품)"
                   },
        "chinese":  {
                        "native":  "橡皮",
                        "phonetic":  "Xiàngpí",
                        "pronunciation":  "씨앙피",
                        "raw":  "橡皮 (Xiàngpí) · 씨앙피"
                    },
        "vietnamese":  {
                           "native":  "Cục tẩy",
                           "phonetic":  "",
                           "pronunciation":  "꾹 떠이",
                           "raw":  "Cục tẩy · 꾹 떠이"
                       },
        "filipino":  {
                         "native":  "Pambura",
                         "phonetic":  "",
                         "pronunciation":  "팜부라",
                         "raw":  "Pambura · 팜부라"
                     }
    },
    {
        "num":  25,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "자",
                       "meaning":  "길이를 재거나 곧은 선을 그을 때 사용하는 학용품",
                       "raw":  "자 (길이를 재거나 곧은 선을 그을 때 사용하는 학용품)"
                   },
        "chinese":  {
                        "native":  "尺子",
                        "phonetic":  "Chǐzi",
                        "pronunciation":  "츠즈",
                        "raw":  "尺子 (Chǐzi) · 츠즈"
                    },
        "vietnamese":  {
                           "native":  "Thước kẻ",
                           "phonetic":  "",
                           "pronunciation":  "트억 깨",
                           "raw":  "Thước kẻ · 트억 깨"
                       },
        "filipino":  {
                         "native":  "Panukat",
                         "phonetic":  "",
                         "pronunciation":  "파누캇",
                         "raw":  "Panukat · 파누캇"
                     }
    },
    {
        "num":  26,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "필통",
                       "meaning":  "연필, 지우개, 자 등 필기도구를 담아 두는 통",
                       "raw":  "필통 (연필, 지우개, 자 등 필기도구를 담아 두는 통)"
                   },
        "chinese":  {
                        "native":  "文具盒",
                        "phonetic":  "Wénjùhé",
                        "pronunciation":  "원쥐허",
                        "raw":  "文具盒 (Wénjùhé) · 원쥐허"
                    },
        "vietnamese":  {
                           "native":  "Hộp bút",
                           "phonetic":  "",
                           "pronunciation":  "홉 붓",
                           "raw":  "Hộp bút · 홉 붓"
                       },
        "filipino":  {
                         "native":  "Lalagyan ng lapis",
                         "phonetic":  "",
                         "pronunciation":  "랄라기안 낭 라피스",
                         "raw":  "Lalagyan ng lapis · 랄라기안 낭 라피스"
                     }
    },
    {
        "num":  27,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "책가방",
                       "meaning":  "책과 학용품을 넣어 학교에 메고 다니는 가방",
                       "raw":  "책가방 (책과 학용품을 넣어 학교에 메고 다니는 가방)"
                   },
        "chinese":  {
                        "native":  "书包",
                        "phonetic":  "Shūbāo",
                        "pronunciation":  "슈바오",
                        "raw":  "书包 (Shūbāo) · 슈바오"
                    },
        "vietnamese":  {
                           "native":  "Cặp sách",
                           "phonetic":  "",
                           "pronunciation":  "깝 싹",
                           "raw":  "Cặp sách · 깝 싹"
                       },
        "filipino":  {
                         "native":  "Bag na pampaaralan",
                         "phonetic":  "",
                         "pronunciation":  "바그 나 팜파아랄란",
                         "raw":  "Bag na pampaaralan · 바그 나 팜파아랄란"
                     }
    },
    {
        "num":  28,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "책상",
                       "meaning":  "책을 펼쳐 놓고 글을 쓰거나 공부할 때 쓰는 가구",
                       "raw":  "책상 (책을 펼쳐 놓고 글을 쓰거나 공부할 때 쓰는 가구)"
                   },
        "chinese":  {
                        "native":  "桌子",
                        "phonetic":  "Zhuōzi",
                        "pronunciation":  "주어즈",
                        "raw":  "桌子 (Zhuōzi) · 주어즈"
                    },
        "vietnamese":  {
                           "native":  "Bàn học",
                           "phonetic":  "",
                           "pronunciation":  "반 혹",
                           "raw":  "Bàn học · 반 혹"
                       },
        "filipino":  {
                         "native":  "Lamesa",
                         "phonetic":  "",
                         "pronunciation":  "라메사",
                         "raw":  "Lamesa · 라메사"
                     }
    },
    {
        "num":  29,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "의자",
                       "meaning":  "교실이나 집에서 앉을 때 사용하는 가구",
                       "raw":  "의자 (교실이나 집에서 앉을 때 사용하는 가구)"
                   },
        "chinese":  {
                        "native":  "椅子",
                        "phonetic":  "Yǐzi",
                        "pronunciation":  "이즈",
                        "raw":  "椅子 (Yǐzi) · 이즈"
                    },
        "vietnamese":  {
                           "native":  "Ghế",
                           "phonetic":  "",
                           "pronunciation":  "게",
                           "raw":  "Ghế · 게"
                       },
        "filipino":  {
                         "native":  "Upuan",
                         "phonetic":  "",
                         "pronunciation":  "우푸안",
                         "raw":  "Upuan · 우푸안"
                     }
    },
    {
        "num":  30,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "칠판",
                       "meaning":  "선생님이 수업 내용을 적거나 화면을 보여 주시는 판",
                       "raw":  "칠판 (선생님이 수업 내용을 적거나 화면을 보여 주시는 판)"
                   },
        "chinese":  {
                        "native":  "黑板",
                        "phonetic":  "Hēibǎn",
                        "pronunciation":  "헤이반",
                        "raw":  "黑板 (Hēibǎn) · 헤이반"
                    },
        "vietnamese":  {
                           "native":  "Bảng",
                           "phonetic":  "",
                           "pronunciation":  "방",
                           "raw":  "Bảng · 방"
                       },
        "filipino":  {
                         "native":  "Pisara",
                         "phonetic":  "",
                         "pronunciation":  "피사라",
                         "raw":  "Pisara · 피사라"
                     }
    },
    {
        "num":  31,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "숙제 (과제)",
                       "meaning":  "수업 후 집이나 방과 후에 스스로 해 와야 하는 공부",
                       "raw":  "숙제 (과제) (수업 후 집이나 방과 후에 스스로 해 와야 하는 공부)"
                   },
        "chinese":  {
                        "native":  "作业",
                        "phonetic":  "Zuòyè",
                        "pronunciation":  "주어예",
                        "raw":  "作业 (Zuòyè) · 주어예"
                    },
        "vietnamese":  {
                           "native":  "Bài tập về nhà",
                           "phonetic":  "",
                           "pronunciation":  "바이 떱 베 냐",
                           "raw":  "Bài tập về nhà · 바이 떱 베 냐"
                       },
        "filipino":  {
                         "native":  "Takdang-aralin",
                         "phonetic":  "",
                         "pronunciation":  "탁당 아랄린",
                         "raw":  "Takdang-aralin · 탁당 아랄린"
                     }
    },
    {
        "num":  32,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "시험 (평가)",
                       "meaning":  "배운 내용을 얼마나 잘 이해했는지 확인하는 평가",
                       "raw":  "시험 (평가) (배운 내용을 얼마나 잘 이해했는지 확인하는 평가)"
                   },
        "chinese":  {
                        "native":  "考试",
                        "phonetic":  "Kǎoshì",
                        "pronunciation":  "카오스",
                        "raw":  "考试 (Kǎoshì) · 카오스"
                    },
        "vietnamese":  {
                           "native":  "Bài kiểm tra",
                           "phonetic":  "",
                           "pronunciation":  "바이 끼엠 짜",
                           "raw":  "Bài kiểm tra · 바이 끼엠 짜"
                       },
        "filipino":  {
                         "native":  "Pagsusulit",
                         "phonetic":  "",
                         "pronunciation":  "팍수술릿",
                         "raw":  "Pagsusulit · 팍수술릿"
                     }
    },
    {
        "num":  33,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "공부하다",
                       "meaning":  "새로운 지식이나 기술을 배우고 익히는 활동",
                       "raw":  "공부하다 (새로운 지식이나 기술을 배우고 익히는 활동)"
                   },
        "chinese":  {
                        "native":  "学习",
                        "phonetic":  "Xuéxí",
                        "pronunciation":  "쉬에시",
                        "raw":  "学习 (Xuéxí) · 쉬에시"
                    },
        "vietnamese":  {
                           "native":  "Học",
                           "phonetic":  "",
                           "pronunciation":  "혹",
                           "raw":  "Học · 혹"
                       },
        "filipino":  {
                         "native":  "Mag-aral",
                         "phonetic":  "",
                         "pronunciation":  "막 아랄",
                         "raw":  "Mag-aral · 막 아랄"
                     }
    },
    {
        "num":  34,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "읽다",
                       "meaning":  "책이나 칠판에 적힌 글을 눈으로 보거나 소리 내어 보는 것",
                       "raw":  "읽다 (책이나 칠판에 적힌 글을 눈으로 보거나 소리 내어 보는 것)"
                   },
        "chinese":  {
                        "native":  "读",
                        "phonetic":  "Dú",
                        "pronunciation":  "두",
                        "raw":  "读 (Dú) · 두"
                    },
        "vietnamese":  {
                           "native":  "Đọc",
                           "phonetic":  "",
                           "pronunciation":  "독",
                           "raw":  "Đọc · 독"
                       },
        "filipino":  {
                         "native":  "Magbasa",
                         "phonetic":  "",
                         "pronunciation":  "막바사",
                         "raw":  "Magbasa · 막바사"
                     }
    },
    {
        "num":  35,
        "domainId":  2,
        "domainName":  "학교 및 교실",
        "korean":  {
                       "word":  "쓰다",
                       "meaning":  "공책이나 활동지에 연필이나 펜으로 글자를 적는 것",
                       "raw":  "쓰다 (공책이나 활동지에 연필이나 펜으로 글자를 적는 것)"
                   },
        "chinese":  {
                        "native":  "写",
                        "phonetic":  "Xiě",
                        "pronunciation":  "씨에",
                        "raw":  "写 (Xiě) · 씨에"
                    },
        "vietnamese":  {
                           "native":  "Viết",
                           "phonetic":  "",
                           "pronunciation":  "비엣",
                           "raw":  "Viết · 비엣"
                       },
        "filipino":  {
                         "native":  "Magsulat",
                         "phonetic":  "",
                         "pronunciation":  "막술랏",
                         "raw":  "Magsulat · 막술랏"
                     }
    },
    {
        "num":  36,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "친구",
                       "meaning":  "서로 마음을 나누고 가깝게 지내며 함께 노는 또래",
                       "raw":  "친구 (서로 마음을 나누고 가깝게 지내며 함께 노는 또래)"
                   },
        "chinese":  {
                        "native":  "朋友",
                        "phonetic":  "Péngyou",
                        "pronunciation":  "펑요우",
                        "raw":  "朋友 (Péngyou) · 펑요우"
                    },
        "vietnamese":  {
                           "native":  "Bạn bè",
                           "phonetic":  "",
                           "pronunciation":  "반 베",
                           "raw":  "Bạn bè · 반 베"
                       },
        "filipino":  {
                         "native":  "Kaibigan",
                         "phonetic":  "",
                         "pronunciation":  "카이비간",
                         "raw":  "Kaibigan · 카이비간"
                     }
    },
    {
        "num":  37,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "놀다",
                       "meaning":  "친구들과 재미있는 활동이나 게임을 하며 시간을 보내다",
                       "raw":  "놀다 (친구들과 재미있는 활동이나 게임을 하며 시간을 보내다)"
                   },
        "chinese":  {
                        "native":  "玩",
                        "phonetic":  "Wán",
                        "pronunciation":  "완",
                        "raw":  "玩 (Wán) · 완"
                    },
        "vietnamese":  {
                           "native":  "Chơi",
                           "phonetic":  "",
                           "pronunciation":  "쩌이",
                           "raw":  "Chơi · 쩌이"
                       },
        "filipino":  {
                         "native":  "Maglaro",
                         "phonetic":  "",
                         "pronunciation":  "막라로",
                         "raw":  "Maglaro · 막라로"
                     }
    },
    {
        "num":  38,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "같이 놀자",
                       "meaning":  "쉬는 시간이나 방과 후에 친구에게 함께 놀기를 청하는 말",
                       "raw":  "같이 놀자 (쉬는 시간이나 방과 후에 친구에게 함께 놀기를 청하는 말)"
                   },
        "chinese":  {
                        "native":  "一起玩吧",
                        "phonetic":  "Yìqǐ wán ba",
                        "pronunciation":  "이치 완 바",
                        "raw":  "一起玩吧 (Yìqǐ wán ba) · 이치 완 바"
                    },
        "vietnamese":  {
                           "native":  "Chơi cùng nhau nhé",
                           "phonetic":  "",
                           "pronunciation":  "쩌이 꿍 냐우 녜",
                           "raw":  "Chơi cùng nhau nhé · 쩌이 꿍 냐우 녜"
                       },
        "filipino":  {
                         "native":  "Maglaro tayo",
                         "phonetic":  "",
                         "pronunciation":  "막라로 타요",
                         "raw":  "Maglaro tayo · 막라로 타요"
                     }
    },
    {
        "num":  39,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "축구 / 공놀이",
                       "meaning":  "운동장이나 체육관에서 공을 차거나 패스하며 하는 경기",
                       "raw":  "축구 / 공놀이 (운동장이나 체육관에서 공을 차거나 패스하며 하는 경기)"
                   },
        "chinese":  {
                        "native":  "踢足球",
                        "phonetic":  "Tī zúqiú",
                        "pronunciation":  "티 주치우",
                        "raw":  "踢足球 (Tī zúqiú) · 티 주치우"
                    },
        "vietnamese":  {
                           "native":  "Bóng đá",
                           "phonetic":  "",
                           "pronunciation":  "봉 다",
                           "raw":  "Bóng đá · 봉 다"
                       },
        "filipino":  {
                         "native":  "Laro ng bola (Futbol)",
                         "phonetic":  "",
                         "pronunciation":  "라로 낭 볼라 (풋볼)",
                         "raw":  "Laro ng bola (Futbol) · 라로 낭 볼라 (풋볼)"
                     }
    },
    {
        "num":  40,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "숨바꼭질",
                       "meaning":  "술래가 눈을 감는 동안 숨은 친구들을 찾아내는 놀이",
                       "raw":  "숨바꼭질 (술래가 눈을 감는 동안 숨은 친구들을 찾아내는 놀이)"
                   },
        "chinese":  {
                        "native":  "捉迷藏",
                        "phonetic":  "Zhuōmícáng",
                        "pronunciation":  "주어미창",
                        "raw":  "捉迷藏 (Zhuōmícáng) · 주어미창"
                    },
        "vietnamese":  {
                           "native":  "Trốn tìm",
                           "phonetic":  "",
                           "pronunciation":  "쫀 띰",
                           "raw":  "Trốn tìm · 쫀 띰"
                       },
        "filipino":  {
                         "native":  "Tagu-taguan",
                         "phonetic":  "",
                         "pronunciation":  "타구 타구안",
                         "raw":  "Tagu-taguan · 타구 타구안"
                     }
    },
    {
        "num":  41,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "네 차례야",
                       "meaning":  "보드게임이나 놀이에서 다음 친구의 순서임을 알려 주는 말",
                       "raw":  "네 차례야 (보드게임이나 놀이에서 다음 친구의 순서임을 알려 주는 말)"
                   },
        "chinese":  {
                        "native":  "轮到你了",
                        "phonetic":  "Lún dào nǐ le",
                        "pronunciation":  "룬 따오 니 러",
                        "raw":  "轮到你了 (Lún dào nǐ le) · 룬 따오 니 러"
                    },
        "vietnamese":  {
                           "native":  "Đến lượt bạn",
                           "phonetic":  "",
                           "pronunciation":  "덴 르엇 반",
                           "raw":  "Đến lượt bạn · 덴 르엇 반"
                       },
        "filipino":  {
                         "native":  "Ikaw naman",
                         "phonetic":  "",
                         "pronunciation":  "이카우 나만",
                         "raw":  "Ikaw naman · 이카우 나만"
                     }
    },
    {
        "num":  42,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "모둠 / 팀",
                       "meaning":  "수업 활동이나 경기를 함께하기 위해 모인 작은 집단",
                       "raw":  "모둠 / 팀 (수업 활동이나 경기를 함께하기 위해 모인 작은 집단)"
                   },
        "chinese":  {
                        "native":  "小组 / 队",
                        "phonetic":  "Xiǎozǔ / Duì",
                        "pronunciation":  "시아오주 / 두이",
                        "raw":  "小组 / 队 (Xiǎozǔ / Duì) · 시아오주 / 두이"
                    },
        "vietnamese":  {
                           "native":  "Nhóm / Đội",
                           "phonetic":  "",
                           "pronunciation":  "뇸 / 도이",
                           "raw":  "Nhóm / Đội · 뇸 / 도이"
                       },
        "filipino":  {
                         "native":  "Grupo / Pangkat",
                         "phonetic":  "",
                         "pronunciation":  "그루포 / 팡캇",
                         "raw":  "Grupo / Pangkat · 그루포 / 팡캇"
                     }
    },
    {
        "num":  43,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "이기다",
                       "meaning":  "놀이, 게임, 시합에서 승리하다",
                       "raw":  "이기다 (놀이, 게임, 시합에서 승리하다)"
                   },
        "chinese":  {
                        "native":  "赢",
                        "phonetic":  "Yíng",
                        "pronunciation":  "잉",
                        "raw":  "赢 (Yíng) · 잉"
                    },
        "vietnamese":  {
                           "native":  "Thắng",
                           "phonetic":  "",
                           "pronunciation":  "탕",
                           "raw":  "Thắng · 탕"
                       },
        "filipino":  {
                         "native":  "Manalo / Panalo",
                         "phonetic":  "",
                         "pronunciation":  "마날로 / 파날로",
                         "raw":  "Manalo / Panalo · 마날로 / 파날로"
                     }
    },
    {
        "num":  44,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "지다",
                       "meaning":  "놀이, 게임, 시합에서 패배하다",
                       "raw":  "지다 (놀이, 게임, 시합에서 패배하다)"
                   },
        "chinese":  {
                        "native":  "输",
                        "phonetic":  "Shū",
                        "pronunciation":  "슈",
                        "raw":  "输 (Shū) · 슈"
                    },
        "vietnamese":  {
                           "native":  "Thua",
                           "phonetic":  "",
                           "pronunciation":  "투아",
                           "raw":  "Thua · 투아"
                       },
        "filipino":  {
                         "native":  "Matalo / Talo",
                         "phonetic":  "",
                         "pronunciation":  "마탈로 / 탈로",
                         "raw":  "Matalo / Talo · 마탈로 / 탈로"
                     }
    },
    {
        "num":  45,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "힘내 / 파이팅",
                       "meaning":  "친구가 용기를 내어 끝까지 해낼 수 있도록 응원하는 말",
                       "raw":  "힘내 / 파이팅 (친구가 용기를 내어 끝까지 해낼 수 있도록 응원하는 말)"
                   },
        "chinese":  {
                        "native":  "加油！",
                        "phonetic":  "Jiāyóu!",
                        "pronunciation":  "지아요우!",
                        "raw":  "加油！ (Jiāyóu!) · 지아요우!"
                    },
        "vietnamese":  {
                           "native":  "Cố lên!",
                           "phonetic":  "",
                           "pronunciation":  "꼬 렌!",
                           "raw":  "Cố lên! · 꼬 렌!"
                       },
        "filipino":  {
                         "native":  "Kaya mo \u0027yan!",
                         "phonetic":  "",
                         "pronunciation":  "카야 모 얀!",
                         "raw":  "Kaya mo \u0027yan! · 카야 모 얀!"
                     }
    },
    {
        "num":  46,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "도와줘",
                       "meaning":  "혼자 하기 어려운 일이 있을 때 친구나 선생님께 도움을 청하는 말",
                       "raw":  "도와줘 (혼자 하기 어려운 일이 있을 때 친구나 선생님께 도움을 청하는 말)"
                   },
        "chinese":  {
                        "native":  "帮帮我",
                        "phonetic":  "Bāngbang wǒ",
                        "pronunciation":  "방방 워",
                        "raw":  "帮帮我 (Bāngbang wǒ) · 방방 워"
                    },
        "vietnamese":  {
                           "native":  "Giúp mình với",
                           "phonetic":  "",
                           "pronunciation":  "줍 민 버이",
                           "raw":  "Giúp mình với · 줍 민 버이"
                       },
        "filipino":  {
                         "native":  "Tulungan mo ako",
                         "phonetic":  "",
                         "pronunciation":  "툴룽안 모 아코",
                         "raw":  "Tulungan mo ako · 툴룽안 모 아코"
                     }
    },
    {
        "num":  47,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "나누다 / 함께 쓰다",
                       "meaning":  "학용품이나 간식을 친구와 사이좋게 나누어 쓰는 것",
                       "raw":  "나누다 / 함께 쓰다 (학용품이나 간식을 친구와 사이좋게 나누어 쓰는 것)"
                   },
        "chinese":  {
                        "native":  "分享",
                        "phonetic":  "Fēnxiǎng",
                        "pronunciation":  "펀씨앙",
                        "raw":  "分享 (Fēnxiǎng) · 펀씨앙"
                    },
        "vietnamese":  {
                           "native":  "Chia sẻ",
                           "phonetic":  "",
                           "pronunciation":  "찌아 쎄",
                           "raw":  "Chia sẻ · 찌아 쎄"
                       },
        "filipino":  {
                         "native":  "Magbahagi",
                         "phonetic":  "",
                         "pronunciation":  "막바하기",
                         "raw":  "Magbahagi · 막바하기"
                     }
    },
    {
        "num":  48,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "좋아 / 알겠어",
                       "meaning":  "친구의 제안이나 선생님의 설명에 동의하고 수락하는 말",
                       "raw":  "좋아 / 알겠어 (친구의 제안이나 선생님의 설명에 동의하고 수락하는 말)"
                   },
        "chinese":  {
                        "native":  "好的",
                        "phonetic":  "Hǎo de",
                        "pronunciation":  "하오 더",
                        "raw":  "好的 (Hǎo de) · 하오 더"
                    },
        "vietnamese":  {
                           "native":  "Được rồi",
                           "phonetic":  "",
                           "pronunciation":  "드억 로이",
                           "raw":  "Được rồi · 드억 로이"
                       },
        "filipino":  {
                         "native":  "Sige",
                         "phonetic":  "",
                         "pronunciation":  "시게",
                         "raw":  "Sige · 시게"
                     }
    },
    {
        "num":  49,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "빨리 서둘러",
                       "meaning":  "수업 시작 전이나 이동할 때 조금 빠르게 움직이자고 권하는 말",
                       "raw":  "빨리 서둘러 (수업 시작 전이나 이동할 때 조금 빠르게 움직이자고 권하는 말)"
                   },
        "chinese":  {
                        "native":  "快点",
                        "phonetic":  "Kuài diǎn",
                        "pronunciation":  "콰이 디엔",
                        "raw":  "快点 (Kuài diǎn) · 콰이 디엔"
                    },
        "vietnamese":  {
                           "native":  "Nhanh lên",
                           "phonetic":  "",
                           "pronunciation":  "냔 렌",
                           "raw":  "Nhanh lên · 냔 렌"
                       },
        "filipino":  {
                         "native":  "Bilisan mo",
                         "phonetic":  "",
                         "pronunciation":  "빌리산 모",
                         "raw":  "Bilisan mo · 빌리산 모"
                     }
    },
    {
        "num":  50,
        "domainId":  3,
        "domainName":  "친구 및 놀이",
        "korean":  {
                       "word":  "잠깐만 기다려",
                       "meaning":  "준비하거나 따라갈 수 있도록 잠시 멈추어 달라고 요청하는 말",
                       "raw":  "잠깐만 기다려 (준비하거나 따라갈 수 있도록 잠시 멈추어 달라고 요청하는 말)"
                   },
        "chinese":  {
                        "native":  "等一下",
                        "phonetic":  "Děng yíxià",
                        "pronunciation":  "덩 이시아",
                        "raw":  "等一下 (Děng yíxià) · 덩 이시아"
                    },
        "vietnamese":  {
                           "native":  "Chờ một chút",
                           "phonetic":  "",
                           "pronunciation":  "쩌 못 쭛",
                           "raw":  "Chờ một chút · 쩌 못 쭛"
                       },
        "filipino":  {
                         "native":  "Sandali lang",
                         "phonetic":  "",
                         "pronunciation":  "산달리 랑",
                         "raw":  "Sandali lang · 산달리 랑"
                     }
    },
    {
        "num":  51,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "기쁘다 / 즐겁다",
                       "meaning":  "마음이 흐뭇하고 기분이 매우 좋은 상태",
                       "raw":  "기쁘다 / 즐겁다 (마음이 흐뭇하고 기분이 매우 좋은 상태)"
                   },
        "chinese":  {
                        "native":  "高兴",
                        "phonetic":  "Gāoxìng",
                        "pronunciation":  "까오싱",
                        "raw":  "高兴 (Gāoxìng) · 까오싱"
                    },
        "vietnamese":  {
                           "native":  "Vui vẻ",
                           "phonetic":  "",
                           "pronunciation":  "부이 베",
                           "raw":  "Vui vẻ · 부이 베"
                       },
        "filipino":  {
                         "native":  "Masaya",
                         "phonetic":  "",
                         "pronunciation":  "마사야",
                         "raw":  "Masaya · 마사야"
                     }
    },
    {
        "num":  52,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "슬프다",
                       "meaning":  "속상하거나 마음이 아파 눈물이 날 것 같은 상태",
                       "raw":  "슬프다 (속상하거나 마음이 아파 눈물이 날 것 같은 상태)"
                   },
        "chinese":  {
                        "native":  "难过",
                        "phonetic":  "Nánguò",
                        "pronunciation":  "난구어",
                        "raw":  "难过 (Nánguò) · 난구어"
                    },
        "vietnamese":  {
                           "native":  "Buồn",
                           "phonetic":  "",
                           "pronunciation":  "부온",
                           "raw":  "Buồn · 부온"
                       },
        "filipino":  {
                         "native":  "Malungkot",
                         "phonetic":  "",
                         "pronunciation":  "말룽콧",
                         "raw":  "Malungkot · 말룽콧"
                     }
    },
    {
        "num":  53,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "화나다",
                       "meaning":  "불쾌하거나 억울한 일이 있어 언짢고 성이 나는 상태",
                       "raw":  "화나다 (불쾌하거나 억울한 일이 있어 언짢고 성이 나는 상태)"
                   },
        "chinese":  {
                        "native":  "生气",
                        "phonetic":  "Shēngqì",
                        "pronunciation":  "셩치",
                        "raw":  "生气 (Shēngqì) · 셩치"
                    },
        "vietnamese":  {
                           "native":  "Tức giận",
                           "phonetic":  "",
                           "pronunciation":  "뜩 전",
                           "raw":  "Tức giận · 뜩 전"
                       },
        "filipino":  {
                         "native":  "Galit",
                         "phonetic":  "",
                         "pronunciation":  "갈릿",
                         "raw":  "Galit · 갈릿"
                     }
    },
    {
        "num":  54,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "무섭다 / 두렵다",
                       "meaning":  "낯설거나 위험하게 느껴져 겁이 나는 상태",
                       "raw":  "무섭다 / 두렵다 (낯설거나 위험하게 느껴져 겁이 나는 상태)"
                   },
        "chinese":  {
                        "native":  "害怕",
                        "phonetic":  "Hàipà",
                        "pronunciation":  "하이파",
                        "raw":  "害怕 (Hàipà) · 하이파"
                    },
        "vietnamese":  {
                           "native":  "Sợ",
                           "phonetic":  "",
                           "pronunciation":  "써",
                           "raw":  "Sợ · 써"
                       },
        "filipino":  {
                         "native":  "Takot",
                         "phonetic":  "",
                         "pronunciation":  "타콧",
                         "raw":  "Takot · 타콧"
                     }
    },
    {
        "num":  55,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "피곤하다 / 힘들다",
                       "meaning":  "몸이나 마음이 지쳐서 쉬고 싶은 상태",
                       "raw":  "피곤하다 / 힘들다 (몸이나 마음이 지쳐서 쉬고 싶은 상태)"
                   },
        "chinese":  {
                        "native":  "累",
                        "phonetic":  "Lèi",
                        "pronunciation":  "레이",
                        "raw":  "累 (Lèi) · 레이"
                    },
        "vietnamese":  {
                           "native":  "Mệt",
                           "phonetic":  "",
                           "pronunciation":  "멛",
                           "raw":  "Mệt · 멛"
                       },
        "filipino":  {
                         "native":  "Pagod",
                         "phonetic":  "",
                         "pronunciation":  "파곳",
                         "raw":  "Pagod · 파곳"
                     }
    },
    {
        "num":  56,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "배고프다",
                       "meaning":  "배가 비어 밥이나 간식을 먹고 싶은 상태",
                       "raw":  "배고프다 (배가 비어 밥이나 간식을 먹고 싶은 상태)"
                   },
        "chinese":  {
                        "native":  "饿",
                        "phonetic":  "È",
                        "pronunciation":  "어",
                        "raw":  "饿 (È) · 어"
                    },
        "vietnamese":  {
                           "native":  "Đói bụng",
                           "phonetic":  "",
                           "pronunciation":  "도이 붕",
                           "raw":  "Đói bụng · 도이 붕"
                       },
        "filipino":  {
                         "native":  "Gutom",
                         "phonetic":  "",
                         "pronunciation":  "구톰",
                         "raw":  "Gutom · 구톰"
                     }
    },
    {
        "num":  57,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "목마르다",
                       "meaning":  "목이 말라 물을 마시고 싶은 상태",
                       "raw":  "목마르다 (목이 말라 물을 마시고 싶은 상태)"
                   },
        "chinese":  {
                        "native":  "渴",
                        "phonetic":  "Kě",
                        "pronunciation":  "커",
                        "raw":  "渴 (Kě) · 커"
                    },
        "vietnamese":  {
                           "native":  "Khát nước",
                           "phonetic":  "",
                           "pronunciation":  "캇 느억",
                           "raw":  "Khát nước · 캇 느억"
                       },
        "filipino":  {
                         "native":  "Uhaw",
                         "phonetic":  "",
                         "pronunciation":  "우하우",
                         "raw":  "Uhaw · 우하우"
                     }
    },
    {
        "num":  58,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "좋아하다",
                       "meaning":  "어떤 대상이나 활동에 호감을 느끼고 마음이 끌리다",
                       "raw":  "좋아하다 (어떤 대상이나 활동에 호감을 느끼고 마음이 끌리다)"
                   },
        "chinese":  {
                        "native":  "喜欢",
                        "phonetic":  "Xǐhuan",
                        "pronunciation":  "시환",
                        "raw":  "喜欢 (Xǐhuan) · 시환"
                    },
        "vietnamese":  {
                           "native":  "Thích",
                           "phonetic":  "",
                           "pronunciation":  "틱",
                           "raw":  "Thích · 틱"
                       },
        "filipino":  {
                         "native":  "Gusto",
                         "phonetic":  "",
                         "pronunciation":  "구스토",
                         "raw":  "Gusto · 구스토"
                     }
    },
    {
        "num":  59,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "싫어하다",
                       "meaning":  "어떤 대상이나 활동이 마음에 들지 않아 피하고 싶다",
                       "raw":  "싫어하다 (어떤 대상이나 활동이 마음에 들지 않아 피하고 싶다)"
                   },
        "chinese":  {
                        "native":  "不喜欢",
                        "phonetic":  "Bù xǐhuan",
                        "pronunciation":  "부 시환",
                        "raw":  "不喜欢 (Bù xǐhuan) · 부 시환"
                    },
        "vietnamese":  {
                           "native":  "Không thích",
                           "phonetic":  "",
                           "pronunciation":  "콩 틱",
                           "raw":  "Không thích · 콩 틱"
                       },
        "filipino":  {
                         "native":  "Ayaw",
                         "phonetic":  "",
                         "pronunciation":  "아야우",
                         "raw":  "Ayaw · 아야우"
                     }
    },
    {
        "num":  60,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "아프다",
                       "meaning":  "다치거나 병이 나서 몸에 통증이 느껴지는 상태",
                       "raw":  "아프다 (다치거나 병이 나서 몸에 통증이 느껴지는 상태)"
                   },
        "chinese":  {
                        "native":  "疼",
                        "phonetic":  "Téng",
                        "pronunciation":  "텅",
                        "raw":  "疼 (Téng) · 텅"
                    },
        "vietnamese":  {
                           "native":  "Đau",
                           "phonetic":  "",
                           "pronunciation":  "다우",
                           "raw":  "Đau · 다우"
                       },
        "filipino":  {
                         "native":  "Masakit",
                         "phonetic":  "",
                         "pronunciation":  "마사킷",
                         "raw":  "Masakit · 마사킷"
                     }
    },
    {
        "num":  61,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "배 (신체)",
                       "meaning":  "음식을 소화시키는 몸의 가운데 부분",
                       "raw":  "배 (신체) (음식을 소화시키는 몸의 가운데 부분)"
                   },
        "chinese":  {
                        "native":  "肚子",
                        "phonetic":  "Dùzi",
                        "pronunciation":  "두즈",
                        "raw":  "肚子 (Dùzi) · 두즈"
                    },
        "vietnamese":  {
                           "native":  "Bụng",
                           "phonetic":  "",
                           "pronunciation":  "붕",
                           "raw":  "Bụng · 붕"
                       },
        "filipino":  {
                         "native":  "Tiyan",
                         "phonetic":  "",
                         "pronunciation":  "티얀",
                         "raw":  "Tiyan · 티얀"
                     }
    },
    {
        "num":  62,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "머리",
                       "meaning":  "눈, 코, 입과 뇌가 있는 신체의 가장 윗부분",
                       "raw":  "머리 (눈, 코, 입과 뇌가 있는 신체의 가장 윗부분)"
                   },
        "chinese":  {
                        "native":  "头",
                        "phonetic":  "Tóu",
                        "pronunciation":  "토우",
                        "raw":  "头 (Tóu) · 토우"
                    },
        "vietnamese":  {
                           "native":  "Đầu",
                           "phonetic":  "",
                           "pronunciation":  "더우",
                           "raw":  "Đầu · 더우"
                       },
        "filipino":  {
                         "native":  "Ulo",
                         "phonetic":  "",
                         "pronunciation":  "울로",
                         "raw":  "Ulo · 울로"
                     }
    },
    {
        "num":  63,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "손",
                       "meaning":  "물건을 잡거나 글씨를 쓸 때 사용하는 팔 끝의 신체 부위",
                       "raw":  "손 (물건을 잡거나 글씨를 쓸 때 사용하는 팔 끝의 신체 부위)"
                   },
        "chinese":  {
                        "native":  "手",
                        "phonetic":  "Shǒu",
                        "pronunciation":  "쇼우",
                        "raw":  "手 (Shǒu) · 쇼우"
                    },
        "vietnamese":  {
                           "native":  "Tay",
                           "phonetic":  "",
                           "pronunciation":  "따이",
                           "raw":  "Tay · 따이"
                       },
        "filipino":  {
                         "native":  "Kamay",
                         "phonetic":  "",
                         "pronunciation":  "카마이",
                         "raw":  "Kamay · 카마이"
                     }
    },
    {
        "num":  64,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "발 / 다리",
                       "meaning":  "서거나 걷고 뛸 때 몸을 지탱하는 신체 부위",
                       "raw":  "발 / 다리 (서거나 걷고 뛸 때 몸을 지탱하는 신체 부위)"
                   },
        "chinese":  {
                        "native":  "脚",
                        "phonetic":  "Jiǎo",
                        "pronunciation":  "지아오",
                        "raw":  "脚 (Jiǎo) · 지아오"
                    },
        "vietnamese":  {
                           "native":  "Chân",
                           "phonetic":  "",
                           "pronunciation":  "쩐",
                           "raw":  "Chân · 쩐"
                       },
        "filipino":  {
                         "native":  "Paa",
                         "phonetic":  "",
                         "pronunciation":  "파아",
                         "raw":  "Paa · 파아"
                     }
    },
    {
        "num":  65,
        "domainId":  4,
        "domainName":  "감정 및 표현",
        "korean":  {
                       "word":  "눈",
                       "meaning":  "사물과 글씨를 볼 수 있게 해 주는 얼굴의 감각 기관",
                       "raw":  "눈 (사물과 글씨를 볼 수 있게 해 주는 얼굴의 감각 기관)"
                   },
        "chinese":  {
                        "native":  "眼睛",
                        "phonetic":  "Yǎnjing",
                        "pronunciation":  "옌징",
                        "raw":  "眼睛 (Yǎnjing) · 옌징"
                    },
        "vietnamese":  {
                           "native":  "Mắt",
                           "phonetic":  "",
                           "pronunciation":  "맛",
                           "raw":  "Mắt · 맛"
                       },
        "filipino":  {
                         "native":  "Mata",
                         "phonetic":  "",
                         "pronunciation":  "마타",
                         "raw":  "Mata · 마타"
                     }
    },
    {
        "num":  66,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "일 / 하나 (1)",
                       "meaning":  "자연수의 첫 번째 숫자 1",
                       "raw":  "일 / 하나 (1) (자연수의 첫 번째 숫자 1)"
                   },
        "chinese":  {
                        "native":  "一",
                        "phonetic":  "Yī",
                        "pronunciation":  "이",
                        "raw":  "一 (Yī) · 이"
                    },
        "vietnamese":  {
                           "native":  "Một",
                           "phonetic":  "",
                           "pronunciation":  "못",
                           "raw":  "Một · 못"
                       },
        "filipino":  {
                         "native":  "Isa",
                         "phonetic":  "",
                         "pronunciation":  "이사",
                         "raw":  "Isa · 이사"
                     }
    },
    {
        "num":  67,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "이 / 둘 (2)",
                       "meaning":  "하나에 하나를 더한 숫자 2",
                       "raw":  "이 / 둘 (2) (하나에 하나를 더한 숫자 2)"
                   },
        "chinese":  {
                        "native":  "二",
                        "phonetic":  "Èr",
                        "pronunciation":  "얼",
                        "raw":  "二 (Èr) · 얼"
                    },
        "vietnamese":  {
                           "native":  "Hai",
                           "phonetic":  "",
                           "pronunciation":  "하이",
                           "raw":  "Hai · 하이"
                       },
        "filipino":  {
                         "native":  "Dalawa",
                         "phonetic":  "",
                         "pronunciation":  "달라와",
                         "raw":  "Dalawa · 달라와"
                     }
    },
    {
        "num":  68,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "삼 / 셋 (3)",
                       "meaning":  "둘에 하나를 더한 숫자 3",
                       "raw":  "삼 / 셋 (3) (둘에 하나를 더한 숫자 3)"
                   },
        "chinese":  {
                        "native":  "三",
                        "phonetic":  "Sān",
                        "pronunciation":  "싼",
                        "raw":  "三 (Sān) · 싼"
                    },
        "vietnamese":  {
                           "native":  "Ba",
                           "phonetic":  "",
                           "pronunciation":  "바",
                           "raw":  "Ba · 바"
                       },
        "filipino":  {
                         "native":  "Tatlo",
                         "phonetic":  "",
                         "pronunciation":  "따뜰로",
                         "raw":  "Tatlo · 따뜰로"
                     }
    },
    {
        "num":  69,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "사 / 넷 (4)",
                       "meaning":  "셋에 하나를 더한 숫자 4",
                       "raw":  "사 / 넷 (4) (셋에 하나를 더한 숫자 4)"
                   },
        "chinese":  {
                        "native":  "四",
                        "phonetic":  "Sì",
                        "pronunciation":  "쓰",
                        "raw":  "四 (Sì) · 쓰"
                    },
        "vietnamese":  {
                           "native":  "Bốn",
                           "phonetic":  "",
                           "pronunciation":  "본",
                           "raw":  "Bốn · 본"
                       },
        "filipino":  {
                         "native":  "Apat",
                         "phonetic":  "",
                         "pronunciation":  "아팟",
                         "raw":  "Apat · 아팟"
                     }
    },
    {
        "num":  70,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "오 / 다섯 (5)",
                       "meaning":  "넷에 하나를 더한 숫자 5",
                       "raw":  "오 / 다섯 (5) (넷에 하나를 더한 숫자 5)"
                   },
        "chinese":  {
                        "native":  "五",
                        "phonetic":  "Wǔ",
                        "pronunciation":  "우",
                        "raw":  "五 (Wǔ) · 우"
                    },
        "vietnamese":  {
                           "native":  "Năm",
                           "phonetic":  "",
                           "pronunciation":  "남",
                           "raw":  "Năm · 남"
                       },
        "filipino":  {
                         "native":  "Lima",
                         "phonetic":  "",
                         "pronunciation":  "리마",
                         "raw":  "Lima · 리마"
                     }
    },
    {
        "num":  71,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "육 / 여섯 (6)",
                       "meaning":  "다섯에 하나를 더한 숫자 6",
                       "raw":  "육 / 여섯 (6) (다섯에 하나를 더한 숫자 6)"
                   },
        "chinese":  {
                        "native":  "六",
                        "phonetic":  "Liù",
                        "pronunciation":  "리우",
                        "raw":  "六 (Liù) · 리우"
                    },
        "vietnamese":  {
                           "native":  "Sáu",
                           "phonetic":  "",
                           "pronunciation":  "싸우",
                           "raw":  "Sáu · 싸우"
                       },
        "filipino":  {
                         "native":  "Anim",
                         "phonetic":  "",
                         "pronunciation":  "아님",
                         "raw":  "Anim · 아님"
                     }
    },
    {
        "num":  72,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "칠 / 일곱 (7)",
                       "meaning":  "여섯에 하나를 더한 숫자 7",
                       "raw":  "칠 / 일곱 (7) (여섯에 하나를 더한 숫자 7)"
                   },
        "chinese":  {
                        "native":  "七",
                        "phonetic":  "Qī",
                        "pronunciation":  "치",
                        "raw":  "七 (Qī) · 치"
                    },
        "vietnamese":  {
                           "native":  "Bảy",
                           "phonetic":  "",
                           "pronunciation":  "바이",
                           "raw":  "Bảy · 바이"
                       },
        "filipino":  {
                         "native":  "Pito",
                         "phonetic":  "",
                         "pronunciation":  "피토",
                         "raw":  "Pito · 피토"
                     }
    },
    {
        "num":  73,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "팔 / 여덟 (8)",
                       "meaning":  "일곱에 하나를 더한 숫자 8",
                       "raw":  "팔 / 여덟 (8) (일곱에 하나를 더한 숫자 8)"
                   },
        "chinese":  {
                        "native":  "八",
                        "phonetic":  "Bā",
                        "pronunciation":  "바",
                        "raw":  "八 (Bā) · 바"
                    },
        "vietnamese":  {
                           "native":  "Tám",
                           "phonetic":  "",
                           "pronunciation":  "땀",
                           "raw":  "Tám · 땀"
                       },
        "filipino":  {
                         "native":  "Walo",
                         "phonetic":  "",
                         "pronunciation":  "왈로",
                         "raw":  "Walo · 왈로"
                     }
    },
    {
        "num":  74,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "구 / 아홉 (9)",
                       "meaning":  "여덟에 하나를 더한 숫자 9",
                       "raw":  "구 / 아홉 (9) (여덟에 하나를 더한 숫자 9)"
                   },
        "chinese":  {
                        "native":  "九",
                        "phonetic":  "Jiǔ",
                        "pronunciation":  "지우",
                        "raw":  "九 (Jiǔ) · 지우"
                    },
        "vietnamese":  {
                           "native":  "Chín",
                           "phonetic":  "",
                           "pronunciation":  "찐",
                           "raw":  "Chín · 찐"
                       },
        "filipino":  {
                         "native":  "Siyam",
                         "phonetic":  "",
                         "pronunciation":  "시얌",
                         "raw":  "Siyam · 시얌"
                     }
    },
    {
        "num":  75,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "십 / 열 (10)",
                       "meaning":  "아홉에 하나를 더한 숫자 10",
                       "raw":  "십 / 열 (10) (아홉에 하나를 더한 숫자 10)"
                   },
        "chinese":  {
                        "native":  "十",
                        "phonetic":  "Shí",
                        "pronunciation":  "스",
                        "raw":  "十 (Shí) · 스"
                    },
        "vietnamese":  {
                           "native":  "Mười",
                           "phonetic":  "",
                           "pronunciation":  "므어이",
                           "raw":  "Mười · 므어이"
                       },
        "filipino":  {
                         "native":  "Sampu",
                         "phonetic":  "",
                         "pronunciation":  "삼푸",
                         "raw":  "Sampu · 삼푸"
                     }
    },
    {
        "num":  76,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "오늘",
                       "meaning":  "지금 지나가고 있는 바로 이 날",
                       "raw":  "오늘 (지금 지나가고 있는 바로 이 날)"
                   },
        "chinese":  {
                        "native":  "今天",
                        "phonetic":  "Jīntiān",
                        "pronunciation":  "진티엔",
                        "raw":  "今天 (Jīntiān) · 진티엔"
                    },
        "vietnamese":  {
                           "native":  "Hôm nay",
                           "phonetic":  "",
                           "pronunciation":  "홈 나이",
                           "raw":  "Hôm nay · 홈 나이"
                       },
        "filipino":  {
                         "native":  "Ngayong araw",
                         "phonetic":  "",
                         "pronunciation":  "나용 아라우",
                         "raw":  "Ngayong araw · 나용 아라우"
                     }
    },
    {
        "num":  77,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "내일",
                       "meaning":  "오늘의 바로 다음 날",
                       "raw":  "내일 (오늘의 바로 다음 날)"
                   },
        "chinese":  {
                        "native":  "明天",
                        "phonetic":  "Míngtiān",
                        "pronunciation":  "밍티엔",
                        "raw":  "明天 (Míngtiān) · 밍티엔"
                    },
        "vietnamese":  {
                           "native":  "Ngày mai",
                           "phonetic":  "",
                           "pronunciation":  "응아이 마이",
                           "raw":  "Ngày mai · 응아이 마이"
                       },
        "filipino":  {
                         "native":  "Bukas",
                         "phonetic":  "",
                         "pronunciation":  "부카스",
                         "raw":  "Bukas · 부카스"
                     }
    },
    {
        "num":  78,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "어제",
                       "meaning":  "오늘의 바로 하루 전날",
                       "raw":  "어제 (오늘의 바로 하루 전날)"
                   },
        "chinese":  {
                        "native":  "昨天",
                        "phonetic":  "Zuótiān",
                        "pronunciation":  "주어티엔",
                        "raw":  "昨天 (Zuótiān) · 주어티엔"
                    },
        "vietnamese":  {
                           "native":  "Hôm qua",
                           "phonetic":  "",
                           "pronunciation":  "홈 꾸아",
                           "raw":  "Hôm qua · 홈 꾸아"
                       },
        "filipino":  {
                         "native":  "Kahapon",
                         "phonetic":  "",
                         "pronunciation":  "카하폰",
                         "raw":  "Kahapon · 카하폰"
                     }
    },
    {
        "num":  79,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "지금",
                       "meaning":  "말하고 있는 바로 이 순간",
                       "raw":  "지금 (말하고 있는 바로 이 순간)"
                   },
        "chinese":  {
                        "native":  "现在",
                        "phonetic":  "Xiànzài",
                        "pronunciation":  "씨엔자이",
                        "raw":  "现在 (Xiànzài) · 씨엔자이"
                    },
        "vietnamese":  {
                           "native":  "Bây giờ",
                           "phonetic":  "",
                           "pronunciation":  "버이 저",
                           "raw":  "Bây giờ · 버이 저"
                       },
        "filipino":  {
                         "native":  "Ngayon",
                         "phonetic":  "",
                         "pronunciation":  "나욘",
                         "raw":  "Ngayon · 나욘"
                     }
    },
    {
        "num":  80,
        "domainId":  5,
        "domainName":  "숫자 및 시간",
        "korean":  {
                       "word":  "쉬는 시간",
                       "meaning":  "수업과 수업 사이에 화장실에 가거나 친구들과 쉬는 시간",
                       "raw":  "쉬는 시간 (수업과 수업 사이에 화장실에 가거나 친구들과 쉬는 시간)"
                   },
        "chinese":  {
                        "native":  "课间休息",
                        "phonetic":  "Kèjiān xiūxi",
                        "pronunciation":  "커지엔 시우시",
                        "raw":  "课间休息 (Kèjiān xiūxi) · 커지엔 시우시"
                    },
        "vietnamese":  {
                           "native":  "Giờ ra chơi",
                           "phonetic":  "",
                           "pronunciation":  "저 라 쩌이",
                           "raw":  "Giờ ra chơi · 저 라 쩌이"
                       },
        "filipino":  {
                         "native":  "Oras ng pahinga",
                         "phonetic":  "",
                         "pronunciation":  "오라스 낭 파힝아",
                         "raw":  "Oras ng pahinga · 오라스 낭 파힝아"
                     }
    },
    {
        "num":  81,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "물",
                       "meaning":  "목이 마를 때 마시는 투명한 액체",
                       "raw":  "물 (목이 마를 때 마시는 투명한 액체)"
                   },
        "chinese":  {
                        "native":  "水",
                        "phonetic":  "Shuǐ",
                        "pronunciation":  "슈이",
                        "raw":  "水 (Shuǐ) · 슈이"
                    },
        "vietnamese":  {
                           "native":  "Nước",
                           "phonetic":  "",
                           "pronunciation":  "느억",
                           "raw":  "Nước · 느억"
                       },
        "filipino":  {
                         "native":  "Tubig",
                         "phonetic":  "",
                         "pronunciation":  "투빅",
                         "raw":  "Tubig · 투빅"
                     }
    },
    {
        "num":  82,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "밥",
                       "meaning":  "쌀을 씻어 지은 주식",
                       "raw":  "밥 (쌀을 씻어 지은 주식)"
                   },
        "chinese":  {
                        "native":  "米饭",
                        "phonetic":  "Mǐfàn",
                        "pronunciation":  "미판",
                        "raw":  "米饭 (Mǐfàn) · 미판"
                    },
        "vietnamese":  {
                           "native":  "Cơm",
                           "phonetic":  "",
                           "pronunciation":  "껌",
                           "raw":  "Cơm · 껌"
                       },
        "filipino":  {
                         "native":  "Kanin",
                         "phonetic":  "",
                         "pronunciation":  "카닌",
                         "raw":  "Kanin · 카닌"
                     }
    },
    {
        "num":  83,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "빵",
                       "meaning":  "밀가루를 반죽하여 구워 만든 음식",
                       "raw":  "빵 (밀가루를 반죽하여 구워 만든 음식)"
                   },
        "chinese":  {
                        "native":  "面包",
                        "phonetic":  "Miànbāo",
                        "pronunciation":  "미엔바오",
                        "raw":  "面包 (Miànbāo) · 미엔바오"
                    },
        "vietnamese":  {
                           "native":  "Bánh mì",
                           "phonetic":  "",
                           "pronunciation":  "반 미",
                           "raw":  "Bánh mì · 반 미"
                       },
        "filipino":  {
                         "native":  "Tinapay",
                         "phonetic":  "",
                         "pronunciation":  "티나파이",
                         "raw":  "Tinapay · 티나파이"
                     }
    },
    {
        "num":  84,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "우유",
                       "meaning":  "젖소에게서 얻는 하얗고 영양가 높은 음료",
                       "raw":  "우유 (젖소에게서 얻는 하얗고 영양가 높은 음료)"
                   },
        "chinese":  {
                        "native":  "牛奶",
                        "phonetic":  "Niúnǎi",
                        "pronunciation":  "니우나이",
                        "raw":  "牛奶 (Niúnǎi) · 니우나이"
                    },
        "vietnamese":  {
                           "native":  "Sữa",
                           "phonetic":  "",
                           "pronunciation":  "쓰어",
                           "raw":  "Sữa · 쓰어"
                       },
        "filipino":  {
                         "native":  "Gatas",
                         "phonetic":  "",
                         "pronunciation":  "가타스",
                         "raw":  "Gatas · 가타스"
                     }
    },
    {
        "num":  85,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "과일",
                       "meaning":  "사과, 바나나, 포도 등 나무나 풀에 열리는 열매",
                       "raw":  "과일 (사과, 바나나, 포도 등 나무나 풀에 열리는 열매)"
                   },
        "chinese":  {
                        "native":  "水果",
                        "phonetic":  "Shuǐguǒ",
                        "pronunciation":  "슈이구어",
                        "raw":  "水果 (Shuǐguǒ) · 슈이구어"
                    },
        "vietnamese":  {
                           "native":  "Trái cây / Hoa quả",
                           "phonetic":  "",
                           "pronunciation":  "짜이 꺼이 / 호아 꾸아",
                           "raw":  "Trái cây / Hoa quả · 짜이 꺼이 / 호아 꾸아"
                       },
        "filipino":  {
                         "native":  "Prutas",
                         "phonetic":  "",
                         "pronunciation":  "프루타스",
                         "raw":  "Prutas · 프루타스"
                     }
    },
    {
        "num":  86,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "사탕",
                       "meaning":  "설탕이나 과즙으로 만든 달콤한 간식거리",
                       "raw":  "사탕 (설탕이나 과즙으로 만든 달콤한 간식거리)"
                   },
        "chinese":  {
                        "native":  "糖果",
                        "phonetic":  "Tángguǒ",
                        "pronunciation":  "탕구어",
                        "raw":  "糖果 (Tángguǒ) · 탕구어"
                    },
        "vietnamese":  {
                           "native":  "Kẹo",
                           "phonetic":  "",
                           "pronunciation":  "께오",
                           "raw":  "Kẹo · 께오"
                       },
        "filipino":  {
                         "native":  "Kendi",
                         "phonetic":  "",
                         "pronunciation":  "켄디",
                         "raw":  "Kendi · 켄디"
                     }
    },
    {
        "num":  87,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "점심 (급식)",
                       "meaning":  "낮 시간에 학교 급식실 등에서 먹는 식사",
                       "raw":  "점심 (급식) (낮 시간에 학교 급식실 등에서 먹는 식사)"
                   },
        "chinese":  {
                        "native":  "午饭",
                        "phonetic":  "Wǔfàn",
                        "pronunciation":  "우판",
                        "raw":  "午饭 (Wǔfàn) · 우판"
                    },
        "vietnamese":  {
                           "native":  "Bữa trưa",
                           "phonetic":  "",
                           "pronunciation":  "브어 쯔어",
                           "raw":  "Bữa trưa · 브어 쯔어"
                       },
        "filipino":  {
                         "native":  "Tanghalian",
                         "phonetic":  "",
                         "pronunciation":  "탕할리안",
                         "raw":  "Tanghalian · 탕할리안"
                     }
    },
    {
        "num":  88,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "맛있다",
                       "meaning":  "음식의 맛이 좋아서 먹기에 즐겁다",
                       "raw":  "맛있다 (음식의 맛이 좋아서 먹기에 즐겁다)"
                   },
        "chinese":  {
                        "native":  "好吃",
                        "phonetic":  "Hǎochī",
                        "pronunciation":  "하오츠",
                        "raw":  "好吃 (Hǎochī) · 하오츠"
                    },
        "vietnamese":  {
                           "native":  "Ngon",
                           "phonetic":  "",
                           "pronunciation":  "응온",
                           "raw":  "Ngon · 응온"
                       },
        "filipino":  {
                         "native":  "Masarap",
                         "phonetic":  "",
                         "pronunciation":  "마사랍",
                         "raw":  "Masarap · 마사랍"
                     }
    },
    {
        "num":  89,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "화장실",
                       "meaning":  "용변을 보거나 손을 씻는 장소",
                       "raw":  "화장실 (용변을 보거나 손을 씻는 장소)"
                   },
        "chinese":  {
                        "native":  "洗手间",
                        "phonetic":  "Xǐshǒujiān",
                        "pronunciation":  "시쇼우지엔",
                        "raw":  "洗手间 (Xǐshǒujiān) · 시쇼우지엔"
                    },
        "vietnamese":  {
                           "native":  "Nhà vệ sinh",
                           "phonetic":  "",
                           "pronunciation":  "냐 베 씬",
                           "raw":  "Nhà vệ sinh · 냐 베 씬"
                       },
        "filipino":  {
                         "native":  "Banyo / Palikuran",
                         "phonetic":  "",
                         "pronunciation":  "반요 / 팔리쿠란",
                         "raw":  "Banyo / Palikuran · 반요 / 팔리쿠란"
                     }
    },
    {
        "num":  90,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "집",
                       "meaning":  "가족들과 함께 살며 쉬는 보금자리",
                       "raw":  "집 (가족들과 함께 살며 쉬는 보금자리)"
                   },
        "chinese":  {
                        "native":  "家",
                        "phonetic":  "Jiā",
                        "pronunciation":  "지아",
                        "raw":  "家 (Jiā) · 지아"
                    },
        "vietnamese":  {
                           "native":  "Nhà",
                           "phonetic":  "",
                           "pronunciation":  "냐",
                           "raw":  "Nhà · 냐"
                       },
        "filipino":  {
                         "native":  "Bahay",
                         "phonetic":  "",
                         "pronunciation":  "바하이",
                         "raw":  "Bahay · 바하이"
                     }
    },
    {
        "num":  91,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "창문",
                       "meaning":  "햇빛이 들어오고 환기할 수 있도록 벽에 낸 문",
                       "raw":  "창문 (햇빛이 들어오고 환기할 수 있도록 벽에 낸 문)"
                   },
        "chinese":  {
                        "native":  "窗户",
                        "phonetic":  "Chuānghu",
                        "pronunciation":  "추앙후",
                        "raw":  "窗户 (Chuānghu) · 추앙후"
                    },
        "vietnamese":  {
                           "native":  "Cửa sổ",
                           "phonetic":  "",
                           "pronunciation":  "끄어 쏘",
                           "raw":  "Cửa sổ · 끄어 쏘"
                       },
        "filipino":  {
                         "native":  "Bintana",
                         "phonetic":  "",
                         "pronunciation":  "빈타나",
                         "raw":  "Bintana · 빈타나"
                     }
    },
    {
        "num":  92,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "문 (출입문)",
                       "meaning":  "교실이나 방을 드나들 때 열고 닫는 시설물",
                       "raw":  "문 (출입문) (교실이나 방을 드나들 때 열고 닫는 시설물)"
                   },
        "chinese":  {
                        "native":  "门",
                        "phonetic":  "Mén",
                        "pronunciation":  "먼",
                        "raw":  "门 (Mén) · 먼"
                    },
        "vietnamese":  {
                           "native":  "Cửa",
                           "phonetic":  "",
                           "pronunciation":  "끄어",
                           "raw":  "Cửa · 끄어"
                       },
        "filipino":  {
                         "native":  "Pinto",
                         "phonetic":  "",
                         "pronunciation":  "핀토",
                         "raw":  "Pinto · 핀토"
                     }
    },
    {
        "num":  93,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "시계",
                       "meaning":  "현재 시각을 알려 주는 도구",
                       "raw":  "시계 (현재 시각을 알려 주는 도구)"
                   },
        "chinese":  {
                        "native":  "时钟",
                        "phonetic":  "Shízhōng",
                        "pronunciation":  "스종",
                        "raw":  "时钟 (Shízhōng) · 스종"
                    },
        "vietnamese":  {
                           "native":  "Đồng hồ",
                           "phonetic":  "",
                           "pronunciation":  "동 호",
                           "raw":  "Đồng hồ · 동 호"
                       },
        "filipino":  {
                         "native":  "Orasan",
                         "phonetic":  "",
                         "pronunciation":  "오라산",
                         "raw":  "Orasan · 오라산"
                     }
    },
    {
        "num":  94,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "날씨",
                       "meaning":  "맑음, 흐림, 비, 기온 등 그날의 하늘과 대기 상태",
                       "raw":  "날씨 (맑음, 흐림, 비, 기온 등 그날의 하늘과 대기 상태)"
                   },
        "chinese":  {
                        "native":  "天气",
                        "phonetic":  "Tiānqì",
                        "pronunciation":  "티엔치",
                        "raw":  "天气 (Tiānqì) · 티엔치"
                    },
        "vietnamese":  {
                           "native":  "Thời tiết",
                           "phonetic":  "",
                           "pronunciation":  "터이 띠엣",
                           "raw":  "Thời tiết · 터이 띠엣"
                       },
        "filipino":  {
                         "native":  "Panahon",
                         "phonetic":  "",
                         "pronunciation":  "파나혼",
                         "raw":  "Panahon · 파나혼"
                     }
    },
    {
        "num":  95,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "덥다",
                       "meaning":  "기온이 높아 몸에 열기가 느껴지고 땀이 나는 상태",
                       "raw":  "덥다 (기온이 높아 몸에 열기가 느껴지고 땀이 나는 상태)"
                   },
        "chinese":  {
                        "native":  "热",
                        "phonetic":  "Rè",
                        "pronunciation":  "러",
                        "raw":  "热 (Rè) · 러"
                    },
        "vietnamese":  {
                           "native":  "Nóng",
                           "phonetic":  "",
                           "pronunciation":  "농",
                           "raw":  "Nóng · 농"
                       },
        "filipino":  {
                         "native":  "Mainit",
                         "phonetic":  "",
                         "pronunciation":  "마이닛",
                         "raw":  "Mainit · 마이닛"
                     }
    },
    {
        "num":  96,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "춥다",
                       "meaning":  "기온이 낮아 몸이 시리고 떨리는 상태",
                       "raw":  "춥다 (기온이 낮아 몸이 시리고 떨리는 상태)"
                   },
        "chinese":  {
                        "native":  "冷",
                        "phonetic":  "Lěng",
                        "pronunciation":  "렁",
                        "raw":  "冷 (Lěng) · 렁"
                    },
        "vietnamese":  {
                           "native":  "Lạnh",
                           "phonetic":  "",
                           "pronunciation":  "란",
                           "raw":  "Lạnh · 란"
                       },
        "filipino":  {
                         "native":  "Malamig",
                         "phonetic":  "",
                         "pronunciation":  "말라믹",
                         "raw":  "Malamig · 말라믹"
                     }
    },
    {
        "num":  97,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "비",
                       "meaning":  "하늘의 구름에서 물방울이 땅으로 내리는 현상",
                       "raw":  "비 (하늘의 구름에서 물방울이 땅으로 내리는 현상)"
                   },
        "chinese":  {
                        "native":  "雨 / 下雨",
                        "phonetic":  "Yǔ / Xiàyǔ",
                        "pronunciation":  "위 / 시아위",
                        "raw":  "雨 / 下雨 (Yǔ / Xiàyǔ) · 위 / 시아위"
                    },
        "vietnamese":  {
                           "native":  "Mưa",
                           "phonetic":  "",
                           "pronunciation":  "므아",
                           "raw":  "Mưa · 므아"
                       },
        "filipino":  {
                         "native":  "Ulan",
                         "phonetic":  "",
                         "pronunciation":  "울란",
                         "raw":  "Ulan · 울란"
                     }
    },
    {
        "num":  98,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "해 (태양)",
                       "meaning":  "낮에 하늘에서 밝은 빛과 따뜻한 열을 비추는 천체",
                       "raw":  "해 (태양) (낮에 하늘에서 밝은 빛과 따뜻한 열을 비추는 천체)"
                   },
        "chinese":  {
                        "native":  "太阳",
                        "phonetic":  "Tàiyáng",
                        "pronunciation":  "타이양",
                        "raw":  "太阳 (Tàiyáng) · 타이양"
                    },
        "vietnamese":  {
                           "native":  "Mặt trời",
                           "phonetic":  "",
                           "pronunciation":  "맛 쩌이",
                           "raw":  "Mặt trời · 맛 쩌이"
                       },
        "filipino":  {
                         "native":  "Araw",
                         "phonetic":  "",
                         "pronunciation":  "아라우",
                         "raw":  "Araw · 아라우"
                     }
    },
    {
        "num":  99,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "옷",
                       "meaning":  "몸을 보호하거나 꾸미기 위해 입는 의복",
                       "raw":  "옷 (몸을 보호하거나 꾸미기 위해 입는 의복)"
                   },
        "chinese":  {
                        "native":  "衣服",
                        "phonetic":  "Yīfu",
                        "pronunciation":  "이푸",
                        "raw":  "衣服 (Yīfu) · 이푸"
                    },
        "vietnamese":  {
                           "native":  "Quần áo",
                           "phonetic":  "",
                           "pronunciation":  "꾸언 아오",
                           "raw":  "Quần áo · 꾸언 아오"
                       },
        "filipino":  {
                         "native":  "Damit",
                         "phonetic":  "",
                         "pronunciation":  "다밋",
                         "raw":  "Damit · 다밋"
                     }
    },
    {
        "num":  100,
        "domainId":  6,
        "domainName":  "일상 및 사물",
        "korean":  {
                       "word":  "신발",
                       "meaning":  "걸을 때 발을 보호하기 위해 신는 물건",
                       "raw":  "신발 (걸을 때 발을 보호하기 위해 신는 물건)"
                   },
        "chinese":  {
                        "native":  "鞋子",
                        "phonetic":  "Xiézi",
                        "pronunciation":  "씨에즈",
                        "raw":  "鞋子 (Xiézi) · 씨에즈"
                    },
        "vietnamese":  {
                           "native":  "Giày",
                           "phonetic":  "",
                           "pronunciation":  "자이",
                           "raw":  "Giày · 자이"
                       },
        "filipino":  {
                         "native":  "Sapatos",
                         "phonetic":  "",
                         "pronunciation":  "사파토스",
                         "raw":  "Sapatos · 사파토스"
                     }
    }
];